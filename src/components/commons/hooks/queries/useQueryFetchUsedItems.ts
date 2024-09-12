import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      pickedCount
      seller {
        _id
        email
        name
      }
      images
    }
  }
`;

export const useQueryFetchUsedItems = (): QueryResult<
  Pick<IQuery, "fetchUseditems">,
  IQueryFetchUseditemsArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { fetchPolicy: "cache-and-network" });

  return query;
};
