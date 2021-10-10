import { BuiltInChainId } from './chains'

export const CONTRACT_ADDRESS: Partial<{ [chainId: number]: string }> = {
  [BuiltInChainId.MAINNET]: '0xb52E96533528eD66AbFC3a9680A998a4eBe0E35a',
  [BuiltInChainId.RINKEBY]: '0x886A9591D624b5360d22B32C5866387340803593',
}

export const getContractAddress = (chainId: number) => CONTRACT_ADDRESS[chainId]
