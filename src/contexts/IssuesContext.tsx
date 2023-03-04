import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Issue {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: (query || '').concat('repo:lucas-de-abreu/github-blog'),
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
