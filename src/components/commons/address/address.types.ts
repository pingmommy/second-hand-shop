import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { ICreateBoardInput } from "../../../commons/types/generated/types";

export interface IPostcodeProps {
  register: UseFormRegister<ICreateBoardInput>;
  setValue: UseFormSetValue<ICreateBoardInput>;
  data: any;
}

export interface IPostcodeProps02 {
  userAddress: {
    address: string;
    zipcode: string;
  };
  setAddress: (obj: { address: string; zipcode: string }) => void;
}
