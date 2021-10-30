import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { CtaLink } from 'src/components/Cta'
import { SupportedPropertyType, VerificationResultType } from 'src/models'
import { _border } from 'src/styles/colors'
import { fontWeightMedium, fontWeightSemiBold } from 'src/styles/font'
import { breakpoint, centerLine } from 'src/styles/mixins'
import { eoaDetails } from 'src/utils/routes'
import styled from 'styled-components'
import { Result } from './Result'

export type ResultsProps = {
  eoa: string
  results: {
    type: SupportedPropertyType
    id: string
    method: string
    result: VerificationResultType
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
    <Timestamp>{`Timestamp:\n${at.toISOString()}`}</Timestamp>
    {results.length > 0 ? (
      <>
        <Items>
          {results.map((each) => (
            <Result key={`${each.type}_${each.id}_${each.method}`} {...each} />
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

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  width: 100%;
  > * {
    :not(:first-child) {
      margin-top: 64px;
    }
  }
`

const Timestamp = styled.p`
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  text-align: center;
  white-space: pre-wrap;
  ${centerLine(_border)};
`

const ResultSection = styled.section`
  ${Timestamp} {
    margin-bottom: 72px;
  }
  ${CtaLink} {
    display: block;
    margin: 0 auto;
  }
  @media ${breakpoint.s} {
    ${Items} {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      > * {
        width: 50%;
        margin-top: unset;
        margin-bottom: 102px;
        :last-child {
          margin: 0;
        }
      }
    }
  }
  @media ${breakpoint.m} {
    ${Timestamp} {
      font-size: 20px;
      white-space: nowrap;
    }
    ${Items} {
      > * {
        width: 33.3333%;
      }
    }
  }
`
