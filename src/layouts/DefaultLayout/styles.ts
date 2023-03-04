import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;

  background: ${(props) => props.theme['base-background']};

  display: flex;
  flex-direction: column;

  > div {
    z-index: 1;
    width: 100%;
    max-width: 54rem;
    margin: -5rem auto 0;
  }
`
