import { useState, type MouseEvent } from "react";
import * as S from "./Pagination.styles";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  lastPage: number;
}

export default function Pagination({
  refetch,
  lastPage,
}: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) {
      return;
    }
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <S.Pagination>
      <S.page onClick={onClickPrevPage}>&lt;</S.page>
      {new Array(10).fill(0).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <S.page
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </S.page>
          )
      )}
      <S.page onClick={onClickNextPage}>&gt;</S.page>
    </S.Pagination>
  );
}
