import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';

import formatCurrency from 'utils/format/formatCurrency';

export default function SalaryStats({ salary }) {
  return (
    <Stat
      mt={5}
      data-testid="stats"
    >
      <StatLabel>
        Salary After Tax
      </StatLabel>
      <StatNumber>
        {formatCurrency(salary)}
      </StatNumber>
    </Stat>
  );
}
