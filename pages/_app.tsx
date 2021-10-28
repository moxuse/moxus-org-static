// @flow
import { AppProps } from "next/app";
import Head from "next/head";

import MenuContextProvider from '../context/menu';
import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/global/Global.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <MenuContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>moxus.org</title>
        <meta property="og:title" content="moxus.org" />
        <meta property="og:url" content="https://moxus.org" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="moxus-org" />
        <meta property="og:image" content="" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/monokai-sublime.css"></link>
        <script src="/lib/LoadTwitterWidgets.js" defer />
        <script src="/lib/ga.js" defer />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MenuContextProvider>
  );
};

export default App;
