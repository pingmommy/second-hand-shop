import CommentList from "../../../comment/list/CommentList.index";
import CommentWrite from "../../../comment/write/CommentWrite.index";

interface IBoardDetailFooterProps {
  id: string;
}

export default function BoardDetailFooter({
  id,
}: IBoardDetailFooterProps): JSX.Element {
  return (
    <>
      <CommentWrite id={id} isEditing={false}></CommentWrite>
      <CommentList id={id}></CommentList>
    </>
  );
}
