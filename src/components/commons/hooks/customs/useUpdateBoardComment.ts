import type { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";
import type { ExtendedFormData } from "../../../units/comment/write/CommentWrite.queries";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUseUpdateBoardCommentReturn {
  onClickUpdate: (
    boardId: string,
    commentId: string | undefined,
    data: ExtendedFormData
  ) => Promise<void>;
}

export const useUpdateBoardComment = (): IUseUpdateBoardCommentReturn => {
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const onClickUpdate = async (
    boardId: string,
    commentId: string | undefined,
    data: ExtendedFormData
  ): Promise<void> => {
    if (data.password === "") {
      alert("비밀번호를 입력하세요!");
      return;
    }
    if (data?.createBoardComment?.contents === "") {
      alert("변경된 내용이 없습니다.");
      return;
    }

    const updateData: IUpdateBoardCommentInput = {
      contents: data.createBoardComment.contents,
      rating: 0.5,
    };

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            ...updateData,
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
