import { SERVER_API } from './constants';

export interface IServer {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  banner: string |null;
  createdAt: string;
  updatedAt: string;
}

export async function getServerList() {
  try {
    const res = await fetch(`${SERVER_API}/server/`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.status !== 200) {
      throw data;
    }
  
    return {
      status: res.status,
      data: data as IServer[],
    };
  } catch (error){
    return {
      status: 500,
      data: [],
      error,
    }
  }
}