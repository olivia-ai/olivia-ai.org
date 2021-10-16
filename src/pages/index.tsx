import Background from '../components/Background'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavigationBar from '../components/navigation-bar/Bar'
import Network from '../components/Network'
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
