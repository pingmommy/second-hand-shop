import Link from "next/link";
import * as S from "./BoardDetail.style";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/getDate";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARDS,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  // if (typeof router.query.boardId !== "string") return <></>;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickLikeBoard = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const onClickDisLikeBoard = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = (): void => {
    try {
      if (typeof router.query.boardId !== "string") return;
      void deleteBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      void router.push("/freeBoard");
      setIsModalOpen(false);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleModal}>
        <p>정말로 삭제하시겠어요?</p>
      </Modal>
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
        </S.Main>
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
      </S.Wrapper>
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
  );
}
