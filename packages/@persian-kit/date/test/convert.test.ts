import { gregorianToJalali, jalaliToGregorian, isValidJalaaliDate, isLeapJalaaliYear, jalaaliMonthLength } from '../src/convert';

describe('Date Conversion', () => {
  it('should convert Gregorian to Jalali correctly', () => {
    const [jy1, jm1, jd1] = gregorianToJalali(2024, 8, 13);
    expect([jy1, jm1, jd1]).toEqual([1403, 5, 23]);
    const [jy2, jm2, jd2] = gregorianToJalali(2000, 3, 20);
    expect([jy2, jm2, jd2]).toEqual([1379, 1, 1]);
    const [jy3, jm3, jd3] = gregorianToJalali(2000, 3, 21);
    expect([jy3, jm3, jd3]).toEqual([1379, 1, 2]);
    const [jy4, jm4, jd4] = gregorianToJalali(1980, 1, 1);
    expect([jy4, jm4, jd4]).toEqual([1358, 10, 11]);
    const [jy5, jm5, jd5] = gregorianToJalali(2025, 3, 20);
    expect([jy5, jm5, jd5]).toEqual([1403, 12, 30]);
    const [jy6, jm6, jd6] = gregorianToJalali(2025, 3, 21);
    expect([jy6, jm6, jd6]).toEqual([1404, 1, 1]);
  });

  it('should convert Jalali to Gregorian correctly', () => {
    const [gy1, gm1, gd1] = jalaliToGregorian(1403, 5, 23);
    expect([gy1, gm1, gd1]).toEqual([2024, 8, 13]);
    const [gy2, gm2, gd2] = jalaliToGregorian(1378, 12, 30);
    expect([gy2, gm2, gd2]).toEqual([2000, 3, 20]);
    const [gy3, gm3, gd3] = jalaliToGregorian(1379, 1, 1);
    expect([gy3, gm3, gd3]).toEqual([2000, 3, 20]); // Corrected: Farvardin 1, 1379 is March 20, 2000
    const [gy4, gm4, gd4] = jalaliToGregorian(1358, 10, 11);
    expect([gy4, gm4, gd4]).toEqual([1980, 1, 1]);
    const [gy5, gm5, gd5] = jalaliToGregorian(1403, 12, 30);
    expect([gy5, gm5, gd5]).toEqual([2025, 3, 20]);
    const [gy6, gm6, gd6] = jalaliToGregorian(1404, 1, 1);
    expect([gy6, gm6, gd6]).toEqual([2025, 3, 21]);
  });

  it('should validate Jalali dates correctly', () => {
    expect(isValidJalaaliDate(1394, 12, 30)).toBeFalsy();
    expect(isValidJalaaliDate(1395, 12, 30)).toBeTruthy();
    expect(isValidJalaaliDate(1400, 1, 31)).toBeTruthy();
    expect(isValidJalaaliDate(1400, 1, 32)).toBeFalsy();
  });

  it('should detect leap Jalali years correctly', () => {
    expect(isLeapJalaaliYear(1395)).toBeTruthy();
    expect(isLeapJalaaliYear(1394)).toBeFalsy();
  });

  it('should return correct month length for Jalali dates', () => {
    expect(jalaaliMonthLength(1394, 12)).toBe(29);
    expect(jalaaliMonthLength(1395, 12)).toBe(30);
    expect(jalaaliMonthLength(1400, 1)).toBe(31);
    expect(jalaaliMonthLength(1400, 7)).toBe(30);
  });
});


