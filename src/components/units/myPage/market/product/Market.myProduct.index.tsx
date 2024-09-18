import Link from "next/link";
import * as S from "../../myPage.style";
import { getDate } from "../../../../../commons/libraries/getDate";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IMyProdProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
}

export default function MyProduct({ data }: IMyProdProps): JSX.Element {
  return (
    <S.TableWrapper>
      <S.Trow colCount={3}>
        <S.THead>번호</S.THead>
        <S.THead>상품명</S.THead>
        <S.THead></S.THead>
        <S.THead>판매가격</S.THead>
        <S.THead>날짜</S.THead>
      </S.Trow>

      {data?.fetchUseditemsISold.map((item, idx) => (
        <S.Trow colCount={3} key={item._id}>
          <S.TColum>{idx + 1}</S.TColum>
          <Link href={`/productShop/${item._id}`}>
            <S.TColum_title>{item.name}</S.TColum_title>
          </Link>
          <S.TStatus>판매완료</S.TStatus>
          <S.TColum>₩ 2.000</S.TColum>

          <S.TColum>{getDate(String(`1234-05-05`))}</S.TColum>
        </S.Trow>
      ))}
    </S.TableWrapper>
  );
}
