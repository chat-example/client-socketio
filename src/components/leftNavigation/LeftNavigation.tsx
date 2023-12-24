import { TiPlus } from "react-icons/ti";
import { Suspense } from "react";
import ServerList from './ServerList';
import Loading from "../ui/Loading";
import { Menu } from "@mantine/core";
import { SlLogin } from "react-icons/sl";
import { MdPostAdd } from "react-icons/md";
import { modals } from "@mantine/modals";
import JoinServer from "./JoinServer";
import AddServer from "./AddServer";

const LeftNavigation = () => {
  return <ul className=" w-full p-0 flex flex-col gap-y-3 py-5 items-center">
    <Suspense fallback={<Loading />}>
      <ServerList />
    </Suspense>

    <PlusServer />
  </ul>
}

export default LeftNavigation;

function PlusServer() {
  const handleJoinServerButtonClick = () => {
    modals.open({
      title: "서버 접속",
      children: <JoinServer />,
    })
  }

  const handleAddServerButtonClick = () => {
    modals.open({
      title: "서버 추가",
      children: <AddServer />
    })
  }

  return <li
    className="relative w-full flex items-center justify-center cursor-pointer "
  >
    <Menu shadow="md" width={200} classNames={{
      dropdown: "bg-[#2b2d31] border-none",
      item: 'bg-[#383a40]',
    }}>
      <Menu.Target>
        <div className="w-[48px] aspect-square rounded-full border-red-400 border-2 border-solid flex items-center justify-center text-white font-bold cursor-pointer">
          <TiPlus className="text-red-400" size={30} />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<SlLogin className="w-[0.9rem] h-[0.9rem]" />}
          onClick={handleJoinServerButtonClick}
        >
          서버 접속
        </Menu.Item>

        <Menu.Item
          leftSection={<MdPostAdd className="w-[0.9rem] h-[0.9rem]" />}
          onClick={handleAddServerButtonClick}
        >
          서버 추가
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </li>
}
