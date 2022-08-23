import { FormControl, FormLabel, } from '@chakra-ui/react';

export default function Field({ label, children, required }) {
  return (
    <FormControl isRequired={required}>
      <FormLabel>
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
}
