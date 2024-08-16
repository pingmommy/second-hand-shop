import type {
  IBoardComment,
  IMutation,
} from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  id: string;
  isEditing: boolean;
  editingData?: IBoardComment;
  onEditToggle?: () => void;
}

export type ExtendedFormData = Pick<IMutation, "createBoardComment"> & {
  password: string;
};
