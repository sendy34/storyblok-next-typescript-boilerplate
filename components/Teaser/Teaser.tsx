import { storyblokEditable } from '@storyblok/react'
import { StoryblokContent } from 'types'

interface IProps extends StoryblokContent {
  blok: {
    headline: string
  }
}

const Teaser: React.FC<IProps> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
}

export default Teaser
