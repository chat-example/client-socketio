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
  
    const data = await res.json() as IServer[];
  
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