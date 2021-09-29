import React, { VFC } from 'react'
import { ModalContentProps, useGlobalModal } from 'src/hooks/useModal'
import { AddressInfo } from './AddressInfo'
import { SelectWallet } from './SelectWallet'

type WalletModalProps = {
  account: string | null | undefined
}
const WalletModal: VFC<ModalContentProps<WalletModalProps>> = ({
  account,
  closeModal,
}) => {
  return (
    <>
      {account ? (
        <AddressInfo address={account} closeModal={closeModal} />
      ) : (
        <SelectWallet closeModal={closeModal} />
      )}
    </>
  )
}

export const useWalletModal = () => useGlobalModal(WalletModal)
