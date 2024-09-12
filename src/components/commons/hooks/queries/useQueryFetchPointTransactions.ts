import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
    }
  }
`;

export const useQueryFetchPointTransactions = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchPointTransactions">,
  IQueryFetchPointTransactionsArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, { variables: { page, search } });

  return query;
};
