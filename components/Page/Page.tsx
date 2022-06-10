import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Blok, StoryblokContent } from 'types'

interface IProps extends StoryblokContent {
  blok: {
    body: Blok
  }
}

const Page: React.FC<IProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
)

export default Page
