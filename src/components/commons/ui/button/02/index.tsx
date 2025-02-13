import styled from "@emotion/styled";

export const PrimaryColorBtn = styled.button`
  background-color: var(--color-primary-600);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-grey-700);
  font-family: "NanumGothicCoding-Bold", sans-serif;
  cursor: pointer;
  :hover {
    background-color: rgb(251 206 68);
  }
`;

export const GreyColorBtn = styled.button`
  background-color: var(--color-grey-100);
  border: none;
  padding: 10px 30px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-grey-700);
  font-family: "NanumGothicCoding-Bold", sans-serif;
  :hover {
    background-color: var(--color-grey-300);
  }
`;

export const ValidationBtn = styled.button`
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

export const GhostButton = styled.button`
  font: inherit;
  padding: 0.4rem 0;
  background-color: transparent;
  border: none;
  margin: 0 1rem;
  color: var(--color-grey-300);
  font-weight: 600;
`;
