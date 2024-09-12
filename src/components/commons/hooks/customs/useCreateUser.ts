import { useRouter } from "next/router";
import type { ICreateUserInput } from "../../../../commons/types/generated/types";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";

interface IUseCreateUserProps {
  onClickCreateUser: (data: ICreateUserInput) => Promise<void>;
}

export const useCreateUser = (): IUseCreateUserProps => {
  const router = useRouter();
  const [createUser] = useMutationCreateUser();

  const onClickCreateUser = async (data: ICreateUserInput): Promise<void> => {
    try {
      const result = await createUser({
        variables: { createUserInput: { ...data } },
      });

      console.log(result);

      void router.push("/logIn");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  return { onClickCreateUser };
};
