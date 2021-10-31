import { ContractReceipt } from '@ethersproject/contracts'
import { ChangeEvent, useState } from 'react'
import { verifierApiClient } from 'src/api/verifierApiClient'
import { useContract } from 'src/hooks/useContract'
import { SupportedMethod, SupportedPropertyType } from 'src/models'

type ClaimInput = {
  propertyId: string
  evidence: string
}
const defaultClaimInput = (propertyId: string) => ({
  claim: { propertyId, evidence: '' },
})
export const useClaim = <T extends SupportedPropertyType>(
  propertyType: T,
  method: SupportedMethod<T>,
  toClaimInput: (input: string) => {
    claim: ClaimInput | undefined
    errorMessage?: string
  } = defaultClaimInput,
) => {
  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [verifiedClaim, setVerifiedClaim] = useState<ClaimInput>()
  const { register } = useContract()

  const onChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput(value)
    setVerifiedClaim(undefined)
  }

  const verify = async (eoa: string) => {
    const { claim, errorMessage } = toClaimInput(input)
    if (!claim || errorMessage) {
      return Promise.reject(errorMessage || 'Invalid input.')
    }
    const res = await verifierApiClient.testVerify(
      eoa,
      propertyType,
      claim.propertyId,
      method,
      claim.evidence,
    )
    const result = res.data[0]
    if (result.result !== 'Verified') {
      return Promise.reject(result.error || result.result)
    }
    setErrorMessage('')
    setVerifiedClaim(claim)
  }

  const registerClaim = async (): Promise<void | ContractReceipt> => {
    if (!verifiedClaim) return Promise.resolve()
    const tx = await register({
      propertyType,
      method,
      ...verifiedClaim,
    })
    return tx.wait(1)
  }

  return {
    input,
    errorMessage,
    claimable: !!verifiedClaim,
    onChangeInput,
    verify,
    registerClaim,
  }
}
