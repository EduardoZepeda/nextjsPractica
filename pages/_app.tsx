import { AppProps } from 'next/app'
import Layout from '@components/Layout/layout'
import '../css/styles.css'
import FavoritesProvider from '@store/Favorites'
import { SessionProvider as AuthProvider} from "next-auth/react"
import AuthRequired from './authRequired'

function MyApp({ Component, pageProps }: AppProps){

  return (
  <AuthProvider session={pageProps.session}>
    <FavoritesProvider>
    <Layout>
    <AuthRequired>
    <Component { ...pageProps } />
    </AuthRequired>
    </Layout>
      </FavoritesProvider>
      </AuthProvider>
      )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//    calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
