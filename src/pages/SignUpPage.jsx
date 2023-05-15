import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import { ACLogoIcon } from '../assets/images';
import { AuthInput } from '../components';

const SignUpPage = () => {
  return (
    <AuthContainer>
      <div>
      </div>
      <h1>註冊會員</h1>

      <AuthInputContainer>
        <AuthInput label='username' placeholder='請輸入帳號' />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput label='password' placeholder='密碼至少6位數,須包含英文大小寫及數字' />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput label='password confirmation' placeholder='再次輸入密碼' />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>登入</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
