import getNetSalary from '../getNetSalary';

describe('getNetSalary()', () => {
  describe('with high income tax', () => {
    it('returns correct value', () => {
      const options = {
        profession: 'TEACHER',
        experience: '20',
        location: 'STOCKHOLM',
        year: 2019,
      };

      expect(getNetSalary(options)).toBe(28800);
    });
  });

  describe('with extra high income tax', () => {
    it('returns correct value', () => {
      const options = {
        profession: 'DEVELOPER',
        experience: '20',
        location: 'STOCKHOLM',
        year: 2020,
      };

      expect(getNetSalary(options)).toBe(30960);
    });
  });

  describe('without high income tax', () => {
    it('returns correct value', () => {
      const options = {
        profession: 'DEVELOPER',
        experience: '6',
        location: 'GOTHENBURG',
        year: 2020,
      };

      expect(getNetSalary(options)).toBe(28080);
    });
  });
});
