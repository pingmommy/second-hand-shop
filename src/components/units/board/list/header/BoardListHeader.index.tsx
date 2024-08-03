import * as S from "./BoardListHeader.style";

export default function BoarListHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.title>베스트 게시글</S.title>
        <S.InnerWrapper>
          <S.TextBox>
            <S.Img src="/images/best_contents.png" />
          </S.TextBox>
          <S.TextBox>
            <S.Img src="/images/best_contents02.png" />
          </S.TextBox>
          <S.TextBox>
            <S.Img src="/images/best_contents.png" />
          </S.TextBox>
          <S.TextBox>
            <S.Img src="/images/best_contents02.png" />
          </S.TextBox>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
