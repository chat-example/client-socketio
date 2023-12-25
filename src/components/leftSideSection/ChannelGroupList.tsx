import { useState } from "react";
import { useChannelGroupList } from "../../hooks/channelGroup/useChannelGroupList";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { useServerBoundStore } from '../../stores/useServerBoundStore';
import { IChannel, IChannelGroup } from "../../api/types";
import { FaPlus } from "react-icons/fa6";
import { modals } from '@mantine/modals';
import AddChannel from './AddChannel';

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
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const handleChannelGroupClick = () => {
    setIsOpened((opened) => !opened);
  }

  const handlePlusButtonClick = () => {
    modals.open({
      title: "채널 생성",
      children: <AddChannel channelGroupId={String(channelGroup.id)} />
    });
  }

  return <div key={channelGroup.name} className="flex items-center text-[#949BA4] gap-y-5">
    <ul className="pl-1 flex flex-col gap-y-3">
      <p className="flex gap-x-2 cursor-pointer items-center" onClick={handleChannelGroupClick}>
        <IoIosArrowDown className={`transition-all ${isOpened ? "" : "-rotate-90"}`} />

        {channelGroup.name}

        <FaPlus onClick={handlePlusButtonClick} />
      </p>

      {isOpened && channelGroup.channels?.map((channel) => <Channel key={channel.id} channel={channel} channelGroup={channelGroup} />)}
    </ul>
  </div>;
}

function Channel({ channel, channelGroup }: { channel: IChannel, channelGroup: IChannelGroup}) {
  const { name } = channel;

  const setCurrentChannel = useServerBoundStore((state) => state.channelAction.setCurrentChannel);

  const handleChannelClick = () => {
    setCurrentChannel(channelGroup, channel);
  }

  return <li key={name} className="ml-4 list-none flex gap-x-2 items-center cursor-pointer" onClick={handleChannelClick}>
    <FaHashtag />

    {name}
  </li>;
}
