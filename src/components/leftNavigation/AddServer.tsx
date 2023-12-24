import { Button, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useEffect } from 'react';
import { notifications } from "@mantine/notifications";
import { modals } from '@mantine/modals';
import { useQueryClient } from '@tanstack/react-query';
import { UseServerListQueryKey } from "../../hooks/sevrer/useServerList";
import { useAddServer } from "../../hooks/sevrer/useAddServer";

const AddServer = () => {
  const { mutateAsync, data } = useAddServer();
  const queryClient = useQueryClient();

  const form = useForm({
    initialValues: {
      name: "",
      password: "",
      description: "",
    },
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.status < 300) {
      notifications.show({
        title: "서버 생성 성공",
        message: "서버에 성공적으로 생성했습니다.",
        color: "green",
      });
      modals.closeAll();
      queryClient.invalidateQueries({
        queryKey: [UseServerListQueryKey],
      });
    } else if(data.status > 300) {
      notifications.show({
        title: "서버 생성 실패",
        message: "서버 생성에 실패했습니다.",
        color: "red",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.status]);

  return <Form form={form} onSubmit={mutateAsync} className="flex flex-col gap-y-3">
      <TextInput
        name="name"
        label="서버 이름"
        placeholder="서버 이름을 입력해주세요."
        {...form.getInputProps('name')}
      />

      <TextInput
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        {...form.getInputProps('password')}
      />
      
      <TextInput
        name="description"
        label="설명"
        placeholder="설명을 입력해주세요."
        {...form.getInputProps('description')}
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

export default AddServer;
