import { SERVER_API } from '../constants';

export interface IAddChannelGroupParams {
  name: string;
  description: string;
  serverId: string | null;
}

export async function postAddChannelGroup({ serverId, ...body }: IAddChannelGroupParams) {
  try {
    const res = await fetch(`${SERVER_API}/channelGroup/${serverId}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
  
    const data = await res.json();
  
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
