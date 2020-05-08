import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Reports from '@components/reports'
import Newsletter from '@components/newsletter'

const Container = styled.div`
  background: linear-gradient(360deg, rgba(255, 241, 241, 0.5) -15.48%, rgba(255, 241, 241, 0) 93.2%);
  overflow: hidden;  
  padding: 104px 240px 0px 240px;
  position: relative;
`

const Nav = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 221px 574px 213px;
  justify-content: space-between;
  margin-bottom: 67px;
`

const NavLogo = styled.img`
  margin-bottom: 0px;
  height: 72.91px;
  width: 220.84px;
`

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 574px;
`

const NavItem = styled.a`
  color: #00402E;
  font-family: "Gelion Medium";
  font-size: 23px;
  line-height: 28px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 213px;
`

const SocialIcon = styled.object`
  height: 30px;
  width: 30px;
`

const Text = styled.p`
  color: #415E56;
  font-family: "Gelion Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  margin: 0px auto 24px auto;
`

const Illustration = styled.object`
  position: absolute;
  bottom: 132px;
  right: -176px;
`

const Footer = () => {
  const {
    background,
    logo,
    facebook,
    youtube,
    vimeo,
    twitter
  } = useStaticQuery(
    graphql`
      query Footer {
        background:file(name: {eq: "bg-illustration-06"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        logo: file(name: {eq: "footer-logo"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        facebook: file(name: {eq: "facebook-icon"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        youtube: file(name: {eq: "youtube-icon"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        vimeo: file(name: {eq: "vimeo-icon"}, extension: {eq: "svg"}) {
          id
          name
          publicURL
        }
        twitter: file(name: {eq: "twitter-icon"}, extension: {eq: "svg"}) {
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
        data={background.publicURL}
        type={'image/svg+xml'}
      />      
      <Reports />
      <Newsletter />
      <Nav>
        <NavLogo
          src={logo.publicURL}
        />
        <NavItems>
          <NavItem>Overview</NavItem>
          <NavItem>Contagion</NavItem>                        
          <NavItem>Symptoms</NavItem>
          <NavItem>Prevention</NavItem>
        </NavItems>
        <SocialIcons>
          <SocialIcon
            data={facebook.publicURL}
            type={'image/svg+xml'}
          />
          <SocialIcon
            data={youtube.publicURL}
            type={'image/svg+xml'}
          />      
          <SocialIcon
            data={vimeo.publicURL}
            type={'image/svg+xml'}
          />
          <SocialIcon
            data={twitter.publicURL}
            type={'image/svg+xml'}
          />
        </SocialIcons>
      </Nav>
      <Text>
        2020 @ All rights reserved by pixelspark.co
      </Text>    
    </Container>
  )
}
export default Footer