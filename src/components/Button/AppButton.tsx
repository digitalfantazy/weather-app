import React, { ButtonHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '../../context/ThemeContext';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';

  children: React.ReactNode;
}

const AppButton = ({ size = 'medium', type, children }: IButtonProps) => {
  const { theme } = useTheme();

  return (
    <Button
      size={size}
      type={type}
      color={`${theme === 'light' ? 'primary' : 'secondary'}`}
      variant="contained"
      sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: '800', width: '100px' }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
