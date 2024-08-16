import * as S from "./CommentWrite.styles";
import { useForm } from "react-hook-form";
import type { IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import type {
  ExtendedFormData,
  ICommentWriteProps,
} from "./CommentWrite.queries";
import { useCreateBoardComment } from "../../../commons/hooks/customs/useCreateBoardComment";
import { useUpdateBoardComment } from "../../../commons/hooks/customs/useUpdateBoardComment";

export default function CommentWrite({
  id,
  isEditing,
  editingData,
  onEditToggle,
}: ICommentWriteProps): JSX.Element {
  const { register, handleSubmit, reset } = useForm<
    ExtendedFormData,
    IMutationCreateBoardCommentArgs
  >();
  const { onClickSubmit } = useCreateBoardComment();
  const { onClickUpdate } = useUpdateBoardComment();

  const HandlingSubmit = (data: ExtendedFormData): void => {
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
              {...register("createBoardComment.writer")}
              defaultValue={editingData?.writer ?? ""}
              readOnly={editingData?.writer !== undefined}
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
                {...register("createBoardComment.contents")}
                defaultValue={editingData?.contents}
              ></S.Contents>
              <S.BtnWrapper>
                <S.TextCount>{`100/100`}</S.TextCount>
                <S.Button>{isEditing ? "수정하기" : "등록하기"}</S.Button>
              </S.BtnWrapper>
            </div>
          </S.Body>
        </form>
      </S.Wrapper>
    </>
  );
}
