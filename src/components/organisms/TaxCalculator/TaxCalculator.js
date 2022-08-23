import { useForm } from 'react-hook-form';
import { Button, Stack } from '@chakra-ui/react';

import { PROFESSION_OPTIONS, LOCATION_OPTIONS, YEAR_OPTIONS } from 'constants';
import Form from 'components/molecules/Form';
import NumberField from 'components/molecules/NumberField';
import RadioField from 'components/molecules/RadioField';
import SelectField from 'components/molecules/SelectField';

export default function TaxCalculator() {
  const methods = useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit}
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
          options={PROFESSION_OPTIONS}
        />
        <SelectField
          name="location"
          label="Location/City"
          options={LOCATION_OPTIONS}
        />
        <SelectField
          name="year"
          label="Income year"
          options={YEAR_OPTIONS}
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
