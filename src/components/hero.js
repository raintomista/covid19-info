import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
 
const Container = styled.header`
  align-content: center;
  background: linear-gradient(0deg, #FFFFFF -29.64%, #FFF8F8 100%);
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
  overflow-x: hidden;
  padding: 147px 242px 102px 242px;  
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  color: #FA5652;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 0px;
`

const MainTitle = styled.h1`
  color: #035755;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 72px;
  margin-bottom: 29px;
  text-transform: capitalize;
`

const SubTitle = styled.p`
  color: #4B4F51;
  font-family: 'Gelion Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 46px;
  margin-bottom: 54px;  
  text-transform: capitalize;
`

const Button = styled.button`
  /* Dimensions */
  width: 250px;
  height: 80px;
  margin: 0px;
  
  /* Container */
  background-color: #FB4C47;
  box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 65px;

  /* Text */
  color: #ffffff;
  font-family: 'Gelion Bold', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
`


const IllustrationWrap = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

const Illustration = styled.object`
  height: 100%;
`

const Hero = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query Hero {
        allFile(filter: {name: {eq: "hero-illustration"}}) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <TextWrap>
        <Title>
          COVID-19 Alert
        </Title>
        <MainTitle>
          Stay at home quarantine to stop corona virus
        </MainTitle>
        <SubTitle>
          There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to.
        </SubTitle>
        <Button>
          Let Us Help
        </Button>
      </TextWrap>
      <IllustrationWrap>
        <Illustration data={allFile.edges[0].node.publicURL}>
        </Illustration>
      </IllustrationWrap>  
    </Container>
  )
}

export default Hero