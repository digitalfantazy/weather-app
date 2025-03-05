import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '../../context/ThemeContext';

interface AppSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  label: string;
}

const AppSelect: React.FC<AppSelectProps> = ({ value, onChange, options, label }) => {
  const { theme } = useTheme();
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
      <InputLabel
        id="select"
        sx={{
          color: theme === 'light' ? 'var(--text-main)' : 'var(--text-main)',
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="select"
        id="select"
        value={value}
        label="Тип графика"
        onChange={handleChange}
        sx={{
          color: theme === 'light' ? 'var(--text-main)' : 'var(--text-main)',
          backgroundColor: theme === 'light' ? 'var(--bg-main)' : 'var(--bg-main)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme === 'light' ? 'var(--text-grey)' : 'var(--text-grey)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme === 'light' ? 'var(--text-accent)' : 'var(--text-accent)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme === 'light' ? 'var(--text-accent)' : 'var(--text-accent)',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
