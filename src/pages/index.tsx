import {
  Link as ChakraLink,
  Code,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { CTA } from '../components/CTA'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import React from 'react'

const Index = (): JSX.Element => (
  <Container height="100vh">
    <Hero />
    
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>ChakraUI</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>

      <Text>Do not forget to:</Text>
      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="gray.500" />
          <ChakraLink
            isExternal
            href="https://github.com/hugolgst/react-template/blob/master/package.json#L2"
            flexGrow={1}
            mr={2}
          >
            Update the package name <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="gray.500" />
          <ChakraLink isExternal href="https://github.com/hugolgst/react-template/blob/master/README.md" flexGrow={1} mr={2}>
            Update name in the README.md <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>
    
    <CTA />

    <DarkModeSwitch />
  </Container>
)

export default Index
