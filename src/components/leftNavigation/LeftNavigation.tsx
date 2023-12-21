import { TiPlus } from "react-icons/ti";
import { Suspense } from "react";
import ServerList from './ServerList';
import Loading from "../ui/Loading";

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
  return <li
    className="relative w-full flex items-center justify-center cursor-pointer "
  >
    <div className="w-[48px] aspect-square rounded-full border-red-400 border-2 border-solid flex items-center justify-center text-white font-bold cursor-pointer">
      <TiPlus className="text-red-400" size={30} />
    </div>
  </li>
}