import * as S from "./ProductDetail.style";
import MyMap from "../../../commons/map/Map.index";
import { CardWrapper } from "../../../commons/wrapper/wrapper";
import CommentWrite from "../../comment/write/CommentWrite.index";
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUsedItem";
import Carousel from "./carousel/ProductDetail.Carousel";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
import { useRouterIdChecker } from "../../../commons/hooks/customs/useRouterIdChecker";
import { useMutationUsedItemPick } from "../../../commons/hooks/mutations/useMutationUsedItemPick";

export default function ProductDetail(): JSX.Element {
  const { id } = useRouterIdChecker("borrdId");
  const { data } = useQueryFetchUsedItem(id);
  const { handleToggleUsedItemPick } = useMutationUsedItemPick();

  const handleIPick = (): void => {
    void handleToggleUsedItemPick(id);
  };
  return (
    <>
      <CardWrapper>
        <div>
          <ProductDetailHeader data={data} />
          <S.InfoWrapper>
            <div>
              <S.Remark>{data?.fetchUseditem.remarks}</S.Remark>
              <h3>{data?.fetchUseditem.name}</h3>
            </div>
            <S.LikeBox>
              <S.LikeIcon onClick={handleIPick} />
              <S.LikeCount>{data?.fetchUseditem.pickedCount}</S.LikeCount>
            </S.LikeBox>
          </S.InfoWrapper>
          <S.Price>{data?.fetchUseditem.price} 원</S.Price>
          <Carousel data={data} />
          <S.InfoDetailWrapper>
            <p
              style={{ lineHeight: "1.5rem" }}
              dangerouslySetInnerHTML={{
                __html: data?.fetchUseditem?.contents ?? "",
              }}
            ></p>
            <S.Tags>
              {data?.fetchUseditem.tags?.map((tag) => (
                <span key={tag}> {tag}</span>
              ))}
            </S.Tags>
          </S.InfoDetailWrapper>
          <S.MapWrapper>
            <MyMap
              address={data?.fetchUseditem?.useditemAddress?.address ?? ""}
            />
          </S.MapWrapper>
          <ProductDetailFooter />
        </div>
      </CardWrapper>
      <CommentWrite id="aaa" isEditing={false} />
    </>
  );
}
