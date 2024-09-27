/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";
import { GhostButton, PrimaryColorBtn } from "../../commons/ui/button/02";
import { Radio } from "antd";

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  /* border: 1px solid red; */
`;

export const SelectedButton = styled(GhostButton)`
  border-bottom: 3px solid var(--color-primary-600);
  color: var(--color-grey-700);
`;

export const TableWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-top: 3px solid var(--color-grey-500);
  border-bottom: 3px solid var(--color-grey-500);
`;

export const Trow = styled.ul`
  border-bottom: 1px solid var(--color-grey-300);
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: 0.3fr 2fr repeat(
      ${({ colCount }: { colCount: number }) => colCount},
      1fr
    );
`;

export const THead = styled.li`
  font-weight: bold;
`;

export const TColum = styled.li``;
export const TStatus = styled.li`
  color: var(--color-primary-600);
  font-weight: 600;
`;

export const TColum_title = styled.a`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Keyword = styled.span`
  color: red;
`;

export const MyRadioWrapper = styled.section`
  margin: 1.5rem 0 2rem 0;
`;

export const MyRadio = styled(Radio)`
  border: 1px solid var(--color-grey-300);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0;
  :focus-within {
    border-color: var(--color-primary-600);
  }
`;

export const LoadPointBtn = styled(PrimaryColorBtn)`
  width: 100%;
  height: 2.5rem;
`;
