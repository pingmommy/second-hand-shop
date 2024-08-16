import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

import CommentDetail from "../detail/CommentDetail.index";

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
interface ICommentListProps {
  id: string;
}

export default function CommentList({ id }: ICommentListProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: id },
  });

  return (
    <>
      {data?.fetchBoardComments?.map((el, index) => (
        <CommentDetail key={index} data={el} id={id} />
      ))}
    </>
  );
}
