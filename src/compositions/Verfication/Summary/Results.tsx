import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Button'
import { Link } from 'src/elements/Link'
import { SupportedPropertyType, VerificationStatus } from 'src/models'
import { _border, _lightgreen } from 'src/styles/colors'
import { fontWeightMedium, fontWeightSemiBold } from 'src/styles/font'
import { centerLine } from 'src/styles/mixins'
import { eoaDetails } from 'src/utils/routes'
import styled from 'styled-components'
import { Result } from './Result'

export type ResultsProps = {
  eoa: string
  results: {
    type: SupportedPropertyType
    id: string
    status: VerificationStatus
  }[]
  at: Dayjs
}

const ResultsComponent: VFC<ResultsProps & { className?: string }> = ({
  eoa,
  results,
  at,
  className,
}) => (
  <ResultSection className={className}>
    <Timestamp>Timestamp: {at.toISOString()}</Timestamp>
    {results.length > 0 ? (
      <>
        <Items>
          {results.map((each) => (
            <Result key={`${each.type}_${each.id}`} {...each} />
          ))}
          <div />
        </Items>
        <CtaLink href={eoaDetails(eoa)}>
          See details <ArrowRightIcon />
        </CtaLink>
      </>
    ) : (
      <NotFound>Claim Not Found.</NotFound>
    )}
  </ResultSection>
)
export const Results = styled(ResultsComponent)``

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

const Items = styled.div`
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
