import Link from "next/link";
import * as S from "../../myPage.style";
import { getDate } from "../../../../../commons/libraries/getDate";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import Pagination from "../../../../commons/pagination/Pagination.index";

const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;
interface IMyProdProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
  handlePage: (page: number) => void;
  activePage: number;
}

export default function MyProduct({
  data,
  handlePage,
  activePage,
}: IMyProdProps): JSX.Element {
  const { data: totalCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_USED_ITEMS_COUNT_I_SOLD);

  const lastPage = Math.ceil((totalCount?.fetchUseditemsCountISold ?? 10) / 10);

  return (
    <>
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
            <S.TColum>{item._id.slice(-4)}</S.TColum>
            <Link href={`/productShop/${item._id}`}>
              <S.TColum_title>{item.name}</S.TColum_title>
            </Link>
            <S.TStatus>판매완료</S.TStatus>
            <S.TColum>{item.price}</S.TColum>

            <S.TColum>{getDate(String(`${item.createdAt}`))}</S.TColum>
          </S.Trow>
        ))}
      </S.TableWrapper>
      <Pagination
        handlePage={handlePage}
        lastPage={lastPage}
        activePage={activePage}
      />
    </>
  );
}
