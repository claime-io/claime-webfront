import { VFC } from 'react'
import { SearchIcon } from 'src/assets/svgs'
import { ctaStyle } from 'src/components/Button'
import { black, white, _inputbg, _lightgreen } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'
import { AppLayout } from '../AppLayout'

export const Top: VFC = () => {
  return (
    <AppLayout>
      <Main>
        <h1>No more scams and frauds</h1>
        <Section>
          <h2>Enter the wallet address you wish to verify.</h2>
          <InputDiv>
            <button>
              <SearchIcon />
            </button>
            <input />
          </InputDiv>
        </Section>
        <Section>
          <h2>
            If you would like to claim your digital assets
            <Button>Get Started</Button>
          </h2>
        </Section>
      </Main>
    </AppLayout>
  )
}

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 80px;
  padding: 14px 16px;
  background-color: ${_inputbg};
  border-radius: 40px;
  box-shadow: 0px 3px 6px #00000020 inset;
  font-size: 28px;
  svg {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    padding: 14px;
    background-color: ${black};
    margin-right: 12px;
  }
  input {
    width: 100%;
    line-height: 1;
  }
`

const Button = styled.button`
  ${ctaStyle};
  background-color: ${_lightgreen};
`

const Section = styled.section`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
`

const Main = styled.main`
  position: relative;
  ${flexCenter};
  flex-direction: column;
  max-width: 800px;
  margin: auto;

  h1 {
    font-size: 56px;
    font-weight: ${fontWeightBold};
  }
  h2 {
    margin-top: 32px;
    font-size: 20px;
    font-weight: ${fontWeightRegular};
    ${Button} {
      margin-left: 24px;
    }
  }
  ${InputDiv} {
    margin-top: 64px;
  }
  ${Section}+${Section} {
    border-top: 1px solid ${white};
    margin-top: 120px;
  }
`
