import React, { VFC } from 'react'
import { ModalContentProps, useGlobalModal } from 'src/hooks/useModal'
import { useWallet } from 'src/hooks/useWallet'
import { AddressInfo } from './AddressInfo'
import { SelectWallet } from './SelectWallet'
import { WalletModalTheme } from './types'

type WalletModalProps = {
  theme?: WalletModalTheme
}
const WalletModal: VFC<ModalContentProps<WalletModalProps>> = ({
  theme,
  closeModal,
}) => {
  const { account } = useWallet()
  console.log(account)
  return (
    <>
      {account ? (
        <AddressInfo address={account} closeModal={closeModal} />
      ) : (
        <SelectWallet theme={theme} closeModal={closeModal} />
      )}
    </>
  )
}

export const useWalletModal = () => useGlobalModal(WalletModal)
