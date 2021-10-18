import { Center, Flex, Heading, Image, chakra } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Network = (): JSX.Element => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return <Center
    h={{ base: '40vh', md: '60vh' }}
    pb="20vh"
  >
    <motion.div
      ref={ref}
      variants={item}
      animate={controls}
      initial="hidden"
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
    </motion.div>
  </Center>
}

export default Network