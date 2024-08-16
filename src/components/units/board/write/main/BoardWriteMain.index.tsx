import type { ICreateBoardInput } from "../../../../../commons/types/generated/types";
import type { UseFormRegister } from "react-hook-form";
import * as S from "./BoardWriteMain.styles";

interface IBoardWriteMainProps {
  register: UseFormRegister<ICreateBoardInput>;
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
        </div>
        <div>
          <S.Title>비밀번호</S.Title>
          <S.Input type="password" {...props.register("password")} />
        </div>
      </S.UserWrapper>
      <S.InnerWrapper>
        <S.Title>제목</S.Title>
        <S.Input
          type="text"
          {...props.register("title")}
          defaultValue={props.data?.fetchBoard?.title}
        />
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>내용</S.Title>
        <S.TextArea
          {...props.register("contents")}
          defaultValue={props.data?.fetchBoard?.contents}
        ></S.TextArea>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>유튜브</S.Title>
        <S.Input type="text" placeholder="링크를 복사해주세요." />
      </S.InnerWrapper>
    </>
  );
};
