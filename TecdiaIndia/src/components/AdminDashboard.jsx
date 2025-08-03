import React, { useEffect, useState, useCallback, useMemo } from 'react'
import axios from 'axios'

const STATUS_OPTIONS = ['Pending', 'Accepted', 'Rejected']

const STATUS_COLORS = {
  Pending: 'text-yellow-600 bg-yellow-100',
  Accepted: 'text-green-600 bg-green-100',
  Rejected: 'text-red-600 bg-red-100',
}

const ApplicationItem = ({ app, isExpanded, onToggleExpand, onStatusChange }) => (
  <article className="bg-white shadow-lg rounded-xl p-6 border border-slate-200" aria-expanded={isExpanded}>
    <header className="flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg text-slate-900">{app.name ?? 'N/A'}</h3>
        <p className="text-sm text-slate-600">{app.email ?? 'N/A'}</p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[app.status] ?? 'text-gray-600 bg-gray-100'}`}
          aria-label={`Status: ${app.status}`}
          title={`Status: ${app.status}`}
        >
          {app.status}
        </span>
        <label htmlFor={`status-select-${app._id}`} className="sr-only">Change application status</label>
        <select
          id={`status-select-${app._id}`}
          value={app.status ?? 'Pending'}
          onChange={(e) => onStatusChange(app._id, e.target.value)}
          className="border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <button
          onClick={() => onToggleExpand(app._id)}
          aria-expanded={isExpanded}
          aria-controls={`details-${app._id}`}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          {isExpanded ? 'Hide' : 'View'}
        </button>
      </div>
    </header>

    {isExpanded && (
      <section
        id={`details-${app._id}`}
        className="mt-6 pt-6 border-t border-slate-200 text-sm text-slate-700 space-y-3"
      >
        <p><strong className="text-slate-900">Phone:</strong> {app.phone ?? 'N/A'}</p>
        <p><strong className="text-slate-900">Position:</strong> {app.position ?? 'N/A'}</p>
        <p>
          <strong className="text-slate-900">Resume:</strong>{' '}
          {app.resumeLink ? (
            <a
              href={app.resumeLink}
              className="text-blue-600 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          ) : (
            'N/A'
          )}
        </p>
        <p><strong className="text-slate-900">Query:</strong> {app.additionalQuery ?? 'N/A'}</p>
        <p><strong className="text-slate-900">PIN:</strong> {app.PIN ?? 'N/A'}</p>
        <p>
          <strong className="text-slate-900">Expires:</strong>{' '}
          {app.PINExpires ? new Date(app.PINExpires).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : 'N/A'}
        </p>
      </section>
    )}
  </article>
)

const ITEMS_PER_PAGE = 5

const AdminDashboard = () => {
  const [apps, setApps] = useState([])
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState('name') // name, email, status
  const [sortOrder, setSortOrder] = useState('asc') // asc or desc
  const [currentPage, setCurrentPage] = useState(1)

  const token = localStorage.getItem('token')

  const fetchApps = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get('https://tecdia-ind-backend.onrender.com/api/applications/admin/all', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setApps(res.data)
      setCurrentPage(1)
    } catch (err) {
      setError('Failed to fetch applications. Please try again.')
      console.error('Failed to fetch apps:', err)
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    if (token) {
      fetchApps()
    }
  }, [token, fetchApps])

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(
        `https://tecdia-ind-backend.onrender.com/api/applications/admin/update/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setApps((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      )
    } catch (err) {
      alert('Failed to update status')
      console.error(err)
    }
  }

  // Debounce search input to improve performance
  const [debouncedSearch, setDebouncedSearch] = useState(search)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)
    return () => clearTimeout(handler)
  }, [search])

  // Filter apps by search
  const filteredApps = useMemo(() => {
    return apps.filter(
      (app) =>
        app.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        app.email?.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }, [apps, debouncedSearch])

  // Sort apps based on selected criteria
  const sortedApps = useMemo(() => {
    const sorted = [...filteredApps].sort((a, b) => {
      const aVal = a[sortBy]?.toString().toLowerCase() ?? ''
      const bVal = b[sortBy]?.toString().toLowerCase() ?? ''
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
    return sorted
  }, [filteredApps, sortBy, sortOrder])

  // Pagination
  const totalPages = Math.ceil(sortedApps.length / ITEMS_PER_PAGE)
  const paginatedApps = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedApps.slice(start, start + ITEMS_PER_PAGE)
  }, [sortedApps, currentPage])

  const toggleExpand = useCallback(
    (id) => setExpandedId((current) => (current === id ? null : id)),
    []
  )

  const handleSortChange = (field) => {
    if (field === sortBy) {
      // toggle asc/desc if same field clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  return (
    <main className="p-6 min-h-screen bg-slate-50">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Admin Dashboard</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6 max-w-md">
        <label htmlFor="search" className="sr-only">Search applications by name or email</label>
        <input
          id="search"
          type="search"
          placeholder="Search by name or email"
          className="mb-4 sm:mb-0 p-4 border border-slate-300 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
        <button
          onClick={() => setSearch('')}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          aria-label="Clear search"
        >
          Clear
        </button>
        <button
          onClick={fetchApps}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          aria-label="Refresh applications list"
        >
          Refresh
        </button>
      </div>

      <div className="mb-4 flex gap-6 text-slate-700 text-sm font-semibold select-none">
        <button
          onClick={() => handleSortChange('name')}
          className={`hover:text-blue-600 ${sortBy === 'name' ? 'text-blue-600' : ''}`}
          aria-label={`Sort by name, current order: ${sortOrder}`}
        >
          Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
        <button
          onClick={() => handleSortChange('email')}
          className={`hover:text-blue-600 ${sortBy === 'email' ? 'text-blue-600' : ''}`}
          aria-label={`Sort by email, current order: ${sortOrder}`}
        >
          Email {sortBy === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
        <button
          onClick={() => handleSortChange('status')}
          className={`hover:text-blue-600 ${sortBy === 'status' ? 'text-blue-600' : ''}`}
          aria-label={`Sort by status, current order: ${sortOrder}`}
        >
          Status {sortBy === 'status' && (sortOrder === 'asc' ? '▲' : '▼')}
        </button>
      </div>

      {loading && <p className="text-slate-700">Loading applications...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && paginatedApps.length === 0 && (
        <p className="text-slate-700">No applications found.</p>
      )}

      <div className="space-y-4" role="list">
        {paginatedApps.map((app) => (
          <ApplicationItem
            key={app._id}
            app={app}
            isExpanded={expandedId === app._id}
            onToggleExpand={toggleExpand}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-8 flex justify-center items-center gap-4"
        >
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-slate-300 disabled:opacity-50"
            aria-label="Previous page"
          >
            ‹ Prev
          </button>
          <span className="text-sm text-slate-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-slate-300 disabled:opacity-50"
            aria-label="Next page"
          >
            Next ›
          </button>
        </nav>
      )}
    </main>
  )
}

export default AdminDashboard
