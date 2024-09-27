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

interface IInput02Props {
  label: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  type?: "text" | "password";
  errMessage: string | undefined;
}

// 좁은 곳에 사용하는 input타입
export const Input02 = ({
  label,
  placeholder,
  register,
  type,
  errMessage,
}: IInput02Props): JSX.Element => {
  return (
    <>
      <InnerWrapper>
        <Title>{label}</Title>
        <Input
          type={type ?? "text"}
          defaultValue={""}
          placeholder={placeholder}
          {...register}
        />
        <Error>{errMessage}</Error>
      </InnerWrapper>
    </>
  );
};
