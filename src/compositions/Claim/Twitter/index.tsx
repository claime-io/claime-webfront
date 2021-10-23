import { VFC } from 'react'
import { CtaLink, ctaStyle } from 'src/components/Cta'
import { _lightgreen } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import styled from 'styled-components'
import { useClaim } from './useClaim'

export const Twitter: VFC = () => {
  const {
    account,
    urlToTweet,
    tweetUrl,
    claimable,
    errorMessage,
    onChangeTweetUrl,
    registerTweet,
    verify,
  } = useClaim()
  return (
    <Main>
      <h1>Claim Twitter Account Ownership</h1>
      <ClaimingDiv>
        {account ? (
          <>
            <CtaLink href={urlToTweet}>Tweet evidence</CtaLink>
            <VerificationDiv>
              <Input
                placeholder="Paste your tweet url"
                value={tweetUrl}
                onChange={onChangeTweetUrl}
              />
              <CtaButton onClick={verify} disabled={!tweetUrl}>
                Verify
              </CtaButton>
            </VerificationDiv>
            {errorMessage && <p>{errorMessage}</p>}
            <CtaButton onClick={registerTweet} disabled={!claimable}>
              Claim
            </CtaButton>
          </>
        ) : (
          'You need to connect your wallet to claim.'
        )}
      </ClaimingDiv>
    </Main>
  )
}

const CtaButton = styled.button`
  display: block;
  width: fit-content;
  ${ctaStyle};
  background-color: ${_lightgreen};
  svg {
    margin-left: 8px;
  }
  :disabled {
    opacity: 0.5;
  }
`
const Input = styled.input`
  display: block;
  width: 530px;
  padding: 24px 32px;
  border: 1px solid;
  border-radius: 40px;
  font-size: 20px;
  font-weight: ${fontWeightRegular};
`

const VerificationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${CtaButton} {
    margin-left: 24px;
  }
`

const ClaimingDiv = styled.div`
  margin-top: 120px;
  ${VerificationDiv} {
    margin-top: 64px;
  }
  > ${CtaLink},> ${CtaButton} {
    display: block;
    margin: 64px auto 0;
  }
`

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 1080px;

  h1 {
    margin-top: 100px;
    font-size: 56px;
    font-weight: ${fontWeightBold};
    text-align: center;
  }
  > p {
    margin-top: 32px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  padding-bottom: 120px;
`
