import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalsProvider } from '@mantine/modals'
import { NotificationsProvider } from '@mantine/notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </NotificationsProvider>
  )
}

export default MyApp
