import { Center, CircularProgress } from '@chakra-ui/react'

import React from 'react'

const PageLoader = (): JSX.Element => (
  <>
    <style>{`
    body {
      overflow: hidden;
    }
    `}</style>

    <Center 
      w="100vw"
      h="100vh"
      position="fixed"
      overflow="hidden"
      backgroundColor="white"
      zIndex="1000"
    >
      <CircularProgress 
        isIndeterminate 
        color="olivia.500" 
        size={200}
        thickness="3px"
        capIsRound
      />  
    </Center>
  </>
)

export default PageLoader