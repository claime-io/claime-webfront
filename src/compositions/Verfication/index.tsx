import { VFC } from 'react'
import { AppLayout } from 'src/compositions/AppLayout'
import { Details, DetailsProps } from './Details'
import { Summary, SummaryProps } from './Summary'

export const PAGE_TYPES = ['details'] as const
export type PageType = typeof PAGE_TYPES[number]

export type VerificationResultProps = DetailsProps &
  Pick<SummaryProps, 'at'> & {
    type?: 'details'
  }

export const VerificationResult: VFC<VerificationResultProps> = ({
  type,
  ...props
}) => (
  <AppLayout>
    {type === 'details' ? <Details {...props} /> : <Summary {...props} />}
  </AppLayout>
)
