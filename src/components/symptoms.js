import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 148px 240px;
  width: 100%;  
`

const Title = styled.h2`
  color: #FA5652;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 36px;
  margin-bottom: 0px;
  text-align: center;  
`

const MainTitle = styled.h1`
  color: #035755;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 31px;  
  text-align: center;
  text-transform: capitalize;
`

const Paragraph = styled.p`
  font-family: "Gelion Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 39px;
  margin: 0px auto;
  text-align: center;
  text-transform: capitalize;
  width: 716px;
`

const Illustration = styled.object`
`

const BackgroundIllustration = styled.object`
  position: absolute;
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
`

const Symptoms = () => {
  const {
    backgroundLeft,
    backgroundRight,
    symptoms
  } = useStaticQuery(
    graphql`
      query Symptoms {
        backgroundLeft: file(name: {eq: "bg-illustration-03"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        backgroundRight: file(name: {eq: "bg-illustration-04"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        symptoms: file(name: {eq: "symptoms-illustration-01"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
      }
    `
  )
  
  return (
    <Container>
      <Title>
        Covid-19
      </Title>
      <MainTitle>
        Symptoms
      </MainTitle>
      <Paragraph>
        Corona viruses are a type of virus. There are many different kinds, and some 
        cause disease. A newly identified type has caused a recent outbreak of respiratory.
      </Paragraph>
      <Illustration
        data={symptoms.publicURL}
      />
      <BackgroundIllustration
        data={backgroundLeft.publicURL}
        left={'4.74%'}
        bottom={'20%'}        
      />
      <BackgroundIllustration
        data={backgroundRight.publicURL}
        left={'86.67%'}
        bottom={'10%'}        
      />
    </Container>
  )
}

export default Symptoms