import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnector } from 'src/hooks/useWallet'

declare global {
  interface Window {
    ethereum: any
  }
}

export const hasMetaMask = (): boolean => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask)
}

const onConnect = async () => {
  if (hasMetaMask()) return Promise.reject('Please make Metamask available')
  await window.ethereum.request({ method: 'eth_requestAccounts' })
}

export const metamaskConnector = (): WalletConnector => ({
  type: 'Metamask',
  connector: new InjectedConnector({}),
  onConnect,
})
