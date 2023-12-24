import { Button, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useEffect } from 'react';
import { notifications } from "@mantine/notifications";
import { modals } from '@mantine/modals';
import { useQueryClient } from '@tanstack/react-query';
import { useAddChannelGroup } from "../../hooks/channelGroup/useAddChannelGroup";
import { useServerBoundStore } from "../../stores/useServerBoundStore";
import { UseChannelGroupListQueryKey } from "../../hooks/channelGroup/useChannelGroupList";

const AddChannelGroup = () => {
  const currentServer = useServerBoundStore((state) => state.currentServer);
  const { mutateAsync, data } = useAddChannelGroup();
  const queryClient = useQueryClient();

  const handleModalCancelButtonClick = () => {
    modals.closeAll();
  }

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.status < 300) {
      notifications.show({
        title: "채널 그룹 생성",
        message: "채널 그룹 생성에 성공적으로 접속했습니다.",
        color: "green",
      });
      modals.closeAll();
      queryClient.invalidateQueries({
        queryKey: [UseChannelGroupListQueryKey, currentServer?.id ?? null],
      });
    } else if(data.status > 300) {
      notifications.show({
        title: "채널 그룹 생성 실패 실패",
        message: "채널 그룹 생성에 실패했습니다.",
        color: "red",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.status]);

  return <Form form={form} onSubmit={(data) => mutateAsync({...data, serverId: currentServer?.id ?? null})} className="flex flex-col gap-y-3">
      <TextInput
        name="name"
        label="채널 그룹 이름"
        placeholder="채널 그룹 이름을 입력해주세요."
        {...form.getInputProps('name')}
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
          onClick={handleModalCancelButtonClick}
          >
            취소
        </Button>
        
        <Button
          className="w-[2rem] h-[2.5rem] bg-[#4851c4] rounded-md cursor-pointer border-none text-[#f1f2f4] text-[18px]"
          variant="filled"
          type="submit"
          style={{ backgroundColor: "#4851c4" }}
          >
            채널 그룹 생성
        </Button>
      </div>
    </Form>
}

export default AddChannelGroup;
