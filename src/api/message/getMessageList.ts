import { SERVER_API } from "../constants";
import { IMessage } from "../types";


export interface IGetMessageListParams {
  channelId: string | null;
}

export async function getMessageList({ channelId, }: IGetMessageListParams) {
  try {
    const res = await fetch(`${SERVER_API}/message/${channelId ?? null}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
    });
  
    const data = await res.json() as IMessage[];
  
    if (res.status >= 300) {
      return {
        status: res.status,
        data: [],
        error: data,
      }
    }
  
    return {
      status: res.status,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      data: [],
      error,
    }
  }
}
