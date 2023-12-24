import { useMutation } from "@tanstack/react-query";
import { ISignUpParams, postSignUp } from '../api/auth/postSignUp';
import { ISignInParams, postSignIn } from "../api/auth/postSignIn";

// 회원가입
const UseSignUpKey = 'useSignUpKey';

export function useSignUp() {
  return useMutation({
    mutationKey: [UseSignUpKey],
    mutationFn: (params: ISignUpParams) => postSignUp(params),
  });
}

// 로그인
const UseSignInKey = 'useSignInKey';

export function useSignIn() {
  return useMutation({
    mutationKey: [UseSignInKey],
    mutationFn: (params: ISignInParams) => postSignIn(params),
  });
}
