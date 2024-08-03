import { globalStyles } from "../src/commons/styles/globalStyle";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import ApolloSetting from "../src/components/commons/apollo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </>
  );
}
