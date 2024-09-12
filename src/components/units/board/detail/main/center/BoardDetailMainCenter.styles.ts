import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Main = styled.main`
  padding-top: 3.2rem;
`;

export const ImgBox = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

export const Contents = styled.p`
  width: 100%;
  margin: 2.5rem 0;
  line-height: 1.5rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 5.2rem;
`;

export const UpCount = styled.div`
  font-size: 1rem;
  color: var(--color-primary-600);
`;
export const DownCount = styled.div`
  font-size: 1rem;
  color: var(--color-grey-500);
`;

export const LikeIcon = styled.div`
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
  .material-symbols-outlined {
    color: var(--color-primary-600);
  }
`;

export const DislikeIcon = styled(LikeIcon)`
  .material-symbols-outlined {
    color: var(--color-grey-500);
  }
`;

export const YoutubeWrapper = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  overflow: hidden;
`;

export const Youtube = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
