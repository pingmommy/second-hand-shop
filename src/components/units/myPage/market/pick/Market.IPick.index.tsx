import Link from "next/link";
import * as S from "../../myPage.style";
import { getDate } from "../../../../../commons/libraries/getDate";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IPickProps {
  data: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
}

export default function MyPick({ data }: IPickProps): JSX.Element {
  return (
    <S.TableWrapper>
      <S.Trow colCount={4}>
        <S.THead>번호</S.THead>
        <S.THead>상품명</S.THead>
        <S.THead></S.THead>
        <S.THead>판매가격</S.THead>
        <S.THead>판매자</S.THead>
        <S.THead>날짜</S.THead>
      </S.Trow>

      {data?.fetchUseditemsIPicked.map((item, idx) => (
        <S.Trow colCount={4} key={item._id}>
          <S.TColum>{idx + 1}</S.TColum>
          <Link href={`/freeBoard`}>
            <S.TColum_title>{item.name}</S.TColum_title>
          </Link>
          <S.TStatus>판매완료</S.TStatus>
          <S.TColum>₩ 2.000</S.TColum>
          <S.TColum>춘향이</S.TColum>
          <S.TColum>{getDate(String(`1234-05-05`))}</S.TColum>
        </S.Trow>
      ))}
    </S.TableWrapper>
  );
}
