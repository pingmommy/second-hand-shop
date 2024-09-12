import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchPointTransactionsCountOfLoading">,
  IQueryFetchPointTransactionsOfLoadingArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING, { variables: { page, search } });
  return query;
};
