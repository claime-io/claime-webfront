import { ethers } from 'ethers'
import { WalletType } from 'src/hooks/useWallet'
import { metamaskConnector } from './metamask'
import { walletConnectConnector } from './walletConnect'

export const connector = (type: WalletType) => {
  switch (type) {
    case 'WalletConnect':
      return walletConnectConnector
    case 'Metamask':
    default:
      return metamaskConnector
  }
}

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(
    provider,
    typeof provider.chainId === 'number'
      ? provider.chainId
      : typeof provider.chainId === 'string'
      ? parseInt(provider.chainId)
      : 'any',
  )
  return library
}
