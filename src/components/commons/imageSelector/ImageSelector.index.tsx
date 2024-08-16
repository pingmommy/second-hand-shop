import * as S from "./ImageSelector.style";

export const ImageSelector = (): JSX.Element => {
  return (
    <>
      <S.InnerWrapper>
        <S.Title>사진첨부</S.Title>
        <S.flexWrap_H>
          <S.UserSelectImg>+</S.UserSelectImg>
          <S.UserSelectImg>+</S.UserSelectImg>
          <S.UserSelectImg>+</S.UserSelectImg>
        </S.flexWrap_H>
      </S.InnerWrapper>
    </>
  );
};
