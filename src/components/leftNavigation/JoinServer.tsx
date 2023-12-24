import { Button, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";

const JoinServer = () => {
  const form = useForm({
    initialValues: {
      serverName: "",
      password: "",
    },
  })

  return <Form form={form} className="flex flex-col gap-y-3">
      <TextInput
        name="serverName"
        label="서버 이름"
        placeholder="서버 이름을 입력해주세요."
        {...form.getInputProps('serverName')}
      />

      <TextInput
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        {...form.getInputProps('password')}
      />

      <div className="flex justify-end gap-x-2">
        <Button
          className="w-[2rem] h-[2.5rem] bg-red-400 rounded-md cursor-pointer border-none text-[#f1f2f4] text-[18px]"
          variant="filled"
          type="submit"
          style={{ backgroundColor: "#f44336" }}
          >
            취소
        </Button>
        
        <Button
          className="w-[2rem] h-[2.5rem] bg-[#4851c4] rounded-md cursor-pointer border-none text-[#f1f2f4] text-[18px]"
          variant="filled"
          type="submit"
          style={{ backgroundColor: "#4851c4" }}
          >
            서버 접속
        </Button>
      </div>
    </Form>
}

export default JoinServer;
