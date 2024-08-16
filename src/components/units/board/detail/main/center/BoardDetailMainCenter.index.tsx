import { useBoardLike } from "../../../../../commons/hooks/customs/useBoardLike";
import { useRouterIdChecker } from "../../../../../commons/hooks/customs/useRouterIdChecker";
import * as S from "./BoardDetailMainCenter.styles";
export default function BoardDetailMainCenter(props: any): JSX.Element {
  const { id } = useRouterIdChecker("boardId");
  const { onClickLikeBoard, onClickDisLikeBoard } = useBoardLike(id);
  return (
    <>
      <S.Main>
        <S.ImgBox>
          <S.Image src="/images/mybaby02.resizing.png" />
        </S.ImgBox>
        <p>{props.data?.fetchBoard?.contents}</p>
        <div>유투브</div>
        <S.Footer>
          <S.Icon onClick={onClickLikeBoard}>
            <img src="/icons/ic_thumb_up_off_alt-24px.svg" />
            <S.UpCount>{props.data?.fetchBoard?.likeCount}</S.UpCount>
          </S.Icon>
          <S.Icon onClick={onClickDisLikeBoard}>
            <img src="/icons/ic_thumb_down-24px.svg" />
            <S.DownCount>{props.data?.fetchBoard?.dislikeCount}</S.DownCount>
          </S.Icon>
        </S.Footer>
      </S.Main>
    </>
  );
}
