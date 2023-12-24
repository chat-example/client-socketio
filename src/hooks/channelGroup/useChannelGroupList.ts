import { useSuspenseQuery } from '@tanstack/react-query';
import { IGetChannelListParams, getChannelGroupList } from '../../api/channelGroup/getChannelGroupList';

export const UseChannelGroupListQueryKey = "useChannelGroupListQueryKey";

export function useChannelGroupList(params: IGetChannelListParams) {
  const result = useSuspenseQuery({
    queryKey: [UseChannelGroupListQueryKey, params.serverId],
    queryFn: () => getChannelGroupList(params),
  });

  return result;
}
