import Background from '../components/Background'
import Footer from '../components/Footer'
import Hero from '../components/heros/Heading'
import NavigationBar from '../components/navigation-bar/Bar'
import Network from '../components/heros/Network'
import React from 'react'

const Index = (): JSX.Element => (
  <>
    <Background />
    <NavigationBar />
    <Hero />
    <Network />
    <Footer />
  </>
)

export default Index
