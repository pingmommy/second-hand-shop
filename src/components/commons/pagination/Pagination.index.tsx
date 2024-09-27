import { useState } from "react";
import * as S from "./Pagination.styles";
interface IPaginationProps {
  handlePage: (page: number) => void;
  lastPage: number;
  activePage: number;
}

export default function Pagination({
  handlePage,
  lastPage,
  activePage,
}: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (page: number) => (): void => {
    handlePage(page);
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) {
      return;
    }
    setStartPage(startPage - 10);
    handlePage(startPage - 10);
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      handlePage(startPage + 10);
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
              onClick={onClickPage(index + startPage)}
              isActive={index + startPage === activePage}
            >
              {index + startPage}
            </S.page>
          )
      )}
      <S.page onClick={onClickNextPage}>&gt;</S.page>
    </S.Pagination>
  );
}
