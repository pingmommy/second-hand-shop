import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../queries/useQueryFetchBoards";
import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import type { ICreateBoardInput } from "../../../../commons/types/generated/types";

interface IUserCreateBoardReturn {
  onClickSubmit: (args: ICreateBoardInput) => Promise<void>;
}

export const userCreateBoard = (): IUserCreateBoardReturn => {
  const router = useRouter();
  const [createBoard] = useMutationCreateBoard();
  const onClickSubmit = async (args: ICreateBoardInput): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: args.writer,
            password: args.password,
            title: args.title,
            contents: args.contents,
            boardAddress: args.boardAddress,
          },
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      console.log(result);
      void router.push(`/freeBoard/${result?.data?.createBoard._id}`);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { onClickSubmit };
};
