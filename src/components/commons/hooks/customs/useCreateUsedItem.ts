import { Modal } from "antd";
import type { ICreateUseditemInput } from "../../../../commons/types/generated/types";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";
import { useMoveToPage } from "./useMoveToPage";

interface IUseCreateUseditemProps {
  onClickCreateUsedItem: (data: ICreateUseditemInput) => Promise<void>;
}

export const useCreateUsedItem = (): IUseCreateUseditemProps => {
  const [createUsedItem] = useMutationCreateUseditem();
  const { onClickMoveToPage } = useMoveToPage();
  const onClickCreateUsedItem = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const price = Number(data.price);
    const createUseditemInput = { ...data, price };

    try {
      await createUsedItem({
        variables: { createUseditemInput },
      });
      Modal.success({
        content: "게시물이 등록되었습니다.",
        onOk: onClickMoveToPage("/productShop"),
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { onClickCreateUsedItem };
};
