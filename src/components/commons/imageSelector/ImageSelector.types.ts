import type { UseFormSetValue } from "react-hook-form";
import type {
  ICreateBoardInput,
  IQuery,
} from "../../../commons/types/generated/types";

export interface IUploadImageCardProps {
  imageUrl: string;
  index: number;
  setImageUrls: (uploadedUrl: string, index: number) => void;
}

export interface IImageSelectorProps {
  setValue: UseFormSetValue<ICreateBoardInput>;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}
