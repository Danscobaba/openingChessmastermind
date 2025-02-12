import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<BrowserRouter>
      <App />
      <ToastContainer
        newestOnTop={true}
        limit={1}
        position='top-right'
      />
    </BrowserRouter>
  </StrictMode>,
)
