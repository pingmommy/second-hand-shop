import styled from "@emotion/styled";

export const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0;
`;

export const Title = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  height: 32px;
  padding-left: 10px;
  border-radius: 3px;
  :focus {
    outline: none;
  }
`;

export const InnerWrapper = styled.div`
  padding: 20px 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid var(--color-grey-300);
  height: 250px;
  border-radius: 3px;
  padding: 10px;
`;

export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  padding-top: 0.3rem;
`;
