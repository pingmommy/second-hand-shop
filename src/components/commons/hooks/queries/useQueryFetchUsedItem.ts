import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query {
    fetchUseditem(useditemId: "6553493e5d6eaa0029f7c7ec") {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      seller {
        name
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItem = (): QueryResult<
  Pick<IQuery, "fetchUseditem">,
  IQueryFetchUseditemArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  return query;
};
