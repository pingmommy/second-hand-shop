import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 70%;
  margin: 50px auto;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 80px 170px;
  border-radius: 5px;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const Header = styled.header`
  border-bottom: 2px solid var(--color-grey-500);
  padding-bottom: 10px;

  /* display: flex; */
`;

export const Title = styled.h1`
  padding-bottom: 15px;
  padding-left: 10px;
`;

export const userWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
`;

export const Writer = styled.div`
  font-size: 14px;
  font-weight: 600;

  padding-bottom: 5px;
`;

export const Date = styled.div`
  font-size: 13px;
`;

export const IconBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`;

export const Icon = styled.div`
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
`;

export const Main = styled.main`
  padding: 50px 0;
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
`;

export const UpCount = styled.div`
  font-size: 14px;
  color: var(--color-primary-600);
`;
export const DownCount = styled.div`
  font-size: 14px;
  color: var(--color-grey-500);
`;

export const BtnWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

export const Button = styled.a`
  margin: 10px;
  border: 1px solid var(--color-grey-500);
  padding: 10px 15px;
  border-radius: 5px;
  color: var(--color-grey-700);
  cursor: pointer;

  :hover {
    background-color: var(--color-primary-600);
    border-color: var(--color-primary-600);
  }
`;
