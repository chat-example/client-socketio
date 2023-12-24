import { SERVER_API } from "../constants";
import { IChannelGroup } from "../types";


export interface IGetChannelListParams {
  serverId?: string | null;
}

export async function getChannelGroupList({ serverId, }: IGetChannelListParams) {
  try {
    const res = await fetch(`${SERVER_API}/channelGroup/${serverId ?? 0}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
    });
  
    const data = await res.json() as IChannelGroup[];
  
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
