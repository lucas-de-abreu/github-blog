import styled from 'styled-components'

export const IssueDetailsHeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  > div.links {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
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

  > h1 {
    display: block;
    margin-top: 20px;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme['base-span']};

    > svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
