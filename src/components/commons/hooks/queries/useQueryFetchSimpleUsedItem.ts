import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      price
      images
    }
  }
`;

export const useQueryFetchSimpleUsedItem = (
  useditemId: string
): QueryResult<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, { variables: { useditemId } });

  return query;
};
