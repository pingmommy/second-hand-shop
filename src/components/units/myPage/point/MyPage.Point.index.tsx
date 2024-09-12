import Link from "next/link";
import { useState } from "react";
import * as S from "../myPage.style";
import { getDate } from "../../../../commons/libraries/getDate";
import SearchBarWithBtn from "../../../commons/search/searchBarWithBtn/SearchBarWithBtn";
import { useQueryFetchPointTransactions } from "../../../commons/hooks/queries/useQueryFetchPointTransactions";
import { useQueryFetchPointTransactionsOfLoading } from "../../../commons/hooks/queries/useQueryFetchPointTransactionsOfLoading";
import { useQueryFetchPointTransactionsOfBuying } from "../../../commons/hooks/queries/useQueryFetchPointTransactionsOfBuying";
import { useQueryFetchPointTransactionsOfSelling } from "../../../commons/hooks/queries/useQueryFetchPointTrasactionsOfSelling";

const MY_POINT_LIST = [
  { title: "전체내역", id: "all-history" },
  { title: "충전내역", id: "charge-history" },
  { title: "구매내역", id: "purchase-history" },
  { title: "판매내역", id: "sale-history" },
];

export default function MyPoint({ page }: any): JSX.Element {
  const { data } = useQueryFetchPointTransactions(1, ""); // 전체
  const { data: LD } = useQueryFetchPointTransactionsOfLoading(1, ""); // 충전
  const { data: BD } = useQueryFetchPointTransactionsOfBuying(1, ""); // 구매
  const { data: SD } = useQueryFetchPointTransactionsOfSelling(1, ""); // 판매
  const [keyword, setKeyword] = useState("");

  const handleRefetch = (value: string): void => {
    console.log(value);
  };
  return (
    <>
      <S.PageHeader>
        <SearchBarWithBtn
          list={MY_POINT_LIST}
          setKeyword={setKeyword}
          onSearch={handleRefetch}
        />
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
