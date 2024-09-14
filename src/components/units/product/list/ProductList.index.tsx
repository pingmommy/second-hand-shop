import { useState } from "react";
import ProductListHeader from "./header/ProductListHeader.index";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import ListItemCard from "./card/List-ItemCard.index";
import InfiniteScroll from "react-infinite-scroller";
import { ListWrapper } from "../../../commons/ui/wrapper/wrapper";
import SideBar from "./sidebar/ListSideBar.index";
import * as S from "./ProductList.style";
import SearchBarWithBtn from "../../../commons/search/searchBarWithBtn/SearchBarWithBtn";

const LIST = [
  { id: "onSale", title: "판매중인 상품" },
  { id: "isSoldOut", title: "판매된 상품" },
];

export default function ProductList(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const [isSoldout, setIsSoldout] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [page, setPage] = useState(1);

  const { data, fetchMore, loading, refetch } = useQueryFetchUsedItems();

  const loadMoreUsedItem = (): void => {
    if (loading) return;
    void fetchMore({
      variables: { page: page + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    }).then(() => {
      setPage((prev) => prev + 1);
    });
  };

  const handleKeyword = (value: string): void => {
    setKeyword(value);
    void refetch({ search: value, page: 1, isSoldout });
  };

  return (
    <>
      <ProductListHeader />
      <S.SearchBarWrapper>
        <SearchBarWithBtn
          list={LIST}
          onSearch={handleKeyword}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </S.SearchBarWrapper>

      <ListWrapper>
        <S.InnerWrapper>
          {data?.fetchUseditems !== undefined &&
            data?.fetchUseditems.length > 0 && (
              <InfiniteScroll
                pageStart={0}
                loadMore={loadMoreUsedItem}
                hasMore={true}
                threshold={200}
                loader={<div key={0}>Loading...</div>}
              >
                {data?.fetchUseditems.map((item) => (
                  <ListItemCard key={item._id} item={item} />
                ))}
              </InfiniteScroll>
            )}
        </S.InnerWrapper>
        <SideBar />
      </ListWrapper>
    </>
  );
}
