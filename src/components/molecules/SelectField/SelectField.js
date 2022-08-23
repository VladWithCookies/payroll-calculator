import { useFormContext } from 'react-hook-form';
import { Select } from '@chakra-ui/react';

import Field from 'components/atoms/Field';

export default function SelectField({ name, label, options = [], ...props }) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <Select
        {...props}
        {...register(name)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
