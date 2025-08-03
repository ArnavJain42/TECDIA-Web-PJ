import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ClickSpark from './components/ClickSpark.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import AppWithLoader from './components/AppWithLoader.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <BrowserRouter>
          <AppWithLoader />
        </BrowserRouter>
      </ClickSpark>
    </LanguageProvider>
  </React.StrictMode>,
)