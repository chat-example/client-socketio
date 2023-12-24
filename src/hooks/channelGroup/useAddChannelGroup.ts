import { useMutation } from "@tanstack/react-query";
import { IAddChannelGroupParams, postAddChannelGroup } from "../../api/channelGroup/postAddChannelGroup";

const UseAddChannelGroupKey = 'useAddChannelGroupKey';

export function useAddChannelGroup() {
  return useMutation({
    mutationKey: [UseAddChannelGroupKey],
    mutationFn: (params: IAddChannelGroupParams) => postAddChannelGroup(params),
  });
}
