import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import * as S from "./address.styles";
interface IPostcodeProps {
  userAddress: {
    address: string;
    zipcode: string;
    addressDetail: string;
  };
  setAddress: Dispatch<
    SetStateAction<{
      address: string;
      zipcode: string;
      addressDetail: string;
    }>
  >;
}

export default function Postcode(props: IPostcodeProps): JSX.Element {
  const open = useDaumPostcodePopup();

  const handleComplete = ({ address, zonecode: zipcode }: Address): void => {
    props.setAddress({ ...props.userAddress, address, zipcode });
  };

  const handleClick = async (): Promise<void> => {
    await open({ onComplete: handleComplete });
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    props.setAddress({
      ...props.userAddress,
      addressDetail: event.target.value,
    });
  };
  return (
    <>
      <S.InnerWrapper>
        <S.Title>주소</S.Title>
        <S.flexWrap_H>
          <S.ZipCode
            placeholder="22531"
            readOnly
            value={props.userAddress.zipcode}
          />
          <S.ZipCodeBtn onClick={handleClick}>우편번호 검색</S.ZipCodeBtn>
        </S.flexWrap_H>
        <S.Margin_B_10 />
        <S.Input readOnly value={props.userAddress.address} />
        <S.Margin_B_10 />
        <S.Input
          type="text"
          placeholder="상세주소를 입력해주세요."
          onChange={onChangeAddressDetail}
          value={props.userAddress.addressDetail}
        />
      </S.InnerWrapper>
    </>
  );
}
