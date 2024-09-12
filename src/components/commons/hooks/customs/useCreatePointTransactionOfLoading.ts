import { useMutationCreatePointTransactionOfLoading } from "../mutations/useMutationcreatePointTransactionOfLoading";

interface ICreatePointReturn {
  chargingPoint: () => Promise<void>;
}

export const useCreatePointTransactionOfLoading = (): ICreatePointReturn => {
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();
  const chargingPoint = async (): Promise<void> => {
    try {
      const result = await createPointTransactionOfLoading();
      console.log(result);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  return {
    chargingPoint,
  };
};
