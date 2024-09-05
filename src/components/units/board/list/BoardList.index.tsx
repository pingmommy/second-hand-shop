import Link from "next/link";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import Pagination from "../../../commons/pagination/Pagination.index";
import BoardListBody from "./body/BoardListBody.index";
import BoarListHeader from "./header/BoardListHeader.index";
import * as S from "./footer/BoardListFooter.style";
import { useState } from "react";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import Search from "../../../commons/search/01/Search.index";

export default function BoardList(): JSX.Element {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQueryFetchBoards();

  const { data: BoardCount } = useQueryFetchBoardsCount();

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
