import { sleep } from "../utils/time";
import channels from "./dummy/channel.json";

export async function getChannelList() {
  await sleep(5000);

  return channels;
}