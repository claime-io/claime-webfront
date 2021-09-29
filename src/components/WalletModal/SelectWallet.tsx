import React, { useEffect, useState, VFC } from 'react'
import { isMobile } from 'react-device-detect'
import { MetamaskIcon, WalletConnectIcon } from 'src/assets/svgs'
import { Heading, ModalBackIcon, SubHeading } from 'src/components/Modal/styles'
import { connector } from 'src/external/wallets'
import { hasMetaMask } from 'src/external/wallets/metamask'
import { useWallet, WalletType } from 'src/hooks/useWallet'
import { METAMASK_URL } from 'src/utils/routes'
import styled from 'styled-components'
import { ConnectingWallet } from './ConnectingWallet'
import { WalletOption } from './WalletOption'

export const SelectWallet: VFC<{
  onBack?: VoidFunction
  closeModal: VoidFunction
}> = ({ onBack, closeModal }) => {
  const { activeWalletType, connect } = useWallet()

  const [errors, setErrors] = useState()
  const [connectingWalletType, setConnectingWalletType] = useState<WalletType>()

  const handleConnect = async (type: WalletType) => {
    setErrors(undefined)
    try {
      await connect(connector(type))
      closeModal()
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
          closeModal={closeModal}
          retry={handleConnect}
        />
      ) : (
        <>
          {onBack && <ModalBackIcon onClick={onBack} />}
          <Layout>
            <Heading>Connect Wallet</Heading>
            <SubHeading>
              Connect to your wallet to validate your ticket to the Discord
              channel
            </SubHeading>
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
              Icon={WalletConnectIcon}
              hasEnabled={activeWalletType === 'WalletConnect'}
              onAlreadyEnabled={onBack}
              onClick={() => handleConnect('WalletConnect')}
            />
          </Layout>
        </>
      )}
    </>
  )
}

const Layout = styled.div`
  ${Heading} {
    margin-bottom: 16px;
  }
  ${SubHeading} {
    margin-bottom: 40px;
  }
  button:not(:last-child) {
    margin-bottom: 24px;
  }
`
