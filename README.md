# Persian Kit

A comprehensive TypeScript library collection for Persian language utilities.

## Packages

This monorepo contains the following packages:

- **[@persian-kit/date](./packages/@persian-kit/date)** - Jalali/Gregorian date manipulation library
- **[@persian-kit/core](./packages/@persian-kit/core)** - General-purpose Persian utilities (numeral, text, validation)

## Features

- 🔥 **Zero dependencies** - No external runtime dependencies
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **TypeScript first** - Full type definitions included
- 🌐 **Universal** - Works in Node.js and browsers
- 📱 **ESM + CJS** - Supports both module systems
- 🧪 **Well tested** - Comprehensive unit tests
- 📚 **Well documented** - JSDoc comments and examples

## Installation

Install individual packages as needed:

```bash
# Date utilities
pnpm add @persian-kit/date

# Core utilities (numeral, text, validation)
pnpm add @persian-kit/core
```

## Quick Start

### Date Conversion

```typescript
import { gregorianToJalali, jalaliToGregorian } from '@persian-kit/date';

// Convert Gregorian to Jalali
const jalaliDate = gregorianToJalali(2024, 8, 13); // [1403, 5, 23]

// Convert Jalali to Gregorian
const gregorianDate = jalaliToGregorian(1403, 5, 23); // [2024, 8, 13]
```

### Number Conversion

```typescript
import { toPersianNumber, toEnglishNumber } from '@persian-kit/core';

toPersianNumber(12345); // "۱۲۳۴۵"
toEnglishNumber("۱۲۳۴۵"); // "12345"
```

### Validation

```typescript
import { isValidIranianNationalCode, isValidIranianMobileNumber } from '@persian-kit/core';

isValidIranianNationalCode("0499370899"); // true
isValidIranianMobileNumber("09123456789"); // true
```

## Development

This project uses pnpm workspaces for monorepo management.

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build all packages
pnpm build

# Build specific package
pnpm --filter @persian-kit/date build
```

## License

MIT

