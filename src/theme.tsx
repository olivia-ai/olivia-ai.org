import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: '\'Menlo\', monospace' }

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts
})

export default theme
