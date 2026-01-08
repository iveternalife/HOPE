import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#E6FCFA' },
          100: { value: '#B3F5EE' },
          200: { value: '#80EEE1' },
          300: { value: '#4EE3D8' },
          400: { value: '#3FD4C7' },
          500: { value: '#30C5B6' },
          600: { value: '#2AA08F' },
          700: { value: '#227B69' },
          800: { value: '#1A5643' },
          900: { value: '#12311D' },
        },
      },
    },
  },
  globalCss: {
    'html, body': {
      bg: '#0B0E11',
      color: '#E6E8EA',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

export default system;
