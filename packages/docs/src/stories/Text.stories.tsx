import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@rafarod21-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis nesciunt sequi amet vero fuga quos, omnis quod magnam! Nesciunt sit sint non consectetur aperiam iste, itaque eligendi harum quas?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
