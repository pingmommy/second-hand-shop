import Link from "next/link";
import * as S from "./LayoutHeader.style";

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Link href="/freeBoard">
          <S.Logo>SecondHand</S.Logo>
        </Link>
        <S.FlexBox_H>
          <Link href="/freeBoard">
            <S.Link>자유게시판</S.Link>
          </Link>
          <Link href={""}>
            <S.Link>중고마켓</S.Link>
          </Link>
          <Link href={""}>
            <S.Link>마이페이지</S.Link>
          </Link>
        </S.FlexBox_H>
      </S.Wrapper>
    </>
  );
}
