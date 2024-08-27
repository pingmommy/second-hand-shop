import styled from "@emotion/styled";

export const Form = styled.form`
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
  margin-bottom: 50px;
`;

export const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
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
