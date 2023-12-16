import { Button, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        if (!/^\S+@\S+$/.test(value)) { 
          return '이메일  양식이  올바르지  않습니다.';
        }

        return null;
      }
    }
  })

  return <div className="w-screen h-screen flex justify-center items-center bg-[#6a77fc]">
    <Form form={form} className="w-[30%] h-[40%] bg-[#313338] p-[3rem] flex flex-col gap-y-5 ">
      <div className="w-full text-center">
        <h1 className="text-[#f1f2f4] mb-3">헤일로우!</h1>

        <div className="text-[#b3b8be]">테스트를 열심히 하고있어요!</div>
      </div> 

      <TextInput
        label="이메일"
        placeholder="이메일을 입력해주세요."
        {...form.getInputProps('email')}
        name="email"
        type="email"
        classNames={{
          label: "text-[#b3b8be] mb-2 inline-block",
          required: "text-red-400",
          input: "w-full h-[2.5rem] rounded-md",
          wrapper: "w-full"
        }}
        required
      />

      <TextInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        name="password"
        type="password"
        {...form.getInputProps('password')}
        required
        classNames={{
          label: "text-[#b3b8be] mb-2 inline-block",
          required: "text-red-400",
          input: "w-full h-[2.5rem] rounded-md",
          wrapper: "w-full"
        }}
      />

      <div className="w-full">
        <Button className="w-full h-[2.5rem] bg-[#4851c4] rounded-md border-none text-[#f1f2f4] text-[18px]" variant="filled" fullWidth>
          로그인
        </Button>
      </div>
    </Form>
  </div>
}

export default Login;
