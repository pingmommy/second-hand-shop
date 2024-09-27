import { useQueryFetchPointTransactionsOfSelling } from "../../../../commons/hooks/queries/useQueryFetchPointTransactionsOfSelling";

import * as S from "../../myPage.style";
import { Row } from "../MyPage.Point.style";

export default function TransactionOfSelling(): JSX.Element {
  const { data } = useQueryFetchPointTransactionsOfSelling(1, ""); // 판매

  console.log(data);

  return (
    <>
      <S.TableWrapper>
        <Row colCount={4}>
          <S.THead>거래일</S.THead>
          <S.THead>상품명</S.THead>
          <S.THead>거래내역</S.THead>
          <S.THead>거래 후 잔액</S.THead>
        </Row>

        <Row colCount={4}>
          <S.TColum>2020.09.18</S.TColum>
          <S.TColum>핸드폰케이스</S.TColum>
          <S.TColum>+2,000</S.TColum>
          <S.TColum>₩10,000</S.TColum>
        </Row>
      </S.TableWrapper>
    </>
  );
}
