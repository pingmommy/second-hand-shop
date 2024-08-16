// import type { Dispatch, SetStateAction } from "react";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { ICreateBoardInput } from "../../../commons/types/generated/types";

export interface IPostcodeProps {
  // userAddress: {
  //   address: string;
  //   zipcode: string;
  //   addressDetail: string;
  // };
  // setAddress: Dispatch<
  //   SetStateAction<{
  //     address: string;
  //     zipcode: string;
  //     addressDetail: string;
  //   }>
  // >;
  register: UseFormRegister<ICreateBoardInput>;
  setValue: UseFormSetValue<ICreateBoardInput>;
  data: any;
}
