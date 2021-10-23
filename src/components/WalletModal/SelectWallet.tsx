import React, { useEffect, useState, VFC } from 'react'
import { isMobile } from 'react-device-detect'
import { MetamaskIcon, WalletConnectIcon } from 'src/assets/svgs'
import { Heading, ModalBackIcon, SubHeading } from 'src/components/Modal/styles'
import { connector } from 'src/external/wallets'
import { hasMetaMask } from 'src/external/wallets/metamask'
import { useWallet, WalletType } from 'src/hooks/useWallet'
import { white } from 'src/styles/colors'
import { breakpoint } from 'src/styles/mixins'
import { METAMASK_URL } from 'src/utils/routes'
import styled from 'styled-components'
import { ConnectingWallet } from './ConnectingWallet'
import { SelectWalletHeading } from './SelectWalletHeading'
import { WalletModalTheme } from './types'
import { WalletOption } from './WalletOption'

export const SelectWallet: VFC<{
  theme?: WalletModalTheme
  onBack?: VoidFunction
  closeModal: VoidFunction
}> = ({ theme, onBack, closeModal }) => {
  const { activeWalletType, connect } = useWallet()

  const [errors, setErrors] = useState()
  const [connectingWalletType, setConnectingWalletType] = useState<WalletType>()

  const handleConnect = async (type: WalletType) => {
    setErrors(undefined)
    try {
      await connect(connector(type))
    } catch (err: any) {
      setErrors(err)
    }
  }
  const cancel = () => {
    setErrors(undefined)
    setConnectingWalletType(undefined)
  }

  useEffect(() => {
    if (!connectingWalletType) return
    handleConnect(connectingWalletType)
  }, [connectingWalletType])

  return (
    <>
      {connectingWalletType ? (
        <ConnectingWallet
          onBack={cancel}
          errors={errors}
          type={connectingWalletType}
          retry={handleConnect}
        />
      ) : (
        <>
          {onBack && <ModalBackIcon onClick={onBack} />}
          <Layout>
            <Content>
              <SelectWalletHeading theme={theme} />
              <WalletsDiv>
                {!isMobile && (
                  <WalletOption
                    type="Metamask"
                    Icon={MetamaskIcon}
                    notInstalled={!hasMetaMask()}
                    onNotInstalled={() => window.open(METAMASK_URL, '_blank')}
                    hasEnabled={activeWalletType === 'Metamask'}
                    onAlreadyEnabled={onBack}
                    onClick={() => handleConnect('Metamask')}
                  />
                )}
                <WalletOption
                  type="WalletConnect"
                  label="Wallet Connect"
                  Icon={WalletConnectIcon}
                  hasEnabled={activeWalletType === 'WalletConnect'}
                  onAlreadyEnabled={onBack}
                  onClick={() => handleConnect('WalletConnect')}
                />
              </WalletsDiv>
            </Content>
          </Layout>
        </>
      )}
    </>
  )
}
const WalletsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -12px;
  > * {
    margin: 12px;
  }
`
const Content = styled.div`
  width: 500px;
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
  @media ${breakpoint.l} {
    padding: 24px 40px;
  }
`
