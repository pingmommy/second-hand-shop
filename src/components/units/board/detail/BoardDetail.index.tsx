import { useRouterIdChecker } from "../../../commons/hooks/customs/useRouterIdChecker";
import BoardDetailFooter from "./footer/BoardDetailFooter";
import BoardDetailMain from "./main/BoardDetailMain.index";

export default function BoardDetail(): JSX.Element {
  const { id } = useRouterIdChecker("boardId");
  return (
    <>
      <BoardDetailMain></BoardDetailMain>
      <BoardDetailFooter id={id} />
    </>
  );
}
