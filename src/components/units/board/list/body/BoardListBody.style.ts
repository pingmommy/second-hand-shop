/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 80%;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const SearchWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  background-color: #f2f3f6;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  font-size: 16px;
  padding-left: 20px;
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 40px;
  border: 2px solid var(--color-grey-500);
  color: var(--color-grey-700);
  border-radius: 5px;
  background-color: transparent;
  font-size: 14px;
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
