import { Button, Center, Flex, Heading, Image, chakra } from '@chakra-ui/react'

import { ArrowDownIcon } from '@chakra-ui/icons'
import React from 'react'
import { motion } from 'framer-motion'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const image = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const HeadingText = (): JSX.Element => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={item}
  >
    <Flex 
      direction="column"
      w={{ base: '60vw', md: 'auto' }}
    >
      <Heading
        fontWeight="600"
        fontSize="3.5em"
      >your new</Heading>
      <Heading 
        fontWeight="600"
        fontSize="3.5em"
        ml="50px"
      >best <chakra.span
          bgGradient="linear(to-br, olivia.500, olivia.700)"
          bgClip="text"
        >friend</chakra.span>.</Heading>
    </Flex>
  </motion.div>
)

const Hero = (): JSX.Element => {
  const MotionImage = motion(Image)
  const MotionButton = motion(Button)

  return <Center
    h="92vh"
    pt="6vh"
  >
    <Flex 
      h={{ base: '60vh', md: '45vh' }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex 
        w="30vw"
        alignItems="center"
        justifyContent="center"
      >
        <MotionImage
          variants={image}
          initial="hidden"
          animate="visible"
          pos="absolute"
          src="messages.svg"
          pointerEvents="none"
          w="900px"
          display={{ base: 'none', md: 'block' }}
        />
        <HeadingText />
      </Flex>
      
      <MotionImage 
        variants={image}
        initial="hidden"
        animate="visible"
        src="swiss-made.svg" 
        alt="Swiss made"
        w={{ base: '50vw', md: '25vw', lg: '10vw' }}
        pointerEvents="none"
      />

      <MotionButton 
        variants={item}
        initial="hidden"
        animate="visible"
        variant="primary" 
        size="lg"
        rightIcon={<ArrowDownIcon />}
      >
        discover now
      </MotionButton>
    </Flex>
  </Center>
}

export default Hero