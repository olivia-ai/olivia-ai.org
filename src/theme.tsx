import { extendTheme } from '@chakra-ui/react'

const fonts = { 
  mono: '\'Menlo\', monospace',
  body: 'Inter, -apple-system'
}

const colors = {
  'olivia-gradient': 'linear(to-br, #F3119B, #B22093)',
  'transparent-bg': 'rgba(255, 255, 255, 0.2)',
  olivia: {
    500: '#F3119B',
    700: '#B22093'
  },
  'link': '#564C4C'
}

const theme = extendTheme({
  colors,
  fonts
})

export default theme
