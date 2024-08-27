import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
export const SearchWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

export const SearchInput = styled.input`
  background-color: var(--color-grey-100);
  width: 90%;
  border: none;
  margin-left: 0.7rem;
  font-size: 16px;
  color: var(--color-grey-900);
  ::placeholder {
    color: var(--color-grey-900);
  }

  :focus {
    outline: none;
    background-color: white;
  }
`;

export const SearchBar = styled.div`
  width: 50%;
  height: 2.5rem;
  background-color: var(--color-grey-100);
  border-radius: 5px;
  padding-left: 1.25rem;
  line-height: 2.5rem;

  :focus-within {
    background-color: white;
    border: 2px solid var(--color-grey-500);
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  color: var(--color-grey-900);
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 40px;
  border: 2px solid var(--color-grey-500);
  color: var(--color-grey-700);
  border-radius: 5px;
  background-color: transparent;
  font-size: 14px;
`;
