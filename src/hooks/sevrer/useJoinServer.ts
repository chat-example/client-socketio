import { useMutation } from "@tanstack/react-query";
import { IJoinServerParams, postJoinServer } from "../../api/server/postJoinServer";

const UseJoinServer = 'useiJoinServerKey';

export function useJoinServer() {
  return useMutation({
    mutationKey: [UseJoinServer],
    mutationFn: (params: IJoinServerParams) => postJoinServer(params),
  });
}
