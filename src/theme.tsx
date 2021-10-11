import { extendTheme } from '@chakra-ui/react'

const fonts = { 
  mono: '\'Menlo\', monospace',
  body: 'Inter'
}

const colors = {
  'olivia-gradient': 'linear-gradient(94.06deg, #F3119B 5.44%, #B22093 98.14%)'
}

const theme = extendTheme({
  colors,
  fonts
})

export default theme
