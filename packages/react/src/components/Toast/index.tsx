import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastProvider as ToastProviderStyle,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProviderProps
  extends ComponentProps<typeof ToastProviderStyle> {}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return <ToastProviderStyle {...props}>{children}</ToastProviderStyle>
}

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </>
  )
}

Toast.displayName = 'Toast'
