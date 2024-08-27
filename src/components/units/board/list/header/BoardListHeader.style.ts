import styled from "@emotion/styled";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

export const ContentCard = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 4px 8px;
  overflow: hidden;
  padding-bottom: 1rem;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
`;

export const ContentTitle = styled.h4`
  color: var(--color-grey-700);
  padding: 0.8rem 0.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  padding: 0 1rem;
`;

export const InfoBox = styled.div`
  width: 90%;
  text-align: left;
`;

export const UserInfo = styled.p`
  display: flex;
  align-items: center;
  padding-bottom: 0.2rem;
`;

export const Avatar = styled(AccountCircleIcon)`
  color: var(--color-grey-500);
`;

export const UserName = styled.span`
  padding-left: 0.2rem;
  font: inherit;
`;

export const CreatedAt = styled.p`
  font-size: 0.9rem;
  color: var(--color-grey-500);
`;

export const LikeBox = styled.div``;

export const LikeIcon = styled(ThumbUpOutlinedIcon)`
  color: var(--color-primary-600);
`;
