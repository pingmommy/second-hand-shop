import styled from "@emotion/styled";

export const UserInfoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;
export const UserInfo = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

export const UserInfoItem = styled.p`
  margin: 0;
`;

export const MenuItem = styled.div`
  font-size: 0.8rem;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--color-primary-600);
  }
`;
export const MenuText = styled.div`
  padding: 0.5rem;
`;

export const ToggleBox = styled.span`
  padding: 0 0.5rem;
`;
