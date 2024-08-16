import type { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";
import type { ExtendedFormData } from "../../../units/comment/write/CommentWrite.queries";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUseCreateBoardCommentReturn {
  onClickSubmit: (id: string, data: ExtendedFormData) => Promise<void>;
}

export const useCreateBoardComment = (): IUseCreateBoardCommentReturn => {
  const [createBoardComment] = useMutationCreateBoardComment();

  const onClickSubmit = async (
    id: string,
    data: ExtendedFormData
  ): Promise<void> => {
    const createBoardData: ICreateBoardCommentInput = {
      ...data.createBoardComment,
      rating: 0,
      password: data.password,
    };
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...createBoardData,
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
