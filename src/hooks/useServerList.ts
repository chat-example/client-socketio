import { useSuspenseQuery } from '@tanstack/react-query';
import { getServerList } from '../api/getServerList';

export const UseServerListQueryKey = "useServerListQueryKey";

export function useServerList() {
  const result = useSuspenseQuery({
    queryKey: [UseServerListQueryKey],
    queryFn: getServerList,
  });

  return result;
}
