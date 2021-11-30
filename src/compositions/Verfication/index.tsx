import { VFC } from 'react'
import { AppLayout } from 'src/compositions/Layout'
import { useWallet } from 'src/hooks/useWallet'
import { distinctByProperty } from 'src/models'
import { equals } from 'src/utils/address'
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
