import { useEffect } from "react";
import { useAccessToken } from "../../../../commons/stores";

import { useRouter } from "next/router";

export const useAuth = (): void => {
  const router = useRouter();
  const accessToken = useAccessToken((state) => state.accessToken);

  console.log(accessToken);

  useEffect(() => {
    if (accessToken === "") {
      void router.push("/logIn");
    }
  }, []);
};
