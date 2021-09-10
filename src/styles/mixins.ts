import { css } from 'styled-components'

export const pageMarginCssVar = '--page-margin'
export const pageMarginNegativeCssVar = '--page-margin-negative'

export const pageGuide = css`
  padding-right: var(${pageMarginCssVar});
  padding-left: var(${pageMarginCssVar});
`

export const noGuide = css`
  margin-right: var(${pageMarginNegativeCssVar});
  margin-left: var(${pageMarginNegativeCssVar});
`

export const noScrollbar = css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const absoluteFill = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`

export const defaultShadow = `8px 8px 3px #00000029`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const size = {
  s: '480px',
  m: '560px',
  l: '1280px',
}

export const breakpoint = {
  s: `screen and (min-width:${size.s})`,
  m: `screen and (min-width:${size.m})`,
  l: `screen and (min-width:${size.l})`,
}
