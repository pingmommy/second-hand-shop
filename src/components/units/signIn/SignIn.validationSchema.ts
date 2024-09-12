import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일형식에 적합하지 않습니다.")
    .required("이메일을 입력하세요."),
  password: yup
    .string()
    .min(4, "4자리 이상 입력해주세요.")
    .max(15, "최대 15자리까지 입력해주세요.")
    .required("비밀번호를 입력해주세요."),

  name: yup.string().required("닉네임을 입력해주세요."),
});
