import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import * as S from "./address.styles";
import type { IPostcodeProps } from "./address.types";

export default function Postcode(props: IPostcodeProps): JSX.Element {
  const [userAddress, setUserAddress] = useState({
    address: props.data?.fetchBoard?.boardAddress?.address ?? "",
    zipcode: props.data?.fetchBoard?.boardAddress?.zipcode ?? "",
  });

  const open = useDaumPostcodePopup();

  const handleComplete = ({ address, zonecode: zipcode }: Address): void => {
    setUserAddress({ address, zipcode });
    props.setValue("boardAddress.address", address);
    props.setValue("boardAddress.zipcode", zipcode);
  };

  const handleClick = async (): Promise<void> => {
    await open({ onComplete: handleComplete });
  };

  return (
    <>
      <S.InnerWrapper>
        <S.Title>주소</S.Title>
        <S.flexWrap_H>
          <S.ZipCode placeholder="22531" readOnly value={userAddress.zipcode} />
          <S.ZipCodeBtn type="button" onClick={handleClick}>
            우편번호 검색
          </S.ZipCodeBtn>
        </S.flexWrap_H>
        <S.Margin_B_10 />
        <S.Input readOnly value={userAddress.address} />
        <S.Margin_B_10 />
        <S.Input
          type="text"
          placeholder="상세주소를 입력해주세요."
          defaultValue={""}
          {...props.register("boardAddress.addressDetail")}
        />
      </S.InnerWrapper>
    </>
  );
}
