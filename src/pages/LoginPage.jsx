import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import { AuthInput } from '../components';

const LoginPage = () => {
  return (
    <AuthContainer>
      <div>
      </div>
      <h1>會員登入</h1>

      <AuthInputContainer>
        <AuthInput label='username' placeholder='請輸入帳號' />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput label='password' placeholder='請輸入密碼' />
      </AuthInputContainer>
      <AuthButton>登入</AuthButton>
      <AuthLinkText link={{ name: '註冊', page: '/signup' }}></AuthLinkText>
    </AuthContainer >
  );
};

export default LoginPage;
