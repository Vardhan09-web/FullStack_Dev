//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import './assets/css/style.css'
import {Toaster} from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
    <App />
  <Toaster richColors />
     </>
)
