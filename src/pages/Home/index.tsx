import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'
import { formatDate } from '../../util/formatter'
import { ProfileInfo } from './components/ProfileInfo'
import { SearchForm } from './components/SearchForm'
import { Issue, IssueList } from './styles'

export function Home() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const navigate = useNavigate()

  return (
    <div>
      <ProfileInfo />

      <SearchForm />

      <IssueList>
        {issues.map((issue) => (
          <Issue
            key={issue.id}
            onClick={() => navigate(`/issue/${issue.number}`)}
          >
            <header>
              <b>{issue.title}</b>
              <span>{formatDate(issue.created_at)}</span>
            </header>
            <p>{issue.body}</p>
          </Issue>
        ))}
      </IssueList>
    </div>
  )
}
