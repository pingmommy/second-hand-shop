import Image from "next/image";
import * as S from "./BoardListHeader.style";
import { getDate } from "../../../../../commons/libraries/getDate";
import { useQueryFetchBoardsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchBoardsOfTheBest";
import Link from "next/link";

const BASE_URL = "https://storage.googleapis.com/";

export default function BoarListHeader(): JSX.Element {
  const { data } = useQueryFetchBoardsOfTheBest();

  return (
    <>
      <S.Wrapper>
        <S.title>인기글을 둘러 보세요!</S.title>
        <S.InnerWrapper>
          {data?.fetchBoardsOfTheBest?.map((content, idx) => {
            const imageUrl = BASE_URL + content?.images?.[0];
            return (
              <Link key={idx} href={`/freeBoard/${content._id}`}>
                <S.ContentCard>
                  {imageUrl !== undefined && (
                    <S.ImgBox>
                      <Image src={imageUrl} objectFit="cover" layout="fill" />
                    </S.ImgBox>
                  )}
                  <S.ContentTitle>{content?.title}</S.ContentTitle>
                  <S.TextBox>
                    <S.InfoBox>
                      <S.UserInfo>
                        <S.Avatar />
                        <S.UserName>{content.writer}</S.UserName>
                      </S.UserInfo>
                      <S.CreatedAt>
                        Date: {getDate(String(content.createdAt))}
                      </S.CreatedAt>
                    </S.InfoBox>
                    <S.LikeBox>
                      <S.LikeIcon />
                      <p>{content.likeCount}</p>
                    </S.LikeBox>
                  </S.TextBox>
                </S.ContentCard>
              </Link>
            );
          })}
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
