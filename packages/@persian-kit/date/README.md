# @persian-kit/date

A comprehensive library for Jalali/Gregorian date manipulation.

## Installation

```bash
pnpm add @persian-kit/date
# or
npm install @persian-kit/date
# or
yarn add @persian-kit/date
```

## Usage

```typescript
import { gregorianToJalali, jalaliToGregorian, isValidJalaaliDate, isLeapJalaaliYear, jalaaliMonthLength } from '@persian-kit/date';

// Convert Gregorian to Jalali
const jalaliDate = gregorianToJalali(2024, 8, 13); // [1403, 5, 23]
console.log(jalaliDate);

// Convert Jalali to Gregorian
const gregorianDate = jalaliToGregorian(1403, 5, 23); // [2024, 8, 13]
console.log(gregorianDate);

// Check if a Jalali date is valid
isValidJalaaliDate(1395, 12, 30); // true
isValidJalaaliDate(1394, 12, 30); // false

// Check if a Jalali year is a leap year
isLeapJalaaliYear(1395); // true
isLeapJalaaliYear(1394); // false

// Get the number of days in a Jalali month
jalaaliMonthLength(1400, 1); // 31
jalaaliMonthLength(1395, 12); // 30
```


