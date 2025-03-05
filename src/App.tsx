import block from 'bem-cn';

import Header from './components/Header/Header';
import { AppRoutes } from './router/AppRoutes';
import { useAuth } from './context/AuthContext';

import './App.scss';

const b = block('app');

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className={b('header-wrapper')}>
            <Header />
          </div>
          <div className={b('main')}>
            <div className={b('content')}>
              <AppRoutes isAuth={isAuthenticated} />
            </div>
          </div>
        </>
      ) : (
        <AppRoutes isAuth={isAuthenticated} />
      )}
    </>
  );
};

export default App;
