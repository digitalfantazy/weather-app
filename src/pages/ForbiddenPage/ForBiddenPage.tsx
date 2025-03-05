import block from 'bem-cn';
import './ForbiddenPage.scss';
import { Link } from 'react-router-dom';

const b = block('forbidden-page');

const ForbiddenPage = () => {
  return (
    <div className={b()}>
      <h1>403 - Доступ запрещён</h1>
      <p>У вас нет прав для доступа к этой странице.</p>
      <Link className={b('link')} to="/login">
        Назад
      </Link>
    </div>
  );
};

export default ForbiddenPage;
