import { useState } from "react";
import * as S from "../myPage.style";
import SearchBarWithBtn from "../../../commons/search/searchBarWithBtn/SearchBarWithBtn";
import { useQueryFetchUseditemsIPicked } from "../../../commons/hooks/queries/useQueryFetchUseditemsIPicked";
import { useQueryFetchUseditemsISold } from "../../../commons/hooks/queries/useQueryFetchUseditemsISold";
import MyProduct from "./product/Market.myProduct.index";
import MyPick from "./pick/Market.IPick.index";

const BTN_LIST = [
  { title: "나의 상품", id: "myProduct" },
  { title: "마이찜", id: "pick" },
];

export default function MyMarket({ page }: any): JSX.Element {
  const { data: IPickData } = useQueryFetchUseditemsIPicked(1, "");
  const { data, refetch } = useQueryFetchUseditemsISold(1, "");
  const [activePage, setActivePage] = useState(1);
  const [isSelected, setIsSelected] = useState(BTN_LIST[0].id);

  const [keyword, setKeyword] = useState("");

  const handleKeyword = (value: string): void => {
    setKeyword(value);
    void refetch({ search: value, page: 1 });
  };

  const handlePage = (page: number): void => {
    setActivePage(page);
    void refetch({ search: "", page });
  };

  return (
    <>
      <S.PageHeader>
        <SearchBarWithBtn
          list={BTN_LIST}
          onSearch={handleKeyword}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </S.PageHeader>
      {isSelected === "myProduct" && (
        <MyProduct
          data={data}
          handlePage={handlePage}
          activePage={activePage}
        />
      )}
      {isSelected === "pick" && <MyPick data={IPickData} />}
    </>
  );
}
