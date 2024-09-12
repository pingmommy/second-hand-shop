import { Avatar } from "antd";
import { getDate } from "../../../../../commons/libraries/getDate";
import type { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "./ProductDetailHeader.styles";
import { UserOutlined } from "@ant-design/icons";

export default function ProductDetailHeader({
  data,
}: {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}): JSX.Element {
  return (
    <>
      <S.Header>
        <S.userWrapper>
          <Avatar size="large" icon={<UserOutlined />} />
          <div style={{ marginLeft: "0.5rem" }}>
            <S.Writer>{data?.fetchUseditem.seller?.name}</S.Writer>
            <S.Date>{getDate(String(data?.fetchUseditem.createdAt))}</S.Date>
          </div>
          <S.IconWrapper>
            <S.IconBox title="">
              <S.Icon>
                <img src="/icons/ic_link-24px.svg" />
              </S.Icon>
            </S.IconBox>
            <S.IconBox
              title={
                data?.fetchUseditem?.useditemAddress != null
                  ? `${data?.fetchUseditem?.useditemAddress.address} ${data?.fetchUseditem?.useditemAddress.addressDetail}`
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
