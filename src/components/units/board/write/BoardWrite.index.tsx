import * as S from "./BoardWrite.style";
import Postcode from "../../../commons/address/address.index";
import { useForm } from "react-hook-form";
import { userCreateBoard } from "../../../commons/hooks/customs/useCreateBoard";
import type {
  IBoardAddressInput,
  ICreateBoardInput,
  IQuery,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { BoardWriteMain } from "./main/BoardWriteMain.index";
import { useUpdateBoard } from "../../../commons/hooks/customs/useUpdateBoard";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";
import ImageSelector from "../../../commons/imageSelector/ImageSelector.index";

interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { dirtyFields, errors },
  } = useForm<ICreateBoardInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema),

    defaultValues: {
      title: props.data?.fetchBoard?.title ?? "",
      contents: props.data?.fetchBoard?.contents ?? "",
      youtubeUrl: props.data?.fetchBoard?.youtubeUrl ?? "",
      images: props.data?.fetchBoard?.images ?? [],
      boardAddress: {
        address: props.data?.fetchBoard?.boardAddress?.address ?? "",
        zipcode: props.data?.fetchBoard?.boardAddress?.zipcode ?? "",
        addressDetail:
          props.data?.fetchBoard?.boardAddress?.addressDetail ?? "",
      },
    },
  });

  // console.log(props.data);

  const { onClickSubmit } = userCreateBoard();
  const { onClickUpdate } = useUpdateBoard();

  const handleWriting = (data: ICreateBoardInput): void => {
    // console.log(data);
    // console.log(dirtyFields);

    if (props.isEdit) {
      const keys = Object.keys(dirtyFields) as Array<keyof IUpdateBoardInput>;
      const updateData: IUpdateBoardInput = {};

      keys.forEach((el) => {
        const value = data[el];

        updateData[el] = value as
          | (string & IBoardAddressInput & string[])
          | null
          | undefined; // 타입 캐스팅
      });
      void onClickUpdate(updateData, data.password ?? "");
    } else {
      void onClickSubmit(data);
    }
  };
  return (
    <>
      <S.Form onSubmit={handleSubmit(handleWriting)}>
        <S.PageTitle>
          {props.isEdit ? "게시글 수정" : "게시글 등록"}
        </S.PageTitle>
        <BoardWriteMain
          register={register}
          errors={errors}
          data={props.data}
          setValue={setValue}
          trigger={trigger}
        />
        <Postcode register={register} setValue={setValue} data={props.data} />
        <div>{errors.boardAddress?.message}</div>
        <ImageSelector setValue={setValue} data={props.data} />
        <div>{errors.images?.message}</div>
        <S.BtnWrapper>
          <S.WriteBtn type="submit">
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.WriteBtn>
        </S.BtnWrapper>
      </S.Form>
    </>
  );
}
