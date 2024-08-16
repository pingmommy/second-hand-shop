import styled from "@emotion/styled";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  border-bottom: 2px solid var(--color-grey-300);
  width: 70%;
  margin: 0 auto;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  padding: 50px 10px 0 10px;

  color: var(--color-grey-700);

  display: flex;
`;

export const Avatar = styled.div`
  width: 5%;
  /* border: 1px solid red; */
`;
export const TextWrapper = styled.div`
  width: 85%;
  padding-left: 10px;
  /* border: 2px solid var(--color-grey-300); */
`;
export const Writer = styled.div`
  font-weight: 600;
  /* border: 1px solid red; */
`;

export const Contents = styled.div`
  font-size: 14px;
  /* border: 1px solid red; */
  padding-top: 8px;
`;

export const Date = styled.div`
  font-size: small;
  color: var(--color-grey-500);
  /* border: 1px solid red; */
  padding: 15px 0;
`;

export const IconWrapper = styled.div`
  width: 10%;
  /* border: 1px solid red; */
  text-align: right;
`;

export const IconBox = styled.span`
  display: inline-block;
  margin: 0 0.4rem;
`;

export const IconEdit = styled(EditOutlined)`
  color: var(--color-grey-300);
  font-size: 1.3rem;
`;

export const IconDelete = styled(CloseOutlined)`
  color: var(--color-grey-300);
  font-size: 1.2rem;
`;
