import Image from "next/image";
import * as S from "./List-ItemCard.style";
import { MyIcon } from "../../../../commons/ui/icon/MyIcon.index";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import type { IUseditem } from "../../../../../commons/types/generated/types";

const BASE_URL = "https://storage.googleapis.com/";

export default function ListItemCard({
  item,
}: {
  item: IUseditem;
}): JSX.Element {
  const { onCompleteMoveToPage } = useMoveToPage();

  const imageUrl = item.images?.[0] ?? "";

  return (
    <S.CardWrapper onClick={onCompleteMoveToPage(`/productShop/${item._id}`)}>
      <S.ImageBox>
        {imageUrl === undefined || imageUrl === "" ? (
          <div></div>
        ) : (
          <Image src={BASE_URL + imageUrl} layout="fill" objectFit="cover" />
        )}
      </S.ImageBox>
      <S.InfoBox>
        <div>
          <S.ItemTitle>{item.name}</S.ItemTitle>
          <S.ItemRemark>{item.remarks}</S.ItemRemark>
          <S.ItemTags>
            {item.tags?.map((tag, idx) => <span key={idx}>{tag}</span>)}
          </S.ItemTags>
        </div>
        <S.UserIconBox>
          <S.Avatar />
          <S.SellerName>{item.seller?.name}</S.SellerName>
          <S.LikeIcon />
          <S.PickedCount>{item.pickedCount}</S.PickedCount>
        </S.UserIconBox>
      </S.InfoBox>
      <S.ItemPriceBox>
        <MyIcon iconName="savings" />
        <span>{item.price}</span>
      </S.ItemPriceBox>
    </S.CardWrapper>
  );
}
