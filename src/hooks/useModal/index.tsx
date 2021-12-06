import { useSWRLocal } from '../useSWRLocal'
import { createModal, ModalContentProps, ModalState } from './factory'

export type { ModalContentProps }
export { ModalPortal, useGlobalModal, useLoadingModal }

const createHandler = (key: string) => () => {
  const { data, mutate } = useSWRLocal<ModalState | null>(`modal-${key}`)
  return {
    state: data,
    mutate,
  }
}

const { useModal: useGlobalModal, Modal: GlobalModal } = createModal(
  createHandler('global'),
)
const { useModal: useLoadingModal, Modal: LoadingModal } = createModal(
  createHandler('loading'),
)

const ModalPortal = () => {
  return (
    <>
      <GlobalModal />
      <LoadingModal />
    </>
  )
}
