import { ChangeEvent, useState } from 'react'
import { useContract } from 'src/hooks/useContract'
import { SupportedMethod, SupportedPropertyType } from 'src/models'

type ClaimInput = {
  propertyId: string
  evidence: string
}
const defaultClaimInput = (propertyId: string) => ({
  claim: { propertyId, evidence: propertyId },
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

  const verify = () => {
    const { claim, errorMessage } = toClaimInput(input)
    if (!claim && errorMessage) {
      setErrorMessage(errorMessage)
      return
    }
    setErrorMessage('')
    setVerifiedClaim(claim)
  }

  const registetClaim = () => {
    if (!verifiedClaim) return
    register({
      propertyType,
      method,
      ...verifiedClaim,
    })
  }

  return {
    input,
    errorMessage,
    claimable: !!verifiedClaim,
    onChangeInput,
    verify,
    registetClaim,
  }
}
