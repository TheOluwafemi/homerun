import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import './index.css'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brandPurple: {
      500: "#7348FF"
    },
    brandBlack: {
      500: "#1B1B1A"
    }
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
