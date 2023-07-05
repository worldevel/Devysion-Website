

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/styles.less'



function App(props) {

  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component { ...pageProps } />);
}
export default App