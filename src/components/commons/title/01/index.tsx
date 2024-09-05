import styled from "@emotion/styled";
export const PageTitle = styled.h1`
  font-size: 24px;
  font-family: "NanumGothicCoding-Bold", sans-serif;
  text-align: center;
  margin-bottom: 50px;
`;

export const Title01 = ({ isEdit }: { isEdit: boolean }): JSX.Element => {
  return (
    <>
      <PageTitle>{isEdit ? "상품수정" : "상품등록"}</PageTitle>
    </>
  );
};
