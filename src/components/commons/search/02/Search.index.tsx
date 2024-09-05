import type { ChangeEvent } from "react";
import * as S from "../01/Search.styles";
import _ from "lodash";

export default function Search02(): JSX.Element {
  const debouncingKeyword = _.debounce((value) => {
    // void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    // setKeyword(event.target.value);
    debouncingKeyword(event.target.value);
  };

  return (
    <>
      <S.SearchWrapper>
        <div>
          <S.SoldButton>판매중 상품</S.SoldButton>
          <S.SoldButton>판매된 상품</S.SoldButton>
        </div>
        <div style={{ display: "flex" }}>
          <S.SearchBar>
            <S.SearchIcon />
            <S.SearchInput
              placeholder="글 제목을 검색하세요."
              onChange={onChangeKeyword}
            />
          </S.SearchBar>
          <S.SearchBtn>검색하기</S.SearchBtn>
        </div>
      </S.SearchWrapper>
    </>
  );
}
