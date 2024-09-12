import * as S from "./ListSideBar.style";
import { useAccessToken } from "../../../../../commons/stores";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function SideBar(): JSX.Element {
  const router = useRouter();
  const accessToken = useAccessToken((state) => state.accessToken);

  const onclickLogInCheck = (): void => {
    const MoveToLogIn = (): void => {
      void router.push("/logIn");
    };

    if (accessToken === "") {
      Modal.confirm({
        content: "로그인 후 이용가능합니다.",
        onOk: MoveToLogIn,
      });
    } else {
      void router.push("/productShop/new");
    }
  };

  return (
    <>
      <S.SideWrapper>
        <S.SideInnerWrapper>
          <S.SideTitle>오늘 본 상품</S.SideTitle>
          <S.SideImgBox></S.SideImgBox>
          <S.SideImgBox></S.SideImgBox>
          <S.SideImgBox></S.SideImgBox>
        </S.SideInnerWrapper>
        <div>
          <S.RegisterProdBtn onClick={onclickLogInCheck}>
            상품등록
          </S.RegisterProdBtn>
        </div>
      </S.SideWrapper>
    </>
  );
}
