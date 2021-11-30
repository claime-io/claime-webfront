import { Dayjs } from 'dayjs'
import { VFC } from 'react'
import { RESULT_TTL_SEC } from 'src/constants/misc'
import { Link } from 'src/elements/Link'
import { fontWeightMedium } from 'src/styles/font'
import { ME } from 'src/utils/routes'
import styled, { css } from 'styled-components'

export const Note = styled<
  VFC<{ generatedAt: Dayjs; isOwner: boolean } & { className?: string }>
>(({ generatedAt, isOwner, className }) => (
  <NoteDiv className={className}>
    <p>
      This results will be cached until{' '}
      {generatedAt.add(RESULT_TTL_SEC, 'sec').toISOString()}
    </p>
    <h3>Would you like to see the real-time results?</h3>
    <p>
      If you are an account holder, connect to your wallet with this account and
      you can see them{' '}
      <StyledLink href={isOwner ? ME : undefined}>here</StyledLink>
    </p>
  </NoteDiv>
))``

const StyledLink = styled(Link)`
  ${({ href }) =>
    href &&
    css`
      text-decoration: underline;
    `}
`
const NoteDiv = styled.div`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  h3 {
    margin: 36px 0 8px;
    font-size: 20px;
    font-weight: ${fontWeightMedium};
  }
  a {
  }
`
