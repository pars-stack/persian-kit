/**
 * Converts English characters to their Persian equivalents based on a simplified transliteration.
 * This function does not handle complex phonetic rules or context-dependent conversions.
 * @param text The English text to convert.
 * @returns The converted Persian text.
 * @example
 * ```typescript
 * toPersianText("salam"); // Returns "سالام"
 * toPersianText("iran"); // Returns "یران"
 * ```
 */
export function toPersianText(text: string): string {
  const englishToPersianMap: { [key: string]: string } = {
    // Vowels
    'a': 'ا',
    'e': 'ه',
    'i': 'ی',
    'o': 'و',
    'u': 'و',
    // Consonants and common digraphs/trigraphs (order matters for replacement)
    'ch': 'چ',
    'sh': 'ش',
    'zh': 'ژ',
    'kh': 'خ',
    'gh': 'غ',
    'th': 'ث',
    'dh': 'ذ',
    'ph': 'ف',
    'b': 'ب',
    'p': 'پ',
    't': 'ت',
    's': 'س',
    'j': 'ج',
    'h': 'ح',
    'd': 'د',
    'z': 'ز',
    'r': 'ر',
    'f': 'ف',
    'q': 'ق',
    'k': 'ک',
    'g': 'گ',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'v': 'و',
    'y': 'ی',
  };

  let result = text;
  // Sort keys by length in descending order to handle multi-character mappings first
  const sortedKeys = Object.keys(englishToPersianMap).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    result = result.replace(new RegExp(key, 'gi'), (match) => {
      const persianChar = englishToPersianMap[key];
      // Preserve case for the first character if it's a single character mapping
      if (key.length === 1 && match === match.toUpperCase()) {
        return persianChar.toUpperCase(); // This might not be accurate for Persian, but attempts to preserve case
      }
      return persianChar;
    });
  }
  return result;
}

/**
 * Converts Persian characters to their English equivalents based on a simplified transliteration.
 * This function does not handle complex phonetic rules or context-dependent conversions.
 * @param text The Persian text to convert.
 * @returns The converted English text.
 * @example
 * ```typescript
 * toEnglishText("سلام"); // Returns "slam"
 * toEnglishText("ایران"); // Returns "ayran"
 * ```
 */
export function toEnglishText(text: string): string {
  const persianToEnglishMap: { [key: string]: string } = {
    'ا': 'a',
    'ب': 'b',
    'پ': 'p',
    'ت': 't',
    'ث': 's',
    'ج': 'j',
    'چ': 'ch',
    'ح': 'h',
    'خ': 'kh',
    'د': 'd',
    'ذ': 'z',
    'ر': 'r',
    'ز': 'z',
    'ژ': 'zh',
    'س': 's',
    'ش': 'sh',
    'ص': 's',
    'ض': 'z',
    'ط': 't',
    'ظ': 'z',
    'ع': 'a',
    'غ': 'gh',
    'ف': 'f',
    'ق': 'q',
    'ک': 'k',
    'گ': 'g',
    'ل': 'l',
    'م': 'm',
    'ن': 'n',
    'و': 'v',
    'ه': 'h',
    'ی': 'y',
  };

  let result = text;
  // Sort keys by length in descending order to handle multi-character mappings first
  const sortedKeys = Object.keys(persianToEnglishMap).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    result = result.replace(new RegExp(key, 'g'), persianToEnglishMap[key]);
  }
  return result;
}


