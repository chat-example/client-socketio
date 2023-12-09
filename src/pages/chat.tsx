import { Button, Input } from "@mantine/core";
import { Form } from "react-router-dom";

function Chat() {

  return (
    <div className="flex w-screen h-screen bg-white">
      <aside className="bg-[#101015] flex-1 h-full max-w-[200px]"></aside>
      <main className="bg-[#101015] flex-1 h-full">
        <section className="h-full grid grid-rows-[15fr_1fr] max-w-[min(800px,1fr)] m-auto ">
          <section>

          </section>

          <Form className="flex w-[90%] m-auto bg-[#1e1e24] items-center rounded-full px-[1rem] py-2">
            <Input
              classNames={{
                wrapper: "flex flex-1 w-[90%] m-auto",
                input: "w-full bg-[#1e1e24] border-none"
              }}
              multiline
              size="lg"
              placeholder="채팅을 입력하세요"
              rightSection={<Button className="py-2 px-4 rounded-full w-[60px]">주기</Button>} 
            />
          </Form>
        </section>
      </main>
    </div>
  )
}

export default Chat;
