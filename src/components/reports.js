import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: calc(100% - 504px) 504px;
  margin-bottom: 150px;
  max-width: 100%;
`

const Map = styled.object`
  position: relative;
  left: -55px;
  width: 100%;  
`

const Stats = styled.div`
  background: linear-gradient(360deg, #FFFBFB -79.45%, #FDFDFD 105.35%);
  box-shadow: 0px 7px 95px rgba(0, 0, 0, 0.07);
  border-radius: 0px;
  min-height: 635px;  
  padding: 55px;
  position: relative;
  right: -40px;  
  width: 504px;
`

const Title = styled.h3`
  color: #035755;  
  font-family: "Gelion Medium";
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 0px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;
`

const ItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 28px;
  grid-template-columns: 50px 1fr 81px 23px;
  grid-template-rows: 37px;
  :not(:last-child) {
    margin-bottom: 40px;  
  }
`

const ItemFlag = styled.div`
  background-color: red;
  height: 35px;
  width: 50px;
`

const ItemTitle = styled.h4`
  color: #13615F;
  font-family: "Gelion Medium";
  font-size: 31px;
  line-height: 37px;
  margin-bottom: 0px;
`

const ItemStat = styled.h5`
  color: #035755;
  font-family: "Gelion Medium";
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 0px;  
  text-align: right;
`

const ItemTicker = styled.div`
  background: #F44A45;
  height: 13.8px;
  width: 23px;
`

const ListItem = (props) => (
  <ItemWrapper>
    <ItemFlag />
    <ItemTitle>
      {props.label}
    </ItemTitle>
    <ItemStat>
      {props.value}
    </ItemStat>
    <ItemTicker />          
  </ItemWrapper>
)


const Reports = () => {
  const { map } = useStaticQuery(
    graphql`
      query Reports {
        map:file(name: {eq: "reports-map"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
      }
    `
  )
  return (
    <Container>
      <Map
        data={map.publicURL}
        type={'image/svg+xml'}
      />
      <Stats>
        <Title>
          Stats
        </Title>
        <List>
          <ListItem
            label={'USA'}
            value={'100,392'}
          />
          <ListItem
            label={'Italy'}
            value={'86,498'}
          />
          <ListItem
            label={'China'}
            value={'81,340'}
          />
          <ListItem
            label={'Spain'}
            value={'64,059'}
          />
          <ListItem
            label={'Germany'}
            value={'50,871'}
          />
          <ListItem
            label={'Iran'}
            value={'32,332'}
          />  
        </List>
      </Stats>
    </Container>
  )
}

export default Reports