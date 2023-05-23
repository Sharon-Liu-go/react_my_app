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

const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '', passwordConfirm: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

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
        Swal.fire(swalFireMsg('success'));
        navigate('/login')
        return;
      } else {
        console.error('POST 请求失败');
        // 处理失败的响应逻辑
        Swal.fire(swalFireMsg('fail'));
      }
    } catch (error) {
      console.error('POST 请求出错：', error);
      // 处理请求错误逻辑
      Swal.fire(swalFireMsg('fail'));
    }
  };

  return (
    <AuthContainer>
      <div>
      </div>
      <h1>註冊會員</h1>
      <form onSubmit={handleSubmit}>
        <AuthInputContainer>
          <AuthInput label='username'
            name='username' placeholder='請輸入帳號' value={formData.username} onChange={handleChange} />
        </AuthInputContainer>

        <AuthInputContainer>
          <AuthInput type='password' label='password'
            name='password' placeholder='密碼至少6位數,須包含英文大小寫及數字' value={formData.password} onChange={handleChange} />
        </AuthInputContainer>

        <AuthInputContainer>
          <AuthInput type='password' label='password confirmation' name='passwordConfirm' placeholder='再次輸入密碼' value={formData.passwordConfirm} onChange={handleChange} />
        </AuthInputContainer>
        <AuthButton type='submit'>註冊</AuthButton>
        <AuthLinkText link={{ name: '登入', page: '/login' }}></AuthLinkText>
      </form >
    </AuthContainer >

  );

};

function swalFireMsg(type) {
  if (type === 'success') {
    return {
      position: 'top',
      title: '註冊成功！',
      timer: 1000,
      icon: 'success',
      showConfirmButton: false,
    }
  }
  return {
    position: 'top',
    title: '註冊失敗！',
    timer: 1000,
    icon: 'error',
    showConfirmButton: false,
  };
}

export default SignUpPage;
