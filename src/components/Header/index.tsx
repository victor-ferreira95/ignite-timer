import { HeaderContainer } from './style'

import LogoIgnite from '../../assets/LogoIgnite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/Home" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="History" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
