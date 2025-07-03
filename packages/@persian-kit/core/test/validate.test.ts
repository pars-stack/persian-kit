import { isValidIranianNationalCode, isValidIranianMobileNumber, containsOnlyPersianChars, containsOnlyPersianDigits } from '../src/validate';

describe('Validation Functions', () => {
  describe('isValidIranianNationalCode', () => {
    it('should return true for valid national codes', () => {
      expect(isValidIranianNationalCode('0499370899')).toBe(true);
      expect(isValidIranianNationalCode('0790419904')).toBe(true);
      expect(isValidIranianNationalCode('0084575948')).toBe(true);
    });

    it('should return false for invalid national codes', () => {
      expect(isValidIranianNationalCode('1234567890')).toBe(false);
      expect(isValidIranianNationalCode('0011111112')).toBe(false);
      expect(isValidIranianNationalCode('12345')).toBe(false);
      expect(isValidIranianNationalCode('abcdefghij')).toBe(false);
      expect(isValidIranianNationalCode('001111111')).toBe(false);
      expect(isValidIranianNationalCode('00111111111')).toBe(false);
      expect(isValidIranianNationalCode('0000000000')).toBe(false); // All identical digits
      expect(isValidIranianNationalCode('1111111111')).toBe(false); // All identical digits
    });
  });

  describe('isValidIranianMobileNumber', () => {
    it('should return true for valid Iranian mobile numbers', () => {
      expect(isValidIranianMobileNumber('09123456789')).toBe(true);
      expect(isValidIranianMobileNumber('09351234567')).toBe(true);
    });

    it('should return false for invalid Iranian mobile numbers', () => {
      expect(isValidIranianMobileNumber('0912345678')).toBe(false);
      expect(isValidIranianMobileNumber('091234567890')).toBe(false);
      expect(isValidIranianMobileNumber('0900000000')).toBe(false);
      expect(isValidIranianMobileNumber('0912345678a')).toBe(false);
      expect(isValidIranianMobileNumber('12345678901')).toBe(false);
    });
  });

  describe('containsOnlyPersianChars', () => {
    it('should return true for strings containing only Persian characters', () => {
      expect(containsOnlyPersianChars('سلام')).toBe(true);
      expect(containsOnlyPersianChars('ایران')).toBe(true);
      expect(containsOnlyPersianChars('سلام دنیا')).toBe(true);
    });

    it('should return false for strings containing non-Persian characters', () => {
      expect(containsOnlyPersianChars('hello')).toBe(false);
      expect(containsOnlyPersianChars('سلام world')).toBe(false);
      expect(containsOnlyPersianChars('123')).toBe(false);
    });
  });

  describe('containsOnlyPersianDigits', () => {
    it('should return true for strings containing only Persian digits', () => {
      expect(containsOnlyPersianDigits('۱۲۳۴۵')).toBe(true);
      expect(containsOnlyPersianDigits('۰۹۸۷۶')).toBe(true);
    });

    it('should return false for strings containing non-Persian digits or characters', () => {
      expect(containsOnlyPersianDigits('12345')).toBe(false);
      expect(containsOnlyPersianDigits('۱۲۳۴۵abc')).toBe(false);
      expect(containsOnlyPersianDigits('سلام')).toBe(false);
    });
  });
});

