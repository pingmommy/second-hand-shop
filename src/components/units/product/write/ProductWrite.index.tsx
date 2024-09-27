import { useEffect, useState } from "react";
import Postcode02 from "../../../commons/address/address02.index";
import { Button01 } from "../../../commons/ui/button/01";
import ImageSelector02 from "../../../commons/imageSelector/ImageSelector02.index";
import { Input01 } from "../../../commons/ui/input/01";
import MyMap from "../../../commons/map/Map.index";
import { Title01 } from "../../../commons/ui/title/01";
import { useForm } from "react-hook-form";
import type {
  ICreateUseditemInput,
  IQuery,
} from "../../../../commons/types/generated/types";
import dynamic from "next/dynamic";
import { CardWrapper } from "../../../commons/ui/wrapper/wrapper";
import { useCreateUsedItem } from "../../../commons/hooks/customs/useCreateUsedItem";
import { useUpdateUsedItem } from "../../../commons/hooks/customs/useUpdateUsedItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductWrite.ValidationSchema";

const MyQuillEditor = dynamic(
  async () => await import("../../../commons/editor"),
  { ssr: false }
);

interface IProdWriteProps {
  prevData?: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit: boolean;
}

export default function ProductWrite({
  isEdit,
  prevData,
}: IProdWriteProps): JSX.Element {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [userAddress, setUserAddress] = useState({
    address: prevData?.fetchUseditem.useditemAddress?.address ?? "",
    zipcode: prevData?.fetchUseditem.useditemAddress?.zipcode ?? "",
  });

  const { onClickCreateUsedItem } = useCreateUsedItem();
  const { onClickUpdateUsedItem } = useUpdateUsedItem();

  const {
    handleSubmit,
    getValues,
    setValue,
    register,
    formState: { dirtyFields, isValid, errors },
  } = useForm<ICreateUseditemInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: prevData?.fetchUseditem.name ?? "",
      remarks: prevData?.fetchUseditem.remarks ?? "",
      price: prevData?.fetchUseditem.price ?? undefined,
      tags: prevData?.fetchUseditem.tags,
    },
  });

  useEffect(() => {
    const imgArr = [...imageUrls];
    prevData?.fetchUseditem.images?.forEach((el, idx) => (imgArr[idx] = el));
    setImageUrls([...imgArr]);
  }, []);

  const setAddress = (obj: { address: string; zipcode: string }): void => {
    setUserAddress({ ...obj });
    setValue("useditemAddress", { ...obj }, { shouldDirty: true });
  };

  const setImageUrl = (selectedImage: string[]): void => {
    setImageUrls([...selectedImage]);
    const filteredUrls = selectedImage.filter((el) => el !== "");
    setValue("images", [...filteredUrls], { shouldDirty: true });
  };

  const setContents = (contents: string): void => {
    setValue("contents", contents, { shouldDirty: true });
  };

  const handleUsedItemData = (data: ICreateUseditemInput): void => {
    if (isEdit) {
      const keys = Object.keys(dirtyFields);
      const id = prevData?.fetchUseditem._id ?? "";
      void onClickUpdateUsedItem(data, keys, id);
    } else {
      void onClickCreateUsedItem(data);
    }
  };
  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(handleUsedItemData)}>
        <Title01 isEdit={isEdit} />
        <Input01
          placeholder="상품명을 작성해주세요."
          register={register("name")}
          title="상품명"
        />

        <Input01
          placeholder="상품의 특징을 작성해주세요."
          register={register("remarks")}
          title="한줄요약"
        />
        <MyQuillEditor
          setContents={setContents}
          data={prevData?.fetchUseditem.contents ?? ""}
        />
        <Input01
          placeholder="판매가격을 입력해주세요."
          register={register("price")}
          title="판매가격"
        />

        <Input01
          placeholder="#태그 #태그 #태그"
          title="태그입력"
          register={register("tags.0")}
        />
        <MyMap address={userAddress.address} />
        <Postcode02 setAddress={setAddress} userAddress={userAddress} />
        <ImageSelector02 imageUrls={imageUrls} setImageUrl={setImageUrl} />
        <Button01 isEdit={isEdit} isValid={isValid} />
      </form>
      <button
        onClick={() => {
          console.log(errors);
          console.log(getValues("images"));
        }}
      >
        click
      </button>
    </CardWrapper>
  );
}
