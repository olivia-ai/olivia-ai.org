import { extendTheme } from '@chakra-ui/react'

const fonts = { 
  mono: '\'Menlo\', monospace',
  body: 'Inter, -apple-system'
}

const colors = {
  'olivia-gradient': 'linear(to-br, #F3119B, #B22093)',
  'link': '#564C4C'
}

const theme = extendTheme({
  colors,
  fonts
})

export default theme
