import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const InfoWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1.5rem 0;
`;

export const Remark = styled.p`
  font-size: 0.8rem;
  color: var(--color-grey-500);
  padding-bottom: 0.6rem;
`;

export const LikeBox = styled.div`
  margin-right: 0.5rem;
`;

export const LikeIcon = styled(FavoriteIcon)`
  color: var(--color-primary-600);
  cursor: pointer;
`;

export const LikeCount = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

export const InfoDetailWrapper = styled.section`
  padding-top: 10rem;
  border-bottom: 2px solid var(--color-grey-300);
`;

export const Tags = styled.p`
  color: var(--color-grey-300);
  padding: 2.5rem 0 2rem 0;
`;

export const MapWrapper = styled.section`
  padding: 2rem 0 3rem 0;
  border-bottom: 2px solid var(--color-grey-300);
`;
