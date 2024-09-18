import { useRouterIdChecker } from "../../../../src/components/commons/hooks/customs/useRouterIdChecker";
import { useQueryFetchUsedItem } from "../../../../src/components/commons/hooks/queries/useQueryFetchUsedItem";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.index";

export default function productEditPage(): JSX.Element {
  const { id } = useRouterIdChecker("borrdId");
  const { data } = useQueryFetchUsedItem(id);

  return <ProductWrite isEdit={true} prevData={data} />;
}
