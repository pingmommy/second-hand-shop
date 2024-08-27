import type { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUseCreateBoardCommentReturn {
  onClickSubmit: (id: string, data: ICreateBoardCommentInput) => Promise<void>;
}

export const useCreateBoardComment = (): IUseCreateBoardCommentReturn => {
  const [createBoardComment] = useMutationCreateBoardComment();

  const onClickSubmit = async (
    id: string,
    data: ICreateBoardCommentInput
  ): Promise<void> => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...data,
          },
          boardId: id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  return { onClickSubmit };
};
