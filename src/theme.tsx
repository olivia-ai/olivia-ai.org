import { extendTheme } from '@chakra-ui/react'

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '50px'
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: '1.8em',
      fontWeight: '600',
      px: 10,
      py: 8
    }
  },
  variants: {
    primary: {
      bgGradient: 'linear(to-br, olivia.500, olivia.700)',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline'
  },
}

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
  fonts,
  components: {
    Button,
  }
})

export default theme
