import type { ChangeEvent } from "react";
import { useState } from "react";
import * as S from "./BoardWrite.style";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARDS } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();

  const warning = (content: string): void => {
    Modal.warning({
      content,
    });
  };

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });

      void router.push(`/freeBoard/${result?.data?.createBoard._id}`);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  interface IUpdateBoardInput {
    title?: string;
    contents?: string;
  }

  const updateBoardInput: IUpdateBoardInput = {};

  const onClickUpdate = async (): Promise<void> => {
    if (title === "" && contents.length === 0) {
      warning("변경된 내용이 없습니다!");
      return;
    }

    if (password === "") {
      warning("비밀번호를 입력해주세요.");
      return;
    }
    console.log("HI");
    if (title !== "") {
      updateBoardInput.title = title;
    }
    if (contents !== "") {
      updateBoardInput.contents = contents;
    }

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardId,
          password,
        },
      });
      void router.push(`/freeBoard/${result?.data?.updateBoard._id}`);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.PageTitle>
          {props.isEdit ? "게시글 수정" : "게시글 등록"}
        </S.PageTitle>

        <S.UserWrapper>
          <div>
            <S.Title>작성자</S.Title>
            <S.Input
              type="text"
              onChange={onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer}
            />
          </div>
          <div>
            <S.Title>비밀번호</S.Title>
            <S.Input type="password" onChange={onChangePassword} />
          </div>
        </S.UserWrapper>
        <S.InnerWrapper>
          <S.Title>제목</S.Title>
          <S.Input
            type="text"
            onChange={onChangeTitle}
            defaultValue={props.data?.fetchBoard?.title}
          />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Title>내용</S.Title>
          <S.TextArea
            onChange={onChangeContents}
            defaultValue={props.data?.fetchBoard?.contents}
          ></S.TextArea>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Title>주소</S.Title>
          <S.flexWrap_H>
            <S.ZipCode placeholder="22531" />
            <S.ZipCodeBtn>우편번호 검색</S.ZipCodeBtn>
          </S.flexWrap_H>
          <S.Margin_B_10 />
          <S.Input />
          <S.Margin_B_10 />
          <S.Input type="text" placeholder="상세주소를 입력해주세요." />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Title>유튜브</S.Title>
          <S.Input type="text" placeholder="링크를 복사해주세요." />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Title>사진첨부</S.Title>
          <S.flexWrap_H>
            <S.UserSelectImg>+</S.UserSelectImg>
            <S.UserSelectImg>+</S.UserSelectImg>
            <S.UserSelectImg>+</S.UserSelectImg>
          </S.flexWrap_H>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Title>메인설정</S.Title>
        </S.InnerWrapper>
        <S.BtnWrapper>
          <S.WriteBtn onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.WriteBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
