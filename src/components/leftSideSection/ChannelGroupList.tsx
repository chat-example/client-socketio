import { useState } from "react";
import { useChannelGroupList } from "../../hooks/channelGroup/useChannelGroupList";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { useServerBoundStore } from '../../stores/useServerBoundStore';
import { IChannelGroup } from "../../api/types";

const ChannelGroupList = () => {
  const currentServer = useServerBoundStore((state) => state.currentServer);
  const { data } = useChannelGroupList({
    serverId: currentServer?.id,
  });

  if (!Array.isArray(data?.data)) {
    return null;
  }

  return data.data.map((channel) => <ChannelGroup key={channel.id} {...channel} />)
}

export default ChannelGroupList;

function ChannelGroup(channelGroup: IChannelGroup){
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOnClickGroup = () => {
    setIsOpened((opened) => !opened);
  }

  return <div key={channelGroup.name} className="flex items-center text-[#949BA4] gap-y-5">
    <ul className="pl-1 flex flex-col gap-y-3">
      <p className="flex gap-x-2 cursor-pointer" onClick={handleOnClickGroup}>
        <IoIosArrowDown className={`transition-all ${isOpened ? "" : "-rotate-90"}`} />

        {channelGroup.name}
      </p>

      {isOpened && channelGroup.channels?.map(({ name }) => <li key={name} className="ml-4 list-none flex gap-x-2"><FaHashtag /> {name}</li>)}
    </ul>
  </div>;
}
