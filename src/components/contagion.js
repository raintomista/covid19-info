import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 52px 240px;
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
  width: 570px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 575px;
  grid-column-gap: 31px;
  margin-top: 111px;
  position: relative;
`

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 35px 87px rgba(0, 0, 0, 0.11);
  border-bottom: ${
    (props) => props.active
      ? '6px solid #FA5652;'
      : '6px solid transparent;'
  };
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 65px 52px 78px 52px;
`

const CardIllustration = styled.img`
  height: 250px;
  margin-bottom: 55px;
`

const CardTitle = styled.h2`
  color: #035755;
  font-family: "Gelion Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 53px;
  margin-bottom: 0px;
  text-align: center;
  text-transform: capitalize;
`

const CardParagraph = styled.p`
  color: #4B4F51;
  font-family: "Gelion Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  margin-bottom: 0px;
  text-align: center;
  text-transform: capitalize;
`

const BackgroundIllustration = styled.img`
  position: absolute;
  left: -139px;
  z-index: -1;
`

const Contagion = () => {
  const { background, cards } = useStaticQuery(
    graphql`
      query ContagionIllustration {
        background: allFile(filter: {name: {eq: "bg-illustration-02"}}) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        },
        cards: allFile(filter: {name: {regex: "/^contagion-illustration/"}}) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
      }
    `
  )
  
  return (
    <Container>
      <Title>Covid-19</Title>
      <MainTitle>Contagion</MainTitle>
      <Paragraph>
        Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type.
      </Paragraph>
      <Cards>
        <BackgroundIllustration
          src={background.edges[0].node.publicURL}
        />
        <Card active={true}>
          <CardIllustration
            src={cards.edges[0].node.publicURL}
          />
          <CardTitle>
            Air Transmission
          </CardTitle>
          <CardParagraph>
            Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify.
          </CardParagraph>
        </Card>
        <Card>
          <CardIllustration
            src={cards.edges[1].node.publicURL}
          />
          <CardTitle>
            Human Contacts
          </CardTitle>
          <CardParagraph>
            Washing your hands is one of thesimplest ways you can protect.
          </CardParagraph>
        </Card>
        <Card>
          <CardIllustration
            src={cards.edges[2].node.publicURL}
          />
          <CardTitle>
            Containted Objects
          </CardTitle>
          <CardParagraph>
            Use the tissue while sneezing,In this way, you can protect your droplets.
          </CardParagraph>
        </Card>
      </Cards>
    </Container>
  )
}

export default Contagion