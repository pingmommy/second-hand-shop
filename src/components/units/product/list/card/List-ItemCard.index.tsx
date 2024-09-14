import Image from "next/image";
import * as S from "./List-ItemCard.style";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import { MyIcon } from "../../../../commons/ui/icon/MyIcon.index";

const BASE_URL = "https://storage.googleapis.com/";

export default function ListItemCard({ item }: any): JSX.Element {
  const router = useRouter();
  const imageUrl =
    item.images[0] === undefined || item.images[0] === ""
      ? ""
      : BASE_URL + item.images[0];

  const onClickProductDetail = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
    void router.push(`/productShop/${event.currentTarget.id}`);
  };

  return (
    <S.CardWrapper onClick={onClickProductDetail} id={item._id}>
      <S.ImageBox>
        {imageUrl !== "" ? (
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        ) : (
          <div></div>
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
