import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@rafarod21-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    triggerComponent: (
      <Text css={{ padding: '0 0.5rem' }}>Hover in this element</Text>
    ),
    side: 'top',
    children: <Text>Tooltip example</Text>,
  },

  argTypes: {
    triggerComponent: {
      control: {
        type: null,
      },
    },

    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },

    children: {
      control: {
        type: null,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box
            css={{
              width: '90%',
              height: '80vh',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Story()}
          </Box>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}

export const TooltipBottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
  },
}
