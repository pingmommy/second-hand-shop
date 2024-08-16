import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { useMutationDisLikeBoard } from "../mutations/useMutationDisLikeBoard";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface IUseBoardLike {
  onClickLikeBoard: () => Promise<void>;
  onClickDisLikeBoard: () => Promise<void>;
}

export const useBoardLike = (id: string): IUseBoardLike => {
  const [likeBoard] = useMutationLikeBoard();
  const [disLikeBoard] = useMutationDisLikeBoard();

  const onClickLikeBoard = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: id },
        },
      ],
    });
  };

  const onClickDisLikeBoard = async (): Promise<void> => {
    await disLikeBoard({
      variables: { boardId: id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: id },
        },
      ],
    });
  };

  return {
    onClickLikeBoard,
    onClickDisLikeBoard,
  };
};
