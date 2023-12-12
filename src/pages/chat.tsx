import { Button, Input, } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { socket } from "../utils/socket";
import ServerList from '../components/ServerList';
import ChannelList from "../components/ChannelList";
import Loading from "../components/Loading";

function Chat() {

  const [messageList, setMessageList] = useState<string[]>([]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = e.currentTarget.message.value;
    socket.emit("send_message", { message });
    e.currentTarget.message.value = "";
  };
  
  useEffect(() => {
    const setMessageReceived = (data: { message: string; }) => {
      setMessageList([...messageList, data.message]);
    }

    socket.on("receive_message", setMessageReceived);
  }, [messageList]);

  return (
    <div className="flex w-screen h-screen bg-white">
      <nav className="bg-[#1e1e22] flex-1 h-full max-w-[60px]">
        <Suspense fallback={<Loading />}>
          <ServerList />
        </Suspense>
      </nav>

      <aside className="bg-[#2b2d31] w-[240px] h-full">
        <Suspense fallback={<Loading />}>
          <ChannelList />
        </Suspense>
      </aside>

      <main className="bg-[#313338] flex-1 h-full">
        <section className="h-full grid grid-rows-[15fr_1fr] max-w-[min(800px,1fr)] m-auto ">
          <section>
            <ul className="h-full w-full overflow-y-scroll">
              {messageList.map((message, index) => (
                <li key={index} className="text-white">{message}</li>
              ))}
            </ul>
          </section>

          <Form className="flex w-[90%] m-auto bg-[#383a40] items-center rounded-full px-[1rem] py-2" onSubmit={sendMessage} >
            <Input
              name="message"
              classNames={{
                wrapper: "flex flex-1 w-[90%] m-auto",
                input: "w-full bg-[#383a40] border-none text-[#6d6f78]"
              }}
              multiline
              size="lg"
              placeholder="채팅을 입력하세요"
              rightSection={<Button type="submit" className="py-2 px-4 rounded-full w-[60px]">주기</Button>} 
            />
          </Form>
        </section>
      </main>
    </div>
  )
}

export default Chat;
