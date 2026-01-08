import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#0B0E11',
        color: '#E6E8EA',
      },
    },
  },
  colors: {
    brand: {
      50: '#E6FCFA',
      100: '#B3F5EE',
      200: '#80EEE1',
      300: '#4EE3D8',
      400: '#3FD4C7',
      500: '#30C5B6',
      600: '#2AA08F',
      700: '#227B69',
      800: '#1A5643',
      900: '#12311D',
    },
    blue: {
      primary: '#2F5FA0',
      secondary: '#16283F',
    },
    bg: {
      primary: '#0B0E11',
      secondary: '#16283F',
      tertiary: '#1E3552',
    },
    text: {
      primary: '#E6E8EA',
      secondary: '#9BAEC8',
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'xl',
      },
      variants: {
        solid: {
          bg: 'brand.300',
          color: '#0B0E11',
          _hover: {
            bg: 'brand.400',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(78, 227, 216, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
        outline: {
          borderColor: 'brand.300',
          color: 'brand.300',
          _hover: {
            bg: 'rgba(78, 227, 216, 0.1)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'rgba(30, 53, 82, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'xl',
          border: '1px solid rgba(78, 227, 216, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
});

export default theme;
