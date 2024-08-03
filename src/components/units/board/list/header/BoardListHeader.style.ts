import styled from "@emotion/styled";

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
  display: flex;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 220px;
  /* background-color: #85e185; */
  margin: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 4px 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
`;
