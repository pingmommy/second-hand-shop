import * as S from "./LayoutSidebar.style";
import { MyIcon } from "../../ui/icon/MyIcon.index";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";

const MYPAGE_LIST = [
  {
    icon: <MyIcon iconName="shopping_cart" />,
    title: "내 장터",
    id: "market",
  },
  {
    icon: <MyIcon iconName="savings" />,
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
  const { data } = useQueryFetchUserLoggedIn();

  const onClickCategory = (page: string) => (): void => {
    setPage(page);
  };

  return (
    <S.SidebarInnerWrapper>
      <S.MyPageTitle>MY PAGE</S.MyPageTitle>

      <S.MyPageAvatar />

      <S.userName>{data?.fetchUserLoggedIn.name}</S.userName>
      <S.userInfo>
        <MyIcon iconName="savings" />
        <S.MyPageCategory>
          {data?.fetchUserLoggedIn.userPoint?.amount}
        </S.MyPageCategory>
      </S.userInfo>
      {MYPAGE_LIST.map((el) =>
        el.id === page ? (
          <S.SelectedCategory key={el.title}>
            <span className="Icon">{el.icon}</span>
            <S.MyPageCategory>{el.title}</S.MyPageCategory>
          </S.SelectedCategory>
        ) : (
          <S.MyPageCategoryBox key={el.title} onClick={onClickCategory(el.id)}>
            <span className="Icon">{el.icon}</span>
            <S.MyPageCategory>{el.title}</S.MyPageCategory>
          </S.MyPageCategoryBox>
        )
      )}
    </S.SidebarInnerWrapper>
  );
}
