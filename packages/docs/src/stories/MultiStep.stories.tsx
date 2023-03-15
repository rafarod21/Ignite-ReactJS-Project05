import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@rafarod21-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        {Story()}
      </Box>
    ),
  ],

  argTypes: {
    size: {
      // options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'number',
        min: 1,
      },
    },
    currentStep: {
      // options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
