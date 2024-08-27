import type { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";

import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUseUpdateBoardCommentReturn {
  onClickUpdate: (
    boardId: string,
    commentId: string | undefined,
    data: ICreateBoardCommentInput
  ) => Promise<void>;
}

export const useUpdateBoardComment = (): IUseUpdateBoardCommentReturn => {
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const onClickUpdate = async (
    boardId: string,
    commentId: string | undefined,
    data: ICreateBoardCommentInput
  ): Promise<void> => {
    if (data.password === "") {
      alert("비밀번호를 입력하세요!");
      return;
    }
    if (data?.contents === "") {
      alert("변경된 내용이 없습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: data.contents,
            rating: data.rating,
          },
          password: data.password,
          boardCommentId: commentId ?? "",
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId },
          },
        ],
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };
  return { onClickUpdate };
};
