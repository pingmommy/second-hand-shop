// fetchPointTransactionsOfSelling

import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      amount
      balance
      useditem {
        _id
        name
        soldAt
      }
    }
  }
`;

export const useQueryFetchPointTransactionsOfSelling = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchPointTransactionsCountOfSelling">,
  IQueryFetchPointTransactionsOfSellingArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING, { variables: { page, search } });
  return query;
};
