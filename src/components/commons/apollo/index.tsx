import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: APOLLO_CACHE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
