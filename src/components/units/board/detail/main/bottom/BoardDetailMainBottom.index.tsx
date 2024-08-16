import { useState } from "react";
import { useDeleteBoard } from "../../../../../commons/hooks/customs/useDeleteBoard";
import Link from "next/link";
import * as S from "./BoardDetailMainBottom.style";
import { useRouter } from "next/router";
import { useRouterIdChecker } from "../../../../../commons/hooks/customs/useRouterIdChecker";

export default function BoardDetailMainBottom(): JSX.Element {
  const router = useRouter();
  const { id } = useRouterIdChecker("boardId");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { onClickDeleteBoard } = useDeleteBoard();

  const handleOk = (): void => {
    onClickDeleteBoard(id);
    void router.push("/freeBoard");
    setIsModalOpen(false);
  };
  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
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
        <Link href={`/freeBoard/${id}/edit`}>
          <S.Button>수정하기</S.Button>
        </Link>

        <S.Button onClick={handleModal}>삭제하기</S.Button>
      </S.BtnWrapper>
    </>
  );
}
