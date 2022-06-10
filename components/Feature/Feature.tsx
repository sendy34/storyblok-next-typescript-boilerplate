import { storyblokEditable } from '@storyblok/react'
import { StoryblokContent } from 'types'

interface IProps extends StoryblokContent {
  blok: {
    name: string
  }
}

const Feature: React.FC<IProps> = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
)

export default Feature
