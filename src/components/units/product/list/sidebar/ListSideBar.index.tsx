import Link from "next/link";
import * as S from "./ListSideBar.style";

export default function SideBar(): JSX.Element {
  return (
    <>
      <S.SideWrapper>
        <S.SideInnerWrapper>
          <S.SideTitle>오늘 본 상품</S.SideTitle>
          <S.SideImgBox></S.SideImgBox>
          <S.SideImgBox></S.SideImgBox>
          <S.SideImgBox></S.SideImgBox>
        </S.SideInnerWrapper>
        <div>
          <Link href="/productShop/new">
            <S.RegisterProdBtn>상품등록</S.RegisterProdBtn>
          </Link>
        </div>
      </S.SideWrapper>
    </>
  );
}
