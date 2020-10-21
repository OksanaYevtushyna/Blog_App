import wrapper from '../redux/store'
import type { AppProps } from 'next/app'
import styled from 'styled-components'


function MyApp({ Component, pageProps }: AppProps) {
  return <Container><Component {...pageProps} /></Container>
}

const Container = styled.div`
  text-align: center;
`

export default wrapper.withRedux(MyApp)