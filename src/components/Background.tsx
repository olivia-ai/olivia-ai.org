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
      width="100%"
      height="100%"
      top={0}
      bottom={0}
      left={0}
      right={0}
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