import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  margin: 0px 240px;

  align-items: center;
  grid-template-columns: calc(100% - 68px - 650px) 650px;
  grid-column-gap: 68px;
`

const Illustration = styled.object`
  width: 100%;
`

const Details = styled.div`

`

const Title = styled.h2`
  color: #FA5652;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 36px;
  margin-bottom: 0px;  
`

const MainTitle = styled.h1`
  color: #035755;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 18px;  
  text-transform: capitalize;
`

const Paragraph = styled.p`
  color: #4B4F51;
  font-family: "Gelion Regular";
  font-size: 20px;
  line-height: 43px;
  margin-bottom: 56px;  
  text-transform: capitalize;
`

const CTA = styled.button`
  width: 200px;
  height: 65px;
  margin-bottom: 0px;

  background: rgba(250, 86, 82, 0.15);
  border: none;
  border-radius: 65px;
  color: #FA5652;

  font-family: "Gelion Medium";
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
`

const About = () => {
  const { illustration } = useStaticQuery(
    graphql`
      query About {
        illustration: file(name: {eq: "about-illustration-01"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
      }
    `
  )

  return (
    <Container>
      <Illustration
        data={illustration.publicURL}
        type={'image/svg+xml'}
      />
      <Details>
        <Title>
          What is Covid-19
        </Title>
        <MainTitle>
          CoronaVirus
        </MainTitle>
        <Paragraph>
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S.,
          the director of operations with the Johns Hopkins Office of Critical
          Event Preparedness and Response
        </Paragraph>
        <CTA>
          Learn More
        </CTA>
      </Details>
    </Container>
  )
}

export default About