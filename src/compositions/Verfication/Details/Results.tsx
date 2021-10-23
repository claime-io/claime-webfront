import { VFC } from 'react'
import { fontWeightSemiBold } from 'src/styles/font'
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
          <Result key={`${each.type}_${each.id}`} {...each} />
        ))}
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

const ResultSection = styled.section`
  > * {
    margin-top: 80px;
  }
`
