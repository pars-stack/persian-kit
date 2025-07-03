import { toJalaali, toGregorian, isValidJalaaliDate as _isValidJalaaliDate, isLeapJalaaliYear as _isLeapJalaaliYear, jalaaliMonthLength as _jalaaliMonthLength } from 'jalaali-js';

/**
 * Converts a Gregorian date to a Jalali date.
 * @param gy Gregorian year (e.g., 2024).
 * @param gm Gregorian month (1-12, e.g., 8 for August).
 * @param gd Gregorian day (1-31, e.g., 13).
 * @returns An array `[jy, jm, jd]` representing the Jalali date (e.g., `[1403, 5, 23]`).
 * @example
 * ```typescript
 * gregorianToJalali(2024, 8, 13); // Returns [1403, 5, 23]
 * ```
 */
export function gregorianToJalali(gy: number, gm: number, gd: number): [number, number, number] {
  const jalaliDate = toJalaali(gy, gm, gd);
  return [jalaliDate.jy, jalaliDate.jm, jalaliDate.jd];
}

/**
 * Converts a Jalali date to a Gregorian date.
 * @param jy Jalali year (e.g., 1403).
 * @param jm Jalali month (1-12, e.g., 5 for Mordad).
 * @param jd Jalali day (1-31, e.g., 23).
 * @returns An array `[gy, gm, gd]` representing the Gregorian date (e.g., `[2024, 8, 13]`).
 * @example
 * ```typescript
 * jalaliToGregorian(1403, 5, 23); // Returns [2024, 8, 13]
 * ```
 */
export function jalaliToGregorian(jy: number, jm: number, jd: number): [number, number, number] {
  const gregorianDate = toGregorian(jy, jm, jd);
  return [gregorianDate.gy, gregorianDate.gm, gregorianDate.gd];
}

/**
 * Checks if a given Jalali date is valid.
 * @param jy Jalali year.
 * @param jm Jalali month (1-12).
 * @param jd Jalali day (1-31).
 * @returns `true` if the date is valid, `false` otherwise.
 * @example
 * ```typescript
 * isValidJalaaliDate(1395, 12, 30); // Returns true (Esfand 30, 1395 is valid as 1395 is a leap year)
 * isValidJalaaliDate(1394, 12, 30); // Returns false (Esfand 30, 1394 is invalid as 1394 is not a leap year)
 * ```
 */
export function isValidJalaaliDate(jy: number, jm: number, jd: number): boolean {
  return _isValidJalaaliDate(jy, jm, jd);
}

/**
 * Checks if a given Jalali year is a leap year.
 * @param jy Jalali year.
 * @returns `true` if the year is a leap year, `false` otherwise.
 * @example
 * ```typescript
 * isLeapJalaaliYear(1395); // Returns true
 * isLeapJalaaliYear(1394); // Returns false
 * ```
 */
export function isLeapJalaaliYear(jy: number): boolean {
  return _isLeapJalaaliYear(jy);
}

/**
 * Returns the number of days in a given Jalali month.
 * @param jy Jalali year.
 * @param jm Jalali month (1-12).
 * @returns The number of days in the specified month.
 * @example
 * ```typescript
 * jalaaliMonthLength(1400, 1); // Returns 31 (Farvardin has 31 days)
 * jalaaliMonthLength(1395, 12); // Returns 30 (Esfand in a leap year has 30 days)
 * jalaaliMonthLength(1394, 12); // Returns 29 (Esfand in a non-leap year has 29 days)
 * ```
 */
export function jalaaliMonthLength(jy: number, jm: number): number {
  return _jalaaliMonthLength(jy, jm);
}


