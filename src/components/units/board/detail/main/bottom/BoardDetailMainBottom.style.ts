import styled from "@emotion/styled";
import { Modal } from "antd";

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

export const DeletionModal = styled(Modal)``;
