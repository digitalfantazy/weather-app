import { ButtonHTMLAttributes } from 'react';
import Button from '@mui/material/Button';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
}

const AppButton = ({ size = 'medium', type }: IButtonProps) => {
  return (
    <Button
      size={size}
      type={type}
      variant="contained"
      sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: '800', width: '100px' }}
    >
      Вход
    </Button>
  );
};

export default AppButton;
