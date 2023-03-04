import reactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const ReactMarkdownContainer = styled(reactMarkdown)`
  padding: 2.5rem 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  h4 {
    text-decoration: underline;
    font-weight: regular;
    color: ${(props) => props.theme.blue};
  }

  code {
    display: block;
    padding: 1rem;
    font-size: 16px;
    line-height: 22px;
    background: ${(props) => props.theme['base-post']};
  }
`
