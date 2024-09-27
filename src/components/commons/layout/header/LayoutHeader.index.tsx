import Link from "next/link";
import * as S from "./LayoutHeader.style";
import { useLogIn } from "../../../../commons/stores";
import LoggedInHeader from "./loggedIn/LoggedIn.index";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";
import { useState } from "react";

const NAV_LIST = [
  { href: "/freeBoard", name: "자유게시판" },
  { href: "/productShop", name: "중고마켓" },
  { href: "/myPage", name: "마이페이지" },
];

export default function LayoutHeader(): JSX.Element {
  const isLoggedIn = useLogIn((state) => state.isLoggedIn);
  const [activePage, setActivePage] = useState(0);

  const { data } = useQueryFetchUserLoggedIn();

  const aa = (idx: number) => () => {
    setActivePage(idx);
  };

  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <Link href="/freeBoard">
            <S.Logo>SecondHand</S.Logo>
          </Link>
          {NAV_LIST.map((el, idx) => (
            <Link href={el.href} key={el.href}>
              <S.NavLink isActive={idx === activePage} onClick={aa(idx)}>
                {el.name}
              </S.NavLink>
            </Link>
          ))}
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
