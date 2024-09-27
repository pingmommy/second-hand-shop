import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import styled from "@emotion/styled";
import LayoutSideBar from "../../src/components/commons/layout/sidebar/LayoutSidebar.index";
import MyPage from "../../src/components/units/myPage/myPage.index";
import { ListWrapper } from "../../src/components/commons/ui/wrapper/wrapper";
import { usePage } from "../../src/commons/stores";

export const LayoutSidebarWrapper = styled(ListWrapper)`
  display: flex;
  border-top: none;
  padding-top: 4rem;
  gap: 2rem;
`;
export default function myPagePage(): JSX.Element {
  const page = usePage((state) => state.page);
  const setPage = usePage((state) => state.setPage);

  useAuth();
  return (
    <LayoutSidebarWrapper>
      <div>
        <LayoutSideBar page={page} setPage={setPage} />
      </div>
      <div style={{ flexGrow: "1" }}>
        <MyPage page={page} />
      </div>
    </LayoutSidebarWrapper>
  );
}
