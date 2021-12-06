import { KeyboardEvent } from 'react'

export const fireOnKeys =
  (fn: VoidFunction, ...keys: string[]) =>
  (e: KeyboardEvent<any>) => {
    if (keys.includes(e.key)) fn()
  }
