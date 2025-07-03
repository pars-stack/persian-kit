/**
 * Checks if a given string is a valid Iranian national code.
 * @param nationalCode The 10-digit national code to validate.
 * @returns `true` if the national code is valid, `false` otherwise.
 * @example
 * ```typescript
 * isValidIranianNationalCode("0499370899"); // Returns true
 * isValidIranianNationalCode("1234567890"); // Returns false
 * ```
 */
export function isValidIranianNationalCode(nationalCode: string): boolean {
  if (!/^[0-9]{10}$/.test(nationalCode)) return false;

  // Check for national codes with all identical digits (e.g., "0000000000", "1111111111")
  if (/^([0-9])\1{9}$/.test(nationalCode)) return false;

  const check = parseInt(nationalCode[9]);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(nationalCode[i]) * (10 - i);
  }
  const remainder = sum % 11;

  return (remainder < 2 && check === remainder) || (remainder >= 2 && check === (11 - remainder));
}

/**
 * Checks if a given string is a valid Iranian mobile number.
 * @param mobileNumber The mobile number to validate (e.g., "09123456789").
 * @returns `true` if the mobile number is valid, `false` otherwise.
 * @example
 * ```typescript
 * isValidIranianMobileNumber("09123456789"); // Returns true
 * isValidIranianMobileNumber("0900000000"); // Returns false
 * ```
 */
export function isValidIranianMobileNumber(mobileNumber: string): boolean {
  return /^09[0-9]{9}$/.test(mobileNumber);
}

/**
 * Checks if a given string contains only Persian characters.
 * @param text The text to validate.
 * @returns `true` if the text contains only Persian characters, `false` otherwise.
 * @example
 * ```typescript
 * containsOnlyPersianChars("سلام دنیا"); // Returns true
 * containsOnlyPersianChars("Hello World"); // Returns false
 * ```
 */
export function containsOnlyPersianChars(text: string): boolean {
  return /^[\u0600-\u06FF\s]+$/.test(text);
}

/**
 * Checks if a given string contains only Persian digits.
 * @param text The text to validate.
 * @returns `true` if the text contains only Persian digits, `false` otherwise.
 * @example
 * ```typescript
 * containsOnlyPersianDigits("۱۲۳۴۵"); // Returns true
 * containsOnlyPersianDigits("12345"); // Returns false
 * ```
 */
export function containsOnlyPersianDigits(text: string): boolean {
  return /^[۰۱۲۳۴۵۶۷۸۹]+$/.test(text);
}


