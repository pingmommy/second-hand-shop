import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $boardId: ID!
    $password: String
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      boardId: $boardId
      password: $password
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

export const useMutationUpdateBoard = (): MutationTuple<
  Pick<IMutation, "updateBoard">,
  IMutationUpdateBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return mutation;
};
