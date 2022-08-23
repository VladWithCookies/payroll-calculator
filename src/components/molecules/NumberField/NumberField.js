import { useFormContext } from 'react-hook-form';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import Field from 'components/atoms/Field';

export default function NumberField({ name, label, min, required, ...props }) {
  const { register } = useFormContext();

  return (
    <Field
      label={label}
      required={required}
    >
      <NumberInput min={min}>
        <NumberInputField
          {...props}
          {...register(name, { required })}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Field>
  );
}
