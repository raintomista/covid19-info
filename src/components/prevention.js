import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  padding: 148px 240px;
  position: relative;
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
  margin: 0px auto 71.02px auto;
  text-align: center;
  text-transform: capitalize;
  width: 570px;
`

const BackgroundIllustration = styled.object`
  position: absolute;
  top: ${(props) => props.top ? props.top : "unset"};
  left: ${(props) => props.left ? props.left : "unset"};
  right: ${(props) => props.right ? props.right : "unset"};
  bottom:  ${(props) => props.bottom ? props.bottom : "unset"};
`

const Section = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
`

const SectionDetails = styled.div`
`

const SectionHeader = styled.div`
  display: flex;
`
const SectionNumbering = styled.div`
  background: rgb(250, 86, 82, 0.15);
  border-radius: 100%;
  color: #FA5652;
  font-family: "Red Hat Display";
  font-weight: bold;
  font-size: 44px;
  height: 75px;  
  line-height: 75px;
  text-align: center;
  text-transform: capitalize;
  width: 75px;
`

const SectionTitle = styled.h3`
  color: #035755;
  display: flex;
  font-family: "Gelion Medium";
  font-weight: 500;
  font-size: 47px;
  line-height: 69px;
  margin-left: 40px;
  margin-bottom: 0px;
  text-transform: capitalize;
`

const SectionBody = styled.p`
  color: #4B4F51;
  font-family: "Gelion Regular";
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  margin-left: calc(75px + 40px);
  margin-bottom: 0px;  
  text-transform: capitalize;
`

const SectionIllustration = styled.object`
  justify-self: ${(props) => props.justifySelf};
`

const Prevention = () => {
  const {
    step1,
    step2,
    step3,
    step4,
    virus1,
    virus2
  } = useStaticQuery(
    graphql`
      query Prevention {
        step1: file(name: {eq: "prevention-illustration-01"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        step2: file(name: {eq: "prevention-illustration-02"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        step3: file(name: {eq: "prevention-illustration-03"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        step4: file(name: {eq: "prevention-illustration-04"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        virus1: file(name: {eq: "bg-illustration-05"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        virus2: file(name: {eq: "bg-illustration-06"}, extension: {eq: "svg"}) {
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
        What Should We Do
      </MainTitle>
      <Paragraph>
        Corona viruses are a type of virus. There are many different kinds,
        and some cause disease. A newly identified type has caused
      </Paragraph>
      <BackgroundIllustration
        data={virus1.publicURL}
        type={'image/svg+xml'}
        top={'30%'}
        left={'-7.3%'}
      />
      <Section>
        <SectionDetails>
          <SectionHeader>
            <SectionNumbering>01</SectionNumbering>
            <SectionTitle>Wear Masks</SectionTitle>
          </SectionHeader>
          <SectionBody>
            Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging
            niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis
            pandemic "outside the box" thinking. Objectively
          </SectionBody>
        </SectionDetails>
        <SectionIllustration
          data={step1.publicURL}
          type={'image/svg+xml'}
          justifySelf={'flex-end'}
        />
      </Section>
      <Section>
        <SectionIllustration
          data={step2.publicURL}
          type={'image/svg+xml'}
          justifySelf={'flex-start'}
        />
        <SectionDetails>
          <SectionHeader>
            <SectionNumbering>02</SectionNumbering>
            <SectionTitle>Wash Your Hands</SectionTitle>
          </SectionHeader>
          <SectionBody>
            Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging
            niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis
            pandemic "outside the box" thinking. Objectively
          </SectionBody>
        </SectionDetails>
      </Section>
      <Section>
        <SectionDetails>
          <SectionHeader>
            <SectionNumbering>03</SectionNumbering>
            <SectionTitle>Use Nose - Rag</SectionTitle>
          </SectionHeader>
          <SectionBody>
            Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging
            niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis
            pandemic "outside the box" thinking. Objectively
          </SectionBody>
        </SectionDetails>
        <SectionIllustration
          data={step3.publicURL}
          type={'image/svg+xml'}
          justifySelf={'flex-end'}
        />
      </Section>
      <Section>
        <SectionIllustration
          data={step4.publicURL}
          type={'image/svg+xml'}
          justifySelf={'flex-start'}
        />
        <SectionDetails>
          <SectionHeader>
            <SectionNumbering>04</SectionNumbering>
            <SectionTitle>Avoid Contacts</SectionTitle>
          </SectionHeader>
          <SectionBody>
            Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging
            niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis
            pandemic "outside the box" thinking. Objectively
          </SectionBody>
        </SectionDetails>
      </Section>
      <BackgroundIllustration
        data={virus2.publicURL}
        type={'image/svg+xml'}
        bottom={'10%'}
        right={"-8.3%"}
      />
    </Container>
  )
}

export default Prevention