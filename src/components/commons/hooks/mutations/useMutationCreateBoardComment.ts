import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
    }
  }
`;

export const useMutationCreateBoardComment = (): MutationTuple<
  Pick<IMutation, "createBoardComment">,
  IMutationCreateBoardCommentArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  return mutation;
};
