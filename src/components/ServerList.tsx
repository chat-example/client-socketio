import { useServerList } from "../hooks/useServerList";

const ServerList = () => {
  const { data } = useServerList();

  return <ul className=" w-full p-0 flex flex-col gap-y-3 py-5 items-center">
    {data?.map((channel) => {
      return <li className="w-[48px] aspect-square rounded-full bg-red-400 flex items-center justify-center text-white font-bold">{channel.name}</li>
    })}
  </ul>
}

export default ServerList;