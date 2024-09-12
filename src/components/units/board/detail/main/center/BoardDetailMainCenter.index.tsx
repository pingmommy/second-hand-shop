import type { IQuery } from "../../../../../../commons/types/generated/types";
import { useBoardLike } from "../../../../../commons/hooks/customs/useBoardLike";
import { useRouterIdChecker } from "../../../../../commons/hooks/customs/useRouterIdChecker";
import * as S from "./BoardDetailMainCenter.styles";
import DOMPurify from "dompurify";
import { MyIcon } from "../../../../../commons/icon/MyIcon.index";
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
          <S.LikeIcon onClick={onClickLikeBoard}>
            <MyIcon iconName="thumb_up" />
            <S.UpCount>{props.data?.fetchBoard?.likeCount}</S.UpCount>
          </S.LikeIcon>
          <S.DislikeIcon onClick={onClickDisLikeBoard}>
            <MyIcon iconName="thumb_down" />
            <S.DownCount>{props.data?.fetchBoard?.dislikeCount}</S.DownCount>
          </S.DislikeIcon>
        </S.Footer>
      </S.Main>
    </>
  );
}
