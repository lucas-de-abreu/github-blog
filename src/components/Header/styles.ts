import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  width: 100%;

  img {
    width: 100%;
    max-height: 295px;
    object-fit: cover;
  }

  img.logo {
    width: 148px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
