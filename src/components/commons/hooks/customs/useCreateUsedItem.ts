import type { ICreateUseditemInput } from "../../../../commons/types/generated/types";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";

interface IUseCreateUseditemProps {
  onClickCreateUsedItem: (data: ICreateUseditemInput) => Promise<void>;
}

export const useCreateUsedItem = (): IUseCreateUseditemProps => {
  const [createUsedItem] = useMutationCreateUseditem();

  const onClickCreateUsedItem = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const price = Number(data.price);
    const createUseditemInput = { ...data, price };

    try {
      await createUsedItem({
        variables: { createUseditemInput },
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { onClickCreateUsedItem };
};
