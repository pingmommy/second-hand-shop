import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import * as S from "./LoggedIn.style";
import { MyIcon } from "../../../icon/MyIcon.index";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { useMutationLogoutUser } from "../../../hooks/mutations/useMutationLogoutUser";
import { useCreatePointTransactionOfLoading } from "../../../hooks/customs/useCreatePointTransactionOfLoading";

interface ILoggedInProps {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export default function LoggedInHeader({ data }: ILoggedInProps): JSX.Element {
  const { onClickLogoutUser } = useMutationLogoutUser();
  const { chargingPoint } = useCreatePointTransactionOfLoading();
  const content = (
    <aside>
      <S.UserInfoWrapper>
        <Avatar size="large" icon={<UserOutlined />} />
        <S.UserInfo>
          <S.UserInfoItem>{data?.fetchUserLoggedIn.name}</S.UserInfoItem>
          <S.UserInfoItem>
            {data?.fetchUserLoggedIn.userPoint?.amount} P
          </S.UserInfoItem>
        </S.UserInfo>
      </S.UserInfoWrapper>
      <S.MenuItem onClick={chargingPoint}>
        <MyIcon iconName="savings" />
        <S.MenuText>충전하기</S.MenuText>
      </S.MenuItem>
      <S.MenuItem onClick={onClickLogoutUser}>
        <MyIcon iconName="logout" />
        <S.MenuText>로그아웃</S.MenuText>
      </S.MenuItem>
    </aside>
  );

  return (
    <Popover content={content} trigger="click">
      <Avatar size="large" icon={<UserOutlined />} />
      <S.ToggleBox>
        <CaretDownOutlined />
      </S.ToggleBox>
    </Popover>
  );
}
