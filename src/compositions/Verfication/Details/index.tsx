import Router from 'next/router'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Button'
import { AppLayout } from 'src/compositions/AppLayout'
import { _lightgreen } from 'src/styles/colors'
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
      <CtaButton onClick={Router.back}>
        <ArrowRightIcon />
        Back
      </CtaButton>
    </Main>
  </AppLayout>
)

const CtaButton = styled.button`
  display: block;
  width: fit-content;
  margin: 0 auto;
  ${ctaStyle};
  background-color: ${_lightgreen};
  svg {
    transform: rotate(180deg);
    margin-right: 8px;
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
  h2 {
    margin-top: 80px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  ${Results} {
    margin-top: 56px;
  }
  ${CtaButton} {
    margin-top: 120px;
  }
  padding-bottom: 120px;
`
