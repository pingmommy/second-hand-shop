import * as S from "./CommentWrite.styles";
import { useForm } from "react-hook-form";
import type { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";
import { schema } from "./CommentWrite.types";
import type { ICommentWriteProps } from "./CommentWrite.types";
import { useCreateBoardComment } from "../../../commons/hooks/customs/useCreateBoardComment";
import { useUpdateBoardComment } from "../../../commons/hooks/customs/useUpdateBoardComment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import type { ChangeEvent } from "react";

export default function CommentWrite({
  id,
  isEditing,
  editingData,
  onEditToggle,
}: ICommentWriteProps): JSX.Element {
  const [contentsLength, setContentsLength] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ICreateBoardCommentInput>({
    resolver: yupResolver(schema),
  });
  const { onClickSubmit } = useCreateBoardComment();
  const { onClickUpdate } = useUpdateBoardComment();

  const HandlingSubmit = (data: ICreateBoardCommentInput): void => {
    if (isEditing) {
      void onClickUpdate(id, editingData?._id, data);
      if (onEditToggle != null) {
        onEditToggle();
      }
    } else {
      void onClickSubmit(id, data);
      reset();
    }
  };

  const checkLength = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContentsLength(event.currentTarget.value.length);
  };

  return (
    <>
      <S.Wrapper>
        {!isEditing && (
          <S.Header>
            <S.IconImg src="/icons/rate_review-24px.svg" />
            <S.Title>댓글</S.Title>
          </S.Header>
        )}
        <form onSubmit={handleSubmit(HandlingSubmit)}>
          <S.TitleWrapper>
            <S.Input
              type="text"
              placeholder="작성자"
              {...register("writer")}
              defaultValue={editingData?.writer ?? ""}
              readOnly={isEditing}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
          </S.TitleWrapper>
          <S.Body>
            <div>
              <S.Contents
                maxLength={100}
                placeholder="개인정보가 어쩌구저쩌구..."
                {...register("contents")}
                onChange={checkLength}
                defaultValue={editingData?.contents}
              ></S.Contents>
              <S.BtnWrapper>
                <S.TextCount>{`${contentsLength}/100`}</S.TextCount>
                <S.Button disabled={!isValid}>
                  {isEditing ? "수정하기" : "등록하기"}
                </S.Button>
              </S.BtnWrapper>
            </div>
          </S.Body>
        </form>
      </S.Wrapper>
    </>
  );
}
