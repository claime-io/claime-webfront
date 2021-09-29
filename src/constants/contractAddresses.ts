import { BuiltInChainId } from './chains'

export const CONTRACT_ADDRESS: Partial<{ [chainId: number]: string }> = {
  [BuiltInChainId.MATIC]: '0xEf0Ad7130d8E7Bb334146a5b8fd18f21b86cd747',
  [BuiltInChainId.RINKEBY]: '0x337aB1c6494aA19A7c63fD9F6E9c1488b26b33a6',
}

export const getContractAddress = (chainId: number) => CONTRACT_ADDRESS[chainId]
