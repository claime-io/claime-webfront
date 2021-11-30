import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnector } from 'src/hooks/useWallet'

export const hasMetaMask = (): boolean => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask)
}

const onConnect = async () => {
  const { ethereum } = window
  if (!(ethereum && ethereum.isMetaMask))
    return Promise.reject('Please make Metamask available')
  await ethereum.request({ method: 'eth_requestAccounts' })
}

const connector = new InjectedConnector({})

export const metamaskConnector: WalletConnector<InjectedConnector> = {
  type: 'Metamask',
  connector,
  onConnect,
}
