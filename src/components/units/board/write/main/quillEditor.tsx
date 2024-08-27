import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import type { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import type { ICreateBoardInput } from "../../../../../commons/types/generated/types";
import DOMPurify from "dompurify";

interface IProps {
  data: any;
  setValue: UseFormSetValue<ICreateBoardInput>;
  trigger: UseFormTrigger<ICreateBoardInput>;
}

export default function QuillEditor({
  data,
  setValue,
  trigger,
}: IProps): JSX.Element {
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
        console.log(contents);
        setValue("contents", contents, { shouldDirty: true });
        void trigger("contents");
      });

      return () => {
        quill.off("text-change");
      };
    }
  }, []);

  const clean = DOMPurify.sanitize(data?.fetchBoard?.contents);
  return (
    <div
      ref={editorRef}
      style={{ height: "20rem" }}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
