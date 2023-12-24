import { useMutation } from "@tanstack/react-query";
import { IAddServerParams, postAddServer } from "../../api/server/postAddServer";

const UseAddServerKey = 'useAddServerKey';

export function useAddServer() {
  return useMutation({
    mutationKey: [UseAddServerKey],
    mutationFn: (params: IAddServerParams) => postAddServer(params),
  });
}
