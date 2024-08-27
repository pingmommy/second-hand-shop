/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 80%;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const TableWrapper = styled.div`
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
