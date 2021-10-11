import { Link as ChakraLink, Flex } from '@chakra-ui/react'

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
      bgGradient: 'linear(to-br, #F3119B, #B22093)',
    }}
    transition="0.2s"
  >
    {title}
  </ChakraLink>
}

const Links = (): JSX.Element => {
  return <>
    <Link title="home" href="#" />
    <Link title="discover" href="#" />
    <Link title="blog" href="#" />
    <Link title="code" href="#" />
    <Link title="about" href="#" />
  </>
}

export default Links