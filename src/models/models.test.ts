import { distinctByProperty, VerificationResult } from '.'

describe('models', () => {
  const result: VerificationResult = {
    type: 'Domain',
    id: 'claime-dev.tk',
    method: 'TXT',
    evidence: '',
    network: 'mumbai',
    result: 'Verified',
    actual: {
      id: 'claime-dev.tk',
      evidences: [
        'claime-ownership-claim=0xCdfc500F7f0FCe1278aECb0340b523cD55b3EBbb',
      ],
    },
    at: '2021-11-30T03:25:56.446980551Z',
  }

  describe('distinctByProperty', () => {
    test('distinct verified results', () => {
      expect(
        distinctByProperty([result, { ...result, network: 'rinkeby' }]),
      ).toHaveLength(1)
    })
    test('prefer a failed result than unknown', () => {
      const results = distinctByProperty([
        { ...result, result: 'Unknown' },
        { ...result, result: 'Failed' },
        { ...result, result: 'Unknown' },
      ])
      expect(results).toHaveLength(1)
      expect(results[0].result).toBe('Failed')
    })
    test('prefer a verified result', () => {
      const results = distinctByProperty([
        { ...result, result: 'Failed' },
        { ...result, result: 'Unknown' },
        result,
        { ...result, result: 'Unknown' },
        { ...result, result: 'Failed' },
      ])
      expect(results).toHaveLength(1)
      expect(results[0].result).toBe('Verified')
    })
  })
})
