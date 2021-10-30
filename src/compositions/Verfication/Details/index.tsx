import Router from 'next/router'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Cta'
import { Main } from 'src/compositions/Layout'
import { _lightgreen } from 'src/styles/colors'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { Results, ResultsProps } from './Results'

export type DetailsProps = {
  eoa: string
  results: ResultsProps['results']
}

export const Details: VFC<DetailsProps> = ({ eoa, results }) => (
  <DetailsMain>
    <h1>Details of Ownership Verification Results</h1>
    <h2>{eoa}</h2>
    <Results results={results} />
    <CtaButton onClick={Router.back}>
      <ArrowRightIcon />
      Back
    </CtaButton>
  </DetailsMain>
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
const DetailsMain = styled(Main)`
  h2 {
    line-break: anywhere;
  }
  ${Results} {
    margin-top: 56px;
  }
  ${CtaButton} {
    margin: 48px auto 0;
  }
  @media ${breakpoint.l} {
    ${CtaButton} {
      margin: 120px auto 0;
    }
  }
`
