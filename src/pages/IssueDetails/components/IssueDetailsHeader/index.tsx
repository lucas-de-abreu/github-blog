import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { IssueData } from '../..'
import { formatDate } from '../../../../util/formatter'
import { Info, IssueDetailsHeaderContainer } from './styles'

interface IssueDetailsHeaderProps {
  issueData: IssueData | undefined
}

export function IssueDetailsHeader({ issueData }: IssueDetailsHeaderProps) {
  return (
    <IssueDetailsHeaderContainer>
      <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <a
          target="_blank"
          href={issueData?.html_url || 'https://github.com'}
          rel="noreferrer"
        >
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <h1>{issueData?.title || 'Lorem Ipsum'}</h1>
      <Info>
        <div>
          <FontAwesomeIcon icon={faGithub} size="sm" />
          <span>{issueData?.user?.login || 'johndoe'}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendar} size="sm" />
          <span>
            {issueData?.created_at
              ? formatDate(issueData?.created_at)
              : 'Há 1 dia'}
          </span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} size="sm" />
          <span>{issueData?.comments || 0} comentários</span>
        </div>
      </Info>
    </IssueDetailsHeaderContainer>
  )
}
