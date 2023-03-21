import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',

  background: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',

  animationDuration: '400ms',

  "&[data-state='delayed-open'][data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&[data-state='delayed-open'][data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&[data-state='delayed-open'][data-side='bottom']": {
    animationName: slideUpAndFade,
  },
  "&[data-state='delayed-open'][data-side='left']": {
    animationName: slideRightAndFade,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
