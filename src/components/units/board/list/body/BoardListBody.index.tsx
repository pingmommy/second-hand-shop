import Link from "next/link";
import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./BoardListBody.style";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
interface IBoardListBodyProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  keyword: string;
}

export default function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.TableWrapper>
          <S.Trow>
            <S.T_Head>번호</S.T_Head>
            <S.T_Title>제목</S.T_Title>
            <S.T_Head>작성자</S.T_Head>
            <S.T_Head>날짜</S.T_Head>
          </S.Trow>
          {props.data?.fetchBoards?.map((el) => (
            <S.Trow key={el._id}>
              <S.T_Colum>{String(el._id).slice(-7).toUpperCase()}</S.T_Colum>
              <Link href={`/freeBoard/${el._id}`}>
                <S.T_Colum_title>
                  {el.title
                    .replaceAll(props.keyword, `@#$#${props.keyword}@#$#`)
                    .split("@#$#")
                    .map((el) =>
                      el === props.keyword ? (
                        <S.Keyword key={uuidv4()}>{el}</S.Keyword>
                      ) : (
                        <span key={uuidv4()}>{el}</span>
                      )
                    )}
                </S.T_Colum_title>
              </Link>
              <S.T_Colum>{el.writer}</S.T_Colum>
              <S.T_Colum>{getDate(String(el.createdAt))}</S.T_Colum>
            </S.Trow>
          ))}
        </S.TableWrapper>
      </S.Wrapper>
    </>
  );
}
