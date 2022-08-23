export const PROFESSIONS = {
  DEVELOPER: 'Developer',
  TEACHER: 'Teacher',
  CASHIER: 'Cashier',
};

export const LOCATIONS = {
  STOCKHOLM: 'Stockholm',
  GOTHENBURG: 'Gothenburg',
};

export const YEARS = {
  2019: 2019,
  2020: 2020,
};

export const BASIC_SALARY_BY_PROFESSION = {
  DEVELOPER: 30000,
  TEACHER: 27000,
  CASHIER: 25000,
};

export const SALARY_RISE_RATE_BY_MIN_YEARS_OF_EXPERIENCE = {
  0: 0,
  4: 0.2,
  8: 0.4,
  11: 0.6,
};

export const LOCATION_TAX_RATE_BY_YEAR = {
  2019: {
    STOCKHOLM: 0.3,
    GOTHENBURG: 0.25,
  },
  2020: {
    STOCKHOLM: 0.29,
    GOTHENBURG: 0.22,
  },
};

export const HIGH_INCOME_TAX_RATES = {
  HIGH: 0.5,
  EXTRA_HIGH: 0.7,
};

export const HIGH_INCOME_TAX_SALARY_LOWER_BOUNDS = {
  HIGH: 36000,
  EXTRA_HIGH: 45000,
};
