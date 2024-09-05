import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";
import * as S from "../myPage.style";
import { GhostButton } from "../../../commons/button/02";
import Search03 from "../../../commons/search/03/Search.index";
import { getDate } from "../../../../commons/libraries/getDate";

const MY_POINT_LIST = [
  { title: "전체내역", id: "all-history" },
  { title: "충전내역", id: "charge-history" },
  { title: "구매내역", id: "purchase-history" },
  { title: "판매내역", id: "sale-history" },
];

export default function MyPoint({ page }: any): JSX.Element {
  const [isSelected, setIsSelected] = useState("all-history");

  const onClickCategory = (event: MouseEvent<HTMLButtonElement>): void => {
    setIsSelected(event.currentTarget.id);
  };
  return (
    <>
      <S.PageHeader>
        <S.ButtonWrapper>
          {MY_POINT_LIST.map((el) =>
            el.id === isSelected ? (
              <S.SelectedButton key={el.id}>{el.title}</S.SelectedButton>
            ) : (
              <GhostButton key={el.id} onClick={onClickCategory} id={el.id}>
                {el.title}
              </GhostButton>
            )
          )}
        </S.ButtonWrapper>
        <div style={{ width: "50%" }}>
          <Search03 />
        </div>
      </S.PageHeader>
      <S.TableWrapper>
        <S.Trow>
          <S.T_Head>번호</S.T_Head>
          <S.T_Title>상품명</S.T_Title>
          <S.T_Head>판매가격</S.T_Head>
          <S.T_Head>날짜</S.T_Head>
        </S.Trow>

        <S.Trow>
          <S.T_Colum>1312</S.T_Colum>
          <Link href={`/freeBoard`}>
            <S.T_Colum_title>기계식 키보드팔아요</S.T_Colum_title>
          </Link>
          <S.T_Colum>₩ 2.000</S.T_Colum>

          <S.T_Colum>{getDate(String(`1234-05-05`))}</S.T_Colum>
        </S.Trow>
      </S.TableWrapper>
    </>
  );
}
