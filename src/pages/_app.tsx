
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CoutdownProvider } from '../contexts/CoutdownContext'
import { SideBarProvider } from '../contexts/SideBarContext'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <SideBarProvider>
      <ChallengesProvider>
        <CoutdownProvider>
          <Component {...pageProps} />
        </CoutdownProvider>
      </ChallengesProvider>
    </SideBarProvider>
  )
}

export default MyApp
