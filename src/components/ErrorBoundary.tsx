import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#111a2c] px-4 text-center text-white">
          <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <h2 className="mb-3 text-2xl font-bold tracking-wide">Algo salió mal</h2>
            <p className="mb-6 text-sm text-slate-300">
              Ocurrió un error inesperado al cargar esta sección. Por favor, intenta recargar la página.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full bg-ess px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-sky-700"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

