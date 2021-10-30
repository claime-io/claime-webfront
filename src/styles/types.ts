import * as AllColors from './colors'

export type Colors = typeof AllColors[keyof typeof AllColors]
