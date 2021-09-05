import { useState, VFC } from 'react'
import styled from 'styled-components'

export const PROPERTY_TYPES = ['Domain', 'Website', 'Twitter Account'] as const
export type PropertyType = typeof PROPERTY_TYPES[number]

export const PRODUCT_NAME = 'Certifier'
export const CLAIM_KEY = `${PRODUCT_NAME}-ownership-claim`
export const ADDRESS_PLACEHOLDER = '${your_address}'

const EvidenceDescription: {
  [key in PropertyType]: string
} = {
  Domain: `Add your address to TXT record with following format and input your domain name to 'Evidence'.\n'${CLAIM_KEY}=${ADDRESS_PLACEHOLDER}'`,
  Website: `Add your address to your <head> with following format and input your website url to 'Evidence'.\n<meta name="${CLAIM_KEY}" content="${ADDRESS_PLACEHOLDER}">`,
  'Twitter Account': `Tweet with following format and input its tweetId  to 'Evidence'.\n${CLAIM_KEY}: "${ADDRESS_PLACEHOLDER}"`,
} as const

const ClaimPage = () => {
  const [address, setAddress] = useState('0x000000000000')
  return (
    <main style={{ width: '50%', margin: 'auto' }}>
      <form>
        <Item>
          <div>Your address: </div>
          <input
            value={address}
            onChange={({ target: { value } }) => setAddress(value)}
          />
        </Item>
        <PropertyClaimInput address={address} />
        <PropertyClaimInput address={address} />
        <PropertyClaimInput address={address} />
        <PropertyClaimInput address={address} />
        <Item>
          <button>verify</button>
          <button>submit</button>
        </Item>
        <div>Sample:</div>
        <iframe src="/certificates/iframe/sample" width="420px" />
      </form>
    </main>
  )
}

const PropertyClaimInput: VFC<{ address: string }> = ({ address }) => {
  const [selected, setSelected] = useState<PropertyType | undefined>()
  return (
    <Item>
      <div>
        <label>Property Type: </label>
        <select
          onChange={({ target: { selectedOptions } }) =>
            setSelected(
              selectedOptions.item(0)?.value as PropertyType | undefined,
            )
          }
        >
          <option value="None"></option>
          {PROPERTY_TYPES.map((each) => (
            <option key={each} value={each} label={each}>
              {each}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Description>
          {selected
            ? EvidenceDescription[selected].replace(
                ADDRESS_PLACEHOLDER,
                address,
              )
            : 'Select property type.'}
        </Description>
        {selected && (
          <>
            <label>Evidence: </label>
            <input />
          </>
        )}
      </div>
    </Item>
  )
}
const Item = styled.div`
  display: flex;
  margin: 24px -16px;
  > * {
    margin: 0 16px;
  }
`
const Description = styled.div`
  white-space: pre-wrap;
`

export default ClaimPage
