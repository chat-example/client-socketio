import { useEffect } from 'react';
import LoginForm from '../components/auth/loginForm.view';
import { useSignUp } from '../hooks/auth.hooks';
import { notifications } from '@mantine/notifications';
import { IoAlertOutline } from 'react-icons/io5';

const SignUp = () => {
  const { data, mutateAsync, isIdle } = useSignUp();

  useEffect(() => {
    if (data?.code > 299) { 
      notifications.show({
        title: '회원가입에 실패했습니다.',
        message: '다시 시도해주세요.',
        autoClose: 5000,
        icon: <IoAlertOutline />,
      });
    } else if (data?.code > 100) {
      notifications.show({
        title: '회원가입에 성공했습니다.',
        message: '환영합니다!',
        autoClose: 5000,
      });
    }
  }, [data])

  return <LoginForm
    onConfirm={mutateAsync}
    confirm='회원가입' 
    isLoading={!isIdle}
  />;
}

export default SignUp;
