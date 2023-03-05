import { Outlet, useNavigation } from 'react-router-dom'
import nProgress from 'nprogress'

import Header from '../components/Header'

nProgress.configure({ showSpinner: false, trickleSpeed: 200 })

export default function RootLayout() {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    nProgress.start()
  } else {
    nProgress.done()
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
