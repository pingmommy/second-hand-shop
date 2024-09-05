import { useEffect, useState } from "react";
import * as S from "./ImageSelector.style";
import UploadImageCard from "./uploadImageCard/UploadImageCard.index";
import type { IImageSelectorProps } from "./ImageSelector.types";

export default function ImageSelector({
  setValue,
  data,
}: IImageSelectorProps): JSX.Element {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  // console.log(data);
  useEffect(() => {
    if (
      data?.fetchBoard?.images !== undefined &&
      data?.fetchBoard?.images !== null
    ) {
      const a = [...imageUrls];
      data?.fetchBoard?.images.map((el, index) => (a[index] = el));
      setImageUrls([...a]);
    }
  }, [data]);

  const setImageUrlsValue = (uploadedUrl: string, index: number): void => {
    let imageUrlsArr = [...imageUrls];
    imageUrlsArr[index] = uploadedUrl;
    setImageUrls([...imageUrlsArr]);
    imageUrlsArr = imageUrlsArr.filter((el) => el !== "");

    setValue("images", [...imageUrlsArr], { shouldDirty: true });
    // console.log(imageUrls, imageUrlsArr);
  };

  return (
    <>
      <S.InnerWrapper>
        <S.Title>사진첨부</S.Title>
        <S.flexWrap_H>
          {imageUrls.map((imageUrl, index) => (
            <UploadImageCard
              key={index}
              imageUrl={imageUrl}
              index={index}
              setImageUrls={setImageUrlsValue}
            />
          ))}
        </S.flexWrap_H>
      </S.InnerWrapper>
    </>
  );
}
