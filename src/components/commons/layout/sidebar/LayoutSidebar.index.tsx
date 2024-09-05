import { ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import * as S from "./LayoutSidebar.style";
import type { MouseEvent } from "react";

const MYPAGE_LIST = [
  {
    icon: <ShoppingCartOutlined />,
    title: "내 장터",
    id: "market",
  },
  {
    icon: <SmileOutlined />,
    title: "내 포인트",
    id: "point",
  },
  {
    icon: <S.MyPageAvatarSmall />,
    title: "내 프로필",
    id: "profile",
  },
];

export default function LayoutSideBar({ setPage, page }: any): JSX.Element {
  const onClickCategory = (event: MouseEvent<HTMLAnchorElement>): void => {
    setPage(event.currentTarget.id);
  };

  return (
    <S.SidebarInnerWrapper>
      <S.MyPageTitle>MY PAGE</S.MyPageTitle>

      <S.MyPageAvatar />

      <S.userName>이정숙</S.userName>
      <S.userInfo>
        <S.InfoIcon />
        <S.MyPageCategory>10.000</S.MyPageCategory>
      </S.userInfo>
      {MYPAGE_LIST.map((el) =>
        el.id === page ? (
          <S.SelectedCategory key={el.title}>
            <span className="Icon">{el.icon}</span>
            <S.MyPageCategory>{el.title}</S.MyPageCategory>
          </S.SelectedCategory>
        ) : (
          <S.MyPageCategoryBox
            key={el.title}
            id={el.id}
            onClick={onClickCategory}
          >
            <span className="Icon">{el.icon}</span>
            <S.MyPageCategory>{el.title}</S.MyPageCategory>
          </S.MyPageCategoryBox>
        )
      )}
    </S.SidebarInnerWrapper>
  );
}
