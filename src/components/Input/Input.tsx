import { InputHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '../../context/ThemeContext';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  label?: string;
  error?: boolean | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IInputProps };

const Input = ({
  id,
  label,
  name,
  value,
  placeholder,
  type = 'text',
  error,
  onChange,
}: IInputProps) => {
  const { theme } = useTheme();

  return (
    <>
      <TextField
        color="primary"
        id={id}
        name={name}
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth={true}
        error={!!error}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme === 'dark' ? 'var(--text-grey)' : 'var(--text-main)', // Цвет рамки
            },
            '&:hover fieldset': {
              borderColor: theme === 'dark' ? 'var(--text-accent)' : 'var(--text-accent)', // Цвет рамки при наведении
            },
            '&.Mui-focused fieldset': {
              borderColor: theme === 'dark' ? 'var(--text-accent)' : 'var(--text-accent)', // Цвет рамки при фокусе
            },
          },
          '& .MuiInputLabel-root': {
            color: theme === 'dark' ? 'var(--text-grey)' : 'var(--text-main)', // Цвет текста лейбла
          },
          '& .MuiInputBase-input': {
            color: theme === 'dark' ? 'var(--text-main)' : 'var(--text-main)', // Цвет текста ввода
            backgroundColor: theme === 'dark' ? 'var(--bg-second)' : 'var(--bg-main)', // Цвет фона инпута
          },
        }}
      />
    </>
  );
};

export default Input;
