import dayjs from 'dayjs'
import { VFC } from 'react'
import { CirclesLoading } from 'src/components/Loading'
import { AppLayout } from 'src/compositions/Layout'
import { useVerificationResult } from 'src/hooks/useVerificationResults'
import { useWallet } from 'src/hooks/useWallet'
import { distinctByProperty } from 'src/models'
import { black } from 'src/styles/colors'
import { flexCenter } from 'src/styles/mixins'
import { equals } from 'src/utils/address'
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
        <Details {...props} isOwner={isOwner} />
      ) : (
        <Summary
          {...props}
          results={distinctByProperty(props.results)}
          isOwner={isOwner}
        />
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
      isRealtime
    />
  ) : (
    <AppLayout>
      <MyVerificationResultsContent>
        {isValidating ? (
          <CirclesLoading />
        ) : (
          <div>You need to connect wallet to see your verification results</div>
        )}
      </MyVerificationResultsContent>
    </AppLayout>
  )
}
const MyVerificationResultsContent = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;
  svg {
    stroke: ${black};
  }
`
