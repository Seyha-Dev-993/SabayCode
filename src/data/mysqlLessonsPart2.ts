import { Lesson } from '../types';

export const mysqlLessonsPart2: Lesson[] = [
  {
    id: "mysql-limit",
    title: { en: "MySQL LIMIT", km: "កំណត់ដែនទិន្នន័យ LIMIT" },
    content: {
      en: `### The LIMIT Clause
The \`LIMIT\` clause is used to specify the number of records to return.

It is highly useful on large tables with thousands of records, where returning a large number of rows can impact application performance.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
\`\`\`

In MySQL, you can also add an offset:
\`\`\`sql
-- Skips first 3 rows and returns 5 rows
SELECT * FROM Customers LIMIT 5 OFFSET 3;
-- Shortcut equivalent: LIMIT offset, count
SELECT * FROM Customers LIMIT 3, 5;
\`\`\`

> **Tip:** Pair \`LIMIT\` with \`ORDER BY\` to get things like the top 3 highest-priced products.`,
      km: `### លក្ខខណ្ឌ LIMIT
លក្ខខណ្ឌ \`LIMIT\` ត្រូវបានប្រើដើម្បីកំណត់ចំនួនអតិបរមានៃកំណត់ត្រាដែលត្រូវទាញយកមកបង្ហាញ។

វាមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់តារាងធំៗដែលមានទិន្នន័យរាប់ពាន់ ព្រោះការទាញយកទិន្នន័យច្រើនពេកក្នុងពេលតែមួយអាចធ្វើឱ្យល្បឿនកម្មវិធីយឺត។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
\`\`\`

នៅក្នុង MySQL អ្នកក៏អាចកំណត់ចំណុចចាប់ផ្តើម (OFFSET) ផងដែរ៖
\`\`\`sql
-- រំលង ៣ ជួរដំបូង រួចយក ៥ ជួរដេកបន្ទាប់
SELECT * FROM Customers LIMIT 5 OFFSET 3;
-- ឬសរសេរកាត់៖ LIMIT offset, count
SELECT * FROM Customers LIMIT 3, 5;
\`\`\`

> **អនុសាសន៍:** ប្រើប្រាស់ \`LIMIT\` រួមជាមួយ \`ORDER BY\` ដើម្បីទាញយកទិន្នន័យសំខាន់ៗ ឧទាហរណ៍ ផលិតផលដែលមានតម្លៃថ្លៃជាងគេទាំង ៣។`
    },
    starterCode: `-- Select the top 3 cheapest products
SELECT * FROM Products
ORDER BY Price ASC
LIMIT 3;`
  },
  {
    id: "mysql-aggregate-functions",
    title: { en: "MySQL Aggregate Functions", km: "អនុគមន៍បូកសរុប" },
    content: {
      en: `### Introduction to Aggregate Functions
An aggregate function performs a calculation on a set of values and returns a single value.

MySQL provides several built-in aggregate functions:
1. \`MIN()\` - returns the smallest value.
2. \`MAX()\` - returns the largest value.
3. \`COUNT()\` - returns the number of rows.
4. \`SUM()\` - returns the total sum of a numeric column.
5. \`AVG()\` - returns the average value of a numeric column.

Except for \`COUNT(*)\`, aggregate functions ignore \`NULL\` values.

> **Note:** These are often used with the \`GROUP BY\` clause to group aggregate results by category.`,
      km: `### សេចក្តីផ្តើមអំពីអនុគមន៍បូកសរុប (Aggregate Functions)
អនុគមន៍បូកសរុបអនុវត្តការគណនាលើសំណុំតម្លៃផ្សេងៗ រួចបញ្ជូនត្រឡប់មកវិញនូវតម្លៃតែមួយគត់។

MySQL ផ្តល់នូវអនុគមន៍បូកសរុបស្រាប់ៗសំខាន់ៗមួយចំនួន៖
1. \`MIN()\` - បញ្ជូនត្រឡប់មកវិញនូវតម្លៃតូចបំផុត។
2. \`MAX()\` - បញ្ជូនត្រឡប់មកវិញនូវតម្លៃធំបំផុត។
3. \`COUNT()\` - បញ្ជូនត្រឡប់មកវិញនូវចំនួនជួរដេកសរុប។
4. \`SUM()\` - បញ្ជូនត្រឡប់មកវិញនូវផលបូកសរុបនៃជួរឈរលេខ។
5. \`AVG()\` - បញ្ជូនត្រឡប់មកវិញនូវតម្លៃមធ្យមនៃជួរឈរលេខ។

លើកលែងតែ \`COUNT(*)\` ចេញ អនុគមន៍បូកសរុបទាំងនេះនឹងមិនគណនាតម្លៃ \`NULL\` ឡើយ។

> **សម្គាល់:** អនុគមន៍ទាំងនេះច្រើនតែត្រូវបានប្រើប្រាស់រួមគ្នាជាមួយឃ្លា \`GROUP BY\` ដើម្បីបែងចែកលទ្ធផលសរុបទៅតាមក្រុមប្រភេទ។`
    },
    starterCode: `-- Get the count of all products
SELECT COUNT(*) FROM Products;`
  },
  {
    id: "mysql-min",
    title: { en: "MySQL MIN()", km: "អនុគមន៍ MIN()" },
    content: {
      en: `### The MIN() Function
The \`MIN()\` function returns the smallest value of the selected column.

**Syntax:**
\`\`\`sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
\`\`\`

You can rename the resulting column using an alias (\`AS\`) to make the output headers readable.

> **Tip:** Use \`AS\` to name the aggregate field so that your application can easily reference the returned column.`,
      km: `### អនុគមន៍ MIN()
អនុគមន៍ \`MIN()\` ត្រូវបានប្រើដើម្បីស្វែងរក និងបង្ហាញតម្លៃតូចបំផុតនៅក្នុងជួរឈរដែលបានជ្រើសរើស។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
\`\`\`

អ្នកអាចប្តូរឈ្មោះជួរឈរលទ្ធផលដោយប្រើប្រាស់ឈ្មោះក្រៅ (\`AS\`) ដើម្បីធ្វើឱ្យក្បាលតារាងលទ្ធផលងាយស្រួលអាន។

> **អនុសាសន៍:** ប្រើប្រាស់ \`AS\` ដើម្បីដាក់ឈ្មោះឱ្យជួរឈរគណនា ជៀសវាងកម្មវិធីរបស់អ្នកពិបាកយោងទៅឈ្មោះជួរឈរដែលបង្កើតដោយស្វ័យប្រវត្ត។`
    },
    starterCode: `-- Find the cheapest product price
SELECT MIN(Price) AS SmallestPrice FROM Products;`
  },
  {
    id: "mysql-max",
    title: { en: "MySQL MAX()", km: "អនុគមន៍ MAX()" },
    content: {
      en: `### The MAX() Function
The \`MAX()\` function returns the largest value of the selected column.

**Syntax:**
\`\`\`sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
\`\`\`

Just like \`MIN()\`, you can use this on numeric values, text values, or dates (where MAX represents the latest date).

> **Tip:** Pairing MAX with a WHERE filter helps find localized maxima, such as the highest priced item in a specific category.`,
      km: `### អនុគមន៍ MAX()
អនុគមន៍ \`MAX()\` ត្រូវបានប្រើដើម្បីស្វែងរក និងបង្ហាញតម្លៃធំបំផុតនៅក្នុងជួរឈរដែលបានជ្រើសរើស។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
\`\`\`

ដូចគ្នានឹង \`MIN()\` ដែរ អ្នកអាចប្រើវាលើតម្លៃលេខ អត្ថបទ ឬកាលបរិច្ឆេទ (ដែល MAX តំណាងឱ្យថ្ងៃចុងក្រោយបង្អស់)។

> **អនុសាសន៍:** ការប្រើប្រាស់ MAX រួមគ្នាជាមួយតម្រង WHERE ជួយឱ្យរកឃើញតម្លៃខ្ពស់បំផុតក្នុងក្រុមជាក់លាក់ ដូចជាតម្លៃទំនិញខ្ពស់បំផុតក្នុងប្រភេទណាមួយ។`
    },
    starterCode: `-- Find the highest priced product
SELECT MAX(Price) AS HighestPrice FROM Products;`
  },
  {
    id: "mysql-count",
    title: { en: "MySQL COUNT()", km: "អនុគមន៍ COUNT()" },
    content: {
      en: `### The COUNT() Function
The \`COUNT()\` function returns the number of rows that matches a specified criterion.

**Syntax:**
\`\`\`sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
\`\`\`

- \`COUNT(*)\` counts every row, including NULLs and duplicates.
- \`COUNT(column_name)\` counts rows with non-NULL values in that column.
- \`COUNT(DISTINCT column_name)\` counts unique values only.

> **Note:** COUNT is the most frequently used aggregate function for dashboards and pagination metrics.`,
      km: `### អនុគមន៍ COUNT()
អនុគមន៍ \`COUNT()\` បញ្ជូនត្រឡប់មកវិញនូវចំនួនជួរដេកសរុបដែលស្របតាមលក្ខខណ្ឌដែលបានកំណត់។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
\`\`\`

- \`COUNT(*)\` រាប់រាល់ជួរដេកទាំងអស់ រួមទាំងតម្លៃ NULL និងស្ទួន។
- \`COUNT(column_name)\` រាប់តែជួរដេកណាដែលមានតម្លៃមិនមែន NULL ក្នុងជួរឈរនោះប៉ុណ្ណោះ។
- \`COUNT(DISTINCT column_name)\` រាប់តែតម្លៃប្លែកៗដែលមិនជាន់គ្នាឡើយ។

> **សម្គាល់:** COUNT គឺជាអនុគមន៍បូកសរុបដែលត្រូវបានគេប្រើប្រាស់ញឹកញាប់បំផុតសម្រាប់ផ្ទាំងគ្រប់គ្រង (Dashboards) និងការបែងចែកទំព័រ។`
    },
    starterCode: `-- Count how many customers live in Mexico
SELECT COUNT(*) AS MexicoCustomers FROM Customers WHERE Country = 'Mexico';`
  },
  {
    id: "mysql-sum",
    title: { en: "MySQL SUM()", km: "អនុគមន៍ SUM()" },
    content: {
      en: `### The SUM() Function
The \`SUM()\` function returns the total sum of a numeric column.

**Syntax:**
\`\`\`sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
\`\`\`

If all rows in the results set are NULL, \`SUM()\` returns NULL.

> **Tip:** You can perform arithmetic inside SUM, like \`SUM(Quantity * Price)\` to find the total invoice value.`,
      km: `### អនុគមន៍ SUM()
អនុគមន៍ \`SUM()\` បញ្ជូនត្រឡប់មកវិញនូវផលបូកសរុបនៃតម្លៃលេខទាំងអស់នៅក្នុងជួរឈរដែលបានជ្រើសរើស។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
\`\`\`

ប្រសិនបើរាល់ជួរដេកទាំងអស់មានតម្លៃ NULL នោះអនុគមន៍ \`SUM()\` នឹងបញ្ជូនមកវិញនូវ NULL ដូចគ្នា។

> **អនុសាសន៍:** អ្នកអាចធ្វើប្រមាណវិធីគណិតវិទ្យានៅក្នុង SUM បាន ដូចជា \`SUM(Quantity * Price)\` ដើម្បីស្វែងរកផលបូកវិក្កយបត្រសរុប។`
    },
    starterCode: `-- Calculate the total value of all product prices combined
SELECT SUM(Price) AS TotalPriceSum FROM Products;`
  },
  {
    id: "mysql-avg",
    title: { en: "MySQL AVG()", km: "អនុគមន៍ AVG()" },
    content: {
      en: `### The AVG() Function
The \`AVG()\` function returns the average value of a numeric column.

**Syntax:**
\`\`\`sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
\`\`\`

Like other aggregate functions, NULL values are completely ignored during calculation (both in sum and row count divisor).

> **Tip:** Combining AVG with round functions like \`ROUND(AVG(column), 2)\` creates highly polished, professional reports.`,
      km: `### អនុគមន៍ AVG()
អនុគមន៍ \`AVG()\` បញ្ជូនត្រឡប់មកវិញនូវតម្លៃមធ្យម (Average) នៃជួរឈរលេខដែលបានជ្រើសរើស។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
\`\`\`

ដូចគ្នានឹងអនុគមន៍បូកសរុបដទៃទៀតដែរ តម្លៃ NULL ត្រូវបានរំលងទាំងស្រុងក្នុងអំឡុងពេលគណនា (ទាំងក្នុងផលបូក និងភាគបែងរាប់ជួរដេក)។

> **អនុសាសន៍:** ការប្រើប្រាស់ AVG រួមជាមួយអនុគមន៍កាត់ក្បៀសដូចជា \`ROUND(AVG(column), 2)\` ជួយបង្កើតរបាយការណ៍ដែលស្អាត និងមានរបៀបរៀបរយ។`
    },
    starterCode: `-- Get the average price of products
SELECT AVG(Price) AS AveragePrice FROM Products;`
  },
  {
    id: "mysql-like",
    title: { en: "MySQL LIKE", km: "ការស្វែងរកគំរូ LIKE" },
    content: {
      en: `### The LIKE Operator
The \`LIKE\` operator is used in a \`WHERE\` clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the \`LIKE\` operator:
- The percent sign (\`%\`) represents zero, one, or multiple characters.
- The underscore sign (\`_\`) represents a single character.

**Syntax:**
\`\`\`sql
SELECT columns FROM table WHERE column LIKE pattern;
\`\`\`

Examples:
- \`WHERE CustomerName LIKE 'a%'\` - Starts with "a"
- \`WHERE CustomerName LIKE '%a'\` - Ends with "a"
- \`WHERE CustomerName LIKE '%or%'\` - Has "or" in any position
- \`WHERE CustomerName LIKE '_r%'\` - Has "r" in the second position

> **Note:** In MySQL, \`LIKE\` is case-insensitive by default.`,
      km: `### ប្រមាណវិធី LIKE
ប្រមាណវិធី \`LIKE\` ត្រូវបានប្រើប្រាស់នៅក្នុងឃ្លា \`WHERE\` ដើម្បីស្វែងរកលំនាំលក្ខណៈ (pattern) ជាក់លាក់ណាមួយនៅក្នុងជួរឈរ។

មាននិមិត្តសញ្ញាពិសេស (wildcards) ពីរដែលគេនិយមប្រើប្រាស់ជាមួយប្រមាណវិធី \`LIKE\`៖
- សញ្ញាភាគរយ (\`%\`) តំណាងឱ្យគ្មាន តួអក្សរមួយ ឬតួអក្សរច្រើន។
- សញ្ញាគូសក្រោម (\`_\`) តំណាងឱ្យតួអក្សរតែមួយគត់។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT columns FROM table WHERE column LIKE pattern;
\`\`\`

ឧទាហរណ៍៖
- \`WHERE CustomerName LIKE 'a%'\` - ផ្ដើមដោយអក្សរ "a"
- \`WHERE CustomerName LIKE '%a'\` - បញ្ចប់ដោយអក្សរ "a"
- \`WHERE CustomerName LIKE '%or%'\` - មានពាក្យ "or" នៅកន្លែងណាក៏បាន
- \`WHERE CustomerName LIKE '_r%'\` - មានអក្សរ "r" នៅលំដាប់ទីពីរ

> **សម្គាល់:** នៅក្នុង MySQL, \`LIKE\` មិនប្រកាន់តួអក្សរតូចធំជាលំនាំដើមឡើយ។`
    },
    starterCode: `-- Find all customers with names starting with 'An'
SELECT * FROM Customers WHERE CustomerName LIKE 'An%';`
  },
  {
    id: "mysql-wildcards",
    title: { en: "MySQL Wildcards", km: "និមិត្តសញ្ញា Wildcards" },
    content: {
      en: `### SQL Wildcard Characters
A wildcard character is used to substitute one or more characters in a string.

Wildcards are used with the SQL \`LIKE\` operator:
1. \`%\` : Represents 0 or more characters.
2. \`_\` : Represents a single character.
3. \`[charlist]\` : Defines sets and ranges of characters to match (supported in standard SQL/Regexp).
4. \`[!charlist]\` or \`[^charlist]\` : Defines sets and ranges of characters not to match.

MySQL supports standard \`%\` and \`_\`, and provides the powerful \`REGEXP\` operator for advanced regular expression matches.

> **Tip:** Wildcards at the beginning of a search query (\`LIKE '%name'\`) prevent MySQL from utilizing column indexes, resulting in slower table scans.`,
      km: `### និមិត្តសញ្ញាស្វែងរកពិសេស (Wildcard Characters)
និមិត្តសញ្ញា Wildcard ត្រូវបានប្រើជំនួសឱ្យតួអក្សរមួយ ឬច្រើននៅក្នុងខ្សែអក្សរ។

ពួកវាត្រូវបានប្រើប្រាស់រួមគ្នាជាមួយប្រមាណវិធី SQL \`LIKE\`៖
1. \`%\` ៖ តំណាងឱ្យតួអក្សរចំនួន ០ ឬច្រើន។
2. \`_\` ៖ តំណាងឱ្យតួអក្សរតែមួយគត់។
3. \`[charlist]\` ៖ កំណត់ក្រុម ឬចន្លោះនៃតួអក្សរដែលត្រូវស្វែងរក (គាំទ្រក្នុង SQL ស្តង់ដារ/Regexp)។
4. \`[!charlist]\` ឬ \`[^charlist]\` ៖ កំណត់ក្រុម ឬចន្លោះនៃតួអក្សរដែលត្រូវចៀសវាង។

MySQL គាំទ្រ \`%\` និង \`_\` ជាស្តង់ដារ និងផ្តល់នូវប្រមាណវិធី \`REGEXP\` ដ៏មានឥទ្ធិពលសម្រាប់ការផ្គូផ្គងកន្សោមធម្មតា (Regular Expressions) កម្រិតខ្ពស់។

> **អនុសាសន៍:** ការប្រើប្រាស់ Wildcards នៅដើមសំណួរស្វែងរក (ដូចជា \`LIKE '%name'\`) នឹងធ្វើឱ្យ MySQL មិនអាចប្រើប្រាស់សន្ទស្សន៍ (indexes) បានទេ ដែលធ្វើឱ្យការស្វែងរកយឺតជាងមុន។`
    },
    starterCode: `-- Find products where the second character of the name is 'h'
SELECT * FROM Products WHERE ProductName LIKE '_h%';`
  },
  {
    id: "mysql-in",
    title: { en: "MySQL IN", km: "ប្រមាណវិធី IN" },
    content: {
      en: `### The IN Operator
The \`IN\` operator allows you to specify multiple values in a \`WHERE\` clause.

The \`IN\` operator is a shorthand for multiple \`OR\` conditions.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
\`\`\`

You can also use a subquery inside the IN operator:
\`\`\`sql
SELECT * FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);
\`\`\`

> **Tip:** Using \`IN\` makes queries cleaner and more maintainable than writing dozens of stacked \`OR\` conditions.`,
      km: `### ប្រមាណវិធី IN
ប្រមាណវិធី \`IN\` អនុញ្ញាតឱ្យអ្នកកំណត់បញ្ជីតម្លៃច្រើននៅក្នុងឃ្លា \`WHERE\`។

វាគឺជាទម្រង់សរសេរកាត់នៃប្រមាណវិធី \`OR\` ច្រើនរួមបញ្ចូលគ្នា។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
\`\`\`

អ្នកក៏អាចប្រើប្រាស់សំណួររង (subquery) នៅក្នុងប្រមាណវិធី IN ផងដែរ៖
\`\`\`sql
SELECT * FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);
\`\`\`

> **អនុសាសន៍:** ការប្រើប្រាស់ \`IN\` ជួយឱ្យកូដរបស់អ្នកស្អាត និងងាយស្រួលថែទាំជាងការសរសេរប្រមាណវិធី \`OR\` តម្រៀបគ្នារាប់សិបជួរ។`
    },
    starterCode: `-- Find all customers located in 'Germany', 'UK', or 'Mexico'
SELECT * FROM Customers WHERE Country IN ('Germany', 'UK', 'Mexico');`
  },
  {
    id: "mysql-between",
    title: { en: "MySQL BETWEEN", km: "ចន្លោះតម្លៃ BETWEEN" },
    content: {
      en: `### The BETWEEN Operator
The \`BETWEEN\` operator selects values within a given range. The values can be numbers, text, or dates.

The \`BETWEEN\` operator is **inclusive**: begin and end values are included in the results.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
\`\`\`

To select values outside the range, combine it with \`NOT\`:
\`\`\`sql
WHERE column_name NOT BETWEEN 10 AND 20;
\`\`\`

> **Note:** When using BETWEEN with date values, ensure the format matches database specifications (e.g., 'YYYY-MM-DD').`,
      km: `### ប្រមាណវិធី BETWEEN
ប្រមាណវិធី \`BETWEEN\` ជ្រើសរើសទិន្នន័យដែលមានតម្លៃស្ថិតនៅក្នុងចន្លោះជាក់លាក់ណាមួយ។ តម្លៃទាំងនោះអាចជា លេខ អត្ថបទ ឬកាលបរិច្ឆេទ។

ប្រមាណវិធី \`BETWEEN\` រាប់បញ្ចូលទាំងតម្លៃចាប់ផ្តើម និងតម្លៃចុងក្រោយ (inclusive)។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
\`\`\`

ដើម្បីជ្រើសរើសយកតម្លៃដែលនៅក្រៅចន្លោះនោះ គ្រាន់តែរួមបញ្ចូលជាមួយ \`NOT\`៖
\`\`\`sql
WHERE column_name NOT BETWEEN 10 AND 20;
\`\`\`

> **សម្គាល់:** នៅពេលប្រើ BETWEEN ជាមួយកាលបរិច្ឆេទ ត្រូវប្រាកដថាទ្រង់ទ្រាយកាលបរិច្ឆេទត្រូវគ្នាជាមួយមូលដ្ឋានទិន្នន័យ (ឧទាហរណ៍ 'YYYY-MM-DD')។`
    },
    starterCode: `-- Select all products with a price between 10 and 20
SELECT * FROM Products WHERE Price BETWEEN 10.00 AND 20.00;`
  },
  {
    id: "mysql-aliases",
    title: { en: "MySQL Aliases", km: "ឈ្មោះក្រៅ Aliases" },
    content: {
      en: `### SQL Aliases
SQL aliases are used to give a table, or a column in a table, a temporary name.

- Aliases are often used to make column names more readable.
- An alias only exists for the duration of that specific query.
- An alias is created with the \`AS\` keyword.

**Column Alias Syntax:**
\`\`\`sql
SELECT column_name AS alias_name
FROM table_name;
\`\`\`

**Table Alias Syntax:**
\`\`\`sql
SELECT o.OrderID, c.CustomerName
FROM Orders AS o, Customers AS c
WHERE o.CustomerID = c.CustomerID;
\`\`\`

> **Tip:** Table aliases are incredibly helpful when writing complex joins where multiple tables share identical column names (like ID fields).`,
      km: `### ឈ្មោះក្រៅ SQL Aliases
ឈ្មោះក្រៅ SQL Aliases ត្រូវបានប្រើដើម្បីផ្តល់ឈ្មោះបណ្តោះអាសន្នទៅឱ្យតារាង ឬជួរឈរនៅក្នុងតារាង។

- ឈ្មោះក្រៅត្រូវបានប្រើជាញឹកញាប់ដើម្បីធ្វើឱ្យឈ្មោះជួរឈរកាន់តែងាយស្រួលអាន។
- វាមានអត្ថិភាពតែក្នុងអំឡុងពេលដំណើរការសំណួរនោះប៉ុណ្ណោះ។
- ឈ្មោះក្រៅត្រូវបានបង្កើតឡើងដោយប្រើពាក្យគន្លឹះ \`AS\`។

**វាក្យសម្ពន្ធសម្រាប់ជួរឈរ៖**
\`\`\`sql
SELECT column_name AS alias_name
FROM table_name;
\`\`\`

**វាក្យសម្ពន្ធសម្រាប់តារាង៖**
\`\`\`sql
SELECT o.OrderID, c.CustomerName
FROM Orders AS o, Customers AS c
WHERE o.CustomerID = c.CustomerID;
\`\`\`

> **អនុសាសន៍:** ឈ្មោះក្រៅសម្រាប់តារាងមានប្រយោជន៍ខ្លាំងណាស់នៅពេលសរសេរកូដភ្ជាប់តារាង (joins) ស្មុគស្មាញ ដែលតារាងច្រើនមានឈ្មោះជួរឈរដូចគ្នា។`
    },
    starterCode: `-- Provide temporary clean aliases for customer columns
SELECT CustomerName AS [Company Name], ContactName AS [Contact Person] FROM Customers;`
  },
  {
    id: "mysql-joins",
    title: { en: "MySQL Joins", km: "ការតភ្ជាប់តារាង Joins" },
    content: {
      en: `### Introduction to SQL JOIN
A \`JOIN\` clause is used to combine rows from two or more tables, based on a related column between them.

Let's look at the relationship between \`Orders\` and \`Customers\`:
- Each Order contains a \`CustomerID\`.
- This relates directly to the primary key \`CustomerID\` in the \`Customers\` table.

Different Types of Joins in SQL:
1. **(INNER) JOIN:** Returns records that have matching values in both tables.
2. **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
3. **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
4. **CROSS JOIN:** Returns all records from both tables (Cartesian product).

> **Tip:** Joins are the heart and soul of relational database queries. Mastering them is essential for backend engineering.`,
      km: `### សេចក្តីផ្តើមអំពី SQL JOIN
លក្ខខណ្ឌ \`JOIN\` ត្រូវបានប្រើដើម្បីរួមបញ្ចូលជួរដេកពីតារាងពីរ ឬច្រើន ដោយផ្អែកលើជួរឈរដែលពាក់ព័ន្ធគ្នារវាងតារាងទាំងនោះ។

ចូរក្រឡេកមើលទំនាក់ទំនងរវាង \`Orders\` និង \`Customers\`៖
- រាល់ការបញ្ជាទិញ (Order) នីមួយៗតែងតែមាន \`CustomerID\`។
- ជួរឈរនេះផ្សារភ្ជាប់ដោយផ្ទាល់ទៅនឹងសោចម្បង \`CustomerID\` នៅក្នុងតារាង \`Customers\`។

ប្រភេទផ្សេងៗនៃការ Join នៅក្នុង SQL៖
1. **(INNER) JOIN៖** បញ្ជូនមកវិញនូវកំណត់ត្រាដែលមានតម្លៃត្រូវគ្នានៅក្នុងតារាងទាំងពីរ។
2. **LEFT (OUTER) JOIN៖** បញ្ជូនមកវិញនូវរាល់កំណត់ត្រាទាំងអស់ពីតារាងខាងឆ្វេង និងកំណត់ត្រាដែលត្រូវគ្នាពីតារាងខាងស្តាំ។
3. **RIGHT (OUTER) JOIN៖** បញ្ជូនមកវិញនូវរាល់កំណត់ត្រាទាំងអស់ពីតារាងខាងស្តាំ និងកំណត់ត្រាដែលត្រូវគ្នាពីតារាងខាងឆ្វេង។
4. **CROSS JOIN៖** បញ្ជូនលទ្ធផលគុណខ្វែងរវាងរាល់កំណត់ត្រាទាំងអស់នៃតារាងទាំងពីរ (Cartesian product)។

> **អនុសាសន៍:** Joins គឺជាបេះដូង និងព្រលឹងនៃសំណួរស្វែងរកក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។ ការយល់ដឹងច្បាស់ពីវាគឺចាំបាច់ណាស់សម្រាប់អ្នកបង្កើតប្រព័ន្ធប្រមូលទិន្នន័យ (Backend)។`
    },
    starterCode: `-- Run a standard query to join Orders and Customers
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
  },
  {
    id: "mysql-inner-join",
    title: { en: "MySQL INNER JOIN", km: "ការប្រើ INNER JOIN" },
    content: {
      en: `### The INNER JOIN Keyword
The \`INNER JOIN\` keyword selects records that have matching values in both tables.

If a row in one table does not have a corresponding matching row in the other table, that row is omitted from the result set.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

You can join multiple tables together by stacking joins:
\`\`\`sql
SELECT o.OrderID, c.CustomerName, e.FirstName
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID;
\`\`\`

> **Note:** \`JOIN\` and \`INNER JOIN\` are identical in standard SQL.`,
      km: `### ពាក្យគន្លឹះ INNER JOIN
ពាក្យគន្លឹះ \`INNER JOIN\` ជ្រើសរើសតែរាល់កំណត់ត្រាណាដែលមានតម្លៃត្រូវគ្នានៅក្នុងតារាងទាំងពីរ (តារាងខាងឆ្វេង និងតារាងខាងស្តាំ)។

ប្រសិនបើជួរដេកនៅក្នុងតារាងមួយគ្មានតម្លៃត្រូវគ្នាជាមួយតារាងមួយទៀតទេ ជួរដេកនោះនឹងត្រូវដកចេញពីលទ្ធផល។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

អ្នកអាចភ្ជាប់តារាងច្រើនជាងពីរចូលគ្នាបានដោយដាក់តម្រៀបគ្នាបែបនេះ៖
\`\`\`sql
SELECT o.OrderID, c.CustomerName, e.FirstName
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID;
\`\`\`

> **សម្គាល់:** ពាក្យ \`JOIN\` និង \`INNER JOIN\` គឺដូចគ្នាទាំងស្រុងនៅក្នុងភាសា SQL ស្តង់ដារ។`
    },
    starterCode: `-- Join Orders, Customers, and Employees together
SELECT o.OrderID, c.CustomerName, e.FirstName || ' ' || e.LastName AS EmployeeName
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID;`
  },
  {
    id: "mysql-left-join",
    title: { en: "MySQL LEFT JOIN", km: "ការប្រើ LEFT JOIN" },
    content: {
      en: `### The LEFT JOIN Keyword
The \`LEFT JOIN\` keyword returns all records from the left table (table1), and the matched records from the right table (table2).

The result is \`NULL\` from the right side if there is no match.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

> **Note:** In some databases, \`LEFT JOIN\` is written as \`LEFT OUTER JOIN\`. They behave identically.`,
      km: `### ពាក្យគន្លឹះ LEFT JOIN
ពាក្យគន្លឹះ \`LEFT JOIN\` បញ្ជូនមកវិញនូវរាល់កំណត់ត្រាទាំងអស់ពីតារាងខាងឆ្វេង (table1) ទោះបីជាគ្មានទិន្នន័យត្រូវគ្នាក៏ដោយ និងកំណត់ត្រាដែលត្រូវគ្នាពីតារាងខាងស្តាំ (table2)។

ប្រសិនបើគ្មានទិន្នន័យត្រូវគ្នានៅខាងស្តាំទេ លទ្ធផលនឹងបង្ហាញជាតម្លៃ \`NULL\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

> **សម្គាល់:** នៅក្នុងមូលដ្ឋានទិន្នន័យមួយចំនួន \`LEFT JOIN\` ត្រូវបានគេសរសេរថា \`LEFT OUTER JOIN\`។ ពួកវាមានដំណើរការដូចគ្នាទាំងស្រុង។`
    },
    starterCode: `-- Get all customers and any orders they might have placed (some may have NULL orders)
SELECT c.CustomerName, o.OrderID, o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID;`
  }
];
