import { ContactButton, Links } from './Links'
import { Flex, Icon, Image } from '@chakra-ui/react'

import { BsEnvelope } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import React from 'react'

const Logo = (): JSX.Element => (
  <Image 
    src="olivia-character.svg"
    alt="Olivia character waving" 
    h={50}
    w={50}
  />
)

const MenuIcon = (): JSX.Element => (
  <Icon 
    as={HiOutlineMenuAlt4} 
    display={{ base: 'block', md: 'none' }}
  />
)

const NavigationBar = (): JSX.Element => {
  return <Flex
    w="100%"
    h="8vh"
    p={{ base: '0 5vw', md: '0 15vw' }}
    alignItems="center"
    justifyContent="space-between"
    borderBottom="solid 1px #CFCFCF"
  >
    <MenuIcon />
    <Logo />
    
    <Links />
    
    <ContactButton />
  </Flex>
}

export default NavigationBar