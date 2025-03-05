import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';
import block from 'bem-cn';
import AppButton from '../../components/Button/AppButton';
import Input from '../../components/Input/Input';
import { useAuth } from '../../context/AuthContext';

const b = block('sign-in');

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login(userName, password)) {
      navigate('/weather');
    } else {
      setError('Неправильный логин или пароль');
    }
  };

  return (
    <div className={b()}>
      <p className={b('title')}>Weather App</p>
      <p className={b('subtitle')}>Авторизация</p>

      <form className={b('content')} id="login-form" name="login-form" onSubmit={handleSubmit}>
        <div className={b('item')}>
          <div className={b('item-field')}>
            <Input
              label="Логин"
              id="email"
              name="login"
              value={userName}
              type="text"
              placeholder="Логин "
              onChange={(e) => setUserName(e.target.value)}
              error={error}
            />
          </div>
        </div>
        <div className={b('item')}>
          <div className={b('item-field')}>
            <Input
              label="Пароль"
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              error={error}
            />
          </div>
        </div>

        {error && <p style={{ color: 'red', fontSize: '0.875rem', margin: '1rem 0' }}>{error}</p>}

        <div className={b('bottom')}>
          <div className={b('button')}>
            <AppButton id="log-in" type="submit">
              Вход
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
