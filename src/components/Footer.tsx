import { Box, Flex, Heading, Link, Text, chakra } from '@chakra-ui/react'

import React from 'react'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => (
  <Box
    maxWidth="325px"
    width="auto"
    height="fit-content"
    p="15px 30px"
    borderRadius="35px"
    backgroundColor="olivia.400"
  >
    {children}
  </Box>
)

const Bold = ({ children }: Props) => (
  <chakra.span fontWeight="700">{children}</chakra.span>
)

const Footer = (): JSX.Element => (
  <Flex 
    direction="column"
    alignItems="center"
    justifyContent="space-between"
    w="100%"
    h={{ base: '50vh', md: '27.5vh' }}
  >
    <Flex 
      direction={{ base: 'column', md: 'row' }}
      w="80%"
      h={{ base: '35vh', md: 'auto' }}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Container>
        <Text 
          color="white"
          fontSize="1.5em"
        ><Bold>Olivia</Bold> is a swiss association established in <Bold>Lausanne, VD</Bold>.</Text>
      </Container>

      <Container>
        <Text 
          color="white"
          fontSize="1.5em"
        >Contact us at <Bold><Link href="mailto:hi@olivia.swiss">hi@olivia.swiss</Link></Bold>.</Text>
      </Container>
    </Flex>

    <Flex 
      direction="column"
      alignItems="center"
    >
      <Heading 
        size="lg"
        color="white"
      >Made with love in <chakra.span bgGradient="linear(to-br, #D90707, #B11212)" bgClip="text">Switzerland</chakra.span> 🇨🇭</Heading>
      <Text 
        fontSize="1.2em"
        color="white"
      >Licensed under <Link href="https://github.com/olivia-ai/olivia/blob/master/LICENSE">MIT</Link>.</Text>
    </Flex>
  </Flex>
)

export default Footer