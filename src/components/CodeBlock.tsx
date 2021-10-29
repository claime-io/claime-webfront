import { codeblock } from 'src/styles/colors'
import { fontFamilyCode, fontWeightRegular } from 'src/styles/font'
import styled from 'styled-components'

export const CodeBlock = styled.code`
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 24px;
  background: ${codeblock};
  font-family: ${fontFamilyCode};
  font-weight: ${fontWeightRegular};
`
