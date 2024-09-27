import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  font-family: "NanumGothicCoding-Regular", sans-serif;
  color: var(--color-grey-700);
`;

export const SoldButton = styled.button`
  font: inherit;
  padding: 0.4rem 0;
  background-color: transparent;
  border: none;
  margin: 0 1rem;

  :focus {
    border-bottom: 3px solid var(--color-primary-600);
    font-weight: 600;
  }
`;

export const SearchBar = styled.div`
  width: 50%;
  height: 2.5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 20px;
  padding-left: 1.25rem;
  line-height: 2.5rem;
  flex-grow: 1;

  :focus-within {
    background-color: white;
    border: 1px solid var(--color-primary-600);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  border: none;
  margin-left: 0.7rem;
  font-size: 1rem;
  color: var(--color-grey-900);
  ::placeholder {
    color: var(--color-grey-900);
  }

  :focus {
    outline: none;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  color: var(--color-grey-900);
`;

export const SearchBtn = styled.button`
  width: 5.5rem;
  height: 2.7rem;
  margin-left: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-900);
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    background-color: var(--color-grey-700);
  }
`;
