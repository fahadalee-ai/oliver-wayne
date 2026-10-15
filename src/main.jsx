import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/styles.css'
import './assets/css/theme.css'
import favicon from './assets/images/favicon.jpg'

const faviconLink =
  document.querySelector("link[rel='icon']") || document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/jpeg'
faviconLink.href = favicon
if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
