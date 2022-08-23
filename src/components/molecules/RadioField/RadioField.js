import { head, keys, map } from 'ramda';
import { useFormContext } from 'react-hook-form';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import Field from 'components/atoms/Field';

export default function RadioField({ name, label, options = {}, ...props }) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <RadioGroup defaultValue={head(keys(options))}>
        <Stack>
          {map((key) => (
            <Radio
              key={key}
              value={key}
              {...props}
              {...register(name)}
            >
              {options[key]}
            </Radio>
          ), keys(options))}
        </Stack>
      </RadioGroup>
    </Field>
  );
}
