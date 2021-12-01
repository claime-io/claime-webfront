import { useCallback, useMemo } from 'react'
import { getContractAddress } from 'src/constants/contractAddresses'
import { Claim } from 'src/models'
import { RegistryContract__factory } from 'src/__generated__/contract'
import { useWallet } from './useWallet'

export const useContract = () => {
  const { signer, chainId } = useWallet()
  const contractAddress = useMemo(
    () => (chainId ? getContractAddress(chainId) : undefined),
    [chainId],
  )
  const contract = useMemo(() => {
    if (!contractAddress || !signer) return undefined
    return RegistryContract__factory.connect(contractAddress, signer)
  }, [signer, contractAddress])

  const register = useCallback(
    async ({ propertyType, propertyId, method, evidence }: Claim) => {
      if (!contract) throw new Error()
      return contract.register(propertyType, propertyId, method, evidence)
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
    isNetworkWrong: !contractAddress,
  }
}
