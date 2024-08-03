import BoarListBody from "./body/BoardListBody.index";
import BoarListFooter from "./footer/BoardListFooter.index";
import BoarListHeader from "./header/BoardListHeader.index";

export default function BoardList(): JSX.Element {
  return (
    <>
      <BoarListHeader></BoarListHeader>
      <BoarListBody></BoarListBody>
      <BoarListFooter></BoarListFooter>
    </>
  );
}
