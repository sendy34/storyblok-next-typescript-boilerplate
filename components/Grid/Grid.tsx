import StoryblokComponents from '@components/StoryblokComponents'
import { storyblokEditable } from '@storyblok/react'
import { Blok, StoryblokContent } from 'types'

interface IProps extends StoryblokContent {
  blok: {
    columns: Blok
  }
}

const Grid: React.FC<IProps> = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      <StoryblokComponents bloks={blok.columns} />
    </div>
  )
}

export default Grid
