import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ValidationBtn } from "../../commons/ui/button/02";
import { CardWrapper2 } from "../../commons/ui/wrapper/wrapper";
import { Input02 } from "../../commons/ui/input/02";
import { ButtonWrapper, LogoWrapper, Title } from "../signIn/SignIn.style";
import { Logo } from "../../commons/layout/header/LayoutHeader.style";
import { useMutationLoginUser } from "../../commons/hooks/mutations/useMutationLoginUser";
import type { IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { useAccessToken, useLogIn } from "../../../commons/stores";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./LogIn.validationSchema";
import { Modal } from "antd";

export default function LogIn(): JSX.Element {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IMutationLoginUserArgs>({
    resolver: yupResolver(schema),
  });

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
        Modal.info({ content: err.message });
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
          <Input02
            label="이메일"
            register={register("email")}
            errMessage={errors.email?.message}
          />
          <Input02
            label="비밀번호"
            register={register("password")}
            errMessage={errors.password?.message}
          />
          <ButtonWrapper>
            <ValidationBtn isValid={isValid}>로그인하기</ValidationBtn>
          </ButtonWrapper>
        </form>
      </CardWrapper2>
    </>
  );
}
