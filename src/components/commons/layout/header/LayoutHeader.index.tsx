import Link from "next/link";
import * as S from "./LayoutHeader.style";

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <Link href="/freeBoard">
            <S.Logo>SecondHand</S.Logo>
          </Link>
          <Link href="/freeBoard">
            <S.NavLink>자유게시판</S.NavLink>
          </Link>
          <Link href={""}>
            <S.NavLink>중고마켓</S.NavLink>
          </Link>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <Link href={""}>
            <S.NavLink>로그인</S.NavLink>
          </Link>
          <Link href={""}>
            <S.SignInLink>회원가입</S.SignInLink>
          </Link>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
