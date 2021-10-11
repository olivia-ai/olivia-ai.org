import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return <Html>
      <Head />
      
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}
