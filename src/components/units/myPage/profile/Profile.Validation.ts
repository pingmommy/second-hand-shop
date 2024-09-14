import * as yup from "yup";

export const schema = yup.object({
  password: yup
    .string()
    .required("비밀번호를 입력하세요.")
    .min(4, "4자리 이상 입력해주세요"),
  checkingPassword: yup
    .string()
    .required("비밀번호를 입력하세요.")
    .min(4, "4자리 이상 입력해주세요"),
});
