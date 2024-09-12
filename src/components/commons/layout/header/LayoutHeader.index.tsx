import Link from "next/link";
import * as S from "./LayoutHeader.style";
import { useLogIn } from "../../../../commons/stores";
import LoggedInHeader from "./loggedIn/LoggedIn.index";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";

export default function LayoutHeader(): JSX.Element {
  const isLoggedIn = useLogIn((state) => state.isLoggedIn);

  const { data } = useQueryFetchUserLoggedIn();
  console.log(data);

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
        {isLoggedIn ? (
          <div style={{ marginRight: "6rem" }}>
            <LoggedInHeader data={data} />
          </div>
        ) : (
          <S.InnerWrapper>
            <Link href="/logIn">
              <S.NavLink>로그인</S.NavLink>
            </Link>
            <Link href="/signIn">
              <S.SignInLink>회원가입</S.SignInLink>
            </Link>
          </S.InnerWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
