import { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

function EmailInput({ theme }) {
  const {state, setState} = useState({inputValue: ''})

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email</StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setState(e.target.value)}
      />
      {state.inputValue}
    </InputWrapper>
  )
}

export default EmailInput

// class EmailInput extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       inputValue: '',
//     }
//   }
//
//   updateInputValue = (value) => {
//     this.setState({ inputValue: value })
//   }
//
//   render() {
//     // Ici on récupère theme en destructurant this.props
//     const { theme } = this.props
//     return (
//       <div>
//         {this.state.inputValue}
//         <input
//           onChange={(e) => this.updateInputValue(e.target.value)}
//         />
//       </div>
//     )
//   }
// }
