import dayjs from 'dayjs'
import { ReactNode, VFC } from 'react'
import { ExLinkIcon } from 'src/assets/svgs'
import { Link } from 'src/elements/Link'
import { SupportedPropertyType, VerificationStatus } from 'src/models'
import { codeblock, _lightgreen } from 'src/styles/colors'
import {
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
} from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import {
  evidenceUrlByProperty,
  IconByType,
  idByProperty,
  summaryByResult,
  urlByProperty,
} from 'src/utils/claim'
import styled from 'styled-components'

export type ResultProps = {
  type: SupportedPropertyType
  id: string
  at: string
  method: string
  status: VerificationStatus
  evidence: string
  actual: string
}
export const Result: VFC<ResultProps> = ({
  type,
  id,
  status,
  evidence,
  at,
  method,
  actual,
}) => (
  <ResultDiv>
    <IconDiv>{IconByType(type)()}</IconDiv>
    <Content>
      <Items>
        <Item label="Property Type">
          <p>{type}</p>
        </Item>
        <Item label="Property">
          <p>
            <Link href={urlByProperty(type, id)}>
              {idByProperty(type, id)}
              <ExLinkIcon />
            </Link>
          </p>
        </Item>
        <Item label="Verification Method">
          <p>{method}</p>
        </Item>
      </Items>
      <Items>
        <Item label="Verification Result">
          <p>{status}</p>
        </Item>
        <Item label="Evidence">
          <p>
            <Link href={evidenceUrlByProperty(type, id, evidence)}>
              Show Evidence
              <ExLinkIcon />
            </Link>
          </p>
        </Item>
        <Item label="Timestamp">
          <p>{dayjs(at).toISOString()}</p>
        </Item>
      </Items>
      <Items>
        <Item label="Verfication Summary">
          <p>{summaryByResult(status, actual)}</p>
          <code>{actual}</code>
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
  p {
    margin-top: 12px;
    font-size: 24px;
    font-weight: ${fontWeightMedium};
  }
  a {
    white-space: nowrap;
    text-decoration: underline;
  }
  code {
    display: block;
    width: 100%;
    margin-top: 12px;
    padding: 24px;
    background: ${codeblock};
    font-family: roboto;
    font-weight: ${fontWeightRegular};
  }
  svg {
    margin-left: 6px;
    margin-bottom: 2px;
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
`

const Items = styled.div`
  display: flex;
  ${ItemDiv} {
    flex: 1;
    margin-right: 32px;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: -36px;
  ${Items} {
    margin-top: 36px;
  }
`
const IconDiv = styled.div`
  ${flexCenter};
  width: 64px;
  background: ${_lightgreen};
`

const ResultDiv = styled.div`
  display: flex;
  ${Content} {
    margin-left: 24px;
  }
`
