import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'


// Div makes app have white background by default


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-white'>
      <Component {...pageProps} />
    </div>
    
  )
}
