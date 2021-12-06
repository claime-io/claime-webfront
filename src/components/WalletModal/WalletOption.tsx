import React, { VFC } from 'react'
import { ModalOption } from '../Modal/ModalOption'

type Props = {
  label: string
  Icon: SvgrComponent
  notInstalled?: boolean
  hasEnabled?: boolean
  onAlreadyEnabled?: () => void
  onNotInstalled?: () => void
  onClick: () => Promise<void>
}

export const WalletOption: VFC<Props> = ({
  label,
  Icon,
  notInstalled,
  hasEnabled,
  onAlreadyEnabled,
  onNotInstalled,
  onClick,
}) => (
  <ModalOption
    label={label}
    Icon={Icon}
    onClick={
      notInstalled && onNotInstalled
        ? onNotInstalled
        : hasEnabled && onAlreadyEnabled
        ? onAlreadyEnabled
        : onClick
    }
  />
)
