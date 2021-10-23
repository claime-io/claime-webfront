import { ChangeEvent, useState } from 'react'
import { claim } from 'src/compositions/Verfication/utils'
import { useContract } from 'src/hooks/useContract'
import { useWallet } from 'src/hooks/useWallet'

export const useClaim = () => {
  const { account } = useWallet()
  const [domain, setDomain] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [verifiedValue, setVerifiedValue] =
    useState<{ id: string; evidence: string }>()
  const { register } = useContract()

  const onChangeDomain = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setDomain(value)
    setVerifiedValue(undefined)
  }

  const verify = () => {
    if (!domain) {
      setErrorMessage('Input valid domain.')
      return
    }
    // TODO verify
    setVerifiedValue({ id: domain, evidence: domain })
  }

  const registerDomain = () => {
    if (!verifiedValue) return
    const { id, evidence } = verifiedValue
    register({
      propertyType: 'Domain',
      propertyId: id,
      evidence,
      method: 'TXT',
    })
  }

  return {
    account,
    txtRecord: account ? claim(account) : '',
    domain,
    errorMessage,
    claimable: !!verifiedValue,
    onChangeDomain,
    verify,
    registerDomain,
  }
}
