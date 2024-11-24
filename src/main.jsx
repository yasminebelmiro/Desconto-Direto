import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './global'
import Footer from './components/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
    <Footer />
  </StrictMode>,
)
