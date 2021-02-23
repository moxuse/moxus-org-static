import { AppProps } from "next/app";

import MenuContextProvider from '../context/menu';
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/global/Global.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <MenuContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MenuContextProvider>
  );
};

export default App;
