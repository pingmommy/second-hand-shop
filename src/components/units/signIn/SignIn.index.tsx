import { useForm } from "react-hook-form";
import * as S from "./SignIn.style";
import { CardWrapper2 } from "../../commons/wrapper/wrapper";
import { Input02 } from "../../commons/input/02";
import { Logo } from "../../commons/layout/header/LayoutHeader.style";
import Link from "next/link";
import type { ICreateUserInput } from "../../../commons/types/generated/types";
import { useCreateUser } from "../../commons/hooks/customs/useCreateUser";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { schema } from "./SignIn.validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignIn(): JSX.Element {
  const { onClickCreateUser } = useCreateUser();

  const [isMatch, setIsMatch] = useState(true);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<ICreateUserInput>({ resolver: yupResolver(schema) });

  const creatingUser = (data: ICreateUserInput): void => {
    void onClickCreateUser(data);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    const password = getValues("password");

    if (password === event.target.value) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

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
        <form onSubmit={handleSubmit(creatingUser)}>
          <Input02
            label="이메일"
            register={register("email")}
            placeholder="이메일을 입력해주세요."
          />
          <Input02
            type="password"
            label="비밀번호"
            register={register("password")}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.InputWrapper>
            <S.Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              onChange={onChangePassword}
            />
            {!isMatch && (
              <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <Input02
            label="닉네임"
            register={register("name")}
            placeholder="별명을 입력해주세요."
          />
          <S.ButtonWrapper>
            <S.SignInBtn isValid={isValid}>버튼만 누르면 가입완료!</S.SignInBtn>
          </S.ButtonWrapper>
        </form>
      </CardWrapper2>
    </>
  );
}
