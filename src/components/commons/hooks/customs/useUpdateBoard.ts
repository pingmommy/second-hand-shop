import { Modal } from "antd";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { useRouterIdChecker } from "./useRouterIdChecker";
import { useRouter } from "next/router";
interface IUseUpdateBoardReturn {
  onClickUpdate: (
    updateBoardInput: IUpdateBoardInput,
    password: string
    // data: any,
    // dirtyFields: any
  ) => Promise<void>;
}

export const useUpdateBoard = (): IUseUpdateBoardReturn => {
  const [updateBoard] = useMutationUpdateBoard();
  const { id: boardId } = useRouterIdChecker("boardId");
  const router = useRouter();
  const warning = (content: string): void => {
    Modal.warning({
      content,
    });
  };

  const onClickUpdate = async (
    updateBoardInput: IUpdateBoardInput,
    password: string
  ): Promise<void> => {
    if (
      updateBoardInput.title === "" &&
      updateBoardInput.contents === "undefined" &&
      updateBoardInput.contents.length === 0
    ) {
      warning("변경된 내용이 없습니다!");
      return;
    }

    if (password === "") {
      warning("비밀번호를 입력해주세요.");
      return;
    }

    if ("password" in updateBoardInput) {
      delete updateBoardInput.password;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId,
          password,
        },
      });
      void router.push(`/freeBoard/${result?.data?.updateBoard._id}`);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
    console.log(updateBoardInput);
  };
  return { onClickUpdate };
};
