import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";
import { useRouterIdChecker } from "../../../../src/components/commons/hooks/customs/useRouterIdChecker";

export default function freeBoardEditPage(): JSX.Element {
  const { id } = useRouterIdChecker("boardId");
  const { data } = useQueryFetchBoard(id);
  return <BoardWrite isEdit={true} data={data}></BoardWrite>;
}
