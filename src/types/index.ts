import { NextPage } from 'next'
import { PickByValue } from 'utility-types'

type Serializable = string | number | boolean
export type Page<P = {}, Q = {}, IP = P> = NextPage<
  P & {
    query: Query<PickByValue<Q, Serializable>, string> &
      Query<PickByValue<Q, Serializable[]>, string[]>
  },
  IP
>

type Query<Q, T> = {
  [key in keyof Q]: T
}
