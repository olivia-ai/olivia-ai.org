import { Flex, FlexProps, useColorMode } from '@chakra-ui/react'

import React from 'react'

export const Container = (props: FlexProps): JSX.Element => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return <Flex
    direction="column"
    alignItems="center"
    justifyContent="space-evenly"
    bg={bgColor[colorMode]}
    color={color[colorMode]}
    {...props}
  />
}
