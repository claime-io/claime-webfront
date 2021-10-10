import { useCallback, useMemo } from 'react'
import { getContractAddress } from 'src/constants/contractAddresses'
import { DEFAULT_GAS_LIMIT } from 'src/constants/misc'
import { Claim } from 'src/models'
import { RegistryContract__factory } from 'src/__generated__/contract'
import { useWallet } from './useWallet'

export const useContract = () => {
  const { signer, chainId } = useWallet()
  const contract = useMemo(() => {
    if (!chainId || !signer) return undefined
    const contractAddress = getContractAddress(chainId)
    if (!contractAddress) return undefined
    return RegistryContract__factory.connect(contractAddress, signer)
  }, [signer, chainId])

  const register = useCallback(
    async ({ propertyType, propertyId, evidence, method = '' }: Claim) => {
      if (!contract) throw new Error()
      return contract.register(propertyType, propertyId, evidence, method, {
        gasLimit: DEFAULT_GAS_LIMIT,
      })
    },
    [contract],
  )

  const sign = useCallback(
    async (claim: Claim): Promise<[string, string]> => {
      if (!signer) throw new Error()
      const message = JSON.stringify(claim)
      return [await signer?.signMessage(message), message]
    },
    [signer],
  )
  return {
    register,
    sign,
  }
}
