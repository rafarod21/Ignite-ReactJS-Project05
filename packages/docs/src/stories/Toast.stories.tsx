import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Toast,
  ToastProps,
  ToastProvider,
} from '@rafarod21-ignite-ui/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: false,
  },

  decorators: [
    (Story) => {
      return (
        <ToastProvider>
          <Box
            css={{
              width: '90%',
              height: '80vh',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '$gray900',
            }}
          >
            {Story()}
          </Box>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
