import styled from "@emotion/styled";

export const SideWrapper = styled.aside`
  height: 25rem;
  width: 15%;

  margin-top: 3rem;
  position: sticky;
  top: 10rem;
  padding: 1rem 0 1rem 2rem;
`;

export const SideInnerWrapper = styled.div`
  border: 1px solid var(--color-grey-300);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const SideTitle = styled.h4`
  padding: 1rem 0;
`;

export const SideImgBox = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 2px;
  width: 80%;
  height: 6.5rem;
  margin-bottom: 1rem;
`;

export const RegisterProdBtn = styled.a`
  display: block;
  width: 100%;
  color: var(--color-grey-700);
  /* background-color: var(--color-primary-600); */
  text-align: center;
  font-weight: 600;
  border: 2px solid var(--color-primary-600);
  border-radius: 2px;
  padding: 0.6rem 0;
  margin-top: 1rem;
  cursor: pointer;
  :hover {
    background-color: rgb(251 206 68);
  }
`;
