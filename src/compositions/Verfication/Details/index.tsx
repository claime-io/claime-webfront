import { VFC } from 'react'
import { AppLayout } from 'src/compositions/AppLayout'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import styled from 'styled-components'
import { Results, ResultsProps } from './Results'

export type VerificationDetailsProps = {
  eoa: string
  results: ResultsProps['results']
}

export const VerificationDetails: VFC<VerificationDetailsProps> = ({
  eoa,
  results,
}) => (
  <AppLayout>
    <Main>
      <h1>Details of Ownership Verification Result</h1>
      <h2>{eoa}</h2>
      <Results results={results} />
    </Main>
  </AppLayout>
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
  h2 {
    margin-top: 80px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  ${Results} {
    margin-top: 56px;
  }
  padding-bottom: 120px;
`
