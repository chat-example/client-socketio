import { SERVER_API } from '../constants';

export interface IAddServerParams {
  name: string;
  password: string;
  description: string;
}

export async function postAddServer(params: IAddServerParams) {
  try {
    const res = await fetch(`${SERVER_API}/server`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(params),
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
