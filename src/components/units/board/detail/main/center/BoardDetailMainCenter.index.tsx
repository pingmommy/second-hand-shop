import type { IQuery } from "../../../../../../commons/types/generated/types";
import { useBoardLike } from "../../../../../commons/hooks/customs/useBoardLike";
import { useRouterIdChecker } from "../../../../../commons/hooks/customs/useRouterIdChecker";
import * as S from "./BoardDetailMainCenter.styles";
import DOMPurify from "dompurify";
interface IProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
}

const BASE_URL = "https://storage.googleapis.com/";

export default function BoardDetailMainCenter(props: IProps): JSX.Element {
  const { id } = useRouterIdChecker("boardId");
  const { onClickLikeBoard, onClickDisLikeBoard } = useBoardLike(id);

  const clean = DOMPurify.sanitize(props.data?.fetchBoard?.contents ?? "");
  return (
    <>
      <S.Main>
        {props.data?.fetchBoard?.images
          ?.filter((el) => el !== "")
          .map((image, index) => (
            <S.ImgBox key={index}>
              <S.Image src={`${BASE_URL}${image}`} />
            </S.ImgBox>
          ))}

        <S.Contents dangerouslySetInnerHTML={{ __html: clean }} />
        {props.data?.fetchBoard?.youtubeUrl !== "" &&
          props.data?.fetchBoard?.youtubeUrl !== null && (
            <S.YoutubeWrapper>
              <S.Youtube
                url={props.data?.fetchBoard?.youtubeUrl}
                width="100%"
                height="100%"
              />
            </S.YoutubeWrapper>
          )}
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
