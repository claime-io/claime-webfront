import { isProd } from 'src/utils/env'
import { BuiltInChainId } from './chains'

const CONTRACT_ADDRESS_PROD: { [chainId: number]: string } = {
  [BuiltInChainId.MAINNET]: '0xb52E96533528eD66AbFC3a9680A998a4eBe0E35a',
}

const CONTRACT_ADDRESS_TESTNET: { [chainId: number]: string } = {
  [BuiltInChainId.RINKEBY]: '0xD721AF405fb939fFeBF7B44b294D9D02A232b359',
  [BuiltInChainId.MUMBAI]: '0x9b67374857503dA14209844598B0e65fA022Ac1B',
}

export const getContractAddress = (chainId: number) =>
  isProd ? CONTRACT_ADDRESS_PROD[chainId] : CONTRACT_ADDRESS_TESTNET[chainId]
