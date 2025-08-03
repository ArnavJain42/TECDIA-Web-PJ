// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {
  const [apps, setApps] = useState([])
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get('https://tecdia-ind-backend.onrender.com/api/applications/admin/all', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setApps(res.data)
      } catch (err) {
        console.error('Failed to fetch apps:', err)
      }
    }

    fetchApps()
  }, [token])

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`https://tecdia-ind-backend.onrender.com/api/applications/admin/update/${id}`, {
        status: newStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setApps((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      )
    } catch (err) {
      alert('Failed to update status')
    }
  }

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        className="mb-4 p-2 border w-full max-w-md rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4">
        {filteredApps.map((app) => (
          <div key={app._id} className="bg-white shadow rounded p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{app.name}</p>
                <p className="text-sm text-gray-600">{app.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app._id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
                <button
                  onClick={() => setExpandedId(expandedId === app._id ? null : app._id)}
                  className="text-blue-500 hover:underline"
                >
                  {expandedId === app._id ? 'Hide' : 'View'}
                </button>
              </div>
            </div>

            {expandedId === app._id && (
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p><strong>Phone:</strong> {app.phone}</p>
                <p><strong>Position:</strong> {app.position}</p>
                <p><strong>Resume:</strong> <a href={app.resumeLink} className="text-blue-600 underline" target="_blank">View</a></p>
                <p><strong>Query:</strong> {app.additionalQuery}</p>
                <p><strong>Status:</strong> {app.status}</p>
                <p><strong>PIN:</strong> {app.PIN}</p>
                <p><strong>Expires:</strong> {new Date(app.PINExpires).toLocaleDateString()}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard
