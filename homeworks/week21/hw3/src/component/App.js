import React from 'react'
import styled from 'styled-components'
import { Wrap } from '../style/GlobalStyle'
import Form from './Form'
import Footer from './Footer'

const OtterWrap = styled(Wrap)`
  border-top: 4px solid ${ props => props.theme.colors.primary};
  border-radius: .3rem .3rem 0 0;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.2);
  background-color: #fff;
  padding: 2rem 1.8rem 1.6rem;
  margin: 5rem auto 10rem;
`

function App() {
  return (
    <>
      <OtterWrap>
        <Form></Form>
      </OtterWrap>
      <Footer></Footer>
    </>
  )
}

export default App