import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";

interface IPickReturn {
  handleToggleUsedItemPick: (useditemId: string) => Promise<void>;
}

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationUsedItemPick = (): IPickReturn => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">
  >(TOGGLE_USED_ITEM_PICK);

  const handleToggleUsedItemPick = async (
    useditemId: string
  ): Promise<void> => {
    try {
      const result = await toggleUseditemPick({ variables: { useditemId } });
      console.log("pick", result);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { handleToggleUsedItemPick };
};
