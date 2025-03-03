import block from 'bem-cn';
import { useAuth } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import './Header.scss';
import { Link } from 'react-router-dom';

const b = block('header');
const Header = () => {
  const { user, logout } = useAuth();

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
          <div className={b('logout')} onClick={logout}>
            <LogoutIcon color="action" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
