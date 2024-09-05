import Image from "next/image";
import * as S from "./ProductListHeader.style";
import { useQueryFetchUsedItemOfBest } from "../../../../commons/hooks/queries/useQueryFetchUsedItemOfTheBest";

const BASE_URL = "https://storage.googleapis.com/";

export default function ProductListHeader(): JSX.Element {
  const { data } = useQueryFetchUsedItemOfBest();

  return (
    <>
      <S.Wrapper>
        <S.title>인기글을 둘러 보세요!</S.title>
        <S.InnerWrapper>
          {data?.fetchUseditemsOfTheBest?.map((content, idx) => {
            const imageUrl = BASE_URL + content?.images?.[0];
            return (
              <S.ContentCard key={idx}>
                {imageUrl !== undefined && (
                  <S.ImgBox>
                    <Image src={imageUrl} objectFit="cover" layout="fill" />
                  </S.ImgBox>
                )}
                <S.ContentTitle>{content?.name}</S.ContentTitle>
                <S.InfoWrapper>
                  <S.InfoBox>
                    <S.Remarks>{content.remarks}</S.Remarks>
                    <S.Price>{content.price}원</S.Price>
                  </S.InfoBox>
                  <S.LikeBox>
                    <S.LikeIcon />
                    <p>{content.pickedCount}</p>
                  </S.LikeBox>
                </S.InfoWrapper>
              </S.ContentCard>
            );
          })}
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
