import { SERVER_API } from "../constants";

export interface ISignInParams {
  email: string;
  password: string;
}

export async function postSignIn(params:ISignInParams) {
  const res = await fetch(`${SERVER_API}/user/signInByEmail`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
  });

  try {
    const data = await res.clone().json();

    return {
      status: res.status,
      data
    };
  } catch {
    const data = await res.text();

    return {
      status: res.status,
      data,
    };
  }

}