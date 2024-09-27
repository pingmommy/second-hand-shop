import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const SidebarInnerWrapper = styled.div`
  width: 10rem;
  height: 100%;
  border-right: 2px solid var(--color-grey-100);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyPageTitle = styled.h3`
  padding-bottom: 2rem;
`;
export const userName = styled.h3`
  padding-top: 1.5rem;
`;

export const userInfo = styled.div`
  padding: 0.5rem 0 3.5rem 0;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    color: var(--color-primary-600);
  }
`;

export const MyPageAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

export const MyPageCategoryBox = styled.a`
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--color-grey-500);
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const SelectedCategory = styled(MyPageCategoryBox)`
  color: var(--color-grey-700);
  font-weight: 600;
  .Icon {
    color: var(--color-primary-600);
  }
`;

export const MyPageCategory = styled.span`
  padding-left: 0.5rem;
`;

export const MyPageAvatarSmall = styled(Avatar)`
  width: 1.3rem;
  height: 1.3rem;
`;
