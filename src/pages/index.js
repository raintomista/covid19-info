import React from "react"

import Nav from "@components/nav"
import Hero from "@components/hero"
import Contagion from "@components/contagion"
import Symptoms from "@components/symptoms"
import Prevention from "@components/prevention"
import Footer from "@components/footer"


const IndexPage = () => (
  <>
    <Nav/>
    <Hero/>
    <Contagion/>
    <Symptoms/>
    <Prevention/>
    <Footer/>    
  </>
)

export default IndexPage
