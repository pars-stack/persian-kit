import { toPersianNumber, toEnglishNumber } from '../src/numeral';

describe('Numeral Conversion', () => {
  it('should convert English numbers to Persian numbers correctly', () => {
    expect(toPersianNumber(12345)).toBe('۱۲۳۴۵');
    expect(toPersianNumber('98765')).toBe('۹۸۷۶۵');
    expect(toPersianNumber('01234')).toBe('۰۱۲۳۴');
    expect(toPersianNumber(123.45)).toBe('۱۲۳.۴۵');
  });

  it('should convert Persian numbers to English numbers correctly', () => {
    expect(toEnglishNumber('۱۲۳۴۵')).toBe('12345');
    expect(toEnglishNumber('۹۸۷۶۵')).toBe('98765');
    expect(toEnglishNumber('۰۱۲۳۴')).toBe('01234');
    expect(toEnglishNumber('۱۲۳.۴۵')).toBe('123.45');
  });
});


