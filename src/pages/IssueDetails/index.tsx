import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IssueDetailsHeader } from './components/IssueDetailsHeader'
import { ReactMarkdownContainer } from './styles'

export interface User {
  login: string
}

export interface IssueData {
  html_url: string
  body: string
  title: string
  comments: number
  created_at: string
  user: User
}

export function IssueDetails() {
  const { number } = useParams()

  const [issueData, setIssueData] = useState<IssueData | undefined>(undefined)

  const fetchIssueData = useCallback(async () => {
    if (number) {
      const response = await api.get(
        'repos/lucas-de-abreu/github-blog/issues/{number}'.replace(
          '{number}',
          number,
        ),
      )

      setIssueData(response.data)
    }
  }, [number])

  useEffect(() => {
    fetchIssueData()
  }, [fetchIssueData])

  return (
    <div>
      <IssueDetailsHeader issueData={issueData} />
      {issueData?.body && (
        <ReactMarkdownContainer>{issueData.body}</ReactMarkdownContainer>
      )}
    </div>
  )
}
