import { isProd } from 'src/utils/env'

export enum BuiltInChainId {
  MAINNET = 1,
  RINKEBY = 4,
  MATIC = 137,
  MUMBAI = 80001,
}

type BuiltInChainInfo = {
  readonly explorer?: {
    address: (address: string) => string
    tx: (txHash: string) => string
  }
  readonly label: string
}

type ChainInfo = { readonly [chainId: number]: BuiltInChainInfo } & {
  readonly [chainId in BuiltInChainId]: BuiltInChainInfo
}

const ExplorerBaseUrl: {
  readonly [chainId in BuiltInChainId]: string
} = {
  [BuiltInChainId.MAINNET]: 'https://etherscan.io',
  [BuiltInChainId.RINKEBY]: 'https://rinkeby.etherscan.io',
  [BuiltInChainId.MATIC]: 'https://polygonscan.com',
  [BuiltInChainId.MUMBAI]: 'https://mumbai.polygonscan.com/',
}
const INFURA_ID = '602183a665b846d7af6d11341f98261a'

export const RpcUrls: {
  readonly [chainId in BuiltInChainId]: string
} = {
  [BuiltInChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  [BuiltInChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
  [BuiltInChainId.MATIC]: `https://polygon-mainnet.g.alchemy.com/v2/9apanUOHDQhhzl4RJHtcxY8SpMbH3QWJ`,
  [BuiltInChainId.MUMBAI]: 'https://matic-mumbai.chainstacklabs.com',
}

const defaultExplorerFactory = (
  baseUrl: string,
): BuiltInChainInfo['explorer'] => ({
  address: (address) => `${baseUrl}/address/${address}`,
  tx: (address) => `${baseUrl}/tx/${address}`,
})

export const CHAIN_INFO: ChainInfo = {
  [BuiltInChainId.MAINNET]: {
    explorer: defaultExplorerFactory(ExplorerBaseUrl[BuiltInChainId.MAINNET]),
    label: 'Mainnet',
  },
  [BuiltInChainId.RINKEBY]: {
    explorer: defaultExplorerFactory(ExplorerBaseUrl[BuiltInChainId.RINKEBY]),
    label: 'Rinkeby',
  },
  [BuiltInChainId.MATIC]: {
    explorer: defaultExplorerFactory(ExplorerBaseUrl[BuiltInChainId.MATIC]),
    label: 'MATIC',
  },
  [BuiltInChainId.MUMBAI]: {
    explorer: defaultExplorerFactory(ExplorerBaseUrl[BuiltInChainId.MUMBAI]),
    label: 'MUMBAI',
  },
}

export const getExplorer = (chainId: number | undefined) =>
  chainId ? CHAIN_INFO[chainId].explorer : undefined

const NETWORK_DICT: { [key in string]: string } = {
  mainnet: 'Ethereum Mainnet',
  matic: 'Polygon Mainnet',
  polygon: 'Polygon Mainnet',
  rinkeby: 'Ethereum Testnet Rinkeby',
  mumbai: 'Polygon Testnet Mumbai',
} as const

const SHORTEN_NETWORK_DICT_BY_ID: { [key in number]: string } = {
  [BuiltInChainId.MAINNET]: 'Ethereum Mainnet',
  [BuiltInChainId.MATIC]: 'Polygon Mainnet',
  [BuiltInChainId.RINKEBY]: 'Rinkeby Testnet',
  [BuiltInChainId.MUMBAI]: 'Mumbai Testnet',
} as const

export const networkLabel = (arg: string) => NETWORK_DICT[arg] || 'unknown'

export const networkLabelShort = (arg: number | undefined) =>
  (arg && SHORTEN_NETWORK_DICT_BY_ID[arg]) || 'unknown'

export const chainIdEthereum = () =>
  isProd ? BuiltInChainId.MAINNET : BuiltInChainId.RINKEBY
export const chainIdPolygon = () =>
  isProd ? BuiltInChainId.MATIC : BuiltInChainId.MUMBAI
