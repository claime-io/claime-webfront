import { WalletType } from 'src/hooks/useWallet'
import { metamaskConnector } from './metamask'
import { walletConnectConnector } from './walletConnect'

export const connector = (type: WalletType) => {
  switch (type) {
    case 'WalletConnect':
      return walletConnectConnector
    case 'Metamask':
    default:
      return metamaskConnector()
  }
}
