import { useSuspenseQuery } from '@tanstack/react-query';
import { getChannelList } from '../api/getChannelList';

export const UseChannelListQueryKey = "useChannelListQueryKey";

export function useChannelList() {
  const result = useSuspenseQuery({
    queryKey: [UseChannelListQueryKey],
    queryFn: getChannelList,
  });

  return result;
}
