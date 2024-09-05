import type { ChangeEvent } from "react";
import * as S from "./Search.styles";
import _ from "lodash";

export default function Search03(): JSX.Element {
  const debouncingKeyword = _.debounce((value) => {
    // void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    // setKeyword(event.target.value);
    debouncingKeyword(event.target.value);
  };

  return (
    <S.SearchWrapper>
      <S.SearchBar>
        <S.SearchIcon />
        <S.SearchInput
          placeholder="글 제목을 검색하세요."
          onChange={onChangeKeyword}
        />
      </S.SearchBar>
      <S.SearchBtn>검색하기</S.SearchBtn>
    </S.SearchWrapper>
  );
}
