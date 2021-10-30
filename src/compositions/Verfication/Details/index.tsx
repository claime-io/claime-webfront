import Router from 'next/router'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Cta'
import { _lightgreen } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { Results, ResultsProps } from './Results'

export type DetailsProps = {
  eoa: string
  results: ResultsProps['results']
}

export const Details: VFC<DetailsProps> = ({ eoa, results }) => (
  <Main>
    <h1>Details of Ownership Verification Result</h1>
    <h2>{eoa}</h2>
    <Results results={results} />
    <CtaButton onClick={Router.back}>
      <ArrowRightIcon />
      Back
    </CtaButton>
  </Main>
)

const CtaButton = styled.button`
  display: block;
  width: fit-content;
  ${ctaStyle};
  background-color: ${_lightgreen};
  svg {
    transform: rotate(180deg);
    margin-right: 8px;
  }
`
const Main = styled.main`
  position: relative;
  margin: 0 5vw;
  h1 {
    margin-top: 64px;
    font-size: 28px;
    font-weight: ${fontWeightBold};
    text-align: center;
  }
  h2 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: ${fontWeightRegular};
    text-align: center;
    overflow-wrap: break-word;
  }
  ${Results} {
    margin-top: 56px;
  }
  ${CtaButton} {
    margin: 48px auto 0;
  }
  padding-bottom: 40px;

  @media ${breakpoint.l} {
    max-width: 1080px;
    margin: 0 auto;
    h1 {
      margin-top: 100px;
      font-size: 56px;
    }
    h2 {
      margin-top: 80px;
      font-size: 20px;
    }
    ${CtaButton} {
      margin: 120px auto 0;
    }
  }
`
