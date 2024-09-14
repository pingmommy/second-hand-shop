import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface IResetPasswordReturn {
  resetPassword: (password: string) => Promise<void>;
}

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const useMutationResetUserPassword = (): IResetPasswordReturn => {
  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const router = useRouter();

  const moveToLogIn = (): void => {
    void router.push("/logIn");
  };

  const resetPassword = async (password: string): Promise<void> => {
    try {
      await resetUserPassword({ variables: { password } });
      Modal.success({
        content: "비밀번호가 변경되었습니다.",
        onOk: moveToLogIn,
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return { resetPassword };
};
