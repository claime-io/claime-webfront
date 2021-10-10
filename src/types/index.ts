import { NextPage } from 'next'

export type Page<P = {}, Q = {}, IP = P> = NextPage<P & { query: Query<Q> }, IP>

type Query<Q> = {
  [key in keyof Q]: string
}
