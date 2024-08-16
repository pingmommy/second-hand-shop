import { getDate } from "../../../../../../commons/libraries/getDate";
import * as S from "./BoardDetailMainTop.styles";

export default function BoardDetailMainTop(props: any): JSX.Element {
  return (
    <>
      <S.Header>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <S.userWrapper>
          <S.Avatar src="/icons/avatar.png" />
          <div>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.Date>
              {getDate(String(props.data?.fetchBoard?.createdAt))}
            </S.Date>
          </div>
          <S.IconWrapper>
            <S.IconBox title="">
              <S.Icon>
                <img src="/icons/ic_link-24px.svg" />
              </S.Icon>
            </S.IconBox>
            <S.IconBox
              title={
                props.data?.fetchBoard?.boardAddress != null
                  ? `${props.data?.fetchBoard?.boardAddress.address} ${props.data?.fetchBoard?.boardAddress.addressDetail}`
                  : ""
              }
            >
              <S.Icon>
                <img src="/icons/ic_location_on-24px.svg" />
              </S.Icon>
            </S.IconBox>
          </S.IconWrapper>
        </S.userWrapper>
      </S.Header>
    </>
  );
}
