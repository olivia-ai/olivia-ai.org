import { Box } from '@chakra-ui/react'
import React from 'react'

const Background = (): JSX.Element => (
  <>
    <style>{`
      body {
        background: url(/background.svg) no-repeat center center fixed !important;
        background-size: cover !important;
      }
    `}</style>

    <Box 
      m="0"
      p="0"
      width="100%"
      height="100%"
      position="absolute"
      zIndex="-100"
      style={{
        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)'
      }}
      overflow="hidden"
    />
  </>
)

export default Background