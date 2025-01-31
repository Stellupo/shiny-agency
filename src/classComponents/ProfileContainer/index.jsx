import { useParams } from 'react-router-dom'
import Profiles from '../../pages/Profile'

function ProfileContainer() {
  const { id } = useParams()
  return <Profiles id={id} />
}

export default ProfileContainer
