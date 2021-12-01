import React, { useState, VFC } from 'react'
import { EthereumLogo, PolygonLogo } from 'src/assets/svgs'
import { Heading, SubHeading } from 'src/components/Modal/styles'
import { chainIdEthereum, chainIdPolygon } from 'src/constants/chains'
import { requestSwitchChain } from 'src/external/wallets/metamask'
import { useGlobalModal } from 'src/hooks/useModal'
import { errorColor, white } from 'src/styles/colors'
import { fontWeightMedium } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { ModalOption } from '../Modal/ModalOption'

const NetworkModalComponent: VFC<{
  closeModal: VoidFunction
}> = ({ closeModal }) => {
  const [errorMessage, setErrorMessage] = useState()
  return (
    <Layout>
      <Content>
        <Heading>Select Network</Heading>
        <OptionsDiv>
          <ModalOption
            label="Ethereum"
            Icon={EthereumLogo}
            onClick={() =>
              requestSwitchChain(chainIdEthereum()).then(
                closeModal,
                setErrorMessage,
              )
            }
          />
          <ModalOption
            label="Polygon"
            Icon={PolygonLogo}
            onClick={() =>
              requestSwitchChain(chainIdPolygon()).then(
                closeModal,
                setErrorMessage,
              )
            }
          />
        </OptionsDiv>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Content>
    </Layout>
  )
}
export const useNetworkModal = () => useGlobalModal(NetworkModalComponent)

const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: ${fontWeightMedium};
  color: ${errorColor};
  letter-spacing: 1.5;
`

const OptionsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: -12px;
  > * {
    margin: 12px;
  }
`
const Content = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  ${Heading} {
    position: absolute;
    top: -64px;
    left: -60px;
    right: -60px;
    margin: auto;
    text-align: center;
  }
  ${ErrorMessage} {
    position: absolute;
    bottom: -64px;
    left: -60px;
    right: -60px;
    margin: auto;
    text-align: center;
  }
`
const Layout = styled.div`
  color: ${white};
  ${Heading} {
    margin-bottom: 16px;
    svg {
      height: auto;
      width: 100%;
    }
  }
  ${SubHeading} {
    margin-bottom: 40px;
  }
  @media ${breakpoint.s} {
    ${OptionsDiv} {
      flex-direction: row;
    }
  }
  @media ${breakpoint.l} {
    padding: 24px 40px;
  }
`
