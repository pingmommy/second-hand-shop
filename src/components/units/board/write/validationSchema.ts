import * as yup from "yup";
import type { ICreateBoardInput } from "../../../../commons/types/generated/types";
export const schema: yup.ObjectSchema<ICreateBoardInput> = yup.object().shape({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  password: yup
    .string()
    .min(4, "4자리 이상 입력하세요.")
    .required("비밀번호를 입력해주세요."),
  youtubeUrl: yup.string(),
  images: yup.array(yup.string().required()),
  boardAddress: yup.object(),
});
