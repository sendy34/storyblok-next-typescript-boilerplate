import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}

storyblokInit({
  accessToken: 'your-preview-token',
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
