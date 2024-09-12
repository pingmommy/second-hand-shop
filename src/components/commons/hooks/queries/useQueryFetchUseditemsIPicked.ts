import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_I_PICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
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

export const useQueryFetchUseditemsIPicked = (
  page: number,
  search: string
): QueryResult<
  Pick<IQuery, "fetchUseditemsIPicked">,
  IQueryFetchUseditemsIPickedArgs
> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICK, { variables: { page, search } });

  return query;
};
