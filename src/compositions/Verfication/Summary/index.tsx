import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { SupportedPropertyType, VerificationStatus } from 'src/models'
import { fontWeightBold } from 'src/styles/font'
import styled from 'styled-components'
import { Address } from './Address'
import { Results } from './Results'

export type SummaryProps = {
  eoa: string
  results: {
    type: SupportedPropertyType
    id: string
    status: VerificationStatus
  }[]
  at: Dayjs
}

export const Summary: VFC<SummaryProps> = (props) => (
  <Main>
    <h1>Ownership Verification Result</h1>
    <Address eoa={props.eoa} />
    <Results {...props} />
  </Main>
)

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
  ${Address} {
    margin-top: 80px;
  }
  ${Results} {
    margin-top: 56px;
  }
  padding-bottom: 120px;
`
