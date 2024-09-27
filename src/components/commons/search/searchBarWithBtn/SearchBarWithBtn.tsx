import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { GhostButton } from "../../ui/button/02";
import * as S from "./seachBarWithBtn";
import _ from "lodash";

interface ISearchProps {
  list: Array<{ id: string; title: string }>;
  onSearch: (value: string) => void;
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<string>>;
  isHidden?: boolean;
}

//  전체 wrapper 너비는 부모컴포넌트에서 설정하기!(layout에 맞게)
export default function SearchBarWithBtn(props: ISearchProps): JSX.Element {
  const { isSelected, list, onSearch, setIsSelected, isHidden } = props;

  const onClickCategory = (category: string) => (): void => {
    setIsSelected(category);
  };

  const debounce = _.debounce((value: string) => {
    onSearch(value);
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    debounce(event.target.value);
  };
  return (
    <>
      <S.ButtonWrapper>
        {list.map((el) =>
          el.id === isSelected ? (
            <S.SelectedButton key={el.id}>{el.title}</S.SelectedButton>
          ) : (
            <GhostButton key={el.id} onClick={onClickCategory(el.id)}>
              {el.title}
            </GhostButton>
          )
        )}
      </S.ButtonWrapper>
      {(isHidden ?? false) ? (
        <></>
      ) : (
        <S.SearchBar>
          <S.SearchIcon />
          <S.SearchInput
            placeholder="제목을 검색하세요."
            onChange={onChangeKeyword}
          />
        </S.SearchBar>
      )}
    </>
  );
}
