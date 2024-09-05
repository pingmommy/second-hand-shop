import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

const Title = styled.div`
  font-weight: 600;
  padding-bottom: 5px;
  font-size: 0.8rem;
`;

const Input = styled.input`
  width: 100%;

  border: 1px solid var(--color-grey-300);
  height: 2.5rem;
  padding-left: 0.6rem;
  border-radius: 3px;
  :focus {
    outline-color: var(--color-primary-600);
  }
`;

const InnerWrapper = styled.div`
  padding: 0.6rem 0;
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  padding-top: 0.3rem;
`;

interface IInput01Props {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

export const Input02 = ({
  label,
  placeholder,
  register,
}: IInput01Props): JSX.Element => {
  return (
    <>
      <InnerWrapper>
        <Title>{label}</Title>
        <Input
          type="text"
          defaultValue={""}
          placeholder={placeholder}
          {...register}
        />
        <Error>{""}</Error>
      </InnerWrapper>
    </>
  );
};
