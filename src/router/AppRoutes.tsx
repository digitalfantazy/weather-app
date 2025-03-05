import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import WeatherPage from '../pages/WeatherPage/WeatherPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ForbiddenPage from '../pages/ForbiddenPage/ForBiddenPage';

interface ProtectedRouteProps {
  isAuth: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  if (!isAuth) {
    return <ForbiddenPage />; // Возвращаем страницу 403, если пользователь не авторизован
  }
  return children;
};

export const AppRoutes = ({ isAuth }: { isAuth: boolean }) => (
  <Routes>
    <Route
      path="/weather"
      element={
        <ProtectedRoute isAuth={isAuth}>
          <WeatherPage />
        </ProtectedRoute>
      }
    />
    {!isAuth ? (
      <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </>
    ) : (
      <Route path="*" element={<Navigate to="/weather" replace />} />
    )}
  </Routes>
);
