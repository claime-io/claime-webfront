import { CodeBlock } from 'src/components/CodeBlock'
import { toEvidence } from 'src/utils/claim'
import { ClaimingForm } from './Form'

export const Domain = () => (
  <ClaimingForm
    propertyType="Domain"
    method="TXT"
    placeholder="Enter your domain name"
    EvidenceFC={({ eoa }) => (
      <>
        <p>{"Add TXT record below to your domain's DNS records"}</p>
        <CodeBlock>{toEvidence(eoa)}</CodeBlock>
      </>
    )}
  />
)
