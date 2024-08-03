import LayoutBanner from "./banner/LayoutBanner.index";
import LayoutFooter from "./footer/LayoutFooter.index";
import LayoutHeader from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <>{props.children}</>
      <LayoutFooter />
    </>
  );
}
