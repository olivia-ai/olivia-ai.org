import { Link as ChakraLink, Flex, Icon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { BsEnvelope } from 'react-icons/bs'

interface LinkProps {
    title: string
    href: string
}

const Link = ({ title, href }: LinkProps): JSX.Element => {
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
    m="0 2vw"
  >
    {title}
  </ChakraLink>
}

const links: Array<LinkProps> = [
  { title: 'home', href: '#' },
  { title: 'version two', href: 'https://olivia-ai.org' },
  { title: 'code', href: 'https://github.com/olivia' }
]

// useLinks is a simple hook to retrieve the link elements generated from the array
export const useLinks = (): Array<JSX.Element> | undefined => {
  const [ linksElements, setLinksElements ] = useState<Array<JSX.Element>>()

  useEffect(() => {
    const buffer = []
    for (const link of links) {
      buffer.push(<Link {...link} />)
    }

    setLinksElements(buffer)
  }, [])

  return linksElements
}

export const Links = (): JSX.Element => {
  const links = useLinks()

  return <Flex  
    display={{ base: 'none', md: 'flex' }}
    w="40vw"
    alignItems="center"
    justifyContent="space-around"
  >
    {links}
  </Flex>
}

export const ContactButton = (): JSX.Element => (
  <a href="mailto:hi@olivia.swiss">
    <Icon 
      aria-label="Contact"
      as={BsEnvelope} 
      w={5}
      h={5}
      color="link"
      _hover={{
        color: 'linear(to-br, olivia.500, olivia.700)',
        cursor: 'pointer'
      }}
    />
  </a>
)