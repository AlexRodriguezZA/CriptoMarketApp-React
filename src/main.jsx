import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LocalStorageProvider } from './context/LocalStorage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LocalStorageProvider>
          <App />
    </LocalStorageProvider>
)
