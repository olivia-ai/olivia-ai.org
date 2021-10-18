import React, { useEffect, useState } from 'react'

import Background from '../components/Background'
import Footer from '../components/Footer'
import Hero from '../components/heros/Heading'
import NavigationBar from '../components/navigation-bar/Bar'
import Network from '../components/heros/Network'
import PageLoader from '../components/PageLoader'

const Index = (): JSX.Element => {
  const [ isLoading, setLoadingState ] = useState(true)

  useEffect(() => {
    // Show the loader for a minimum amount of time
    setTimeout(() => {
      setLoadingState(false)
    }, 400)
  }, [])

  return <>
    { isLoading ? <PageLoader /> : null }

    <Background />
    <NavigationBar />
    <Hero />
    <Network />
    <Footer />
  </>
}

export default Index
