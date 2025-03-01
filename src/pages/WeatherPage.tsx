import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const WeatherPage: React.FC = () => {
  //   const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Погода</h2>
      <button
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default WeatherPage;
