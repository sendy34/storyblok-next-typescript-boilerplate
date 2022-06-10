/** A simple component to iterate over Storyblok Blok field */

import React from 'react'
import { StoryblokContent } from 'types'
import { StoryblokComponent } from '@storyblok/react'

export interface IProps {
  bloks: Array<StoryblokContent>
}

const StoryblokComponents: React.FC<IProps> = ({ bloks = [] }) => {
  return (
    <>
      {bloks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </>
  )
}

export default StoryblokComponents
