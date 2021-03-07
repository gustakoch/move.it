
import { SideBarProvider } from '../contexts/SideBarContext'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <SideBarProvider>
      <Component {...pageProps} />
    </SideBarProvider>
  )
}

export default MyApp
