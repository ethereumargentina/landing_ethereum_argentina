import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from '@mui/material'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => (

  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default appWithTranslation(MyApp)
