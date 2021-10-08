import { NextPage } from 'next'

export type Page<P = {}, Q = {}, IP = P> = NextPage<P & { query: Q }, IP>
