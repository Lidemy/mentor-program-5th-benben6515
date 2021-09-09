import styled, { createGlobalStyle } from 'styled-components'

// theme ----------------
const theme = {
  colors: {
    primary: "#fd1",
    warning: "#f32",
  }
}

// global style --------------------
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
  }

  body, html {
    width: 100%;
    height: 100%;
    background-color: #eee;
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
  }
`


// utils components ----------------------
const Wrap = styled.div`
  width: clamp(20rem, 70%, 70rem);
  margin: 2rem auto;
`

const Title = styled.h3`
  margin-top: 1.2rem;
  font-weight: 500;
  ${props => props.required && `
    &:after {
      content: '*';
      color: ${theme.colors.warning};
      margin-left: .5rem;
    }
  `}
`

const Warning = styled.div`
  position: absolute;
  bottom: -4rem;
  color: ${ ({theme}) => theme.colors.warning};
`

export default GlobalStyle
export { theme }
export { Wrap, Title, Warning }
