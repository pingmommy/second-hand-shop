import styled from "@emotion/styled";

export const page = styled.span`
  font-weight: 700;
  padding: 0 0.7rem;
  cursor: pointer;
  color: ${({ isActive }: { isActive?: boolean }) =>
    (isActive ?? false) ? "var(--color-primary-600)" : "var(--color-grey-700)"};
`;

export const Pagination = styled.div`
  text-align: center;
  width: 100%;
  line-height: 2.5rem;
`;
