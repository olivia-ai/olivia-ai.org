import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { BsShieldLockFill } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'
import { HiCubeTransparent } from 'react-icons/hi'
import { IconType } from 'react-icons'
import { useInView } from 'react-intersection-observer'

interface Props {
  title: string
  icon: IconType
  children: React.ReactNode
}

const container = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Feature = ({ title, icon, children }: Props): JSX.Element => (
  <motion.div 
    variants={item}
    style={{
      width: '90%'
    }}
  >
    <Flex 
      minH="250px"
      p={{ base: '3.5vh 2.5vw', md: '0 2.5vw' }}
      direction="column"
      justifyContent="space-between"
    >
      <Heading 
        color="white"
        fontSize="2.8em"
      >{title}</Heading>
      <Icon 
        as={icon} 
        w={75}
        h={75}
        color="olivia.700"
      />
      <Text 
        color="white"
        fontSize="1.5em"
      >{children}</Text>
    </Flex>
  </motion.div>
)

const Features = (): JSX.Element => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return <motion.div
    variants={container}
    initial="hidden"
    animate={controls}
  >
    <Flex 
      m="0"
      direction="column"
      overflow="hidden"
    >
      <object
        type="image/svg+xml" 
        data="wave-1.svg"
        style={{
          width: '102%',
          margin: '0 -2px -2px -2px',
        }}
      />

      <Box
        w="100%"
        minH="30vh"
        bgGradient="linear(to-b, #F7BADF -41.14%, #B72094 136.79%)"
      >
        <Flex 
          ref={ref}
          w="100%"
          p="0 10%"
          alignItems="center"
          justifyContent="space-around"
          direction={{ base: 'column', md: 'row' }}
        >
          <Feature 
            title="Privacy"
            icon={BsShieldLockFill}
          >
          Olivia truly respects your privacy by keeping the data that belongs to <strong>you</strong>, in your computer. No telemetry is used at all.
          </Feature>
          <Feature 
            title="Open source"
            icon={FaCode}
          >
          The core code as well as the client code is fully open-source and community driven. It allows users to work on their own version as well as continuously improving Olivia.
          </Feature>
          <Feature 
            title="Portability"
            icon={HiCubeTransparent}
          >
          Your personal assistant uses state-of-the-art web technologies to run the trained version of the deep learning model, directly in your browser.
          </Feature>
        </Flex>
      </Box>

      <object
        type="image/svg+xml" 
        data="wave-2.svg"
        style={{
          width: '102%',
          margin: '-2px -2px 0 -2px',
        }}
      />
    </Flex>
  </motion.div>
}

export default Features 