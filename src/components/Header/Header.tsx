import block from 'bem-cn';
import { useAuth } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateUserModal from './CreateUserModal/CreateUserModal';
import Button from '@mui/material/Button';

const b = block('header');
const Header = () => {
  const { user, logout, role } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={b()}>
      <Link className={b('logo-link')} to="/">
        Weather-App
      </Link>
      <div className={b('info')}>
        <div className={b('item')}>
          <div className={b('item-icon')}>
            <PersonIcon color="action" fontSize="large" />
          </div>
          <div className={b('item-data')}>
            <div className={b('item-label')}>Приветствуем,</div>
            <div className={b('item-value')}>
              <span className={b('item-login')}>{user}</span>
            </div>
          </div>
          {/* Кнопка для открытия модального окна (только для админа) */}
          {role === 'admin' && (
            <div className={b('item-button')}>
              <Button
                size="small"
                type="button"
                variant="contained"
                color="primary"
                sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: '700' }}
                onClick={() => setIsModalOpen(true)}
              >
                Добавить пользователя
              </Button>
            </div>
          )}
          <div className={b('logout')} onClick={logout}>
            <LogoutIcon color="action" />
          </div>
        </div>
      </div>
      <CreateUserModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </header>
  );
};

export default Header;
