import { Center, Flex, Heading, Image, chakra } from '@chakra-ui/react'

import React from 'react'

const Network = (): JSX.Element => (
  <Center
    h={{ base: '40vh', md: '60vh' }}
    pb="20vh"
  >
    <Flex 
      direction="column" 
      alignItems="center"
      justifyContent="center"
    >
      <Image
        w="60%"
        src="network.svg"
      />
      <Heading
        pos={{ base: 'unset', md: 'absolute' }}
        maxWidth="80%"
      >powered by state-of-the-art <chakra.span bgGradient="linear(to-br, olivia.500, olivia.700)" bgClip="text">deep learning</chakra.span> algorithms.</Heading>
    </Flex>
  </Center>
)

export default Network