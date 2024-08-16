import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      _id
    }
  }
`;

export const useMutationCreateBoard = (): MutationTuple<
  Pick<IMutation, "createBoard">,
  IMutationCreateBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  return mutation;
};
