import styled from "@emotion/styled";

export const Title = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;

  border: 1px solid var(--color-grey-300);
  height: 2.5rem;
  padding-left: 0.6rem;
  border-radius: 3px;
  margin-bottom: 2rem;
  :focus {
    outline-color: var(--color-primary-600);
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 3rem;
  width: 100%;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  padding-top: 5rem;
`;

export const Strong = styled.strong`
  color: var(--color-primary-600);
`;
