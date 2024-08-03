import styled from "@emotion/styled";

export const wrapper = styled.section`
  width: 100%;
  display: flex;
  height: 400px;
  background-color: var(--color-primary-300);
  color: var(--color-grey-700);
  font-family: "NanumGothicCoding-Regular", sans-serif;
`;

export const TextBox = styled.div`
  text-align: right;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextS1 = styled.p`
  font-size: 24px;
`;

export const TextS2 = styled.p`
  font-size: 32px;
  padding-top: 10px;
`;

export const TextS3 = styled.span`
  font-size: 28px;
`;

export const TextStrong = styled.span`
  font-size: 52px;
  font-weight: bold;
  color: var(--color-grey-900);
  font-family: "Quicksand";
`;

export const ImageBox = styled.div`
  width: 45%;
  /* border: 1px solid red; */
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
