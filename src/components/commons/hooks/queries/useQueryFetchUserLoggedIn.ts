import { gql, useQuery } from "@apollo/client";
import type { OperationVariables, QueryResult } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
        createdAt
      }
    }
  }
`;

export const useQueryFetchUserLoggedIn = (): QueryResult<
  Pick<IQuery, "fetchUserLoggedIn">,
  OperationVariables
> => {
  const query =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return query;
};
