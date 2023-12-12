import { sleep } from '../utils/time';
import servers from './dummy/server.json'

export async function getServerList() {
  await sleep(5000);

  return servers
}
