import { useState } from "react";
import type { ChangeEvent } from "react";
import * as S from "./CommentDetail.styles";
import CommentWrite from "../../../units/comment/write/CommentWrite.index";
import { getDate } from "../../../../commons/libraries/getDate";
import type { IBoardComment } from "../../../../commons/types/generated/types";
import { useDeleteBoardComment } from "../../../commons/hooks/customs/useDeleteBoardComment";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
interface ICommentDetailProps {
  data: IBoardComment;
  id: string;
}

export default function CommentDetail({
  data,
  id,
}: ICommentDetailProps): JSX.Element {
  const { deleteBoardComment } = useDeleteBoardComment();

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleModalToggle = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onEditHandler = (): void => {
    setIsEditing((prev) => !prev);
  };

  const onClickDeleteBoardComment = (): void => {
    void deleteBoardComment(password, data._id, id);
    handleModalToggle();
  };
  return (
    <>
      {isEditing ? (
        <CommentWrite
          isEditing={isEditing}
          editingData={data}
          id={id}
          onEditToggle={onEditHandler}
        />
      ) : (
        <S.Wrapper key={data._id}>
          {isModalOpen && (
            <S.DeleteModal
              open={isModalOpen}
              onOk={onClickDeleteBoardComment}
              onCancel={handleModalToggle}
              width={350}
            >
              <p>삭제를 원하시면 비밀번호를 입력해주세요!</p>
              <S.DeletePassword type="password" onChange={onChangePassword} />
            </S.DeleteModal>
          )}
          <Avatar size="large" icon={<UserOutlined />} />
          <S.TextWrapper>
            <S.Writer>{data.writer}</S.Writer>
            <S.Contents>{data.contents}</S.Contents>
            <S.Date>{getDate(String(data.createdAt))}</S.Date>
          </S.TextWrapper>
          <S.IconWrapper>
            <S.IconBox onClick={onEditHandler}>
              <S.IconEdit />
            </S.IconBox>
            <S.IconBox onClick={handleModalToggle}>
              <S.IconDelete />
            </S.IconBox>
          </S.IconWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
