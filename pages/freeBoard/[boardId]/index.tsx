import CommentWrite from "../../../src/components/units/comment/write/CommentWrite.index";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.index";
import CommentList from "../../../src/components/units/comment/list/CommentList.index";

export default function freeBoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail></BoardDetail>
      <CommentWrite></CommentWrite>
      <CommentList></CommentList>
    </>
  );
}
