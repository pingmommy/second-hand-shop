import styled from "@emotion/styled";
import { GhostButton } from "../../ui/button/02";
import { SearchOutlined } from "@ant-design/icons";

export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  /* border: 1px solid red; */
`;

export const SelectedButton = styled(GhostButton)`
  border-bottom: 3px solid var(--color-primary-600);
  color: var(--color-grey-700);
`;

export const SearchBar = styled.div`
  width: 50%;
  height: 2.7rem;
  border: 2px solid var(--color-grey-300);
  border-radius: 20px;
  padding-left: 1.25rem;
  line-height: 2.7rem;
  flex-grow: 1;

  :focus-within {
    background-color: white;
    border: 2px solid var(--color-primary-600);
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  color: var(--color-grey-900);
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
    background-color: white;
  }
`;
