import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: flex-end;

  /* border: 1px solid red; */
`;

export const Logo = styled.a`
  font-size: 40px;
  font-family: "Comfortaa", sans-serif;
  font-weight: 800;
  margin-right: 20px;
  color: var(--color-grey-900);
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  color: var(--color-grey-700);
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FlexBox_H = styled.div`
  display: flex;
  font-size: 18px;
  font-family: "NanumGothicCoding-Bold", sans-serif;
`;
