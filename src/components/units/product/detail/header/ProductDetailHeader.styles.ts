import styled from "@emotion/styled";
import { Tooltip } from "antd";
export const Header = styled.header`
  border-bottom: 2px solid var(--color-grey-500);
  padding-bottom: 1rem;

  /* display: flex; */
`;

export const Title = styled.h1`
  padding-bottom: 2rem;
  padding-left: 0.7rem;
  margin-top: 2rem;
  line-height: 2rem;
`;

export const userWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Writer = styled.div`
  font-size: 1rem;
  font-weight: 600;

  padding-bottom: 0.4rem;
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: var(--color-grey-500);
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`;

export const IconBox = styled(Tooltip)``;

export const Icon = styled.div`
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
`;
