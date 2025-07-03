# @persian-kit/core

A collection of general-purpose Persian utilities including numeral, text, and validation functions.

## Installation

```bash
pnpm add @persian-kit/core
# or
npm install @persian-kit/core
# or
yarn add @persian-kit/core
```

## Usage

### Numeral Functions

```typescript
import { toPersianNumber, toEnglishNumber } from '@persian-kit/core';

// Convert English numbers to Persian
toPersianNumber(12345); // "۱۲۳۴۵"
toPersianNumber("98765"); // "۹۸۷۶۵"

// Convert Persian numbers to English
toEnglishNumber("۱۲۳۴۵"); // "12345"
toEnglishNumber("۹۸۷۶۵"); // "98765"
```

### Text Functions

```typescript
import { toPersianText, toEnglishText } from '@persian-kit/core';

// Convert English text to Persian (simplified transliteration)
toPersianText("salam"); // "سالام"
toPersianText("iran"); // "یران"

// Convert Persian text to English (simplified transliteration)
toEnglishText("سلام"); // "slam"
toEnglishText("ایران"); // "ayran"
```

### Validation Functions

```typescript
import { isValidIranianNationalCode, isValidIranianMobileNumber, containsOnlyPersianChars, containsOnlyPersianDigits } from '@persian-kit/core';

// Validate Iranian National Code
isValidIranianNationalCode("0499370899"); // true
isValidIranianNationalCode("1234567890"); // false

// Validate Iranian Mobile Number
isValidIranianMobileNumber("09123456789"); // true
isValidIranianMobileNumber("0900000000"); // false

// Check for Persian characters
containsOnlyPersianChars("سلام دنیا"); // true
containsOnlyPersianChars("Hello World"); // false

// Check for Persian digits
containsOnlyPersianDigits("۱۲۳۴۵"); // true
containsOnlyPersianDigits("12345"); // false
```


