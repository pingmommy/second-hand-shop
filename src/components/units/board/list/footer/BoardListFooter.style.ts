import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const WriteBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid var(--color-grey-500);
`;

export const page = styled.span`
  font-weight: 700;
  padding: 0 10px;
`;

export const Pagination = styled.div`
  text-align: center;
  width: 100%;
  line-height: 40px;
`;
