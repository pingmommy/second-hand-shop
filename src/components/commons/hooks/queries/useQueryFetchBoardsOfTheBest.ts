import { gql, useQuery } from "@apollo/client";
import type { OperationVariables, QueryResult } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      writer
      likeCount
      createdAt
      images
    }
  }
`;

export const useQueryFetchBoardsOfTheBest = (): QueryResult<
  Pick<IQuery, "fetchBoardsOfTheBest">,
  OperationVariables
> => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  return query;
};
