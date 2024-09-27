import * as yup from "yup";
import type { ICreateUseditemInput } from "../../../../commons/types/generated/types";

export const schema: yup.ObjectSchema<ICreateUseditemInput> = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄요약을 입력해주세요."),
  price: yup.number().required("상품가격을 입력해주세요."),
  tags: yup.array(),
  contents: yup.string().required("상품에 대한 내용을 입력해주세요."),
  useditemAddress: yup.object(),
  images: yup.array(yup.string().required()),
});
