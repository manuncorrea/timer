import { Moon, Scroll, Sun, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { ThemeContext } from '../../contexts/ThemeContext'
import { HeaderContainer } from './styles'



export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        <button onClick={toogleTheme}>
          { theme === 'dark' ? <Sun size ={24} /> : <Moon size={24} /> }
        </button>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Hitórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
