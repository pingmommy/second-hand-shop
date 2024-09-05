import MyMarket from "./market/MyPage.Market.index";
import MyPoint from "./point/MyPage.Point.index";
import MyProfile from "./profile/MyPage.Profile.index";

export default function MyPage({ page }: any): JSX.Element {
  return (
    <>
      {page === "market" && <MyMarket />}
      {page === "point" && <MyPoint />}
      {page === "profile" && <MyProfile />}
    </>
  );
}
