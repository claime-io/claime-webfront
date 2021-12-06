import Router from 'next/router'
import { useRef, VFC } from 'react'
import { ReloadIcon } from 'src/assets/svgs'
import { black, _inputbg } from 'src/styles/colors'
import { fontWeightRegular } from 'src/styles/font'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { fireOnKeys } from 'src/utils/listner'
import styled from 'styled-components'

export type AddressProps = {
  eoa: string
}

const AddressComponent: VFC<AddressProps & { className?: string }> = ({
  eoa,
  className,
}) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const search = () => {
    if (!inputEl.current?.value) return
    Router.push(inputEl.current.value)
  }
  return (
    <AddressDiv className={className}>
      <p>{eoa}</p>
      <input
        ref={inputEl}
        defaultValue={eoa}
        onKeyPress={fireOnKeys(search, 'Enter')}
      />
      <IconButton onClick={search}>
        <ReloadIcon />
      </IconButton>
    </AddressDiv>
  )
}
export const Address = styled(AddressComponent)``

const IconButton = styled.button`
  ${flexCenter};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${black};
  color: ${_inputbg};
  box-shadow: 0px 3px 6px #00000029;
`

const AddressDiv = styled.div`
  ${flexCenter};
  p {
    font-size: 16px;
    font-weight: ${fontWeightRegular};
    line-break: anywhere;
    text-align: center;
  }
  input,
  ${IconButton} {
    display: none;
  }
  @media ${breakpoint.m} {
    p {
      display: none;
    }
    input {
      display: unset;
      width: 440px;
      border: 1px solid;
      padding: 12px 16px;
      border-radius: 20px;
      font-size: 16px;
      font-weight: ${fontWeightRegular};
    }
    ${IconButton} {
      display: flex;
      margin-left: 16px;
    }
  }
  @media ${breakpoint.l} {
    input {
      width: 560px;
      padding: 24px 32px;
      border-radius: 40px;
      font-size: 20px;
    }
  }
`
