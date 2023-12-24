import { Suspense } from "react";
import Loading from "../ui/Loading";
import ChannelGroupList from "./ChannelGroupList";
import { modals } from '@mantine/modals';
import AddChannelGroup from "./AddChannelGroup";

const LeftSideSection = () => {
  return <div className=" w-full flex flex-col gap-y-3 py-5">
    <Suspense fallback={<Loading />}>
      <ChannelGroupList />
    </Suspense>

    <AddChannelButton />
  </div>
}

export default LeftSideSection;

function AddChannelButton() {
  const handleAddChannelGroupButtonClick = () => {
    console.log("Add channel group button clicked");
    modals.open({
      title: "채널 그룹 생성",
      children: <AddChannelGroup />
    })
  }

  return <div>
    <button
      onClick={handleAddChannelGroupButtonClick}
      className="bg-[#7289DA] border-none text-white rounded-md py-2 px-4 w-full"
    >
      Add a channel Group
    </button>
  </div>;
}
