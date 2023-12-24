import { TextInput, Button } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import React from "react";
import { ISignUpParams } from "../../api/auth/postSignUp";

const SignUpForm = ({
  title = '헤일로우!',
  subTitle = '테스트를 열심히 하고있어요!',
  confirm = '로그인',
  extraContent,
  onConfirm,
  isLoading,
}: {
  onConfirm?: (params: ISignUpParams) => void;
  title?: string;
  subTitle?: string;
  confirm?: string;
  extraContent?: React.ReactNode;
  isLoading?: boolean;
}) => {
  const form = useForm({
    initialValues: {
      nickname: "",
      email: "",
      password: "",
    },
    validate: {
      nickname: (value) => {
        if (!value) {
          return '닉네임을 입력해주세요.';
        }

        return null;
      },
      email: (value) => {
        if (!/^\S+@\S+$/.test(value)) { 
          return '이메일  양식이  올바르지  않습니다.';
        }

        return null;
      },
      password: (value) => {
        if (!value) {
          return '비밀번호를 입력해주세요.';
        }

        return null;
      }
    }
  })

  return <div className="w-screen h-screen flex justify-center items-center bg-[#6a77fc]">
    <Form form={form} onSubmit={onConfirm} className="min-w-fit max-w-[40%] w-full h-fit bg-[#313338] p-[3rem] flex flex-col gap-y-5 ">
      <div className="w-full text-center">
        <h1 className="text-[#f1f2f4] mb-3">{title}</h1>

        <div className="text-[#b3b8be]">{subTitle}</div>
      </div> 

      <TextInput
        label="닉네임"
        placeholder="사용하실 닉네임을 입력해주세요."
        {...form.getInputProps('nickname')}
        name="nickname"
        classNames={{
          label: "text-[#b3b8be] mb-2 inline-block",
          required: "text-red-400",
          input: "w-full h-[2.5rem] rounded-md",
          wrapper: "w-full"
        }}
        required
      />

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
        <Button
          loading={isLoading}
          className="w-full h-[2.5rem] bg-[#4851c4] rounded-md cursor-pointer border-none text-[#f1f2f4] text-[18px]"
          variant="filled"
          type="submit"
          fullWidth>

          {confirm}
        </Button>

        {extraContent}
      </div>
    </Form>
  </div>
}

export default SignUpForm;