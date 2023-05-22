import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import { AuthInput } from '../components';
import { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('POST 请求成功');
        // 处理成功的响应逻辑
      } else {
        console.error('POST 请求失败');
        // 处理失败的响应逻辑
      }
    } catch (error) {
      console.error('POST 请求出错：', error);
      // 处理请求错误逻辑
    }
  };
  return (
    <AuthContainer>
      <div>
      </div>
      <h1>會員登入</h1>
      <form onSubmit={handleSubmit}>
        <AuthInputContainer>
          <AuthInput label='username' placeholder='請輸入帳號' name='username' value={formData.username} onChange={handleChange} />
        </AuthInputContainer>

        <AuthInputContainer>
          <AuthInput label='password' placeholder='請輸入密碼' name='password' value={formData.password} onChange={handleChange} />
        </AuthInputContainer>
        <AuthButton>登入</AuthButton>
        <AuthLinkText link={{ name: '註冊', page: '/signup' }}></AuthLinkText>
      </form >
    </AuthContainer >
  );
};

export default LoginPage;
