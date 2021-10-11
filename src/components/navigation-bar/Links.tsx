import { Link as ChakraLink, Flex, Icon } from '@chakra-ui/react'

import { BsEnvelope } from 'react-icons/bs'
import React from 'react'

interface Props {
    title: string
    href: string
}

const Link = ({ title, href }: Props): JSX.Element => {
  return <ChakraLink
    href={href}
    fontSize="1.1em"
    textDecoration="none"
    fontWeight="600"
    bgClip="text"
    bgColor="link"
    _hover={{
      bgGradient: 'linear(to-br, olivia.500, olivia.700)',
    }}
    transition="0.2s"
  >
    {title}
  </ChakraLink>
}

export const Links = (): JSX.Element => {
  return <Flex  
    display={{ base: 'none', md: 'flex' }}
    w="40vw"
    alignItems="center"
    justifyContent="space-between"
  >
    <Link title="home" href="#" />
    <Link title="discover" href="#" />
    <Link title="blog" href="#" />
    <Link title="code" href="#" />
    <Link title="about" href="#" />
  </Flex>
}

export const ContactButton = (): JSX.Element => (
  <Icon 
    as={BsEnvelope} 
    w={5}
    h={5}
    color="link"
    _hover={{
      color: 'linear(to-br, olivia.500, olivia.700)',
      cursor: 'pointer'
    }}
  />
)