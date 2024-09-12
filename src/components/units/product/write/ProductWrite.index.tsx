import { useState } from "react";
import Postcode02 from "../../../commons/address/address02.index";
import { Button01 } from "../../../commons/button/01";
import ImageSelector02 from "../../../commons/imageSelector/ImageSelector02.index";
import { Input01 } from "../../../commons/input/01";
import MyMap from "../../../commons/map/Map.index";
import { Title01 } from "../../../commons/title/01";
import { useForm } from "react-hook-form";
import type { ICreateUseditemInput } from "../../../../commons/types/generated/types";
import dynamic from "next/dynamic";
import { CardWrapper } from "../../../commons/wrapper/wrapper";
import { useCreateUsedItem } from "../../../commons/hooks/customs/useCreateUsedItem";

const MyQuillEditor = dynamic(
  async () => await import("../../../commons/editor"),
  { ssr: false }
);

export default function ProductWrite({
  isEdit,
}: {
  isEdit: boolean;
}): JSX.Element {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [userAddress, setUserAddress] = useState({
    address: "",
    zipcode: "",
  });

  const { onClickCreateUsedItem } = useCreateUsedItem();
  const { handleSubmit, setValue, register } = useForm<ICreateUseditemInput>();

  const setAddress = (obj: { address: string; zipcode: string }): void => {
    setUserAddress({ ...obj });
    setValue("useditemAddress", { ...obj });
  };

  const setImageUrl = (selectedImage: string[]): void => {
    setImageUrls([...selectedImage]);
    setValue("images", [...selectedImage]);
  };

  const setContents = (contents: string): void => {
    setValue("contents", contents);
  };

  const handleUsedItemData = (data: ICreateUseditemInput): void => {
    console.log(data);
    void onClickCreateUsedItem(data);
  };
  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(handleUsedItemData)}>
        <Title01 isEdit={isEdit} />
        <Input01
          placeholder="상품명을 작성해주세요."
          register={register("name")}
        >
          상품명
        </Input01>
        <Input01
          placeholder="상품의 특징을 작성해주세요."
          register={register("remarks")}
        >
          한줄요약
        </Input01>
        <MyQuillEditor setContents={setContents} />
        <Input01
          placeholder="판매가격을 입력해주세요."
          register={register("price")}
        >
          판매가격
        </Input01>
        <Input01 placeholder="#태그 #태그 #태그" register={register("tags")}>
          태그입력
        </Input01>
        <MyMap address={userAddress.address} />
        <Postcode02 setAddress={setAddress} userAddress={userAddress} />
        <ImageSelector02 imageUrls={imageUrls} setImageUrl={setImageUrl} />
        <Button01 isEdit={isEdit} />
      </form>
    </CardWrapper>
  );
}
