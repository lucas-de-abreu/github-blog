import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import {
  Info,
  ProfileDetails,
  ProfileInfoContainer,
  ProfilePictureContainer,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

interface UserData {
  avatar_url?: string
  html_url?: string
  name?: string
  description?: string
  login?: string
  company?: string
  followers?: number
}

export function ProfileInfo() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined)

  const fetchUserData = async () => {
    const response = await api.get(
      '/users/{user}'.replace('{user}', 'lucas-de-abreu'),
    )

    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileInfoContainer>
      <ProfilePictureContainer hasAvatar={!!userData?.avatar_url}>
        {(userData && userData.avatar_url && (
          <img src={userData.avatar_url} alt="" />
        )) || <FontAwesomeIcon icon={faUser} />}
      </ProfilePictureContainer>
      <ProfileDetails>
        <header>
          <span>{userData?.name || 'John Doe'}</span>
          <a
            target="_blank"
            href={userData?.html_url || 'https://github.com'}
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <span>
          {userData?.description ||
            'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'}
        </span>
        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} size="sm" />
            <span>{userData?.login || 'johndoe'}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} size="sm" />
            <span>{userData?.company || 'Rocketseat'}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} size="sm" />
            <span>{userData?.followers || 0} seguidores</span>
          </div>
        </Info>
      </ProfileDetails>
    </ProfileInfoContainer>
  )
}
