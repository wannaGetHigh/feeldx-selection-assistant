import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import invariant from 'tiny-invariant'

import App from './App.tsx'
import './index.css'

async function prepare() {
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const queryClient = new QueryClient()

const root = document.getElementById('root')
invariant(root, 'Root element with id="root" not found')

prepare()
  .catch((err) => console.error('[MSW] Failed to start:', err))
  .then(() => {
    createRoot(root).render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StrictMode>,
    )
  })
