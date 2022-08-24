import { keys, map } from 'ramda';
import { useFormContext } from 'react-hook-form';
import { Select } from '@chakra-ui/react';

import Field from 'components/atoms/Field';

export default function SelectField({ name, label, options, ...props }) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <Select
        {...props}
        {...register(name)}
      >
        {map((key) => (
          <option
            key={key}
            value={key}
          >
            {options[key]}
          </option>
        ), keys(options))}
      </Select>
    </Field>
  );
}
