import { logger, Logger } from './utils'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.sass'
import { BrowserRouter as Router } from 'react-router-dom'

logger.level = Logger.DEBUG

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>,
)
