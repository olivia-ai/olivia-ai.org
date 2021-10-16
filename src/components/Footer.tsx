import { Box, Flex, Heading, Link, Text, chakra } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    transition={{ duration: 0.3 }}
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    }}
  >
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
  </motion.div>
}

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
      w="70%"
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
      >Made with love in <chakra.span bgGradient="linear(to-br, #D90707, #B11212)" bgClip="text">Switzerland</chakra.span> 🇨🇭</Heading>
      <Text 
        fontSize="1.2em"
      >Licensed under <Link href="https://github.com/olivia-ai/olivia/blob/master/LICENSE">MIT</Link>.</Text>
    </Flex>
  </Flex>
)

export default Footer