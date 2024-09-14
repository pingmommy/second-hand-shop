import styled from "@emotion/styled";

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

export const Button01 = ({ isEdit }: { isEdit: boolean }): JSX.Element => {
  return (
    <>
      <BtnWrapper>
        <WriteBtn type="submit">{isEdit ? "수정하기" : "등록하기"}</WriteBtn>
      </BtnWrapper>
    </>
  );
};
