import { gql, useQuery } from "@apollo/client";
import * as S from "./CommentList.styles";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/getDate";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function CommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      {data?.fetchBoardComments?.map((el) => (
        <S.Wrapper key={el._id}>
          <S.Avatar>
            <img src="/icons/avatar.png" />
          </S.Avatar>
          <S.TextWrapper>
            <S.Writer>{el.writer}</S.Writer>
            <S.Contents>{el.contents}</S.Contents>
            <S.Date>{getDate(String(el.createdAt))}</S.Date>
          </S.TextWrapper>
          <S.IconWrapper>
            <S.Icon src="/icons/mode.svg" />
            <S.Icon src="/icons/clear.svg" />
          </S.IconWrapper>
        </S.Wrapper>
      ))}
    </>
  );
}
