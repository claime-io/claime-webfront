import { codeblock } from 'src/styles/colors'
import { fontFamilyCode, fontWeightRegular } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'

export const CodeBlock = styled.code`
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 16px;
  background: ${codeblock};
  font-size: 14px;
  font-family: ${fontFamilyCode};
  font-weight: ${fontWeightRegular};
  overflow-wrap: anywhere;
  ${breakpoint.m} {
    font-size: 16px;
    padding: 24px;
  }
`
