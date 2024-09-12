//
import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      balance
      status
    }
  }
`;

export const useQueryFetchPointTransactionsOfBuying = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchPointTransactionsCountOfBuying">,
  IQueryFetchPointTransactionsOfBuyingArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING, { variables: { page, search } });
  return query;
};
