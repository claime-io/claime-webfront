import Router from 'next/router'
import { useRef, VFC } from 'react'
import { SearchIcon } from 'src/assets/svgs'
import { CtaLink } from 'src/components/Cta'
import { AppLayout, Main } from 'src/compositions/Layout'
import { black, white, _inputbg } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { fireOnKeys } from 'src/utils/listner'
import { CLAIM } from 'src/utils/routes'
import styled from 'styled-components'

export const Top: VFC = () => (
  <AppLayout>
    <TopMain>
      <h1>No more scams and frauds</h1>
      <Section>
        <h2>Enter the wallet address you want to verify.</h2>
        <Search />
      </Section>
      <Section>
        <h2>
          If you would like to claim ownership of your digital properties
          <CtaLink href={CLAIM}>Get Started</CtaLink>
        </h2>
      </Section>
    </TopMain>
  </AppLayout>
)

const Search = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const search = () => {
    if (!inputEl.current?.value) return
    Router.push(inputEl.current.value)
  }
  return (
    <InputDiv>
      <button onClick={search}>
        <SearchIcon />
      </button>
      <input ref={inputEl} onKeyPress={fireOnKeys(search, 'Enter')} />
    </InputDiv>
  )
}

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
  height: 56px;
  padding: 14px 12px 10px;
  border-radius: 24px;
  background-color: ${_inputbg};
  box-shadow: 0px 3px 6px #00000029 inset;
  font-size: 16px;
  svg {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 8px;
    background-color: ${black};
    margin-right: 12px;
  }
  input {
    width: 100%;
    line-height: 1;
    padding-bottom: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const Section = styled.section`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
`

const TopMain = styled(Main)`
  ${flexCenter};
  flex-direction: column;
  h2 {
    margin-top: 32px;
    ${CtaLink} {
      display: block;
      margin: 24px auto;
    }
  }
  ${InputDiv} {
    margin-top: 64px;
  }
  ${Section}+${Section} {
    border-top: 1px solid ${white};
    margin-top: 64px;
  }
  @media ${breakpoint.m} {
    h2 {
      ${CtaLink} {
        display: inline;
        margin: 0;
        margin-left: 24px;
      }
    }
    ${InputDiv} {
      width: 640px;
      max-width: unset;
      height: 64px;
      padding: 20px 16px 12px;
      border-radius: 32px;
      font-size: 20px;
      svg {
        width: 48px;
        height: 48px;
        padding: 14px;
      }
    }
    ${Section}+${Section} {
      margin-top: 120px;
    }
  }
  @media ${breakpoint.l} {
    ${InputDiv} {
      width: 800px;
      height: 80px;
      padding: 20px 16px 12px;
      border-radius: 40px;
      font-size: 28px;
    }
  }
`
