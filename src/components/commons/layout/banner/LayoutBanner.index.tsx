import * as S from "./LayoutBanner.style";

export default function LayoutBanner(): JSX.Element {
  return (
    <>
      <S.wrapper>
        <S.TextBox>
          <S.TextS1>필요한 물건! 합리적 가격!</S.TextS1>
          <p>
            <S.TextStrong> SecondHand</S.TextStrong>
            <S.TextS3> 에서</S.TextS3>
          </p>
          <S.TextS2>지금 만나보세요!</S.TextS2>
        </S.TextBox>
        <S.ImageBox>
          <S.Img src="/images/banner.png"></S.Img>
        </S.ImageBox>
      </S.wrapper>
    </>
  );
}
