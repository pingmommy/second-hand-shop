import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "@emotion/styled";

import DOMPurify from "dompurify";

interface IProps {
  setContents: (contents: string) => void;
  data: string;
}

const InnerWrapper = styled.div`
  padding: 20px 0;
`;
const Title = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
`;

export default function MyQuillEditor(props: IProps): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current !== null) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],

            [
              {
                color: [
                  "#000000",
                  "#e60000",
                  "#ff9900",
                  "#ffff00",
                  "#008a00",
                  "#0066cc",
                ],
              },
              { background: [] },
            ],
            ["clean"],
          ],
        },
      });
      quill.on("text-change", () => {
        let contents = quill.root.innerHTML;
        contents = contents === "<p><br></p>" ? "" : contents;
        // console.log(contents);
        props.setContents(contents);
      });

      return () => {
        quill.off("text-change");
      };
    }
  }, []);

  const clean = DOMPurify.sanitize(props.data);
  return (
    <InnerWrapper>
      <Title>상품설명</Title>
      <div
        ref={editorRef}
        style={{ height: "20rem" }}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    </InnerWrapper>
  );
}
