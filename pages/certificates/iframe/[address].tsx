import { useState } from 'react'
import styled from 'styled-components'

const CertificateIframePage = () => {
  const [address, setAddress] = useState('0x000000000000')
  return (
    <Main style={{ width: '80%', margin: 'auto' }}>
      <h2>{address}</h2>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/certificates/sample"
        target="_blank"
        style={{ color: 'dodgerblue', textDecoration: 'underline' }}
      >
        Show detail
      </a>
      <Table>
        <tbody>
          <tr>
            <td>✔</td>
            <td>Twitter Account</td>
            <td>@xxxxxx</td>
          </tr>
          <tr>
            <td>✔</td>
            <td>Website</td>
            <td>https://example.com/mypage</td>
          </tr>
          <tr>
            <td>✖</td>
            <td>Domain</td>
            <td>example.com</td>
          </tr>
          <tr>
            <td>？</td>
            <td>Website</td>
            <td>https://example.com/mypage</td>
          </tr>
        </tbody>
      </Table>
      <div>Published at: yyyy-MM-ddTHH:mm:ssZ</div>
    </Main>
  )
}
const Main = styled.main`
  font-size: 12px;
  * {
    margin: 0;
  }
  h2 {
    display: inline;
    margin-right: 16px;
  }
`
const Table = styled.table`
  > * {
    margin: 0;
  }
  border-top: 1px solid;
  border-right: 1px solid;
  td,
  th {
    white-space: nowrap;
    border-left: 1px solid;
    border-bottom: 1px solid;
    padding: 2px 4px;
  }
`
export default CertificateIframePage
