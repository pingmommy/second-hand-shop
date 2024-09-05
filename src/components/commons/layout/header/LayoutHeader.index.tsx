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
          <Link href="/productShop">
            <S.NavLink>중고마켓</S.NavLink>
          </Link>
          <Link href="/myPage">
            <S.NavLink>마이페이지</S.NavLink>
          </Link>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <Link href="/logIn">
            <S.NavLink>로그인</S.NavLink>
          </Link>
          <Link href="/signIn">
            <S.SignInLink>회원가입</S.SignInLink>
          </Link>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
