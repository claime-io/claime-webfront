import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { RESULT_TTL_SEC } from 'src/constants/misc'
import styled from 'styled-components'

export const RevalidateAt = styled<
  VFC<{ generatedAt: Dayjs } & { className?: string }>
>(({ generatedAt, className }) => (
  <p className={className}>
    {`This results will be cached until ${generatedAt
      .add(RESULT_TTL_SEC, 'seconds')
      .toISOString()}`}
  </p>
))`
  text-align: center;
`
