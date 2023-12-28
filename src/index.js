import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { AppProvider } from './context'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)

serviceWorkerRegistration.register()
