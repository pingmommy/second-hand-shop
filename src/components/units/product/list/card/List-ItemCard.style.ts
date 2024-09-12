import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const CardWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0 1rem 0;
  border-bottom: 1px solid var(--color-grey-300);
  cursor: pointer;
`;

export const ImageBox = styled.div`
  width: 25%;
  height: 11.5rem;
  position: relative;
`;

export const InfoBox = styled.div`
  width: 55%;
  padding: 1rem 0 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  padding-bottom: 0.7rem;
`;

export const ItemRemark = styled.p`
  color: var(--color-grey-500);
  padding-bottom: 0.7rem;
`;

export const ItemTags = styled.p`
  font-size: 0.9rem;
  color: var(--color-grey-300);
  padding-bottom: 0.7rem;
`;

export const UserIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SellerName = styled.p`
  padding-left: 0.3rem;
  color: var(--color-grey-500);
`;

export const LikeIcon = styled(FavoriteIcon)`
  margin-left: 1rem;
  color: var(--color-primary-600);
`;

export const PickedCount = styled.p`
  padding-left: 0.3rem;
  color: var(--color-grey-500);
`;

export const ItemPriceBox = styled.p`
  width: 20%;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .material-symbols-outlined {
    color: var(--color-primary-600);
    margin-right: 0.4rem;
  }
`;
export const Avatar = styled(AccountCircleIcon)`
  color: var(--color-grey-500);
`;
