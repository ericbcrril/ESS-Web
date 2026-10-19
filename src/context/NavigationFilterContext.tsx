import { createContext, useContext } from 'react'

type NavigationFilterContextValue = {
  careerLinksOnly: boolean
  setCareerLinksOnly: (enabled: boolean) => void
}

export const NavigationFilterContext = createContext<NavigationFilterContextValue | null>(null)

export function useNavigationFilter() {
  const context = useContext(NavigationFilterContext)
  if (!context) {
    throw new Error('useNavigationFilter must be used within a NavigationFilterContext')
  }
  return context
}
