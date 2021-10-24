import { toEvidence } from 'src/utils/claim'
import { ClaimingForm } from './Form'

export const Domain = () => (
  <ClaimingForm
    propertyType="Domain"
    method="TXT"
    placeholder="Enter your domain name"
    EvidenceFC={({ eoa }) => (
      <>
        <p>Add TXT record</p>
        <code>{toEvidence(eoa)}</code>
      </>
    )}
  />
)
