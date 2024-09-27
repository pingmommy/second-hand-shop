import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";
import type { IMutation } from "../types/generated/types";

export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getNewAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphqlClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result =
      await graphqlClient.request<Pick<IMutation, "restoreAccessToken">>(
        RESTORE_ACCESS_TOKEN
      );

    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
