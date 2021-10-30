import { VFC } from 'react'
import { Main } from 'src/compositions/Layout'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { Address } from './Address'
import { Results, ResultsProps } from './Results'

export type SummaryProps = ResultsProps

export const Summary: VFC<SummaryProps> = (props) => (
  <SummaryMain>
    <h1>Ownership Verification Result</h1>
    <Address eoa={props.eoa} />
    <Results {...props} />
  </SummaryMain>
)
const SummaryMain = styled(Main)`
  ${Address} {
    margin-top: 48px;
  }
  ${Results} {
    margin-top: 32px;
  }
  @media ${breakpoint.m} {
    ${Address} {
      margin-top: 80px;
    }
    ${Results} {
      margin-top: 56px;
    }
  }
`
