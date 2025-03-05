import React, { ButtonHTMLAttributes } from 'react';
import Button from '@mui/material/Button';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';

  children: React.ReactNode;
}

const AppButton = ({ size = 'medium', type, children }: IButtonProps) => {
  return (
    <Button
      size={size}
      type={type}
      variant="contained"
      sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: '800', width: '100px' }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
