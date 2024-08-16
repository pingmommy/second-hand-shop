import * as S from "./BoardWrite.style";
import Postcode from "../../../commons/address/address.index";
import { useForm } from "react-hook-form";
import { userCreateBoard } from "../../../commons/hooks/customs/useCreateBoard";
import type {
  IBoardAddressInput,
  ICreateBoardInput,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { BoardWriteMain } from "./main/BoardWriteMain.index";
import { ImageSelector } from "../../../commons/imageSelector/ImageSelector.index";
import { useUpdateBoard } from "../../../commons/hooks/customs/useUpdateBoard";

interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { dirtyFields },
  } = useForm<ICreateBoardInput>({
    defaultValues: {
      title: props.data?.fetchBoard?.title ?? "",
      contents: props.data?.fetchBoard?.contents ?? "",
      boardAddress: {
        address: props.data?.fetchBoard?.boardAddress.address ?? "",
        zipcode: props.data?.fetchBoard?.boardAddress.zipcode ?? "",
        addressDetail: props.data?.fetchBoard?.boardAddress.addressDetail ?? "",
      },
    },
  });

  const { onClickSubmit } = userCreateBoard();
  const { onClickUpdate } = useUpdateBoard();

  const handleWriting = (data: ICreateBoardInput): void => {
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
      <S.Wrapper onSubmit={handleSubmit(handleWriting)}>
        <S.PageTitle>
          {props.isEdit ? "게시글 수정" : "게시글 등록"}
        </S.PageTitle>
        <BoardWriteMain register={register} data={props.data} />
        <Postcode register={register} setValue={setValue} data={props.data} />
        <ImageSelector />
        <S.BtnWrapper>
          <S.WriteBtn>{props.isEdit ? "수정하기" : "등록하기"}</S.WriteBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
