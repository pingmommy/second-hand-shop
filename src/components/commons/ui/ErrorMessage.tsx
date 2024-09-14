import styled from "@emotion/styled";

const Message = styled.p`
  color: red;
  font-size: 0.8rem;
  padding: 0.5rem 0 0 0.5rem;
`;
export const ErrorMessage = ({ message }: { message: string }): JSX.Element => {
  return <Message>{message}</Message>;
};
