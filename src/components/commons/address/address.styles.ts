/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";

export const InnerWrapper = styled.div`
  padding: 20px 0;
`;

export const Title = styled.label`
  font-weight: 500;
  padding-bottom: 5px;
  display: inline-block;
`;

export const flexWrap_H = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  height: 32px;
  padding-left: 10px;
  border-radius: 3px;
  :focus {
    outline: none;
  }
`;

export const ZipCode = styled.input`
  width: 60px;
  border: 1px solid var(--color-grey-300);
  height: 32px;
  padding-left: 10px;
  margin-right: 10px;
  border-radius: 3px;
  :focus {
    outline: none;
  }
`;

export const ZipCodeBtn = styled.button`
  background-color: var(--color-grey-700);
  border: none;
  padding: 0 10px;
  border-radius: 3px;
  color: white;
  font-family: "NanumGothicCoding-Bold", sans-serif;
  :hover {
    background-color: var(--color-grey-500);
  }
`;

export const Margin_B_10 = styled.div`
  margin-bottom: 10px;
`;
