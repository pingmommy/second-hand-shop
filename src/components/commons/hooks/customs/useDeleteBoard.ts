import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";
import { FETCH_BOARDS } from "../queries/useQueryFetchBoards";

interface IUseDeleteBoard {
  onClickDeleteBoard: (id: string) => void;
}

export const useDeleteBoard = (): IUseDeleteBoard => {
  const [deleteBoard] = useMutationDeleteBoard();
  const onClickDeleteBoard = (id: string): void => {
    try {
      void deleteBoard({
        variables: { boardId: id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  return { onClickDeleteBoard };
};
