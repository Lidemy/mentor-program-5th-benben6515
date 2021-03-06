import styled ,{ createGlobalStyle } from "styled-components";

// reset Css ---------------------
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "微軟正黑體"
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  input {
    font-size: 1.2rem;
    padding: .4rem .4rem;
  }
  input[type="text"] {
    width: 25rem;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #ccc;
    margin: .5rem 0;
  }
`

const Button = styled.button`
  padding: .4rem;
  color: black;
  font-size: 1.2em;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #888;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.5);
  }
  & + & {
    margin-left: .4rem;
  }
`

const Wrap = styled.div`
  width: clamp(30rem, 80%, 70rem);
  margin: 2rem auto;
`

export default GlobalStyle
export { Button, Wrap }

