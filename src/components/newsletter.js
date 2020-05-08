import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px auto 142px auto;
  width: 790px;
`

const Title = styled.h2`
  color: #0C6C44;
  font-family: "Gelion Medium";
  font-weight: 500;
  font-size: 64px;
  line-height: 77px;  
  margin: 0px auto 62px auto;
  text-align: center;
  width: 661px;
`

const Form = styled.form`
  position: relative;
`

const TextInput = styled.input`
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 8px 80px rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 57px;
  color: #758681;  
  display: flex;
  font-family: "Gelion Regular";
  font-size: 22px;
  line-height: 26px;
  height: 114px;
  outline: none;
  padding: 42px calc(17px + 209px + 42px) 42px 42px;
  position: relative;
  width: 790px;
`

const Button = styled.button`
  background: #F44A45;
  border: none;
  border-radius: 157px;
  color: #FFFFFF;  
  height: 78px;
  width: 209px;
  font-family: "Gelion Medium";
  font-size: 22px;
  line-height: 26px;
  position: absolute;
  top: 17px;
  right: 17px;
`

const Newsletter = () => (
  <Container>
    <Title>
      Have Question in mind?
      Let us help you.
    </Title>
    <Form>
      <TextInput
        placeholder={'Enter email address'}
      />
      <Button>
        Send
      </Button>
    </Form>
  </Container>
)

export default Newsletter