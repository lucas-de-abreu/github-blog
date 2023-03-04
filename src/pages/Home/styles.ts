import styled from 'styled-components'

export const IssueList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const Issue = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 3rem 0;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  > p {
    display: -webkit-box;
    max-height: 112px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 16px;
    line-height: 25px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }

  > header {
    display: flex;
    justify-content: space-between;

    > b {
      max-width: 283px;
      font-size: 20px;
      color: ${(props) => props.theme['base-title']};
    }

    > span {
      text-align: right;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
