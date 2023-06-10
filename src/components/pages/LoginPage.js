import React from 'react'
import Form from '../layouts/Form'
import styled from 'styled-components'
const Container = styled.div`
width: 100%;
height: calc(100vh - 80px);
background-color: #f2f5f4;
display: flex;
align-items: center;
justify-content: center;
`

export default function LoginPage() {
  return (
    <Container>
      <Form />
    </Container>
  )
}
