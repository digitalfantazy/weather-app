import { InputHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';

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
  return (
    <>
      <TextField
        id={id}
        name={name}
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth={true}
        error={!!error}
      />
    </>
  );
};

export default Input;
