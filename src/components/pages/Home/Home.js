import { pipe } from 'ramda';
import { useState } from 'react';

import getNetSalary from 'utils/calculations/getNetSalary';
import TaxCalculator from 'components/organisms/TaxCalculator';
import SalaryStats from 'components/organisms/SalaryStats';
import MainLayout from 'components/templates/MainLayout';

export default function Home() {
  const [salary, setSalary] = useState();
  const handleSubmit = pipe(getNetSalary, setSalary);

  return (
    <MainLayout>
      <TaxCalculator onSubmit={handleSubmit}/>
      {salary && <SalaryStats salary={salary} />}
    </MainLayout>
  );
};
