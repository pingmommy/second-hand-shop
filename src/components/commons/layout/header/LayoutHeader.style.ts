import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  align-items: flex-end;
  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
`;

export const Logo = styled.a`
  font-size: 2.5rem;
  font-family: "Comfortaa", sans-serif;
  font-weight: 800;
  margin-right: 1.5rem;
  color: var(--color-grey-900);
  cursor: pointer;
  z-index: 999;
`;

export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  color: ${({ isActive }: { isActive?: boolean }) =>
    (isActive ?? false) ? "rgb(248 199 45)" : "var(--color-grey-700);"};
  cursor: pointer;
  :hover {
    color: var(--color-primary-600);
  }
`;

export const SignInLink = styled.a`
  background-color: var(--color-primary-600);
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  color: var(--color-grey-700);
  cursor: pointer;

  :hover {
    background-color: rgb(247 194 29);
  }
`;

export const InnerWrapper = styled.div`
  font-size: 1.2rem;
  font-family: "NanumGothicCoding-Bold", sans-serif;
`;
