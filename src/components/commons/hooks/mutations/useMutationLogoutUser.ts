import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

interface ILogoutProps {
  onClickLogoutUser: () => Promise<void>;
}

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLogoutUser = (): ILogoutProps => {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickLogoutUser = async (): Promise<void> => {
    try {
      await logoutUser();
      void router.push("/freeBoard");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { onClickLogoutUser };
};
