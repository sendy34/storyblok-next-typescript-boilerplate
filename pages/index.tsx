import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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

export default Home

export const getStaticProps = async () => {
  let slug = 'home'

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
