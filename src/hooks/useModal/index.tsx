import { createModal, ModalContentProps } from './factory'

export type { ModalContentProps }
export { ModalPortal, useGlobalModal, useLoadingModal }

const { useModal: useGlobalModal, Modal: GlobalModal } =
  createModal('globalModal')
const { useModal: useLoadingModal, Modal: LoadingModal } =
  createModal('loadingModal')

const ModalPortal = () => {
  return (
    <>
      <GlobalModal />
      <LoadingModal />
    </>
  )
}
