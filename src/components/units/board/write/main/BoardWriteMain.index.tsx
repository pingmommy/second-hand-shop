import type { ICreateBoardInput } from "../../../../../commons/types/generated/types";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import * as S from "./BoardWriteMain.styles";
import QuillEditor from "./quillEditor";

interface IBoardWriteMainProps {
  register: UseFormRegister<ICreateBoardInput>;
  setValue: UseFormSetValue<ICreateBoardInput>;
  errors: FieldErrors<ICreateBoardInput>;
  trigger: UseFormTrigger<ICreateBoardInput>;
  data: any;
}

export const BoardWriteMain = (props: IBoardWriteMainProps): JSX.Element => {
  return (
    <>
      <S.UserWrapper>
        <div>
          <S.Title>작성자</S.Title>
          <S.Input
            type="text"
            {...props.register("writer")}
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={props.data?.fetchBoard.writer}
          />
          <S.Error>{props.errors.writer?.message}</S.Error>
        </div>
        <div>
          <S.Title>비밀번호</S.Title>
          <S.Input type="password" {...props.register("password")} />
          <S.Error>{props.errors.password?.message}</S.Error>
        </div>
      </S.UserWrapper>
      <S.InnerWrapper>
        <S.Title>제목</S.Title>
        <S.Input
          type="text"
          {...props.register("title")}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <S.Error>{props.errors.title?.message}</S.Error>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>내용</S.Title>
        {typeof window !== "undefined" && (
          <QuillEditor
            data={props.data}
            setValue={props.setValue}
            trigger={props.trigger}
          />
        )}
        <S.Error>{props.errors.contents?.message}</S.Error>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>유튜브</S.Title>
        <S.Input
          type="text"
          placeholder="링크를 복사해주세요."
          {...props.register("youtubeUrl")}
          defaultValue={props.data?.fetchBoard?.youtubeUrl}
        />
      </S.InnerWrapper>
    </>
  );
};

/* <S.TextArea
          {...props.register("contents")}
          defaultValue={props.data?.fetchBoard?.contents}
        ></S.TextArea>
        <S.Error>{props.errors.contents?.message}</S.Error> */
