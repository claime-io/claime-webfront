import { VFC } from 'react'
import { SupportedPropertyType, VerificationResultType } from 'src/models'
import { _inputbg } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightLight,
  fontWeightSemiBold,
} from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { Colors } from 'src/styles/types'
import {
  colorByResult,
  IconByStatus,
  IconByType,
  idByProperty,
  urlByProperty,
} from 'src/utils/claim'
import styled, { css } from 'styled-components'

type ResultProps = {
  type: SupportedPropertyType
  id: string
  result: VerificationResultType
}
export const Result: VFC<ResultProps> = ({ type, id, result }) => (
  <ResultDiv $color={colorByResult(result)}>
    <Heading>
      <IconDiv>{IconByType(type)()}</IconDiv>
      <p>{type}</p>
    </Heading>
    <Content>
      {IconByStatus(result)()}
      <p>{result}</p>
      <a href={urlByProperty(type, id)} target="_blank" rel="noreferrer">
        {idByProperty(type, id)}
      </a>
    </Content>
  </ResultDiv>
)

const Content = styled.div`
  ${flexCenter};
  flex-direction: column;
  p {
    margin-top: 20px;
    font-size: 24px;
    font-weight: ${fontWeightBold};
  }
  a {
    margin-top: 12px;
    font-size: 16px;
    font-weight: ${fontWeightLight};
    text-decoration: underline;
  }
`
const IconDiv = styled.div`
  ${flexCenter};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
`
const Heading = styled.div`
  ${flexCenter};
  color: ${_inputbg};
  position: relative;
  margin-left: 24px;
  ${IconDiv} {
    position: absolute;
    left: calc(50% - 132px);
  }
  p {
    width: 208px;
    padding: 16px 0;
    border-radius: 24px;

    font-size: 16px;
    font-weight: ${fontWeightSemiBold};
    line-height: 1;
    text-align: center;
  }
`
const ResultDiv = styled.div<{ $color: Colors }>`
  ${Content} {
    margin: 48px auto 0;
  }
  ${({ $color }) => css`
    color: ${$color};
    ${Heading} {
      ${IconDiv}, p {
        background-color: ${$color};
      }
    }
  `}
`
