import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function freeBoardEditPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return <BoardWrite isEdit={true} data={data}></BoardWrite>;
}
