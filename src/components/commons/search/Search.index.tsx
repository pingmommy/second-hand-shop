import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import * as S from "./Search.styles";
import _ from "lodash";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";
import MyDatePicker from "../../units/board/list/datePicker";

interface IProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export default function Search({ refetch, setKeyword }: IProps): JSX.Element {
  const [date, setDate] = useState(["", ""]);

  const debouncingKeyword = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
    debouncingKeyword(event.target.value);
  };

  const onClickSearchingDate = (): void => {
    void refetch({ startDate: date[0], endDate: date[1], page: 1 });
  };
  return (
    <>
      <S.SearchWrapper>
        <S.SearchBar>
          <S.SearchIcon />
          <S.SearchInput
            placeholder="글 제목을 검색하세요."
            onChange={onChangeKeyword}
          />
        </S.SearchBar>
        <div style={{ width: "50%", textAlign: "right" }}>
          <MyDatePicker setDate={setDate} />
          <S.SearchBtn onClick={onClickSearchingDate}>검색하기</S.SearchBtn>
        </div>
      </S.SearchWrapper>
    </>
  );
}
