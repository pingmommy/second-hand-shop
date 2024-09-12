import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      balance
      status
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = (): MutationTuple<
  Pick<IMutation, "createPointTransactionOfLoading">,
  IMutationCreatePointTransactionOfLoadingArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING, { variables: { impUid: "" } });

  return mutation;
};
