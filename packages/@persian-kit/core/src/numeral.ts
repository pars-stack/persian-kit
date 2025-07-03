/**
 * Converts English numbers to Persian numbers.
 * @param num The number (string or number type) to convert.
 * @returns The Persian representation of the number as a string.
 * @example
 * ```typescript
 * toPersianNumber(12345); // Returns "۱۲۳۴۵"
 * toPersianNumber("98765"); // Returns "۹۸۷۶۵"
 * ```
 */
export function toPersianNumber(num: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(num).replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

/**
 * Converts Persian numbers to English numbers.
 * @param num The Persian number (string or number type) to convert.
 * @returns The English representation of the number as a string.
 * @example
 * ```typescript
 * toEnglishNumber("۱۲۳۴۵"); // Returns "12345"
 * toEnglishNumber("۹۸۷۶۵"); // Returns "98765"
 * ```
 */
export function toEnglishNumber(num: string | number): string {
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = String(num);
  for (let i = 0; i < 10; i++) {
    result = result.replace(new RegExp(persianDigits[i], "g"), englishDigits[i]);
  }
  return result;
}


