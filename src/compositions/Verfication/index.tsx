import dayjs from 'dayjs'
import { VFC } from 'react'
import { CirclesLoading } from 'src/components/Loading'
import { AppLayout } from 'src/compositions/Layout'
import { useVerificationResult } from 'src/hooks/useVerificationResults'
import { useWallet } from 'src/hooks/useWallet'
import { distinctByProperty } from 'src/models'
import { black } from 'src/styles/colors'
import { fontWeightMedium } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { equals } from 'src/utils/address'
import { CLAIM } from 'src/utils/routes'
import styled from 'styled-components'
import { Details, DetailsProps } from './Details'
import { Summary } from './Summary'

export const PAGE_TYPES = ['details'] as const
export type PageType = typeof PAGE_TYPES[number]

export type VerificationResultProps = Omit<
  DetailsProps & {
    type?: 'details'
  },
  'isOwner'
>

export const VerificationResult: VFC<VerificationResultProps> = ({
  type,
  ...props
}) => {
  const { account } = useWallet()
  const isOwner = equals(props.eoa, account)
  return (
    <AppLayout>
      {type === 'details' ? (
        <Details {...props} />
      ) : (
        <Summary {...props} results={distinctByProperty(props.results)} />
      )}
    </AppLayout>
  )
}

export const MyVerificationResults = () => {
  const { account } = useWallet()
  const { data, isValidating } = useVerificationResult(account)
  return account && !isValidating ? (
    <VerificationResult
      eoa={account}
      results={data || []}
      at={dayjs()}
      type="details"
      backTo={CLAIM}
      isRealtime
    />
  ) : (
    <AppLayout>
      <MyVerificationResultsContent>
        {isValidating ? (
          <CirclesLoading />
        ) : (
          <p>
            You need to connect wallet to see verification results of your
            claims
          </p>
        )}
      </MyVerificationResultsContent>
    </AppLayout>
  )
}
const MyVerificationResultsContent = styled.div`
  position: relative;
  ${flexCenter};
  height: 100%;
  margin: 0 5%;

  svg {
    stroke: ${black};
  }
  p {
    font-size: 24px;
    font-weight: ${fontWeightMedium};
    text-align: center;
  }
`
