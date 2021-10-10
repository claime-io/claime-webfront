import { VFC } from 'react'
import { Modal } from 'src/components/Modal'
import { SimpleInterpolation } from 'styled-components'
import { useSWRLocal } from '../useSWRLocal'

export type ModalOption = {
  styles?: SimpleInterpolation
  inescapable?: boolean
}
type ModalProps<T> = T & {
  onClose?: VoidFunction
}
type ModalOpener<P> = P extends ModalProps<P>
  ? (props: ModalProps<P>, option?: ModalOption) => void
  : (option?: ModalOption) => void

type UseModalInterface = <T>(Component: VFC<ModalContentProps<T>>) => {
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
  const useModal: UseModalInterface = (Component) => {
    const { mutate } = useSWRLocal<ModalState | null>(`modal-${key}`)
    const open = (props: any, option?: ModalOption) =>
      mutate({ Component, props, option })
    const close = () => mutate(null)
    return { open, close }
  }

  const ModalFC = () => {
    const { data, mutate } = useSWRLocal<ModalState | null>(`modal-${key}`)
    const close = () => {
      mutate(null)
      data?.props.onClose && data?.props.onClose()
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
