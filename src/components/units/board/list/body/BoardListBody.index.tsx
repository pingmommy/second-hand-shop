import Link from "next/link";
import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./BoardListBody.style";
import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types";
const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoarListBody(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <>
      <S.Wrapper>
        <S.SearchWrapper>
          <S.SearchBar placeholder="검색어를 입력하세요." />
          <S.SearchBtn>검색하기</S.SearchBtn>
        </S.SearchWrapper>
        <S.TableWrapper>
          <S.Trow>
            <S.T_Head>번호</S.T_Head>
            <S.T_Title>제목</S.T_Title>
            <S.T_Head>작성자</S.T_Head>
            <S.T_Head>날짜</S.T_Head>
          </S.Trow>
          {data?.fetchBoards?.map((el) => (
            <S.Trow key={el._id}>
              <S.T_Colum>{String(el._id).slice(-7).toUpperCase()}</S.T_Colum>
              <Link href={`/freeBoard/${el._id}`}>
                <S.T_Colum_title>{el.title}</S.T_Colum_title>
              </Link>
              <S.T_Colum>{el.writer}</S.T_Colum>
              <S.T_Colum>{getDate(String(el.createdAt))}</S.T_Colum>
            </S.Trow>
          ))}
        </S.TableWrapper>
      </S.Wrapper>
    </>
  );
}
