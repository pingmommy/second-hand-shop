import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const useQueryFetchUseditemsISold = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchUseditemsISold">,
  IQueryFetchUseditemsISoldArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD, { variables: { page, search } });

  return query;
};
