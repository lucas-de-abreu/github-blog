import styled from 'styled-components'

export const ProfileInfoContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  gap: 2rem;
  border-radius: 10px;

  display: flex;
`

interface ProfilePictureContainerProps {
  hasAvatar: boolean
}

export const ProfilePictureContainer = styled.div<ProfilePictureContainerProps>`
  border-radius: 8px;
  display: flex;
  border: 1px solid
    ${(props) => (props.hasAvatar ? 'transparent' : props.theme.blue)};
  align-items: center;
  justify-content: center;

  min-width: 148px;
  min-height: 148px;

  width: 148px;
  height: 148px;
  overflow: hidden;

  svg {
    color: ${(props) => props.theme.blue};
  }

  > img {
    width: 100%;
    height: 100%;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 12px;
      gap: 0.5rem;
      font-weight: bold;
      align-self: flex-start;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;

      svg {
        margin-bottom: 3px;
      }

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
