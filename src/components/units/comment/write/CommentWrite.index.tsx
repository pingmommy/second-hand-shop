import type { ChangeEvent } from "react";
import { useState } from "react";
import * as S from "./CommentWrite.styles";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWrite.queries";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function CommentWrite(): JSX.Element {
  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: 0.5,
        },
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });

    setWriter("");
    setPassword("");
    setContents("");
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.IconImg src="/icons/rate_review-24px.svg" />
            <S.Title>댓글</S.Title>
          </S.TitleWrapper>
          <div>
            <S.Input
              type="text"
              placeholder="작성자"
              onChange={onChangeWriter}
              value={writer}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
              value={password}
            />
          </div>
        </S.Header>
        <S.Body>
          <div>
            <S.Contents
              maxLength={100}
              placeholder="개인정보가 어쩌구저쩌구..."
              onChange={onChangeContents}
              value={contents}
            ></S.Contents>
            <S.BtnWrapper>
              <S.TextCount>{`${contents.length}/100`}</S.TextCount>
              <S.Button onClick={onClickSubmit}>등록하기</S.Button>
            </S.BtnWrapper>
          </div>
        </S.Body>
      </S.Wrapper>
    </>
  );
}
