import { AbstractConnector } from '@web3-react/abstract-connector'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useCallback, useEffect } from 'react'
import { hasMetaMask, metamaskConnector } from 'src/external/wallets/metamask'
import { useSWRLocal } from '../useSWRLocal'

export type WalletType = 'Metamask' | 'WalletConnect'
export type WalletConnector<T extends AbstractConnector = AbstractConnector> = {
  type: WalletType
  connector: T
  onConnect?: () => Promise<void>
  onDisconnect?: VoidFunction
}
export type WalletInterface = {
  error: Error | undefined
  chainId: number | undefined
  account: string | null | undefined
  active: boolean
  activeWalletType: WalletType | null | undefined
  web3Provider: ethers.providers.Web3Provider | null | undefined
  signer: ethers.providers.JsonRpcSigner | null | undefined
  connect: (params: WalletConnector) => Promise<void>
  disconnect: () => void
}
export const useWallet = (): WalletInterface => {
  const { library, error, account, active, chainId, activate, deactivate } =
    useWeb3React()
  const { data: activeWalletType, mutate: mutateWalletType } =
    useSWRLocal<WalletType | null>('wallet-type')
  const { data: web3Provider, mutate: mutateWeb3Provider } =
    useSWRLocal<ethers.providers.Web3Provider | null>('wallet-web3Provider')
  const { data: signer, mutate: mutateSigner } =
    useSWRLocal<ethers.providers.JsonRpcSigner | null>('wallet-signer')
  const { data: onDisconnect, mutate: mutateOnDisconnect } =
    useSWRLocal<VoidFunction | null>('wallet-onDisconnect')

  const connect: WalletInterface['connect'] = useCallback(
    async ({ type, connector, onConnect, onDisconnect }) => {
      if (onConnect) await onConnect()
      await activate(connector, undefined, true)
      await mutateOnDisconnect(onDisconnect ? onDisconnect : null)
      await mutateWalletType(type)
    },
    [activate],
  )

  const disconnect = useCallback(async () => {
    if (onDisconnect) onDisconnect()
    await mutateWalletType(null)
    deactivate()
    await mutateSigner(null)
    await mutateWeb3Provider(null)
  }, [deactivate, activeWalletType, onDisconnect])

  useEffect(() => {
    if (!library) return
    const provider = library as ethers.providers.Web3Provider
    mutateWeb3Provider(provider)
    mutateSigner(provider.getSigner())
  }, [library])

  useEffect(() => {
    if (activeWalletType !== 'Metamask') return
    const { ethereum } = window
    const removeAllListners = () => {
      ethereum.removeAllListeners('chainChanged')
      ethereum.removeAllListeners('accountsChanged')
    }
    if (ethereum && hasMetaMask() && signer !== null) {
      removeAllListners()
      ethereum.on('chainChanged', (accounts: string[]) => {
        if (!accounts.length) {
          disconnect()
          return
        }
        connect(metamaskConnector).catch((error) => {
          console.error('Failed to activate after accounts changed', error)
        })
      })
      ethereum.on('accountsChanged', () =>
        connect(metamaskConnector).catch((error) => {
          console.error('Failed to activate after chain changed', error)
        }),
      )
    }
    return () => {
      if (ethereum && ethereum.removeListener) removeAllListners()
    }
  }, [connect, disconnect, signer, activeWalletType])

  useEffect(() => {
    if (active) return
    metamaskConnector.connector.isAuthorized().then((isAuthorized) => {
      if (!isAuthorized) return
      connect(metamaskConnector).catch((error) =>
        console.log('Error by trying to connect MetaMask', error),
      )
    })
  }, [connect, active])

  return {
    error,
    chainId,
    account,
    active,
    activeWalletType,
    web3Provider,
    signer,
    connect,
    disconnect,
  }
}
