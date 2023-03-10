import "../styles/global.sass";
import { ApolloProvider } from "@apollo/client";
import client from '../apollo-client/client';


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
