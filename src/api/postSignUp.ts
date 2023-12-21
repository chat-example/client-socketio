import { SERVER_API } from "./constants";

export interface ISignUpParams {
  email: string;
  password: string;
  nickname: string;
}

export async function postSignUp(params:ISignUpParams) {
  const res = await fetch(`${SERVER_API}/user/signupByEmail`, {
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