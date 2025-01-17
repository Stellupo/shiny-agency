import styled from 'styled-components'
import Illustration from '../../assets/home-illustration.svg'
import { StyledLink } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  justify-content: space-evenly;
  max-width: 1500px;
  & .header-text {
    font-size: 50px;
    font-weight: 700;
    line-height: 80.25px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    max-width: 30%
  }
`

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <div className='header-text'>
          <h2 >Repérez vos besoins,
            on s’occupe du reste, avec les meilleurs talents</h2>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </div>
      <img src={Illustration} alt="illustration"/>
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home
