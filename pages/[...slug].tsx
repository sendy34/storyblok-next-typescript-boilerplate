import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { GetStaticProps } from 'next'

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import { Story } from 'types'

interface IProps {
  story: Story
}

const Home: React.FC<IProps> = ({ story }) => {
  story = useStoryblokState(story)

  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : 'Calibrate'}</title>
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug = 'home'

  if (params && params.slug && typeof params.slug !== 'string') {
    slug = params.slug.join('/')
  }

  let sbParams = {
    version: 'draft', // or 'published'
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  }
}

export default Home

export const getStaticPaths = async () => {
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get('cdn/links/')

  let paths: any = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split('/')

    paths.push({
      params: {
        slug: splittedSlug,
      },
    })
  })

  return { paths: paths, fallback: false }
}
