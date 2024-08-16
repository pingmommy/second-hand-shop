import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUseDeleteBoardCommentPropsReturn {
  deleteBoardComment: (
    password: string,
    commentId: string,
    id: string
  ) => Promise<void>;
}

export const useDeleteBoardComment = (): IUseDeleteBoardCommentPropsReturn => {
  const [useDeleteBoardComment] = useMutationDeleteBoardComment();

  const deleteBoardComment = async (
    password: string,
    commentId: string,
    id: string
  ): Promise<void> => {
    try {
      await useDeleteBoardComment({
        variables: {
          password,
          boardCommentId: commentId,
        },
        refetchQueries: [
          { query: FETCH_BOARD_COMMENTS, variables: { boardId: id } },
        ],
      });
    } catch (err) {
      if (err instanceof Error) console.log(err);
    }
  };

  return { deleteBoardComment };
};
