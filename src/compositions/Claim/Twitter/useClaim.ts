import { ChangeEvent, useState } from 'react'
import { claim } from 'src/compositions/Verfication/utils'
import { useContract } from 'src/hooks/useContract'
import { useWallet } from 'src/hooks/useWallet'

const tweetEOA = (eoa: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(claim(eoa))}`

const parseUrl = (url: string) => {
  try {
    const [_1, id, _2, evidence] = new URL(url).pathname.split(/[?/]/)
    return [id, evidence]
  } catch {
    return []
  }
}
export const useClaim = () => {
  const { account } = useWallet()
  const [tweetUrl, setTweetUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [verifiedValue, setVerifiedValue] =
    useState<{ id: string; evidence: string }>()
  const { register } = useContract()

  const onChangeTweetUrl = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTweetUrl(value)
    setVerifiedValue(undefined)
  }

  const verify = () => {
    const [id, evidence] = parseUrl(tweetUrl)
    if (!id || !evidence) {
      setErrorMessage('Input valid url.')
      return
    }
    setVerifiedValue({ id, evidence })
  }

  const registerTweet = () => {
    if (!verifiedValue) return
    const { id, evidence } = verifiedValue
    register({
      propertyType: 'Twitter Account',
      propertyId: id,
      evidence,
      method: 'Tweet',
    })
  }

  return {
    account,
    urlToTweet: account ? tweetEOA(account) : '',
    tweetUrl,
    errorMessage,
    claimable: !!verifiedValue,
    onChangeTweetUrl,
    verify,
    registerTweet,
  }
}
