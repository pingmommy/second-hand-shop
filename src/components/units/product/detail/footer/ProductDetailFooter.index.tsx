import Link from "next/link";
import { PrimaryColorBtn } from "../../../../commons/ui/button/02";
import * as S from "./ProductDetailFooter.style";
import { useDeleteUsedItem } from "../../../../commons/hooks/customs/useDeleteUsedItem";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useRouterIdChecker } from "../../../../commons/hooks/customs/useRouterIdChecker";
import { useQueryFetchUseditemsISold } from "../../../../commons/hooks/queries/useQueryFetchUseditemsISold";

export default function ProductDetailFooter(): JSX.Element {
  const { onClickDeleteUsedItem } = useDeleteUsedItem();
  const { data } = useQueryFetchUseditemsISold(1, "");
  const { onClickMoveToPage } = useMoveToPage();
  const { id } = useRouterIdChecker("borrdId");

  const arr = data?.fetchUseditemsISold.map((el) => el._id);
  return (
    <S.ButtonWrapper>
      {(arr?.includes(id) ?? false) ? (
        <div>
          <S.BtnToList onClick={onClickDeleteUsedItem}>삭제하기</S.BtnToList>
          <PrimaryColorBtn
            onClick={onClickMoveToPage(`/productShop/${id}/edit`)}
          >
            수정하기
          </PrimaryColorBtn>
        </div>
      ) : (
        <div>
          <Link href="/productShop">
            <S.BtnToList>목록으로</S.BtnToList>
          </Link>
          <PrimaryColorBtn>구매하기</PrimaryColorBtn>
        </div>
      )}
    </S.ButtonWrapper>
  );
}
