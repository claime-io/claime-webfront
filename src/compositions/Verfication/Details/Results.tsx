import { VFC } from 'react'
import { resultKey } from 'src/models'
import { fontWeightSemiBold } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { Result, ResultProps } from './Result'

export type ResultsProps = {
  results: ResultProps[]
}

const ResultsComponent: VFC<ResultsProps & { className?: string }> = ({
  results,
  className,
}) => (
  <ResultSection className={className}>
    {results.length > 0 ? (
      <>
        {results.map((each) => (
          <Result key={resultKey(each)} {...each} />
        ))}
      </>
    ) : (
      <NotFound>Claim Not Found.</NotFound>
    )}
  </ResultSection>
)
export const Results = styled(ResultsComponent)``

const NotFound = styled.p`
  font-size: 24px;
  font-weight: ${fontWeightSemiBold};
  text-align: center;
`

const ResultSection = styled.section`
  > * {
    margin-top: 40px;
  }
  @media ${breakpoint.l} {
    ${NotFound} {
      font-size: 32px;
    }
    > * {
      margin-top: 80px;
    }
  }
`
