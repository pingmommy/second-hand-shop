import Link from "next/link";
import * as S from "./BoardListFooter.style";
export default function BoarListFooter(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Pagination>
          <S.page>&lt;</S.page>
          {new Array(10).fill(0).map((_, index) => (
            <S.page key={index}>{index + 1}</S.page>
          ))}
          <S.page>&gt;</S.page>
        </S.Pagination>
        <Link href={"/freeBoard/new"}>
          <S.WriteBtn>글 등록하기</S.WriteBtn>
        </Link>
      </S.Wrapper>
    </>
  );
}
