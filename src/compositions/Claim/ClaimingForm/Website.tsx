import { CodeBlock } from 'src/components/CodeBlock'
import { CLAIM_KEY } from 'src/utils/claim'
import { ClaimingForm } from './Form'

export const Website = () => (
  <ClaimingForm
    propertyType="Website"
    method="Meta Tag"
    placeholder="Enter your website URL"
    EvidenceFC={({ eoa }) => (
      <>
        <p>
          {
            'Insert the following <meta> tag into the <head> tag on your website.'
          }
        </p>
        <CodeBlock>{`<meta name="${CLAIM_KEY}" content="${eoa}">`}</CodeBlock>
      </>
    )}
  />
)
