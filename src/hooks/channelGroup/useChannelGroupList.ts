import { useSuspenseQuery } from '@tanstack/react-query';
import { IGetChannelListParams, getChannelGroupList } from '../../api/channel/getChannelList';

export const UseChannelGroupListQueryKey = "useChannelGroupListQueryKey";

export function useChannelGroupList(params: IGetChannelListParams) {
  const result = useSuspenseQuery({
    queryKey: [UseChannelGroupListQueryKey],
    queryFn: () => getChannelGroupList(params),
  });

  return result;
}
