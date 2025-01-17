import Card from '../../components/Card'
import styled from 'styled-components'
import { useContext } from 'react'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import { ThemeContext } from '../../utils/context'


const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ?  colors.primary : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function Freelances() {
  const {theme} = useContext(ThemeContext)

  const {data, isLoading, error } = useFetch('http://localhost:8000/freelances')
  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ?
        (
          <LoaderWrapper theme={theme} data-testid="loader">
            <Loader />
          </LoaderWrapper>
        ) :
        (
          <CardsContainer>
            {freelancersList && freelancersList?.map((profile, index) => (
              <Card key={`${profile.name}-${index}`}
                    label={profile.job}
                    title={profile.name}
                    picture={profile.picture}
              />
            ))}
          </CardsContainer>
        )}
    </div>
  )
}


export default Freelances
