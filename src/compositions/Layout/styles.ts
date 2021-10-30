import styled from 'styled-components'

export const PAGE_GUIDE_MARGIN = '3vw'

export const ScrollableDivWrapper = styled.div`
  margin-left: -${PAGE_GUIDE_MARGIN};
  margin-right: -${PAGE_GUIDE_MARGIN};
  > * {
    scroll-padding: ${PAGE_GUIDE_MARGIN};
  }
`
