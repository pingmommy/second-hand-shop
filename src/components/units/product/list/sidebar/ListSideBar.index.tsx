import * as S from "./ListSideBar.style";
import { useAccessToken } from "../../../../../commons/stores";
import { Modal } from "antd";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const BASE_URL = "https://storage.googleapis.com/";

export default function SideBar(): JSX.Element {
  const accessToken = useAccessToken((state) => state.accessToken);
  const { onCompleteMoveToPage } = useMoveToPage();
  const [todayList, setTodayList] = useState([]);
  const [startIdx, setStartIdx] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const todayViewedItemsList = JSON.parse(
      localStorage.getItem("todayViewedItems") ?? "[]"
    );
    setTodayList([...todayViewedItemsList]);
  }, []);

  const onclickLogInCheck = (): void => {
    if (accessToken === "") {
      Modal.confirm({
        content: "로그인 후 이용가능합니다.",
        onOk: onCompleteMoveToPage("/logIn"),
      });
    } else {
      onCompleteMoveToPage("/productShop/new")();
    }
  };

  const lastPage = Math.ceil(todayList.length / 3);

  const aa = (): void => {
    setStartIdx((prev) => prev + 3);
    setCurrentPage((prev) => prev + 1);
  };

  const bb = (): void => {
    setStartIdx((prev) => prev - 3);
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <>
      <S.SideWrapper>
        <S.SideInnerWrapper>
          <S.SideTitle>오늘 본 상품</S.SideTitle>
          {todayList.map(
            (item, idx) =>
              startIdx <= idx &&
              idx < startIdx + 3 && (
                <S.SideImgBox key={item.id}>
                  <Image
                    src={BASE_URL + item.image}
                    layout="fill"
                    objectFit="cover"
                  />
                </S.SideImgBox>
              )
          )}
          <S.Page>
            <LeftOutlined onClick={bb} />
            <span>{currentPage}</span>/<span>{lastPage}</span>
            <RightOutlined onClick={aa} />
          </S.Page>
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
