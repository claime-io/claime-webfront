import Router from 'next/router'
import { VFC } from 'react'
import { SupportedPropertyType } from 'src/models'
import { black, white, _lightgreen } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightRegular,
  fontWeightSemiBold,
} from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { IconByType } from 'src/utils/claim'
import { claimProperty } from 'src/utils/routes'
import styled from 'styled-components'
import { PAGE_TYPE_DICT } from '../common'

export const ClaimTop: VFC = () => (
  <Main>
    <h1>Select your digital assets</h1>
    <p>Select the type of property you want to claim ownership for</p>
    <Properties>
      <Property type="Twitter Account" />
      <Property type="Website" />
      <Property type="Domain" />
    </Properties>
  </Main>
)

const Property: VFC<{ type: SupportedPropertyType }> = ({ type }) => (
  <PropertyButton
    onClick={() => Router.push(claimProperty(PAGE_TYPE_DICT[type]))}
  >
    {IconByType(type)()}
    <p>{type}</p>
  </PropertyButton>
)

const PropertyButton = styled.button`
  ${flexCenter};
  flex-direction: column;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  color: ${white};
  background-color: ${black};
  transition: all 0.25s ease-in-out;
  svg {
    transition: all 0.15s ease-in-out;
  }
  p {
    display: none;
    margin-top: 16px;
    font-size: 16px;
    font-weight: ${fontWeightSemiBold};
    white-space: nowrap;
  }
  :hover,
  :focus {
    color: ${black};
    background-color: ${_lightgreen};
    width: 200px;
    height: 200px;
    svg {
      width: 64px;
      height: 64px;
    }
    p {
      display: unset;
    }
  }
`
const Properties = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  ${PropertyButton} {
    margin: 0 28px;
  }
`

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 1080px;

  h1 {
    margin-top: 100px;
    font-size: 56px;
    font-weight: ${fontWeightBold};
    text-align: center;
  }
  > p {
    margin-top: 32px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  ${Properties} {
    margin-top: 144px;
  }
  padding-bottom: 120px;
`
