import { useMutation } from "@tanstack/react-query";
import { postSignUp } from '../api/postSignUp';

const UseSignUpKey = 'useSignUpKey';

export function useSignUp() {
  return useMutation({
    mutationKey: [UseSignUpKey],
    mutationFn: ({ email, password }: { email: string; password: string; }) => postSignUp({ email, password }),
  });
}
