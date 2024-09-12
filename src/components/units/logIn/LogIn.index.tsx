import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { PrimaryColorBtn } from "../../commons/button/02";
import { CardWrapper2 } from "../../commons/wrapper/wrapper";
import { Input02 } from "../../commons/input/02";
import { ButtonWrapper, LogoWrapper, Title } from "../signIn/SignIn.style";
import { Logo } from "../../commons/layout/header/LayoutHeader.style";
import { useMutationLoginUser } from "../../commons/hooks/mutations/useMutationLoginUser";
import type { IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { useAccessToken, useLogIn } from "../../../commons/stores";

export default function LogIn(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IMutationLoginUserArgs>();
  const [loginUser] = useMutationLoginUser();
  const setAccessToken = useAccessToken((state) => state.setToken);
  const setLoggedIn = useLogIn((state) => state.setIsLoggedIn);
  const handleLogin = async (data: IMutationLoginUserArgs): Promise<void> => {
    try {
      const result = await loginUser({ variables: { ...data } });
      setAccessToken(result?.data?.loginUser.accessToken ?? "");
      console.log(result?.data?.loginUser.accessToken);
      void router.push("/productShop");
      setLoggedIn(true);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  return (
    <>
      <LogoWrapper>
        <Link href="/freeBoard">
          <Logo>SecondHand</Logo>
        </Link>
      </LogoWrapper>
      <CardWrapper2>
        <Title>로그인</Title>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input02 label="이메일" register={register("email")} />
          <Input02 label="비밀번호" register={register("password")} />
          <ButtonWrapper>
            <PrimaryColorBtn>로그인하기</PrimaryColorBtn>
          </ButtonWrapper>
        </form>
      </CardWrapper2>
    </>
  );
}
