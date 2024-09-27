import styled from "@emotion/styled";

export const Row = styled.ul`
  border-bottom: 1px solid var(--color-grey-300);
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ colCount }: { colCount: number }) => colCount},
    1fr
  );
`;
