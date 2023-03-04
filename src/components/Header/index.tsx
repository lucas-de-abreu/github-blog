import { HeaderContainer } from './styles'

import background from '../../assets/background.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={background} alt="" />
      <img className="logo" src={logo} alt="" />
    </HeaderContainer>
  )
}
