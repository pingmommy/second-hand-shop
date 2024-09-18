import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

export const useMutationUpdateUsedItem = (): MutationTuple<
  Pick<IMutation, "updateUseditem">,
  IMutationUpdateUseditemArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  return mutation;
};
