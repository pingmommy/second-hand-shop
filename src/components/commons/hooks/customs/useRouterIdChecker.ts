import { useRouter } from "next/router";

interface IUseRouterIdCheckerReturn {
  id: string;
}

export const useRouterIdChecker = (id: string): IUseRouterIdCheckerReturn => {
  const router = useRouter();

  const queryId = router.query[id];
  if (queryId === "undefined") return { id: "" };
  if (typeof queryId === "string") return { id: queryId };
  return { id: "" };
};

// boardId
