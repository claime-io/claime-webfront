import { VFC } from 'react'
import { Modal, ModalStyleProps } from 'src/components/Modal'

export type ModalOption = {
  inescapable?: boolean
  styles?: ModalStyleProps
}
type ModalProps<T> = T & {
  onClose?: VoidFunction
}
type ModalOpener<P> = P extends ModalProps<P>
  ? P extends Partial<P>
    ? (props?: ModalProps<P>, option?: ModalOption) => void
    : (props: ModalProps<P>, option?: ModalOption) => void
  : (option?: ModalOption) => void

type UseModalFn = <T>(
  Component: VFC<ModalContentProps<T>>,
  option?: ModalOption,
) => {
  open: ModalOpener<T>
  close: VoidFunction
}

export type ModalContentProps<T> = T & {
  closeModal: VoidFunction
}

export type ModalState<T = any> = {
  Component: VFC<ModalContentProps<T>>
  props: T
  option?: ModalOption
}

type ModalStateHandler = <T = any>() => {
  state: ModalState | null | undefined
  mutate: (state: ModalState<T> | null | undefined) => void
}

export const createModal = (
  useModalState: ModalStateHandler,
  config: {
    inescapable?: boolean
  } = {},
) => {
  const useModal: UseModalFn = (Component, componentOption) => {
    const { state, mutate } = useModalState()
    return {
      open: (props: any, option?: ModalOption) =>
        mutate({ Component, props, option: { ...componentOption, ...option } }),
      close: () => {
        mutate(null)
        state?.props?.onClose && state.props.onClose()
      },
    }
  }

  const ModalFC = () => {
    const { state, mutate } = useModalState()
    const close = () => {
      mutate(null)
      state?.props?.onClose && state.props.onClose()
    }
    const option = state?.option || {}
    const inescapable = config.inescapable || option.inescapable
    return (
      <Modal
        isOpen={!!state}
        closeModal={inescapable ? undefined : close}
        styles={option.styles}
      >
        {state && <state.Component {...state.props} closeModal={close} />}
      </Modal>
    )
  }
  return {
    useModal,
    Modal: ModalFC,
  }
}
