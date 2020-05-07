import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 36px 240px 56px 240px;
  position: absolute;
  width: calc(100% - 480px);
`

const Logo = styled.img`
  width: 191.82px;
  height: 65px;
  margin-bottom: 0px;  
`

const NavItems = styled.div`

`

const NavItem = styled.a`
  color: ${props => props.active
      ? '#fb4c47'
      : '#035755'
  };
  cursor: pointer;
  font-family: 'Gelion Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  position: relative;

  &:not(:last-child) {
    margin-right: 40px; 
  }

  &:hover {
    color: #fb4c47;
  }

  &::after {
    position: absolute;
    height: 6px;
    width: 6px;
    left: calc(50% - 2px);
    bottom: -9px;
    background-color: #fb4c47;
    content: '';
    border-radius: 100%;
    visibility: ${props => props.active
      ? 'visible'
      : 'hidden'
    }
  }
`

const Button = styled.button`
  /* Dimensions */
  height: 55px;
  width: 154px;

  /* Container */
  background-color: transparent;  
  border: 2px solid #FB4C47;
  box-sizing: border-box;
  border-radius: 46px;

  /* Text */
  color: #FB4C47;  
  font-family: 'Gelion Medium', sans-serif;  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`

const Nav = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query Nav {
        allFile(filter: {name: {eq: "logo"}}) {
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
      <Logo src={allFile.edges[0].node.publicURL} />
      <NavItems>
        <NavItem active={true}>Overview</NavItem>
        <NavItem>Contagion</NavItem>
        <NavItem>Symptoms</NavItem>
        <NavItem>Prevention</NavItem>    
        <Button>Contact</Button>  
      </NavItems>
    </Container>
  )
}

export default Nav