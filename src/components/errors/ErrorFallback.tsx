import type { FallbackProps } from 'react-error-boundary'
import { Button } from '@/components/ui/button'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-xl font-semibold text-red-600">Something went wrong</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        {error instanceof Error ? error.message : 'An unexpected error occurred.'}
      </p>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="max-w-xl overflow-auto rounded bg-muted p-4 text-left text-xs text-muted-foreground">
          {error.stack}
        </pre>
      )}
      <Button
        variant='default'
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  )
}
