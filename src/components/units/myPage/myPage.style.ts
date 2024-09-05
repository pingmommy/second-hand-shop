/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";
import { GhostButton } from "../../commons/button/02";

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

export const Trow = styled.div`
  border-bottom: 1px solid var(--color-grey-300);
  height: 3rem;
  line-height: 3rem;
  display: flex;
  text-align: center;
`;

export const T_Head = styled.span`
  font-weight: bold;
  width: 15%;
`;
export const T_Title = styled.span`
  font-weight: bold;
  width: 55%;
  display: inline-block;
`;

export const T_Colum = styled.div`
  width: 15%;
`;

export const T_Colum_title = styled.a`
  width: 55%;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Keyword = styled.span`
  color: red;
`;
