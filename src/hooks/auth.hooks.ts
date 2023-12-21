import { useMutation } from "@tanstack/react-query";
import { ISignUpParams, postSignUp } from '../api/postSignUp';

const UseSignUpKey = 'useSignUpKey';

export function useSignUp() {
  return useMutation({
    mutationKey: [UseSignUpKey],
    mutationFn: (params: ISignUpParams) => postSignUp(params),
  });
}
