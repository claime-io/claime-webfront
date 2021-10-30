import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useCirclesLoadingModal } from 'src/components/Loading'

type WithLoadingFn = <P, R>(
  fn: (args: P) => Promise<R>,
) => (args: P) => Promise<R>

export const useLoading = () => {
  const { open, close } = useCirclesLoadingModal()
  const openInescapable = () => open({}, { inescapable: true })
  const withLoadingAsync: WithLoadingFn = (fn) => (p) => {
    openInescapable()
    return fn(p).finally(close)
  }
  return {
    withLoadingAsync,
    open: openInescapable,
    close,
  }
}

export const useTransitionLoading = () => {
  const { open, close } = useCirclesLoadingModal()
  const openInescapable = () => open({}, { inescapable: true })
  const router = useRouter()
  const endLoad = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    close()
  }
  useEffect(() => {
    close()
    router.events.on('routeChangeStart', openInescapable)
    router.events.on('routeChangeComplete', endLoad)
    router.events.on('routeChangeError', endLoad)
    return () => {
      router.events.off('routeChangeStart', openInescapable)
      router.events.off('routeChangeComplete', endLoad)
      router.events.off('routeChangeError', endLoad)
    }
  }, [])
}
