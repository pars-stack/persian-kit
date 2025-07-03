import { toPersianText, toEnglishText } from '../src/text';

describe('Text Conversion', () => {
  it('should convert English text to Persian text correctly', () => {
    expect(toPersianText('salam')).toBe('سالام');
    expect(toPersianText('iran')).toBe('یران');
    expect(toPersianText('ketab')).toBe('کهتاب');
    expect(toPersianText('hello')).toBe('حهللو');
  });

  it('should convert Persian text to English text correctly', () => {
    expect(toEnglishText('سلام')).toBe('slam');
    expect(toEnglishText('ایران')).toBe('ayran');
    expect(toEnglishText('کتاب')).toBe('ktab');
    expect(toEnglishText('فارسی')).toBe('farsy');
  });

  it('should handle mixed text correctly', () => {
    expect(toPersianText('hello123')).toBe('حهللو123');
    expect(toEnglishText('سلام123')).toBe('slam123');
  });
});

