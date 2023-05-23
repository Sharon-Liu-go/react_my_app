import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import { AuthInput } from '../components';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios('http://127.0.0.1:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const { authToken } = response.data.data;
      if (authToken) {
        console.log('POST 请求成功');
        localStorage.setItem('authToken', authToken);
        Swal.fire(swalFireMsg('success'));
        navigate('/home')
        return;
      }
      console.error('POST 请求失败');
      Swal.fire(swalFireMsg('fail'));

    } catch (error) {
      console.error('POST 请求出错：', error);
      Swal.fire(swalFireMsg('fail'));
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
          <AuthInput type='password' label='password' placeholder='請輸入密碼' name='password' value={formData.password} onChange={handleChange} />
        </AuthInputContainer>
        <AuthButton>登入</AuthButton>
        <AuthLinkText link={{ name: '註冊', page: '/signup' }}></AuthLinkText>
      </form >
    </AuthContainer >
  );
};

function swalFireMsg(type) {
  if (type === 'success') {
    return {
      position: 'top',
      title: '登入成功！',
      timer: 1000,
      icon: 'success',
      showConfirmButton: false,
    }
  }
  return {
    position: 'top',
    title: '登入失敗！',
    timer: 1000,
    icon: 'error',
    showConfirmButton: false,
  };
}

export default LoginPage;
