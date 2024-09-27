import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import * as S from "./LoggedIn.style";
import { MyIcon } from "../../../ui/icon/MyIcon.index";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { useMutationLogoutUser } from "../../../hooks/mutations/useMutationLogoutUser";
import { useMoveToPage } from "../../../hooks/customs/useMoveToPage";
import { useOpen, usePage } from "../../../../../commons/stores";
import { useState } from "react";

interface ILoggedInProps {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export default function LoggedInHeader({ data }: ILoggedInProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const setPage = usePage((state) => state.setPage);
  const setIsOpen = useOpen((state) => state.setIsOpen);
  const { onClickLogoutUser } = useMutationLogoutUser();

  const { onClickMoveToPage } = useMoveToPage();

  const moveToLoadPoint = (): void => {
    setPage("point");
    setIsOpen(true);
    setOpen(false);
    onClickMoveToPage("/myPage")();
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };
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
      <S.MenuItem onClick={moveToLoadPoint}>
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
    <>
      <Popover
        content={content}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
      >
        <Avatar size="large" icon={<UserOutlined />} />
        <S.ToggleBox
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <CaretDownOutlined />
        </S.ToggleBox>
      </Popover>
    </>
  );
}
