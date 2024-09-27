import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const WriteBtn = styled.button`
  border: none;
  padding: 10px 30px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-grey-700);
  font-family: "NanumGothicCoding-Bold", sans-serif;
  cursor: pointer;
  background-color: ${({ isValid }: { isValid: boolean }) =>
    isValid ? "var(--color-primary-600);" : "var(--color-grey-100);"};
`;

interface IButton01 {
  isEdit: boolean;
  isValid: boolean;
}

export const Button01 = ({ isEdit, isValid }: IButton01): JSX.Element => {
  return (
    <>
      <BtnWrapper>
        <WriteBtn type="submit" isValid={isValid}>
          {isEdit ? "수정하기" : "등록하기"}
        </WriteBtn>
      </BtnWrapper>
    </>
  );
};
