import { useSuspenseQuery } from "@tanstack/react-query";
import { getMessageList } from "../../api/message/getMessageList";

const UseMessageListKey = 'useMessageListKey';

export function useMessageList(channelId: string | null) {
  return useSuspenseQuery({
    queryKey: [UseMessageListKey, channelId],
    queryFn: () => getMessageList({ channelId }),
  });
}
