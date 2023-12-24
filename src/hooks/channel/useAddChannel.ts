import { useMutation } from "@tanstack/react-query";
import { IAddChannelParams, postAddChannel } from "../../api/channel/postAddChannel";

const UseAddChannelKey = 'useAddChannelKey';

export function useAddChannel(serverId: string | null) {
  return useMutation({
    mutationKey: [UseAddChannelKey],
    mutationFn: (params: IAddChannelParams) => postAddChannel(serverId, params),
  });
}
