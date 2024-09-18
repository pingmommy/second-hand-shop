import { useMutationUpdateUsedItem } from "../mutations/useMutationUpdateUsedItem";
import { Modal } from "antd";
import { useMoveToPage } from "./useMoveToPage";
import type {
  ICreateUseditemInput,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";

export interface IUseUpdateUsedItemReturn {
  onClickUpdateUsedItem: (
    data: ICreateUseditemInput,
    key: string[],
    useditemId: string
  ) => Promise<void>;
}

export const useUpdateUsedItem = (): IUseUpdateUsedItemReturn => {
  const [updateUseditem] = useMutationUpdateUsedItem();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickUpdateUsedItem = async (
    data: ICreateUseditemInput,
    key: string[],
    useditemId: string
  ): Promise<void> => {
    const updateUseditemInput: IUpdateUseditemInput = {};

    const keys = key as Array<keyof IUpdateUseditemInput>;
    keys.forEach((el) => {
      const value = el === "price" ? Number(data[el]) : data[el];

      updateUseditemInput[el] = value as null | undefined;
    });
    try {
      const result = await updateUseditem({
        variables: { updateUseditemInput, useditemId },
      });
      console.log(result);
      void Modal.success({
        content: "게시물이 수정되었습니다.",
        onOk: onClickMoveToPage("/productShop"),
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  return { onClickUpdateUsedItem };
};
