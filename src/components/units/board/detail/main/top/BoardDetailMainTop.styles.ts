import styled from "@emotion/styled";
import { Tooltip } from "antd";
export const Header = styled.header`
  border-bottom: 2px solid var(--color-grey-500);
  padding-bottom: 10px;

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
  width: 35px;
  height: 35px;
`;

export const Writer = styled.div`
  font-size: 14px;
  font-weight: 600;

  padding-bottom: 5px;
`;

export const Date = styled.div`
  font-size: 13px;
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
