export const STATUS_TYPES = [
  'connecting',
  'confirmation',
  'verifying',
  'succeeded',
  'failed',
  'expired',
]
export type Status = typeof STATUS_TYPES[number]
