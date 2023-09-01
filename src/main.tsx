import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WalletContext from './context/WalletContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletContext>
      <App />
    </WalletContext>
  </React.StrictMode>,
)
