import { SERVER_API } from "./constants";

export async function postSignUp(params:{ email: string; password: string; }) {
  const res = await fetch(`${SERVER_API}/user/signupByEmail`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
  });

  return res;
}