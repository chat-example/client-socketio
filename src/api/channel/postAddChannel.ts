import { SERVER_API } from '../constants';

export interface IAddChannelParams {
  name: string;
  description: string;
  channelGroupId: string | null;
}

export async function postAddChannel(serverId: string | null, body: IAddChannelParams) {
  try {
    const res = await fetch(`${SERVER_API}/channel/${serverId}`, {
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
