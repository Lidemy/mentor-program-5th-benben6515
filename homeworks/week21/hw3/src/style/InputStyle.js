import styled from 'styled-components'
import { theme } from './GlobalStyle'

const InputStyle = styled.input`
  width: 20rem;
  margin: 1rem 0;
  border: 1px solid #888;
  border-radius: .3rem;
  ${(({type}) => type === ("text" || "email" || "tel")) && `
    height: 1.6rem;
    padding-left: .3rem;
  `}

  ${({type}) => type === "radio" && `
    width: 1rem;
    margin: .5rem .5rem .5rem 0;
  `}

  ${({type}) => type === "submit" && `
    width: 5rem;
    height: 2rem;
    font-size: 1.1rem;
    padding: auto;
    background-color: ${theme.colors.primary};
    &: hover {
      filter: brightness(0.9);
    }
  `}
  &:focus {
    outline: none;
  }
`

export default InputStyle