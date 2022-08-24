import {
  prop,
  pipe,
  keys,
  findLast,
  gte,
  lt,
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
} from 'constants/data';

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
  lt(from),
  pipe(
    when(always(to), min(to)),
    subtract(from),
    negate,
    multiply(percentage),
  ),
  always(0),
)(salary);

export default function getNetSalary({ experience, profession, location, year }) {
  const basicSalary = prop(profession, BASIC_SALARY_BY_PROFESSION);
  const salaryRise = getSalaryRise(basicSalary, Number(experience));
  const grossSalary = add(basicSalary, salaryRise);
  const locationTax = getLocationTax(grossSalary, year, location);

  const highIncomeTax = add(
    getHighIncomeTax(grossSalary, HIGH_INCOME_TAX_RATES.HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.EXTRA_HIGH),
    getHighIncomeTax(grossSalary, HIGH_INCOME_TAX_RATES.EXTRA_HIGH, HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS.EXTRA_HIGH),
  );

  return grossSalary - locationTax - highIncomeTax;
}
