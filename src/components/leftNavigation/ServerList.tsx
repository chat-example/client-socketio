import { useServerList } from "../../hooks/useServerList";
import { IServer } from "../../stores/server.slice";
import { useServerBoundStore } from "../../stores/useServerBoundStore";
import Circle from "../ui/Circle";

const ServerList = () => {
  const { data } = useServerList();
  
  return <ul className=" w-full p-0 flex flex-col gap-y-3 py-5 items-center">
    {data?.map(({ name, thumbnail} ) => {
      return <Server name={name} thumbnail={thumbnail} />
    })}
  </ul>
}

export default ServerList;

function Server(server: IServer) {
  const { name } = server;

  const currentServer = useServerBoundStore((state) => state.currentServer);
  const setCurrentServer = useServerBoundStore((state) => state.serverAction.setCurrentServer);

  const isCurrentServer = currentServer?.name === name;

  const handleServerClick = () => {
    setCurrentServer(server);
  }

  return <li
    className="relative w-full flex items-center justify-center cursor-pointer"
    onClick={handleServerClick}
  >
    {
      isCurrentServer &&
      <div className="absolute left-0 top-[50%] -translate-y-[50%]">
        <Circle color="white" />
      </div>
    }

    <div className="w-[48px] aspect-square rounded-full bg-red-400 flex items-center justify-center text-white font-bold cursor-pointer">
      {name}
    </div>
  </li>;
}
