import { VFC } from 'react'
import { Modal } from 'src/components/Modal'
import { SimpleInterpolation } from 'styled-components'
import { useSWRLocal } from '../useSWRLocal'

type ModalProps<T = {}> = T & {
  onClose?: VoidFunction
}
type UseModalInterface = <T>(Component: VFC<ModalContentProps<T>>) => {
  open: (props: ModalProps<T>, option?: ModalOption) => void
  close: VoidFunction
}
export type ModalContentProps<T> = T & {
  closeModal: VoidFunction
}

export type ModalOption = {
  styles?: SimpleInterpolation
  inescapable?: boolean
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
