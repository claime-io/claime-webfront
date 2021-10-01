import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { RpcUrls } from 'src/constants/chains'
import { WalletConnector } from 'src/hooks/useWallet'

const connector = new WalletConnectConnector({
  rpc: RpcUrls,
  qrcode: true,
  pollingInterval: 15000,
})

const onConnect = async () => {
  if (
    connector instanceof WalletConnectConnector &&
    connector.walletConnectProvider?.wc?.uri
  )
    connector.walletConnectProvider = undefined
}
const onDisconnect = () => {
  connector.close()
}

export const walletConnectConnector: WalletConnector<WalletConnectConnector> = {
  type: 'WalletConnect',
  connector,
  onConnect,
  onDisconnect,
}
