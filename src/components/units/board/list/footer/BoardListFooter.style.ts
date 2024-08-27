import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";
export const Footer = styled.footer`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const WriteBtn = styled.button`
  font: inherit;
  width: 9rem;
  height: 2.5rem;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid var(--color-grey-500);
  cursor: pointer;

  :hover {
    background-color: var(--color-primary-600);
    border-color: var(--color-primary-600);
  }
`;

export const WriteText = styled.span`
  /* font-weight: 600; */
`;

export const WriteIcon = styled(EditOutlined)`
  color: var(--color-grey-700);
`;
