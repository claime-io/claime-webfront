import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Button'
import { AppLayout } from 'src/compositions/AppLayout'
import { Link } from 'src/elements/Link'
import { SupportedPropertyType, VerificationStatus } from 'src/models'
import { _border, _lightgreen } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightSemiBold,
} from 'src/styles/font'
import { centerLine } from 'src/styles/mixins'
import { eoaDetails } from 'src/utils/routes'
import styled from 'styled-components'
import { Address } from './Address'
import { Result } from './Result'

export type VerificationSummaryProps = {
  eoa: string
  results: {
    type: SupportedPropertyType
    id: string
    status: VerificationStatus
  }[]
  at: Dayjs
}

export const VerificationSummary: VFC<VerificationSummaryProps> = ({
  eoa,
  results,
  at,
}) => (
  <AppLayout>
    <Main>
      <h1>Ownership Verification Result</h1>
      <Address eoa={eoa} />
      <ResultSection>
        <Timestamp>Timestamp: {at.toISOString()}</Timestamp>
        {results.length > 0 ? (
          <>
            <Results>
              {results.map((each) => (
                <Result key={`${each.type}_${each.id}`} {...each} />
              ))}
              <div />
            </Results>
            <CtaLink href={eoaDetails(eoa)}>
              See details <ArrowRightIcon />
            </CtaLink>
          </>
        ) : (
          <NotFound>Claim Not Found.</NotFound>
        )}
      </ResultSection>
    </Main>
  </AppLayout>
)
const NotFound = styled.p`
  font-size: 32px;
  font-weight: ${fontWeightSemiBold};
  text-align: center;
`
const CtaLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto;
  ${ctaStyle};
  background-color: ${_lightgreen};
`

const Results = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: fit-content;
  width: 100%;
  > * {
    width: 33.3333%;
    margin-bottom: 102px;
    :last-child {
      margin: 0;
    }
  }
`

const Timestamp = styled.p`
  font-size: 20px;
  font-weight: ${fontWeightMedium};
  ${centerLine(_border)};
`

const ResultSection = styled.section`
  ${Timestamp} {
    margin-bottom: 72px;
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
  ${Address} {
    margin-top: 80px;
  }
  ${ResultSection} {
    margin-top: 56px;
  }
  padding-bottom: 120px;
`
