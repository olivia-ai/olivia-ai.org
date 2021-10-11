import { Button, Link as ChakraLink } from '@chakra-ui/react'

import { Container } from './Container'
import React from 'react'

export const CTA = (): JSX.Element => (
  <Container
    flexDirection="row"
    width="100%"
    maxWidth="28rem"
    py={3}
  >
    <ChakraLink
      isExternal
      href="https://github.com/hugolgst/react-template"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)
