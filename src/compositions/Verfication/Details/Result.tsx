import dayjs from 'dayjs'
import { ReactNode, VFC } from 'react'
import { ExLinkIcon } from 'src/assets/svgs'
import { CodeBlock } from 'src/components/CodeBlock'
import { networkLabel } from 'src/constants/chains'
import { Link } from 'src/elements/Link'
import { VerificationResult } from 'src/models'
import { white } from 'src/styles/colors'
import { fontWeightLight, fontWeightMedium } from 'src/styles/font'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { Colors } from 'src/styles/types'
import {
  colorByResult,
  evidenceUrlByProperty,
  IconByType,
  idByProperty,
  summaryByResult,
  urlByProperty,
} from 'src/utils/claim'
import styled from 'styled-components'

export type ResultProps = VerificationResult
export const Result: VFC<ResultProps> = ({
  type,
  id,
  result,
  evidence,
  at,
  method,
  network,
  actual,
}) => (
  <ResultDiv>
    <IconDiv $color={colorByResult(result)}>{IconByType(type)()}</IconDiv>
    <Content>
      <Items>
        <Item label="Property Type">
          <p>{type}</p>
        </Item>
        <Item label="Property">
          <Link href={urlByProperty(type, id)}>
            <span>{idByProperty(type, id)}</span>
            <ExLinkIcon />
          </Link>
        </Item>
        <Item label="Verification Method">
          <p>{method}</p>
        </Item>
      </Items>
      <Items>
        <Item label="Verification Result">
          <p>{result}</p>
        </Item>
        <Item label="Evidence">
          <Link href={evidenceUrlByProperty(type, id, evidence)}>
            <span>Show Evidence</span>
            <ExLinkIcon />
          </Link>
        </Item>
        <Item label="Timestamp">
          <p>{dayjs(at).toISOString()}</p>
        </Item>
      </Items>
      <Items>
        <Item label="Verfication Summary">
          <p>{summaryByResult(result, id, actual)}</p>
          <CodeBlock>
            {actual &&
              (id !== actual?.id ? actual.id : actual.evidences?.join('/n'))}
          </CodeBlock>
        </Item>
      </Items>
      <Items>
        <Item label="Claimed Network">
          <p>{networkLabel(network)}</p>
        </Item>
      </Items>
    </Content>
  </ResultDiv>
)
const Item: VFC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => (
  <ItemDiv>
    <h4>{label}</h4>
    {children}
  </ItemDiv>
)
const ItemDiv = styled.div`
  h4 {
    font-size: 16px;
    font-weight: ${fontWeightLight};
    white-space: nowrap;
  }
  p,
  ${Link} {
    margin-top: 8px;
    font-size: 16px;
    font-weight: ${fontWeightMedium};
  }
  ${Link} {
    display: flex;
    align-items: flex-end;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    svg {
      flex-shrink: 0;
    }
  }
  a {
    white-space: nowrap;
    text-decoration: underline;
  }
  svg {
    margin-left: 6px;
    margin-bottom: 2px;
    width: min(1em, 20px);
    height: min(1em, 20px);
    vertical-align: bottom;
  }
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  ${ItemDiv} {
    flex: 1;
    margin-top: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  :first-child {
    ${ItemDiv} {
      :first-child {
        margin-top: 0;
      }
    }
  }
`
const Content = styled.div`
  flex: 1;
  min-width: 0;
`
const IconDiv = styled.div<{ $color: Colors }>`
  max-width: 64px;
  min-width: 40px;
  color: ${white};
  background: ${({ $color }) => $color};
  svg {
    width: 24px;
    height: 24px;
    display: block;
    margin: 32px auto;
    position: sticky;
    top: 64px;
  }
`

const ResultDiv = styled.div`
  display: flex;
  ${Content} {
    margin-left: 16px;
  }
  @media ${breakpoint.m} {
    ${IconDiv} {
      ${flexCenter};
      svg {
        position: unset;
      }
    }
    ${Content} {
      margin-top: -36px;
      margin-left: 24px;
      ${Items} {
        margin-top: 36px;
        flex-direction: row;
        ${ItemDiv} {
          margin-right: 16px;
          margin-top: 0;
        }
      }
    }
  }
  @media ${breakpoint.l} {
    ${Content} {
      ${Items} {
        ${ItemDiv} {
          margin-right: 32px;
          p,
          span {
            margin-top: 12px;
            font-size: 24px;
          }
        }
      }
    }
  }
`
