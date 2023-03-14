import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@rafarod21-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/rafarod21.png',
    alt: 'Rafael Rodrigues',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
