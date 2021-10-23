import { VFC } from 'react'
import { CtaLink, ctaStyle } from 'src/components/Cta'
import { _lightgreen } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import styled from 'styled-components'
import { useClaim } from './useClaim'

export const Domain: VFC = () => {
  const {
    account,
    txtRecord,
    domain,
    claimable,
    errorMessage,
    onChangeDomain,
    registerDomain,
    verify,
  } = useClaim()
  return (
    <Main>
      <h1>Claim Domain Ownership</h1>
      <ClaimingDiv>
        {account ? (
          <>
            <p>Add TXT record</p>
            <code>{txtRecord}</code>
            <VerificationDiv>
              <Input
                placeholder="Enter your domain"
                value={domain}
                onChange={onChangeDomain}
              />
              <CtaButton onClick={verify} disabled={!domain}>
                Verify
              </CtaButton>
            </VerificationDiv>
            {errorMessage && <p>{errorMessage}</p>}
            <CtaButton onClick={registerDomain} disabled={!claimable}>
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
  > ${CtaLink}, > ${CtaButton} {
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
