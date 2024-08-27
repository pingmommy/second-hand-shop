import { useQueryFetchBoardComments } from "../../../commons/hooks/queries/useQueryFetchBoardComments";
import CommentDetail from "../detail/CommentDetail.index";
import InfiniteScroll from "react-infinite-scroller";

interface ICommentListProps {
  id: string;
}

export default function CommentList({ id }: ICommentListProps): JSX.Element {
  const { data, fetchMore } = useQueryFetchBoardComments(id);

  const LoadMoreBoardComment = (): void => {
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      {data?.fetchBoardComments !== undefined &&
        data?.fetchBoardComments.length > 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={LoadMoreBoardComment}
            hasMore={true}
          >
            {data?.fetchBoardComments?.map((el, index) => (
              <CommentDetail key={index} data={el} id={id} />
            ))}
          </InfiniteScroll>
        )}
    </>
  );
}
