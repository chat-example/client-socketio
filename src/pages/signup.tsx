import { useEffect } from 'react';
import { useSignUp } from '../hooks/auth.hooks';
import { notifications } from '@mantine/notifications';
import { IoAlertOutline } from 'react-icons/io5';
import SignUpForm from '../components/auth/signUpForm.view';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../utils/path.const';

const SignUp = () => {
  const { data, mutateAsync, isPending} = useSignUp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || isPending) {
      return;
    }

    if (data.status > 299) { 
      notifications.show({
        title: '회원가입에 실패했습니다.',
        message: data.data.message!,
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
      navigate(NAVIGATION_PATH.CHAT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isPending])

  return <SignUpForm
    onConfirm={mutateAsync}
    confirm='회원가입' 
    isLoading={isPending}
  />;
}

export default SignUp;
