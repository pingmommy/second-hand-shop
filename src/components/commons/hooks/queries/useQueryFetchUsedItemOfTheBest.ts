import { gql, useQuery } from "@apollo/client";
import type { OperationVariables, QueryResult } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USEDITEM_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      remarks
      name
      images
      price
      pickedCount
    }
  }
`;

export const useQueryFetchUsedItemOfBest = (): QueryResult<
  Pick<IQuery, "fetchUseditemsOfTheBest">,
  OperationVariables
> => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USEDITEM_OF_THE_BEST
  );

  return query;
};
