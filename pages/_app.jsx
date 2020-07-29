import React from 'react'
import '../src/components/styles.module.css';
/*this is where you'd import global css*/

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}