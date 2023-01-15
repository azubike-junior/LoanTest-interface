import {
  ChakraProvider,
  extendTheme,
  StyleFunctionProps,
} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import  Layout from '../components/Layout'
import '../styles/globals.css'

//Theme Customization
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#E5E5E5',
      },
    }),
  },

  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'light' ? 'ipcolor' : 'null',
        }),
      },
      defaultProps: {
        colorScheme: 'ipcolor',
      },
    },
  },
  space: {},
})

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const isLayoutDashboard = ['/'].includes(appProps.router.pathname)

  const LayoutComponent = isLayoutDashboard ? Layout : React.Fragment

  return (
    <ChakraProvider theme={theme}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ChakraProvider>
  )
}
