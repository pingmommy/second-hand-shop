import { useMutation, gql } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const useMutationDisLikeBoard = (): MutationTuple<
  Pick<IMutation, "dislikeBoard">,
  IMutationDislikeBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  return mutation;
};
