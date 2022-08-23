import {
  prop,
  pipe,
  keys,
  findLast,
  gte,
  lte,
  add,
  multiply,
  path,
  always,
  subtract,
  min,
  ifElse,
  negate,
  sort,
  when,
} from 'ramda';

import {
  BASIC_SALARY_BY_PROFESSION,
  SALARY_RISE_RATE_BY_MIN_YEARS_OF_EXPERIENCE,
  LOCATION_TAX_RATE_BY_YEAR,
  HIGH_INCOME_TAX_RATES,
  HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS,
} from 'constants';

const getSalaryRise = (salary, experience) => pipe(
  keys,
  sort(subtract),
  findLast(gte(experience)),
  (key) => prop(key, SALARY_RISE_RATE_BY_MIN_YEARS_OF_EXPERIENCE),
  multiply(salary),
)(SALARY_RISE_RATE_BY_MIN_YEARS_OF_EXPERIENCE);

const getLocationTax = (salary, year, location) => pipe(
  min(HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.HIGH),
  multiply(path([year, location], LOCATION_TAX_RATE_BY_YEAR)),
)(salary);

const getHighIncomeTax = (salary, percentage, from, to) => ifElse(
  lte(from),
  pipe(
    when(always(to), min([to, salary])),
    subtract(from),
    negate,
    multiply(percentage),
  ),
  always(0),
)(salary);

export default function getNetSalary({ experience, profession, location, year }) {
  const basicSalary = prop(profession, BASIC_SALARY_BY_PROFESSION);
  const salaryRise = getSalaryRise(basicSalary, experience);
  const grossSalary = add(basicSalary, salaryRise);
  const locationTax = getLocationTax(grossSalary, year, location);

  const highIncomeTax = add(
    getHighIncomeTax(grossSalary, HIGH_INCOME_TAX_RATES.HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.EXTRA),
    getHighIncomeTax(grossSalary, HIGH_INCOME_TAX_RATES.HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.EXTRA_HIGH),
  );

  return pipe(
    subtract(locationTax),
    subtract(highIncomeTax),
  )(grossSalary);
}
