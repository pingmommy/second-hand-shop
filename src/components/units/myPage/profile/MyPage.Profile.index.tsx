import { ValidationBtn } from "../../../commons/ui/button/02";
import * as S from "./MyPage.Profile.style";
import { useMutationResetUserPassword } from "../../../commons/hooks/mutations/useMutationResetUserPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../../commons/ui/ErrorMessage";
import { schema } from "./Profile.Validation";
interface FormValues {
  password: string;
  checkingPassword: string;
}

export default function MyProfile(): JSX.Element {
  const { resetPassword } = useMutationResetUserPassword();

  const {
    setError,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const aa = (data: FormValues): void => {
    if (data?.password !== data?.checkingPassword) {
      setError("checkingPassword", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    void resetPassword(data.password);
  };

  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileTitle>비밀번호 변경</S.ProfileTitle>
        <form onSubmit={handleSubmit(aa)}>
          <S.ProfileInnerWrapper>
            <S.LabelWrapper>
              <S.ProfileLabel>새 비밀번호</S.ProfileLabel>
            </S.LabelWrapper>
            <div>
              <S.ProfileInput
                placeholder="새 비밀번호를 입력해 주세요."
                {...register("password")}
              />
              {errors.password != null ? (
                <ErrorMessage message={errors.password?.message ?? ""} />
              ) : (
                <div style={{ paddingTop: "1.3rem" }}> </div>
              )}
            </div>
          </S.ProfileInnerWrapper>
          <S.ProfileInnerWrapper>
            <S.LabelWrapper>
              <S.ProfileLabel>새 비밀번호 확인</S.ProfileLabel>
            </S.LabelWrapper>
            <div>
              <S.ProfileInput
                placeholder="새 비밀번호를 확인해 주세요."
                {...register("checkingPassword")}
              />
              {errors.checkingPassword != null ? (
                <ErrorMessage
                  message={errors.checkingPassword?.message ?? ""}
                />
              ) : (
                <div style={{ paddingTop: "1.3rem" }}> </div>
              )}
            </div>
          </S.ProfileInnerWrapper>
          <S.BtnWrapper>
            <ValidationBtn isValid={isValid}>비밀번호 변경</ValidationBtn>
          </S.BtnWrapper>
        </form>
      </S.ProfileWrapper>
    </>
  );
}
