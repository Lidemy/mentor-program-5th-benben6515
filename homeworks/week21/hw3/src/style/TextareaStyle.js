import styled from "styled-components"


const TextareaStyle = styled.textarea`
  width: 20rem;
  margin: 1rem 0;
  border: 1px solid #888;
  border-radius: .3rem;
  padding-left: .3rem;
  padding-top: .3rem;
  resize: vertical;
  &:focus {
    outline: none;
  }
`

export default TextareaStyle