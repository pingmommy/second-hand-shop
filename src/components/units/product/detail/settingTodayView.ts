import { useEffect } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export const SettingTodayView = (
  data: Pick<IQuery, "fetchUseditem"> | undefined,
  id: string
): void => {
  useEffect(() => {
    if (data === undefined) return;
    console.log("!!!");
    const myData = {
      id: data?.fetchUseditem._id,
      name: data?.fetchUseditem.name,
      image: data?.fetchUseditem.images?.[0] ?? "",
    };

    const savedItems = JSON.parse(
      localStorage.getItem("todayViewedItems") ?? "[]"
    );
    const temp = savedItems.filter((el) => el.id === id);

    if (temp > 0) return;

    savedItems.unshift(myData);
    localStorage.setItem("todayViewedItems", JSON.stringify(savedItems));
  }, [data]);
};
