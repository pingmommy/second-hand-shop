import styled from "@emotion/styled";
import BoardDetailMainTop from "./top/BoardDetailMainTop.index";
import BoardDetailMainCenter from "./center/BoardDetailMainCenter.index";
import { useQueryFetchBoard } from "../../../../commons/hooks/queries/useQueryFetchBoard";
import BoardDetailMainBottom from "./bottom/BoardDetailMainBottom.index";
import { useRouterIdChecker } from "../../../../commons/hooks/customs/useRouterIdChecker";

export const Wrapper = styled.section`
  width: 70%;
  margin: 50px auto;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 80px 170px;
  border-radius: 5px;

  color: var(--color-grey-700);
`;

export default function BoardDetailMain(): JSX.Element {
  const { id } = useRouterIdChecker("boardId");

  const { data } = useQueryFetchBoard(id);
  console.log(data, id);
  return (
    <>
      <Wrapper>
        <BoardDetailMainTop data={data} />
        <BoardDetailMainCenter data={data} />
      </Wrapper>
      <BoardDetailMainBottom />
    </>
  );
}
