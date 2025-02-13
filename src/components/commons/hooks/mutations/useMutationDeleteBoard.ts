import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const useMutationDeleteBoard = (): MutationTuple<
  Pick<IMutation, "deleteBoard">,
  IMutationDeleteBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return mutation;
};
