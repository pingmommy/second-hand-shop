import { useForm } from "react-hook-form";
import * as S from "./SignIn.style";
import { ValidationBtn } from "../../commons/button/02";
import { CardWrapper2 } from "../../commons/wrapper/wrapper";
import { Input02 } from "../../commons/input/02";
import { Logo } from "../../commons/layout/header/LayoutHeader.style";
import Link from "next/link";

export default function SignIn(): JSX.Element {
  const { register } = useForm();
  return (
    <>
      <S.LogoWrapper>
        <Link href="/freeBoard">
          <Logo>SecondHand</Logo>
        </Link>
      </S.LogoWrapper>
      <CardWrapper2>
        <S.Title>
          이것만 <S.Strong>체크</S.Strong>하면 가입완료!
        </S.Title>
        <form>
          <Input02
            label="비밀번호"
            register={register("email")}
            placeholder="이메일을 입력해주세요."
          />
          <Input02
            label="비밀번호"
            register={register("password")}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.Input placeholder="비밀번호를 한 번 더 입력해주세요." />
          <Input02
            label="닉네임"
            register={register("name")}
            placeholder="별명을 입력해주세요."
          />
          <S.ButtonWrapper>
            <ValidationBtn>버튼만 누르면 가입완료!</ValidationBtn>
          </S.ButtonWrapper>
        </form>
      </CardWrapper2>
    </>
  );
}
