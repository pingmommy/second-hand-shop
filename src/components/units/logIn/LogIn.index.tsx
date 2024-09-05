import { useForm } from "react-hook-form";
import { PrimaryColorBtn } from "../../commons/button/02";
import { CardWrapper2 } from "../../commons/wrapper/wrapper";
import { Input02 } from "../../commons/input/02";
import { ButtonWrapper, LogoWrapper, Title } from "../signIn/SignIn.style";
import Link from "next/link";
import { Logo } from "../../commons/layout/header/LayoutHeader.style";

export default function LogIn(): JSX.Element {
  const { register } = useForm();
  return (
    <>
      <LogoWrapper>
        <Link href="/freeBoard">
          <Logo>SecondHand</Logo>
        </Link>
      </LogoWrapper>
      <CardWrapper2>
        <Title>로그인</Title>
        <form>
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
