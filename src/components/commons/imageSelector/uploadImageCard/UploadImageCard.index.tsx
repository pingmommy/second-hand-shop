import * as S from "../ImageSelector.style";
import { PlusOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import ValidationCheck from "../validationCheck";
import { useMutationUploadFile } from "../../hooks/mutations/useMutationUploadFile";
import type { IUploadImageCardProps } from "../ImageSelector.types";
const BASE_URL = "https://storage.googleapis.com/";

export default function UploadImageCard({
  imageUrl,
  index,
  setImageUrls,
}: IUploadImageCardProps): JSX.Element {
  const [uploadFile] = useMutationUploadFile();
  const fileInputElement = useRef<HTMLInputElement | null>(null);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (!ValidationCheck(file)) {
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      const uploadedUrl = result?.data?.uploadFile?.url ?? "";
      setImageUrls(uploadedUrl, index);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  const onClickFileRef = (): void => {
    if (fileInputElement.current !== null) {
      fileInputElement.current.click();
    }
  };

  // const uploadButton = (
  //   <button style={{ border: 0, background: "none" }} type="button"></button>
  // );
  return (
    <>
      <input
        hidden
        type="file"
        accept="image/jpeg, image/png"
        onChange={onChangeFile}
        ref={fileInputElement}
      />
      <S.UserSelectImgWrapper onClick={onClickFileRef}>
        {imageUrl !== "" ? (
          <S.SelectedImg src={`${BASE_URL}${imageUrl}`} alt="avatar" />
        ) : (
          <S.UploadButton type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </S.UploadButton>
        )}
      </S.UserSelectImgWrapper>
    </>
  );
}
