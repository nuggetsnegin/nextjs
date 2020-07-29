import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme.js'
/*this is where you'd import global css*/

export default function App({ Component, pageProps }) {

    return <ThemeProvider theme={theme}></ThemeProvider>

}