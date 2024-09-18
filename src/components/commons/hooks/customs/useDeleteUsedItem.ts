import { useMutationDeleteUsedItem } from "../mutations/useMutationDeleteUsedItem";
import { Modal } from "antd";
import { useRouterIdChecker } from "./useRouterIdChecker";
import { useRouter } from "next/router";

interface IUseDeleteUsedItemReturn {
  onClickDeleteUsedItem: () => void;
}

export const useDeleteUsedItem = (): IUseDeleteUsedItemReturn => {
  const router = useRouter();
  const [deleteUseditem] = useMutationDeleteUsedItem();
  const { id: useditemId } = useRouterIdChecker("borrdId");

  const onDeleteUsedItem = async (): Promise<void> => {
    console.log(useditemId);
    try {
      await deleteUseditem({
        variables: { useditemId },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditems: (
                prev: ReadonlyArray<{ __ref: string }>,
                { readField }
              ) => {
                const deleteId = data?.deleteUseditem;
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      void router.push("/productShop");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  const onClickDeleteUsedItem = (): void => {
    void Modal.confirm({
      content: "게시물을 삭제하시겠습니까?",
      onOk: onDeleteUsedItem,
    });
  };

  return { onClickDeleteUsedItem };
};
