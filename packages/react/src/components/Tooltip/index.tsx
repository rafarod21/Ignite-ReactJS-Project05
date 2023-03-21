import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider as TooltipProviderPrimitive,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProviderProps
  extends ComponentProps<typeof TooltipProviderPrimitive> {}

export function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <TooltipProviderPrimitive {...props}>{children}</TooltipProviderPrimitive>
  )
}

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  triggerComponent: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({
  triggerComponent,
  side = 'top',
  children,
  ...props
}: TooltipProps) {
  return (
    <>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{triggerComponent}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side={side}>
            {children}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </>
  )
}

Tooltip.displayName = 'Tooltip'
