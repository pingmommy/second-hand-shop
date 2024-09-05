import { useState } from "react";
import ProductListHeader from "./header/ProductListHeader.index";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import Search02 from "../../../commons/search/02/Search.index";
import ListItemCard from "./card/List-ItemCard.index";
import InfiniteScroll from "react-infinite-scroller";
import { ListWrapper } from "../../../commons/wrapper/wrapper";
import SideBar from "./sidebar/ListSideBar.index";

export default function ProductList(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { data, refetch, fetchMore, loading } = useQueryFetchUsedItems();

  const loadMoreUsedItem = (): void => {
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

  const hasMoreItem =
    data?.fetchUseditems.length !== undefined &&
    data?.fetchUseditems.length % 10 === 0 &&
    !loading;

  return (
    <>
      <ProductListHeader />
      <Search02 />

      <ListWrapper>
        <div style={{ width: "85%" }}>
          {data?.fetchUseditems !== undefined &&
            data?.fetchUseditems.length > 0 && (
              <InfiniteScroll
                pageStart={0}
                loadMore={loadMoreUsedItem}
                hasMore={hasMoreItem}
              >
                {data?.fetchUseditems.map((item) => (
                  <ListItemCard key={item._id} item={item} />
                ))}
              </InfiniteScroll>
            )}
        </div>
        <SideBar />
      </ListWrapper>
    </>
  );
}
