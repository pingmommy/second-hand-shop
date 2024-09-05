import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import * as S from "./address.styles";
import type { IPostcodeProps02 } from "./address.types";

export default function Postcode02({
  setAddress,
  userAddress,
}: IPostcodeProps02): JSX.Element {
  const open = useDaumPostcodePopup();

  const handleComplete = ({ address, zonecode: zipcode }: Address): void => {
    setAddress({ address, zipcode });
  };

  const handleClick = async (): Promise<void> => {
    await open({ onComplete: handleComplete });
  };

  return (
    <>
      <S.InnerWrapper>
        <S.Title>주소</S.Title>
        <S.flexWrap_H>
          <S.ZipCode placeholder="22531" value={userAddress.zipcode} readOnly />
          <S.ZipCodeBtn type="button" onClick={handleClick}>
            우편번호 검색
          </S.ZipCodeBtn>
        </S.flexWrap_H>
        <S.Margin_B_10 />
        <S.Input value={userAddress.address} readOnly />
        <S.Margin_B_10 />
        <S.Input type="text" placeholder="상세주소를 입력해주세요." />
      </S.InnerWrapper>
    </>
  );
}
