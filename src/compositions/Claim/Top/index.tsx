import { MouseEventHandler, useState, VFC } from 'react'
import { ArrowRightIcon } from 'src/assets/svgs'
import { CtaLink } from 'src/components/Cta'
import { Main, ScrollableDivWrapper } from 'src/compositions/Layout'
import { CLAIMABLE_PROPERTY_TYPES, SupportedPropertyType } from 'src/models'
import { black, white, _lightgreen } from 'src/styles/colors'
import { fontWeightSemiBold } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { IconByType } from 'src/utils/claim'
import { claimProperty } from 'src/utils/routes'
import styled, { css } from 'styled-components'
import { PAGE_TYPE_DICT } from '../common'

export const ClaimTop: VFC = () => {
  const [selectedType, setSelectedType] = useState<SupportedPropertyType>()
  return (
    <ClaimTopMain>
      <OuterDiv onClick={() => setSelectedType(undefined)} />
      <h1>Claim ownership of your digital properties</h1>
      <h2>Select the type of property you want to claim ownership for</h2>
      <ScrollableDivWrapper>
        <Properties>
          {CLAIMABLE_PROPERTY_TYPES.map((type) => (
            <Property
              key={type}
              type={type}
              active={type === selectedType}
              onClick={(e) => {
                setSelectedType(type)
                e.currentTarget.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center',
                })
              }}
            />
          ))}
        </Properties>
      </ScrollableDivWrapper>
      <CtaLink
        href={
          selectedType ? claimProperty(PAGE_TYPE_DICT[selectedType]) : undefined
        }
      >
        Claim
        <ArrowRightIcon />
      </CtaLink>
    </ClaimTopMain>
  )
}

const Property: VFC<{
  type: SupportedPropertyType
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}> = ({ type, active, onClick }) => (
  <PropertyButton onClick={onClick} $active={active}>
    {IconByType(type)()}
    <p>{type}</p>
  </PropertyButton>
)
const OuterDiv = styled.div`
  position: fixed !important;
  inset: 0;
`
const activeStyle = css`
  color: ${black};
  background-color: ${_lightgreen};
  width: 200px;
  height: 200px;
  svg {
    width: 64px;
    height: 64px;
  }
  p {
    height: unset;
    margin-top: 16px;
    clip-path: inset(0);
  }
`
const PropertyButton = styled.button<{ $active: boolean }>`
  ${flexCenter};
  flex-direction: column;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  margin: 0 16px;
  border-radius: 50%;
  color: ${white};
  background-color: ${black};
  transition: all 0.25s ease-in-out;
  svg {
    transition: all 0.25s ease-in-out;
  }
  p {
    transition: all 0.25s ease-in-out;
    height: 0;
    margin-top: 0;
    font-size: 16px;
    font-weight: ${fontWeightSemiBold};
    white-space: nowrap;
    clip-path: inset(0 50%);
  }
  :hover {
    ${activeStyle};
  }
  ${({ $active }) => $active && activeStyle};
`
const Properties = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  > ${PropertyButton} {
    scroll-snap-align: center;
    :first-child {
      scroll-snap-align: start;
    }
    :last-child {
      scroll-snap-align: end;
    }
  }
`

const ClaimTopMain = styled(Main)`
  a,
  button {
    position: relative;
  }
  ${Properties} {
    margin: 80px auto;
    width: min-content;
    max-width: 100%;
  }
  ${CtaLink} {
    display: block;
    margin: 0 auto;
    svg {
      display: inline-block;
      margin-left: 8px;
    }
  }
`
