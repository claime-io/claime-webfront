import useSWR from 'swr'

export const useSWRLocal = <T>(key: string) => useSWR<T>(key, null)
