import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Wrapper = styled.section`
  text-align: center;
  width: 80%;
  margin: 50px auto;
  font-family: "NanumGothicCoding-Regular", sans-serif;
`;

export const title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  color: var(--color-grey-700);
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem 0;
`;

export const ContentCard = styled.a`
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 4px 8px;
  overflow: hidden;
  padding-bottom: 1rem;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
`;

export const ContentTitle = styled.h4`
  color: var(--color-grey-700);
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  text-align: left;
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 0 0.5rem;
`;

export const InfoBox = styled.div`
  width: 90%;
  text-align: left;
`;

export const Remarks = styled.p`
  font-size: 0.7rem;
  padding-bottom: 0.7rem;
  color: var(--color-grey-500);
`;

export const Price = styled.span`
  padding-left: 0.2rem;
  font: inherit;
  font-weight: 600;
`;

export const LikeBox = styled.div``;

export const LikeIcon = styled(FavoriteIcon)`
  color: var(--color-primary-600);
`;
