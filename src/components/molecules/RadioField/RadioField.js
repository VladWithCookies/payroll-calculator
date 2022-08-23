import { useFormContext } from 'react-hook-form';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import Field from 'components/atoms/Field';

export default function RadioField({ name, label, options = [], ...props }) {
  const { register } = useFormContext();
  const [{ value: defaultValue }] = options;

  return (
    <Field label={label}>
      <RadioGroup defaultValue={defaultValue}>
        <Stack>
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              {...props}
              {...register(name)}
            >
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Field>
  );
}
