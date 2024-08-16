import Link from "next/link";
import * as S from "./BoardDetail.style";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/getDate";
import { useState } from "react";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useBoardLike } from "../../../commons/hooks/customs/useBoardLike";
import { useDeleteBoard } from "../../../commons/hooks/customs/useDeleteBoard";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQueryFetchBoard({
    boardId: String(router.query.boardId),
  });

  const { onClickLikeBoard, onClickDisLikeBoard } = useBoardLike(
    String(router.query.boardId)
  );

  const { onClickDeleteBoard } = useDeleteBoard();

  const handleOk = (): void => {
    onClickDeleteBoard(String(router.query.boardId));
    void router.push("/freeBoard");
    setIsModalOpen(false);
  };
  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>{data?.fetchBoard?.title}</S.Title>
          <S.userWrapper>
            <S.Avatar src="/icons/avatar.png" />
            <div>
              <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
              <S.Date>{getDate(String(data?.fetchBoard?.createdAt))}</S.Date>
            </div>
            <S.IconWrapper>
              <S.IconBox title="">
                <S.Icon>
                  <img src="/icons/ic_link-24px.svg" />
                </S.Icon>
              </S.IconBox>
              <S.IconBox
                title={
                  data?.fetchBoard?.boardAddress != null
                    ? `${data?.fetchBoard?.boardAddress.address} ${data?.fetchBoard?.boardAddress.addressDetail}`
                    : ""
                }
              >
                <S.Icon>
                  <img src="/icons/ic_location_on-24px.svg" />
                </S.Icon>
              </S.IconBox>
            </S.IconWrapper>
          </S.userWrapper>
        </S.Header>
        <S.Main>
          <S.ImgBox>
            <S.Image src="/images/mybaby02.resizing.png" />
          </S.ImgBox>
          <p>{data?.fetchBoard?.contents}</p>
          <div>유투브</div>
          <S.Footer>
            <S.Icon onClick={onClickLikeBoard}>
              <img src="/icons/ic_thumb_up_off_alt-24px.svg" />
              <S.UpCount>{data?.fetchBoard?.likeCount}</S.UpCount>
            </S.Icon>
            <S.Icon onClick={onClickDisLikeBoard}>
              <img src="/icons/ic_thumb_down-24px.svg" />
              <S.DownCount>{data?.fetchBoard?.dislikeCount}</S.DownCount>
            </S.Icon>
          </S.Footer>
        </S.Main>
      </S.Wrapper>
      <>
        <S.DeletionModal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleModal}
        >
          <p>정말로 삭제하시겠어요?</p>
        </S.DeletionModal>
        <S.BtnWrapper>
          <Link href="/freeBoard">
            <S.Button>목록으로</S.Button>
          </Link>
          <Link href={`/freeBoard/${String(router.query.boardId)}/edit`}>
            <S.Button>수정하기</S.Button>
          </Link>

          <S.Button onClick={handleModal}>삭제하기</S.Button>
        </S.BtnWrapper>
      </>
    </>
  );
}
