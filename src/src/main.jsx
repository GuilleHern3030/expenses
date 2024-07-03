import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ArticlesContextProvider } from './context/ArticlesContext.jsx'
import { UsdContextProvider } from './context/UsdContext.jsx'
import { LanguageContextProvider } from './context/LanguageContext.jsx'

import './index.css'
import './assets/scroll-design.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <UsdContextProvider>
        <ArticlesContextProvider>
          <App />
        </ArticlesContextProvider>
      </UsdContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
)
