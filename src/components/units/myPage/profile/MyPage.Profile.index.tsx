import { ValidationBtn } from "../../../commons/button/02";
import * as S from "./MyPage.Profile.style";

export default function MyProfile(): JSX.Element {
  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileTitle>비밀번호 변경</S.ProfileTitle>
        <form>
          <S.ProfileInnerWrapper>
            <S.LabelWrapper>
              <S.ProfileLabel>현재 비밀번호</S.ProfileLabel>
            </S.LabelWrapper>
            <S.ProfileInput placeholder="현재 비밀번호를 입력해 주세요." />
          </S.ProfileInnerWrapper>
          <S.ProfileInnerWrapper>
            <S.LabelWrapper>
              <S.ProfileLabel>새 비밀번호</S.ProfileLabel>
            </S.LabelWrapper>
            <S.ProfileInput placeholder="새 비밀번호를 입력해 주세요." />
          </S.ProfileInnerWrapper>
          <S.ProfileInnerWrapper>
            <S.LabelWrapper>
              <S.ProfileLabel>새 비밀번호 확인</S.ProfileLabel>
            </S.LabelWrapper>
            <S.ProfileInput placeholder="새 비밀번호를 확인해 주세요." />
          </S.ProfileInnerWrapper>
          <S.BtnWrapper>
            <ValidationBtn>비밀번호 변경</ValidationBtn>
          </S.BtnWrapper>
        </form>
      </S.ProfileWrapper>
    </>
  );
}
