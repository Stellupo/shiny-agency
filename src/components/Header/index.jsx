import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${(props) =>
  props.$isFullLink &&
`color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

const HeaderImage = styled.img`
  height: 70px;
  padding: 6.19px 11.88px 6.39px 11.68px;
`

function Header() {
  return (
    <Wrapper>
      <HeaderImage src={DarkLogo} alt="logo"/>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </nav>
    </Wrapper>
  )
}

export default Header
