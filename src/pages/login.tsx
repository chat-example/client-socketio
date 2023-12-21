import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/loginForm.view";
import { useSignIn } from "../hooks/auth.hooks";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { IoAlertOutline } from "react-icons/io5";
import { NAVIGATION_PATH } from "../utils/path.const";

const Login = () => {
  const { data, mutateAsync, isPending} = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || isPending) {
      return;
    }

    if (data.status > 299) { 
      notifications.show({
        title: '로그인 실패했습니다.',
        message: data.data.message!,
        autoClose: 5000,
        color: 'red',
        icon: <IoAlertOutline />,
      });
    } else if (data.status> 100) {
      notifications.show({
        title: '로그인에 성공했습니다.',
        message: '환영합니다!',
        autoClose: 5000,
      });
      navigate(NAVIGATION_PATH.CHAT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isPending])

  return  <LoginForm 
    onConfirm={mutateAsync}
    extraContent={<Link to="/signup" className="text-[#37a0ef] mt-3 inline-block">회원가입</Link>}
    isLoading={isPending}
  />
}

export default Login;
