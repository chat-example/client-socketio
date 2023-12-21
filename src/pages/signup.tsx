import { useEffect } from 'react';
import { useSignUp } from '../hooks/auth.hooks';
import { notifications } from '@mantine/notifications';
import { IoAlertOutline } from 'react-icons/io5';
import SignUpForm from '../components/auth/signUpForm.view';

const SignUp = () => {
  const { data, mutateAsync, status } = useSignUp();

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.status> 299) { 
      notifications.show({
        title: '회원가입에 실패했습니다.',
        message: '다시 시도해주세요.',
        autoClose: 5000,
        color: 'red',
        icon: <IoAlertOutline />,
      });
    } else if (data.status> 100) {
      notifications.show({
        title: '회원가입에 성공했습니다.',
        message: '환영합니다!',
        autoClose: 5000,
      });
    }
  }, [data])

  return <SignUpForm
    onConfirm={mutateAsync}
    confirm='회원가입' 
    isLoading={status === "pending"}
  />;
}

export default SignUp;
