import Link from "next/link";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import Pagination from "../../../commons/pagination/Pagination.index";
import BoardListBody from "./body/BoardListBody.index";
import BoarListHeader from "./header/BoardListHeader.index";
import * as S from "./footer/BoardListFooter.style";
import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import Search from "../../../commons/search/Search.index";
import { useState } from "react";

export default function BoardList(): JSX.Element {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQueryFetchBoards();

  const FETCH_BOARDS_COUNT = gql`
    query {
      fetchBoardsCount
    }
  `;

  const { data: BoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((BoardCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <>
      <BoarListHeader></BoarListHeader>

      <Search refetch={refetch} setKeyword={setKeyword} />

      <BoardListBody data={data} keyword={keyword}></BoardListBody>
      <S.Footer>
        <Pagination refetch={refetch} lastPage={lastPage} />
        <Link href={"/freeBoard/new"}>
          <S.WriteBtn>
            <S.WriteText>글쓰기</S.WriteText> <S.WriteIcon />
          </S.WriteBtn>
        </Link>
      </S.Footer>
    </>
  );
}
