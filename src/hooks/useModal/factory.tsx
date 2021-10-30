import { VFC } from 'react'
import { Modal, ModalStyleProps } from 'src/components/Modal'
import { useSWRLocal } from '../useSWRLocal'

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

type UseModalInterface = <T>(
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

export const createModal = (
  key: string,
  config: {
    inescapable?: boolean
  } = {},
) => {
  const useModal: UseModalInterface = (Component, componentOption) => {
    const { mutate } = useSWRLocal<ModalState | null>(`modal-${key}`)
    const open = (props: any, option?: ModalOption) =>
      mutate({ Component, props, option: { ...componentOption, ...option } })
    const close = () => mutate(null)
    return { open, close }
  }

  const ModalFC = () => {
    const { data, mutate } = useSWRLocal<ModalState | null>(`modal-${key}`)
    const close = () => {
      mutate(null)
      data?.props?.onClose && data.props.onClose()
    }
    const option = data?.option || {}
    const inescapable = config.inescapable || option.inescapable
    return (
      <Modal
        isOpen={!!data}
        closeModal={inescapable ? undefined : close}
        styles={option.styles}
      >
        {data && <data.Component {...data.props} closeModal={close} />}
      </Modal>
    )
  }

  return {
    useModal,
    Modal: ModalFC,
  }
}
