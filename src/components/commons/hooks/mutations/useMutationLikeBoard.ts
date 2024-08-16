import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const useMutationLikeBoard = (): MutationTuple<
  Pick<IMutation, "likeBoard">,
  IMutationLikeBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  return mutation;
};
