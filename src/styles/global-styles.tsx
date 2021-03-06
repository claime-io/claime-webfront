import styled, { createGlobalStyle } from 'styled-components'
import { black, white } from './colors'
import { fontFamilyEn, fontWeightRegular } from './font'
import { noScrollbar } from './mixins'

export const GlobalStyles = () => {
  return (
    <>
      <Styles />
    </>
  )
}

const Styles = createGlobalStyle`
  img {
    vertical-align: bottom;
  }
  html {
    height: 100%;
  }
  body {
    font-family: ${fontFamilyEn};
    font-weight: ${fontWeightRegular};
    font-size: 16px;
    background-color: ${white};
    color: ${black};
    height: 100%;
    > div#__next {
      height: 100%;
      display: flex;
      flex-flow: column;
      main {
        flex: 1;
      }
    }
    div {
      ${noScrollbar};
    }
    button:disabled {
      cursor: not-allowed;
    } 
  }
`

export const ContentGuide = styled.div`
  width: 100%;
  max-width: 1248px;
  padding-right: 24px;
  padding-left: 24px;
  margin-left: auto;
  margin-right: auto;
`
