/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";

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

export const PageTitle = styled.h1`
  font-size: 24px;
  font-family: "NanumGothicCoding-Bold", sans-serif;
  text-align: center;
`;

export const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 50px 0 20px 0;
`;

export const InnerWrapper = styled.div`
  padding: 20px 0;
`;

export const Title = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
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

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid var(--color-grey-300);
  height: 250px;
  border-radius: 3px;
  padding: 10px;
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const UserSelectImg = styled.div`
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background-color: var(--color-grey-100);
  margin-right: 10px;
  border-radius: 3px;
`;

export const WriteBtn = styled.button`
  background-color: var(--color-primary-600);
  border: none;
  padding: 10px 30px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-grey-700);
  font-family: "NanumGothicCoding-Bold", sans-serif;
  :hover {
    background-color: rgb(251 206 68);
  }
`;
