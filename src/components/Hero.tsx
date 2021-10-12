import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'

import React from 'react'

const HeadingText = (): JSX.Element => (
  <Flex 
    direction="column"
    w={{ base: '80vw', md: 'auto' }}
  >
    <Heading
      fontWeight="400"
      fontSize="3em"
    >your new</Heading>
    <Heading 
      fontFamily="Noto Serif"
      fontStyle="italic"
      fontWeight="500"
      fontSize="3em"
      ml="50px"
    >best friend</Heading>
    <Heading
      fontWeight="400"
      fontSize="3em"
      ml="100px"
    >is coming 👀</Heading>
  </Flex>
)

const Hero = (): JSX.Element => {
  return <Center
    h="95vh"
  >
    <Flex 
      h={{ base: '60vh', md: '35vh' }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex 
        w="50vw"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          pos="absolute"
          src="messages.svg"
          pointerEvents="none"
          display={{ base: 'none', md: 'block' }}
        />
        <HeadingText />
      </Flex>
      
      <Image 
        src="swiss-made.svg" 
        alt="Swiss made"
        w={{ base: '50vw', md: '25vw', lg: '10vw' }}
        pointerEvents="none"
      />
    </Flex>
  </Center>
}

export default Hero