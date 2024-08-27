import type {
  IBoardComment,
  ICreateBoardCommentInput,
} from "../../../../commons/types/generated/types";

import * as yup from "yup";
export interface ICommentWriteProps {
  id: string;
  isEditing: boolean;
  editingData?: IBoardComment;
  onEditToggle?: () => void;
}

export const schema: yup.ObjectSchema<ICreateBoardCommentInput> = yup.object({
  contents: yup.string().required(),
  password: yup.string().required(),
  rating: yup.number().default(0),
  writer: yup.string().required(),
});
