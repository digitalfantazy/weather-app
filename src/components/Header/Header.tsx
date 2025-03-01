import block from 'bem-cn';
import { useAuth } from '../../context/AuthContext';

import userSVG from '../../assets/user.svg';

import './Header.scss';

const b = block('header');
const Header = () => {
  const { user } = useAuth();

  return (
    <header className={b()}>
      <ul className={b('info')}>
        <li className={b('item')}>
          <img src={userSVG} className={b('item-icon')} alt="" />
          {/* <UserSVG className={b('item-icon')} /> */}
          {/* <SVG className={b('item-icon')} svgProps={{ src: userSVG }} /> */}
          <div className={b('item-data')}>
            <div className={b('item-label')}>Приветствуем,</div>
            <div className={b('item-value')}>
              <span className={b('item-login')}>{user}</span>
            </div>
          </div>
          <div className={b('logout')}>
            Выйти
            {/* <LogoutButton /> */}
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
