import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import block from 'bem-cn';
import Button from '@mui/material/Button';
import './CreateUserModal.scss';
import Input from '../../Input/Input';
import AppButton from '../../Button/AppButton';
import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';

const b = block('create-user-modal');

interface CreateUserModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ isOpen, setIsOpen }) => {
  const { createUser, role } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (role === 'admin') {
      createUser(userName, password);
      setIsOpen(false);
    }
  };
  if (isOpen)
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div className={b('modal')}>
          <h5 className={b('modal-title')}>Завести пользователя</h5>
          <form className={b('content')} id="user-form" name="user-form" onSubmit={handleSubmit}>
            <div className={b('item')}>
              <div className={b('item-field')}>
                <Input
                  label="Логин пользователя"
                  id="email"
                  name="login"
                  value={userName}
                  type="text"
                  placeholder="Логин пользователя"
                  onChange={(e) => setUserName(e.target.value)}
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
                />
              </div>
            </div>
            <div className={b('modal-buttons')}>
              <Button
                onClick={() => setIsOpen(false)}
                color={`${theme === 'light' ? 'primary' : 'secondary'}`}
              >
                Закрыть
              </Button>
              <AppButton color="primary" type="submit">
                Создать
              </AppButton>
            </div>
          </form>
        </div>
      </Modal>
    );
  return null;
};

export default CreateUserModal;
