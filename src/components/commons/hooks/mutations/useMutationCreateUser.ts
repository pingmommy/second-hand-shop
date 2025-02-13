import { gql, useMutation } from "@apollo/client";
import type {
  ApolloCache,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export const useMutationCreateUser = (): MutationTuple<
  Pick<IMutation, "createUser">,
  IMutationCreateUserArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  return mutation;
};
