import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("이메일을 입력하세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});
