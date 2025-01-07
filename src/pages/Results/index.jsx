import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'


function Results() {
  const {answers} = useContext(SurveyContext)
  console.log('answers', answers)
  return (
    <div> Results</div>
  )
}

export default Results
