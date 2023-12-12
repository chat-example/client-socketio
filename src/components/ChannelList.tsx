import { useState } from "react";
import { useChannelList } from "../hooks/useChannelList";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

const ChannelList = () => {
  const { data } = useChannelList();

  return <div className=" w-full flex flex-col gap-y-3 py-5">
    {data?.map((channel) => Channel(channel))}
  </div>
}

export default ChannelList;

function Channel(channel: { group: string; channels: { name: string; }[]; }) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOnClickGroup = () => {
    setIsOpened((opened) => !opened);
  }

  return <div key={channel.group} className="flex items-center text-[#949BA4] gap-y-5">
    <ul className="pl-1 flex flex-col gap-y-3">
      <p className="flex gap-x-2 cursor-pointer" onClick={handleOnClickGroup}><IoIosArrowDown className={`transition-all ${isOpened ? "" : "-rotate-90"}`} />{channel.group}</p>
      {isOpened && channel.channels.map(({ name }) => <li key={name} className="ml-4 list-none flex gap-x-2"><FaHashtag /> {name}</li>)}
    </ul>
  </div>;
}
