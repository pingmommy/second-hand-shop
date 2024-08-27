import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  padding: 50px 10px 30px 10px;

  color: var(--color-grey-700);
`;

export const Header = styled.header`
  border-top: 2px solid var(--color-grey-300);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 0 30px 0;
`;
export const TitleWrapper = styled.div`
  padding-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  height: 24px;
  margin-left: 5px;
  line-height: 24px;
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  margin-right: 20px;
  height: 30px;
  padding-left: 10px;

  :focus {
    outline: none;
  }
`;

export const Body = styled.main`
  border: 1px solid var(--color-grey-300);
`;

export const Contents = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
  border: none;
  padding: 10px;
  font: inherit;
  font-size: small;
  :focus {
    outline: none;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-grey-100);
`;

export const Button = styled.button`
  background-color: var(--color-grey-700);
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

export const TextCount = styled.div`
  padding-left: 10px;
  color: var(--color-grey-300);
`;

//
