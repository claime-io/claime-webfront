import { BigNumber } from '@ethersproject/bignumber'
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

export const requestSwitchChain = async (chainId: number) => {
  const { ethereum } = window
  if (!ethereum?.isMetaMask)
    return Promise.reject('Your wallet needs to switch network manually.')
  try {
    const chainIdHex = `0x${(+BigNumber.from(chainId)).toString(16)}`
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    })
    return
  } catch (e) {
    return Promise.reject(
      'Failed to switch network.\n\nPlease switch network manually.',
    )
  }
}
