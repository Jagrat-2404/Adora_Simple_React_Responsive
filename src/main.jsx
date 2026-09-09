import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App'
import './styles.css'

function ResponsiveParallaxProvider({ children }) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  return <ParallaxProvider isDisabled={isMobile}>{children}</ParallaxProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveParallaxProvider>
      <App />
    </ResponsiveParallaxProvider>
  </React.StrictMode>,
)
