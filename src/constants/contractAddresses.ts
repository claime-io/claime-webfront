import { BuiltInChainId } from './chains'

export const CONTRACT_ADDRESS: Partial<{ [chainId: number]: string }> = {
  [BuiltInChainId.MAINNET]: '0xb52E96533528eD66AbFC3a9680A998a4eBe0E35a',
  [BuiltInChainId.RINKEBY]: '0xD721AF405fb939fFeBF7B44b294D9D02A232b359',
}

export const getContractAddress = (chainId: number) => CONTRACT_ADDRESS[chainId]
