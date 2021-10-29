import { VFC } from 'react'
import { fontWeightBold } from 'src/styles/font'
import styled from 'styled-components'
import { Address } from './Address'
import { Results, ResultsProps } from './Results'

export type SummaryProps = ResultsProps

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
