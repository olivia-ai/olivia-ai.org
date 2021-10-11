import { Flex, Image } from '@chakra-ui/react'

import Links from './Links'
import React from 'react'

const Logo = (): JSX.Element => {
  return <Image 
    src="olivia-character.svg"
    alt="Olivia character waving" 
    h={50}
    w={50}
  />
}

const NavigationBar = (): JSX.Element => {
  return <Flex
    w="100%"
    h="8vh"
    p="0 25vw"
    alignItems="center"
    justifyContent="space-between"
    borderBottom="solid 1px #CFCFCF"
  >
    <Logo />
    <Links />
  </Flex>
}

export default NavigationBar