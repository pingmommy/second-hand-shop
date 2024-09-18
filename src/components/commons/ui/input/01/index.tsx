import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

const Title = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  height: 2rem;
  padding-left: 10px;
  border-radius: 3px;
  :focus {
    outline: none;
  }
`;

const InnerWrapper = styled.div`
  padding: 20px 0;
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  padding-top: 0.3rem;
`;

interface IInput01Props {
  title: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

export const Input01 = ({
  title,
  placeholder,
  register,
}: IInput01Props): JSX.Element => {
  return (
    <>
      <InnerWrapper>
        <Title>{title}</Title>
        <Input type="text" placeholder={placeholder} {...register} />
        <Error>{""}</Error>
      </InnerWrapper>
    </>
  );
};
