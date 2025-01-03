import { Link, useParams } from 'react-router-dom'

function Survey() {
  const {questionNumber} = useParams()
  const currentQuestion = questionNumber ? Number(questionNumber) : 1;

  return (
    <div>
      <h1>Questionnaire 🧮</h1>

      <h2>Question {questionNumber}</h2>
      {
        currentQuestion === 1 ?
          <Link to="/survey/1">Précedent</Link> :
          <Link to={`/survey/${currentQuestion - 1}`}>Précédent</Link>
      }

      {currentQuestion === 10 ?
        <Link to="/results">Suivant</Link>
      :
        <Link to={`/survey/${currentQuestion + 1}`}>Suivant</Link>
      }
    </div>
  )
}

export default Survey
