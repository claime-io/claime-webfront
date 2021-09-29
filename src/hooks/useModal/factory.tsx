import { VFC } from 'react'
import { Modal } from 'src/components/Modal'
import { useSWRLocal } from '../useSWRLocal'

type UseModalInterface = <T>(Component: VFC<ModalContentProps<T>>) => {
  open: (props: T) => void
  close: VoidFunction
}
export type ModalContentProps<T = void> = T & {
  closeModal: VoidFunction
}

export const createModal = (
  key: string,
  option: {
    unescapable?: boolean
  } = {},
) => {
  const useModal: UseModalInterface = (Component) => {
    const { mutate } = useSWRLocal<any>(`modal-${key}`)
    const open = (props: any) => mutate({ Component, props })
    const close = () => mutate(null)
    return { open, close }
  }

  const ModalFC = () => {
    const { data, mutate } = useSWRLocal<any>(`modal-${key}`)
    const close = () => mutate(null)
    return (
      <Modal
        isOpen={!!data}
        closeModal={option.unescapable ? undefined : close}
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
