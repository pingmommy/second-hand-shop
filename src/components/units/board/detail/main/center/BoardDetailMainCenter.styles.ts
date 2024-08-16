import styled from "@emotion/styled";

export const Main = styled.main`
  padding-top: 50px;
`;

export const ImgBox = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0;
`;
export const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const UpCount = styled.div`
  font-size: 14px;
  color: var(--color-primary-600);
`;
export const DownCount = styled.div`
  font-size: 14px;
  color: var(--color-grey-500);
`;

export const Icon = styled.div`
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
`;
