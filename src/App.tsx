import { useEffect } from 'react';
import Header from './components/Header/Header';
import { AppRoutes } from './router/AppRoutes';
import { useAuth } from './context/AuthContext';
import block from 'bem-cn';

import './App.scss';

const b = block('app');

const App = () => {
  // const isAuthenticated = true;
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log('User is authenticated');
    } else {
      console.log('User is not authenticated');
    }
  }, [isAuthenticated]);

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
