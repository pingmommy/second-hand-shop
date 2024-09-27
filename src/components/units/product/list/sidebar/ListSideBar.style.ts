import styled from "@emotion/styled";
import { PrimaryColorBtn } from "../../../../commons/ui/button/02";

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
  position: relative;
`;

export const RegisterProdBtn = styled(PrimaryColorBtn)`
  width: 100%;
  margin-top: 1rem;
`;

export const Page = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  color: var(--color-grey-500);
`;
