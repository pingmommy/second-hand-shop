import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useAccessToken } from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getNewAccessToken } from "../../../commons/libraries/getNewAccessToken";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const accessToken = useAccessToken((state) => state.accessToken);
  const setAccessToken = useAccessToken((state) => state.setToken);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors !== undefined) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          return fromPromise(
            getNewAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                Headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: APOLLO_CACHE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
