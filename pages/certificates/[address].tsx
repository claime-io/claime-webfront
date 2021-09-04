import { useState } from 'react'
import styled from 'styled-components'
import { CLAIM_KEY } from '../claim'

const CertificatePage = () => {
  const [address, setAddress] = useState('0x000000000000')
  return (
    <main style={{ width: '80%', margin: 'auto' }}>
      <h1>Ownership claims verification result: {address}</h1>
      <Table>
        <thead>
          <th>Result</th>
          <th>Property Type</th>
          <th>Property</th>
          <th>Timestamp</th>
          <th>Sumary</th>
          <th>Evidence</th>
        </thead>
        <tbody>
          <tr>
            <td>✔</td>
            <td>Twitter Account</td>
            <td>@xxxxxx</td>
            <td>at: yyyy-MM-ddTHH:mm:ssZ</td>
            <td>
              Claim matched:
              <EvidenceSummary>{`${CLAIM_KEY}: "${address}"`}</EvidenceSummary>
            </td>
            <td>Show evidence↗</td>
          </tr>
          <tr>
            <td>✔</td>
            <td>Website</td>
            <td>https://example.com/mypage</td>
            <td>at: yyyy-MM-ddTHH:mm:ssZ</td>
            <td>
              Claim matched:
              <EvidenceSummary>{`...\n<meta name="${CLAIM_KEY}" content="${address}">\n...`}</EvidenceSummary>
            </td>
            <td>Show evidence↗</td>
          </tr>
          <tr>
            <td>✖</td>
            <td>Domain</td>
            <td>example.com</td>
            <td>at: yyyy-MM-ddTHH:mm:ssZ</td>
            <td>
              Claim does not match:
              <EvidenceSummary>{`${CLAIM_KEY}=0x222222222222`}</EvidenceSummary>
            </td>
            <td>Show evidence↗</td>
          </tr>
          <tr>
            <td>？</td>
            <td>Website</td>
            <td>https://example.com/mypage</td>
            <td>at: yyyy-MM-ddTHH:mm:ssZ</td>
            <td>Server not responding.</td>
            <td>Show evidence↗</td>
          </tr>
        </tbody>
      </Table>
      <div>Published at: yyyy-MM-ddTHH:mm:ssZ</div>
      <div>Next revalidate will: yyyy-MM-ddTHH:mm:ssZ</div>
      <div>*We caches this result 1day. Only the claimer can revalidate.</div>
    </main>
  )
}
const Table = styled.table`
  > * {
    margin: 0;
  }
  border-top: 1px solid;
  border-right: 1px solid;
  td,
  th {
    border-left: 1px solid;
    border-bottom: 1px solid;
    padding: 8px 16px;
  }
`

const EvidenceSummary = styled.pre`
  background-color: lightgray;
  padding: 16px 24px;
`
export default CertificatePage
