import { useEffect } from "react";
import { useMutationCreatePointTransactionOfLoading } from "../mutations/useMutationcreatePointTransactionOfLoading";

interface ICreatePointReturn {
  LoadPoint: (price: number) => void;
}

declare const window: typeof globalThis & { IMP: any; crypto: any };

export const useCreatePointTransactionOfLoading = (): ICreatePointReturn => {
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
  }, []);

  const LoadPoint = (price: number): void => {
    window.IMP.init("imp49910675");

    window.IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        merchant_uid: `payment-${window.crypto.randomUUID()}`, // 주문 고유 번호
        name: "Point",
        amount: price,
        buyer_email: "jung@jung.com",
        buyer_name: "정숙",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async function (response: any) {
        if (response.success === true) {
          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: response.imp_uid,
              },
            });
            console.log(result);
          } catch (err) {
            console.log(err);
          }
        }
      }
    );
  };

  return {
    LoadPoint,
  };
};
