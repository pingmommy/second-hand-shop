import { gql, useApolloClient, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useAccessToken } from "../../../../commons/stores";

interface ILogoutProps {
  onClickLogoutUser: () => Promise<void>;
}

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLogoutUser = (): ILogoutProps => {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const setAccessToken = useAccessToken((state) => state.setToken);
  const client = useApolloClient();

  const onClickLogoutUser = async (): Promise<void> => {
    try {
      setAccessToken("");
      void client.clearStore();
      const result = await logoutUser();
      console.log(result);
      void router.push("/freeBoard");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { onClickLogoutUser };
};
