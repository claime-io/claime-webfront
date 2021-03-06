import router from 'next/router'
import { useState, VFC } from 'react'
import { CtaLink, ctaStyle } from 'src/components/Cta'
import { useNetworkModal } from 'src/components/NetworkModal'
import { useWalletModal } from 'src/components/WalletModal'
import { Main } from 'src/compositions/Layout'
import { useLoading } from 'src/hooks/useLoading'
import { useWallet } from 'src/hooks/useWallet'
import { SupportedMethod, SupportedPropertyType } from 'src/models'
import { failed, _lightgreen } from 'src/styles/colors'
import { fontWeightRegular } from 'src/styles/font'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { ME } from 'src/utils/routes'
import styled, { css } from 'styled-components'
import { useClaim } from '../useClaim'

type ClaimingFormFC = <T extends SupportedPropertyType>(props: {
  propertyType: T
  method: SupportedMethod<T>
  toClaimInput?: Parameters<typeof useClaim>[2]
  placeholder: string
  EvidenceFC: VFC<{ eoa: string }>
}) => JSX.Element
export const ClaimingForm: ClaimingFormFC = (props) => {
  return (
    <ClaimingFormMain>
      <h1>
        Claim <span>{props.propertyType}</span> Ownership
      </h1>
      <ClaimingDiv>
        <FormContent {...props} />
      </ClaimingDiv>
    </ClaimingFormMain>
  )
}

const FormContent: ClaimingFormFC = ({
  propertyType,
  method,
  toClaimInput,
  placeholder,
  EvidenceFC,
}) => {
  const { account } = useWallet()
  const { open: openWalletModal } = useWalletModal()
  const { open: openNetworkModal } = useNetworkModal()
  const { withLoadingAsync } = useLoading()
  const [errorMessageVerify, setErrorMessageVerify] = useState('')
  const [errorMessageClaim, setErrorMessageClaim] = useState('')
  const {
    input,
    claimable,
    isNetworkWrong,
    onChangeInput,
    verify,
    registerClaim,
  } = useClaim(propertyType, method, toClaimInput)
  if (!account)
    return (
      <>
        <p>You need to connect your wallet to claim.</p>
        <CtaButton onClick={() => openWalletModal()}>Connect Wallet</CtaButton>
      </>
    )
  if (isNetworkWrong)
    return (
      <>
        <p>You need to switch to a supported network.</p>
        <CtaButton onClick={() => openNetworkModal()}>Swtich Network</CtaButton>
      </>
    )
  return (
    <>
      <EvidenceDiv>
        <EvidenceFC eoa={account} />
      </EvidenceDiv>
      <VerificationDiv>
        <Input
          placeholder={placeholder}
          value={input}
          onChange={onChangeInput}
          disabled={claimable}
        />
        <CtaButton
          onClick={withLoadingAsync(() =>
            verify(account)
              .then(() => setErrorMessageVerify(''))
              .catch(setErrorMessageVerify),
          )}
          disabled={!input || claimable}
        >
          {claimable ? 'Verified' : 'Verify'}
        </CtaButton>
      </VerificationDiv>
      <ErrorMessage $hidden={!errorMessageVerify}>
        {errorMessageVerify}
      </ErrorMessage>
      <CtaButton
        onClick={withLoadingAsync(() =>
          registerClaim()
            .then(() => {
              setErrorMessageClaim('')
              router.push(ME)
            })
            .catch((err) => setErrorMessageClaim(err.message)),
        )}
        disabled={!claimable}
      >
        Claim
      </CtaButton>
      <ErrorMessage $hidden={!errorMessageClaim}>
        {errorMessageClaim}
      </ErrorMessage>
    </>
  )
}

const ErrorMessage = styled.p<{ $hidden: boolean }>`
  color: ${failed};
  height: 1em;
  ${({ $hidden }) =>
    $hidden &&
    css`
      visibility: hidden;
    `}
`
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
  width: 80%;
  max-width: 530px;
  padding: 12px 16px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 16px;
  font-weight: ${fontWeightRegular};
  overflow: hidden;
  text-overflow: ellipsis;
`

const VerificationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${CtaButton} {
    display: inline-block;
    margin-top: 16px;
  }
`
const EvidenceDiv = styled.div`
  ${flexCenter};
  flex-direction: column;
  > * {
    width: fit-content;
  }
  ${CtaLink} {
    display: block;
    margin: 16px auto 0;
  }
`

const ClaimingDiv = styled.div`
  margin-top: 64px;
  ${VerificationDiv} {
    margin-top: 48px;
  }
  > ${CtaLink},> ${CtaButton} {
    display: block;
    margin: 48px auto 0;
  }
  p {
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  ${ErrorMessage} {
    margin-top: 16px;
  }
`

const ClaimingFormMain = styled(Main)`
  h1 {
    white-space: pre-wrap;
    span {
      white-space: nowrap;
    }
  }
  > p {
    margin-top: 32px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  @media ${breakpoint.s} {
    h1 {
      white-space: unset;
    }
  }
  @media ${breakpoint.m} {
    ${ClaimingDiv} {
      margin-top: 120px;
      ${VerificationDiv} {
        flex-direction: row;
        ${Input} {
          padding: 24px 32px;
          border-radius: 40px;
          font-size: 20px;
        }
        ${CtaButton} {
          margin-top: 0px;
          margin-left: 24px;
        }
      }
    }
  }
`
