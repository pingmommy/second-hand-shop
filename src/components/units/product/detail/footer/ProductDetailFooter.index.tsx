import Link from "next/link";
import { PrimaryColorBtn } from "../../../../commons/button/02";
import * as S from "./ProductDetailFooter.style";

export default function ProductDetailFooter(): JSX.Element {
  return (
    <S.ButtonWrapper>
      <div>
        <Link href="/productShop">
          <S.BtnToList>목록으로</S.BtnToList>
        </Link>
        <PrimaryColorBtn>구매하기</PrimaryColorBtn>
      </div>
    </S.ButtonWrapper>
  );
}
