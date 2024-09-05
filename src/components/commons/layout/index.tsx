import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.index";
import LayoutFooter from "./footer/LayoutFooter.index";
import LayoutHeader from "./header/LayoutHeader.index";

const HIDDEN_LIST = ["/logIn", "/signIn"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN_LIST.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}

      <>{props.children}</>

      {!isHidden && <LayoutFooter />}
    </>
  );
}
