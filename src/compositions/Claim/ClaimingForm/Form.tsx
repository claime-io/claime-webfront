import { VFC } from 'react'
import { CtaLink, ctaStyle } from 'src/components/Cta'
import { useWallet } from 'src/hooks/useWallet'
import { SupportedMethod, SupportedPropertyType } from 'src/models'
import { _lightgreen } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import styled from 'styled-components'
import { useClaim } from '../useClaim'

type ClaimingFormFC = <T extends SupportedPropertyType>(props: {
  propertyType: T
  method: SupportedMethod<T>
  toClaimInput?: Parameters<typeof useClaim>[2]
  placeholder: string
  EvidenceFC: VFC<{ eoa: string }>
}) => JSX.Element
export const ClaimingForm: ClaimingFormFC = ({
  propertyType,
  method,
  toClaimInput,
  placeholder,
  EvidenceFC,
}) => {
  const { account } = useWallet()
  const {
    input,
    claimable,
    errorMessage,
    onChangeInput,
    verify,
    registerClaim,
  } = useClaim(propertyType, method, toClaimInput)
  return (
    <Main>
      <h1>Claim {propertyType} Ownership</h1>
      <ClaimingDiv>
        {account ? (
          <>
            <EvidenceFC eoa={account} />
            <VerificationDiv>
              <Input
                placeholder={placeholder}
                value={input}
                onChange={onChangeInput}
              />
              <CtaButton onClick={() => verify(account)} disabled={!input}>
                Verify
              </CtaButton>
            </VerificationDiv>
            {errorMessage && <p>{errorMessage}</p>}
            <CtaButton onClick={registerClaim} disabled={!claimable}>
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
