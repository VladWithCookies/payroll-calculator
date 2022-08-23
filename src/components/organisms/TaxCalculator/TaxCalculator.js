import { useForm } from 'react-hook-form';
import { Button, Stack } from '@chakra-ui/react';

import { PROFESSIONS, LOCATIONS, YEARS } from 'constants';
import Form from 'components/molecules/Form';
import NumberField from 'components/molecules/NumberField';
import RadioField from 'components/molecules/RadioField';
import SelectField from 'components/molecules/SelectField';

export default function TaxCalculator({ onSubmit }) {
  const methods = useForm();

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
    >
      <Stack spacing={5}>
        <NumberField
          name="experience"
          label="Experience"
          required
          min={0}
        />
        <RadioField
          name="profession"
          label="Profession"
          options={PROFESSIONS}
        />
        <SelectField
          name="location"
          label="Location/City"
          options={LOCATIONS}
        />
        <SelectField
          name="year"
          label="Income year"
          options={YEARS}
        />
        <Button
          type="submit"
          colorScheme="teal"
        >
          Calculate Salary
        </Button>
      </Stack>
    </Form>
  );
}
