import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import theme from '../theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={theme}>
    <Head>
      <title>Olivia</title>
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Meta properties */}
      <meta property="og:image" content="/repository-open-graph-template.png" />
      <meta property="og:site_name" content="Olivia" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Olivia" />
      <meta property="og:url" content="https://olivia.swiss" />
      <meta property="og:description" content="💁‍♀️Your new best friend powered by deep learning, made in Switzerland." />
      <meta name="theme-color" content="#FBDFF0" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
