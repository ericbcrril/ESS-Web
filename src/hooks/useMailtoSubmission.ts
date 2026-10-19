import { useEffect, useRef, useState } from 'react'

export type MailtoSubmissionStatus = 'idle' | 'sending' | 'success' | 'error'

export function useMailtoSubmission() {
  const [status, setStatus] = useState<MailtoSubmissionStatus>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => {
    if (timer.current !== undefined) {
      window.clearTimeout(timer.current)
    }
  }, [])

  const submit = (mailtoUrl: string) => {
    if (timer.current !== undefined) {
      window.clearTimeout(timer.current)
    }

    setStatus('sending')
    timer.current = window.setTimeout(() => {
      try {
        window.location.href = mailtoUrl
        setStatus('success')
      } catch {
        setStatus('error')
      } finally {
        timer.current = undefined
      }
    }, 150)
  }

  return { status, submit }
}
