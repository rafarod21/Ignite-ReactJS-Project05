import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastRoot = styled(Toast.Root, {
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$1',

  color: '$gray200',
  fontSize: '$xl',
  fontFamily: '$default',

  width: '$80',

  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 100ms ease-in`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 150ms ease-in`,
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 150ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  // fontSize: '$sm',
  fontSize: 14,
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  lineHeight: 0,

  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  margin: 0,
  outline: 'none',
  position: 'absolute',
  bottom: 0,
  right: 0,
  padding: '$8',
  overflow: 'hidden',
})
