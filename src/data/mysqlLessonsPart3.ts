import { Lesson } from '../types';

export const mysqlLessonsPart3: Lesson[] = [
  {
    id: "mysql-right-join",
    title: { en: "MySQL RIGHT JOIN", km: "ការប្រើ RIGHT JOIN" },
    content: {
      en: `### The RIGHT JOIN Keyword
The \`RIGHT JOIN\` keyword returns all records from the right table (table2), and the matched records from the left table (table1).

The result is \`NULL\` from the left side if there is no match.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

> **Note:** In SQLite (our sandbox compiler), native \`RIGHT JOIN\` syntax is converted to an equivalent \`LEFT JOIN\` structure by swapping the table placement, as standard SQLite primarily supports inner and left joins. In full MySQL, \`RIGHT JOIN\` is fully supported natively.`,
      km: `### ពាក្យគន្លឹះ RIGHT JOIN
ពាក្យគន្លឹះ \`RIGHT JOIN\` បញ្ជូនមកវិញនូវរាល់កំណត់ត្រាទាំងអស់ពីតារាងខាងស្តាំ (table2) ទោះបីជាគ្មានទិន្នន័យត្រូវគ្នាក៏ដោយ និងកំណត់ត្រាដែលត្រូវគ្នាពីតារាងខាងឆ្វេង (table1)។

ប្រសិនបើគ្មានទិន្នន័យត្រូវគ្នានៅខាងឆ្វេងទេ លទ្ធផលនឹងបង្ហាញជាតម្លៃ \`NULL\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
\`\`\`

> **សម្គាល់:** នៅក្នុង SQLite (ម៉ាស៊ីនដំណើរការសាកល្បងរបស់យើង) វាក្យសម្ពន្ធ \`RIGHT JOIN\` ត្រូវបានគណនាដោយប្ដូរទីតាំងតារាងទៅជា \`LEFT JOIN\` វិញ ព្រោះ SQLite គាំទ្រតែប្រភេទ Inner និង Left Joins ប៉ុណ្ណោះ។ ចំណែកឯនៅក្នុង MySQL ពេញលេញ គឺវាគាំទ្រ \`RIGHT JOIN\` ដោយផ្ទាល់តែម្ដង។`
    },
    starterCode: `-- In SQLite, we can achieve RIGHT JOIN by placing Orders first, left-joining Customers
SELECT o.OrderID, c.CustomerName
FROM Orders o
LEFT JOIN Customers c ON o.CustomerID = c.CustomerID;`
  },
  {
    id: "mysql-cross-join",
    title: { en: "MySQL CROSS JOIN", km: "ការប្រើ CROSS JOIN" },
    content: {
      en: `### The CROSS JOIN Keyword
The \`CROSS JOIN\` keyword returns the Cartesian product of the two tables.

In other words, it returns all rows from the first table combined with all rows from the second table. This results in \`num_rows_table1 * num_rows_table2\` total records.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
\`\`\`

> **Warning:** Be cautious when using \`CROSS JOIN\` on tables with many records, as it can generate extremely large result sets that consume excessive memory.`,
      km: `### ពាក្យគន្លឹះ CROSS JOIN
ពាក្យគន្លឹះ \`CROSS JOIN\` បញ្ជូនត្រឡប់មកវិញនូវផលគុណខ្វែង (Cartesian product) នៃតារាងទាំងពីរ។

និយាយឱ្យងាយយល់ វាផ្សំរាល់គ្រប់ជួរដេកទាំងអស់នៃតារាងទី១ ជាមួយរាល់ជួរដេកទាំងអស់នៃតារាងទី២។ លទ្ធផលនឹងទទួលបានចំនួនជួរដេកសរុបស្មើនឹង \`ចំនួនជួរដេកតារាងទី១ * ចំនួនជួរដេកតារាងទី២\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
\`\`\`

> **ការព្រមាន:** ត្រូវមានការប្រុងប្រយ័ត្នខ្ពស់នៅពេលប្រើ \`CROSS JOIN\` លើតារាងដែលមានទិន្នន័យច្រើន ព្រោះវាអាចបង្កើតលទ្ធផលដ៏ធំសម្បើមដែលស៊ីអង្គចងចាំ (RAM) ច្រើន។`
    },
    starterCode: `-- Cross join Customers and Employees tables
SELECT c.CustomerName, e.FirstName AS EmployeeName
FROM Customers c
CROSS JOIN Employees e;`
  },
  {
    id: "mysql-self-join",
    title: { en: "MySQL Self Join", km: "ការភ្ជាប់ខ្លួនឯង Self Join" },
    content: {
      en: `### SQL Self Join
A self join is a regular join, but the table is joined with itself.

This is extremely useful when a table contains hierarchical relationships, such as employees and their managers, or products that relate to other items in the same table.

**Syntax:**
\`\`\`sql
SELECT a.column_name, b.column_name...
FROM table_name AS a, table_name AS b
WHERE a.common_column = b.common_column;
\`\`\`

Using aliases (\`a\` and \`b\`) is mandatory to distinguish the two copies of the same table.

> **Tip:** Treat the aliases as if they are two separate, distinct tables.`,
      km: `### ការតភ្ជាប់តារាងនឹងខ្លួនឯង (Self Join)
Self Join គឺជាការភ្ជាប់តារាងធម្មតា ប៉ុន្តែជាការភ្ជាប់តារាងនោះទៅនឹងខ្លួនវាផ្ទាល់។

វាមានប្រយោជន៍ខ្លាំងណាស់នៅពេលដែលតារាងមួយមានទំនាក់ទំនងលំដាប់ថ្នាក់ ដូចជាបុគ្គលិក និងអ្នកគ្រប់គ្រងរបស់ពួកគេ ឬផលិតផលដែលទាក់ទងនឹងទំនិញផ្សេងទៀតនៅក្នុងតារាងដដែល។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT a.column_name, b.column_name...
FROM table_name AS a, table_name AS b
WHERE a.common_column = b.common_column;
\`\`\`

ការប្រើប្រាស់ឈ្មោះក្រៅ (\`a\` និង \`b\`) គឺដាច់ខាតត្រូវតែសរសេរដើម្បីបែងចែកតារាងទាំងពីរចេញពីគ្នា។

> **អនុសាសន៍:** ចាត់ទុកឈ្មោះក្រៅទាំងពីរនោះ ហាក់បីដូចជាតារាងពីរផ្សេងគ្នាអញ្ចឹង។`
    },
    starterCode: `-- Find customers from the same city by self joining
SELECT A.CustomerName AS Customer1, B.CustomerName AS Customer2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City;`
  },
  {
    id: "mysql-union",
    title: { en: "MySQL UNION", km: "ការរួមបញ្ចូល UNION" },
    content: {
      en: `### The UNION Operator
The \`UNION\` operator is used to combine the result-set of two or more \`SELECT\` statements.

Rules for UNION:
- Every \`SELECT\` statement within UNION must have the same number of columns.
- The columns must also have similar data types.
- The columns in every \`SELECT\` statement must be in the same order.

**Syntax:**
\`\`\`sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
\`\`\`

> **Note:** By default, \`UNION\` selects distinct values. To allow duplicate values, use \`UNION ALL\`.`,
      km: `### ប្រមាណវិធី UNION
ប្រមាណវិធី \`UNION\` ត្រូវបានប្រើដើម្បីរួមបញ្ចូលលទ្ធផលចេញពីប្រយោគបញ្ជា \`SELECT\` ពីរឬច្រើនបញ្ចូលគ្នាជាតារាងតែមួយ។

ច្បាប់សម្រាប់ UNION៖
- រាល់ប្រយោគបញ្ជា \`SELECT\` ទាំងអស់ត្រូវតែមានចំនួនជួរឈរស្មើគ្នា។
- ជួរឈរទាំងនោះត្រូវតែមានប្រភេទទិន្នន័យស្រដៀងគ្នា។
- ជួរឈរនៅក្នុងរាល់ប្រយោគបញ្ជា \`SELECT\` ត្រូវតែស្ថិតនៅក្នុងលំដាប់លំដោយដូចគ្នា។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
\`\`\`

> **សម្គាល់:** ជាលំនាំដើម \`UNION\` ជ្រើសរើសតែតម្លៃខុសៗគ្នា (Distinct) ប៉ុណ្ណោះ។ បើចង់បង្ហាញតម្លៃស្ទួនគ្នាផង សូមប្រើប្រាស់ \`UNION ALL\`។`
    },
    starterCode: `-- Get cities of both customers and employees combined
SELECT City FROM Customers
UNION
SELECT 'N/A' FROM Employees;`
  },
  {
    id: "mysql-group-by",
    title: { en: "MySQL GROUP BY", km: "ការបែងក្រុម GROUP BY" },
    content: {
      en: `### The GROUP BY Statement
The \`GROUP BY\` statement groups rows that have the same values into summary rows.

It is often used with aggregate functions (\`COUNT()\`, \`MAX()\`, \`MIN()\`, \`SUM()\`, \`AVG()\`) to group the result-set by one or more columns.

**Syntax:**
\`\`\`sql
SELECT column_name(s), AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
\`\`\`

> **Tip:** Any column in the SELECT list that is not part of an aggregate function **MUST** be included in the GROUP BY clause.`,
      km: `### លក្ខខណ្ឌ GROUP BY
លក្ខខណ្ឌ \`GROUP BY\` ក្រុមជួរដេកដែលមានតម្លៃដូចគ្នាទៅជាជួរដេកសរុប។

វាត្រូវបានប្រើជាញឹកញាប់រួមគ្នាជាមួយអនុគមន៍បូកសរុប (\`COUNT()\`, \`MAX()\`, \`MIN()\`, \`SUM()\`, \`AVG()\`) ដើម្បីបែងចែកលទ្ធផលទៅតាមជួរឈរមួយ ឬច្រើន។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s), AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
\`\`\`

> **អនុសាសន៍:** រាល់ជួរឈរទាំងអស់នៅក្នុងផ្នែក SELECT ដែលមិនមែនជាអនុគមន៍បូកសរុប **ត្រូវតែ** រាប់បញ្ចូលក្នុងលក្ខខណ្ឌ GROUP BY ជានិច្ច។`
    },
    starterCode: `-- Group products by CategoryID and show the count and average price in each
SELECT CategoryID, COUNT(*) AS ProductCount, AVG(Price) AS AvgPrice
FROM Products
GROUP BY CategoryID;`
  },
  {
    id: "mysql-having",
    title: { en: "MySQL HAVING", km: "លក្ខខណ្ឌ HAVING" },
    content: {
      en: `### The HAVING Clause
The \`HAVING\` clause was added to SQL because the \`WHERE\` keyword cannot be used with aggregate functions.

\`HAVING\` acts as a filter applied *after* the grouping phase, whereas \`WHERE\` filters rows *before* they are grouped.

**Syntax:**
\`\`\`sql
SELECT column_name(s), AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name(s)
HAVING AGGREGATE_FUNCTION(column_name) condition;
\`\`\`

> **Tip:** First filter raw data using \`WHERE\`, then aggregate and group using \`GROUP BY\`, and finally filter grouped aggregates using \`HAVING\`.`,
      km: `### លក្ខខណ្ឌ HAVING
លក្ខខណ្ឌ \`HAVING\` ត្រូវបានបន្ថែមទៅក្នុងភាសា SQL ព្រោះពាក្យគន្លឹះ \`WHERE\` មិនអាចប្រើប្រាស់ជាមួយអនុគមន៍បូកសរុប (Aggregate functions) បានឡើយ។

\`HAVING\` ដើរតួជាតម្រងចម្រោះទិន្នន័យ *ក្រោយពេល* ក្រុមត្រូវបានបែងចែក ខណៈពេលដែល \`WHERE\` ច្រោះទិន្នន័យ *មុនពេល* ក្រុមត្រូវបានបែងចែក។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s), AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name(s)
HAVING AGGREGATE_FUNCTION(column_name) condition;
\`\`\`

> **អនុសាសន៍:** ចូរច្រោះទិន្នន័យដំបូងដោយប្រើ \`WHERE\` បន្ទាប់មកបែងចែកក្រុមដោយប្រើ \`GROUP BY\` និងចុងក្រោយច្រោះលទ្ធផលក្រុមដែលចង់បានដោយប្រើ \`HAVING\`។`
    },
    starterCode: `-- Show product categories that have an average price greater than 15.00
SELECT CategoryID, AVG(Price) AS AvgPrice
FROM Products
GROUP BY CategoryID
HAVING AVG(Price) > 15.00;`
  },
  {
    id: "mysql-exists",
    title: { en: "MySQL EXISTS", km: "ប្រមាណវិធី EXISTS" },
    content: {
      en: `### The EXISTS Operator
The \`EXISTS\` operator is used to test for the existence of any record in a subquery.

The \`EXISTS\` operator returns TRUE if the subquery returns one or more records.

**Syntax:**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE EXISTS (
  SELECT column_name FROM table_name WHERE condition
);
\`\`\`

> **Note:** EXISTS stops searching as soon as the first matching record is found, which often makes it more performant than COUNT or IN operations.`,
      km: `### ប្រមាណវិធី EXISTS
ប្រមាណវិធី \`EXISTS\` ត្រូវបានប្រើប្រាស់ដើម្បីពិនិត្យរកមើលអត្ថិភាព (ភាពមាន) នៃកំណត់ត្រាណាមួយនៅក្នុងសំណួររង (subquery)។

ប្រមាណវិធី \`EXISTS\` នឹងបញ្ជូនតម្លៃ TRUE ប្រសិនបើសំណួររងបញ្ជូនមកវិញនូវកំណត់ត្រាចាប់ពីមួយឡើងទៅ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name(s)
FROM table_name
WHERE EXISTS (
  SELECT column_name FROM table_name WHERE condition
);
\`\`\`

> **សម្គាល់:** EXISTS នឹងបញ្ឈប់ការស្វែងរកភ្លាមៗនៅពេលរកឃើញកំណត់ត្រាត្រូវគ្នាដំបូងគេ ដែលធ្វើឱ្យវាដំណើរការលឿនជាងការប្រើប្រាស់ COUNT ឬ IN។`
    },
    starterCode: `-- Find suppliers/products if any product costs less than 15.00
SELECT * FROM Products p
WHERE EXISTS (
  SELECT 1 FROM Customers c WHERE c.CustomerID = p.SupplierID
);`
  },
  {
    id: "mysql-any-all",
    title: { en: "MySQL ANY & ALL", km: "ប្រមាណវិធី ANY & ALL" },
    content: {
      en: `### The ANY and ALL Operators
The \`ANY\` and \`ALL\` operators allow you to perform a comparison between a single column value and a range of other values.

- \`ANY\` returns TRUE if **any** of the subquery values meet the condition.
- \`ALL\` returns TRUE if **all** of the subquery values meet the condition.

**Syntax:**
\`\`\`sql
SELECT columns FROM table WHERE column operator ANY (subquery);
SELECT columns FROM table WHERE column operator ALL (subquery);
\`\`\`

> **Note:** SQLite primarily uses comparison predicates (\`IN\`, \`EXISTS\`, \`MAX\`, \`MIN\`) instead of explicit \`ANY\`/\`ALL\` syntax, which are fully standardized in MySQL and PostgreSQL.`,
      km: `### ប្រមាណវិធី ANY និង ALL
ប្រមាណវិធី \`ANY\` និង \`ALL\` អនុញ្ញាតឱ្យអ្នកធ្វើការប្រៀបធៀបរវាងតម្លៃជួរឈរតែមួយ ទៅនឹងសំណុំតម្លៃជាច្រើនផ្សេងទៀតដែលបានមកពីសំណួររង។

- \`ANY\` បញ្ជូនតម្លៃ TRUE ប្រសិនបើមានតម្លៃ **ណាមួយ** នៃសំណួររងបំពេញតាមលក្ខខណ្ឌ។
- \`ALL\` បញ្ជូនតម្លៃ TRUE លុះត្រាតែរាល់តម្លៃ **ទាំងអស់** នៃសំណួររងបំពេញតាមលក្ខខណ្ឌ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT columns FROM table WHERE column operator ANY (subquery);
SELECT columns FROM table WHERE column operator ALL (subquery);
\`\`\`

> **សម្គាល់:** SQLite ប្រើប្រាស់ប្រមាណវិធីប្រៀបធៀបជំនួសដូចជា (\`IN\`, \`EXISTS\`, \`MAX\`, \`MIN\`) ជំនួសឱ្យពាក្យគន្លឹះ \`ANY\`/\`ALL\` ផ្ទាល់ ខណៈដែលពួកវាត្រូវបានគាំទ្រជាស្តង់ដារពេញលេញក្នុង MySQL និង PostgreSQL។`
    },
    starterCode: `-- Standard SQL simulation finding products cheaper than the maximum price using subqueries
SELECT ProductName, Price FROM Products
WHERE Price < (SELECT MAX(Price) FROM Products);`
  },
  {
    id: "mysql-insert-select",
    title: { en: "MySQL INSERT INTO SELECT", km: "ការបញ្ចូលតាម SELECT" },
    content: {
      en: `### The INSERT INTO SELECT Statement
The \`INSERT INTO SELECT\` statement copies data from one table and inserts it into another existing table.

- It requires that data types in source and target tables match.
- Existing records in the target table are unaffected.

**Syntax:**
To copy all columns from one table to another:
\`\`\`sql
INSERT INTO table2
SELECT * FROM table1
WHERE condition;
\`\`\`

To copy only some columns:
\`\`\`sql
INSERT INTO table2 (col1, col2...)
SELECT col1, col2... FROM table1;
\`\`\`

> **Warning:** Make sure the destination table exists before running the INSERT INTO SELECT command.`,
      km: `### ប្រយោគបញ្ជា INSERT INTO SELECT
ប្រយោគបញ្ជា \`INSERT INTO SELECT\` ប្រើសម្រាប់ចម្លងទិន្នន័យពីតារាងមួយ រួចបញ្ចូលវាទៅក្នុងតារាងមួយទៀតដែលមានស្រាប់។

- វាទាមទារឱ្យប្រភេទទិន្នន័យនៅក្នុងតារាងប្រភព និងតារាងគោលដៅត្រូវគ្នាជាដាច់ខាត។
- កំណត់ត្រាដែលមានស្រាប់នៅក្នុងតារាងគោលដៅនឹងមិនរងផលប៉ះពាល់ឡើយ។

**វាក្យសម្ពន្ធ៖**
ដើម្បីចម្លងគ្រប់ជួរឈរទាំងអស់ពីតារាងមួយទៅតារាងមួយទៀត៖
\`\`\`sql
INSERT INTO table2
SELECT * FROM table1
WHERE condition;
\`\`\`

ដើម្បីចម្លងតែជួរឈរមួយចំនួន៖
\`\`\`sql
INSERT INTO table2 (col1, col2...)
SELECT col1, col2... FROM table1;
\`\`\`

> **ការព្រមាន:** ត្រូវប្រាកដថាតារាងគោលដៅត្រូវបានបង្កើតរួចរាល់ហើយ មុនពេលដំណើរការបញ្ជា INSERT INTO SELECT។`
    },
    starterCode: `-- Create a temp table and copy customer data into it
CREATE TABLE TempCustomers (Name TEXT, Country TEXT);

INSERT INTO TempCustomers (Name, Country)
SELECT CustomerName, Country FROM Customers;

-- View our temp table
SELECT * FROM TempCustomers;`
  },
  {
    id: "mysql-case",
    title: { en: "MySQL CASE", km: "លក្ខខណ្ឌវិនិច្ឆ័យ CASE" },
    content: {
      en: `### The CASE Statement
The \`CASE\` statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement).

Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the \`ELSE\` clause.

If there is no \`ELSE\` part and no conditions are true, it returns \`NULL\`.

**Syntax:**
\`\`\`sql
SELECT column_name,
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE resultN
END AS alias_name
FROM table_name;
\`\`\`

> **Tip:** CASE statements are perfect for bucketing numeric data into human-readable label ranges (e.g. Price -> Cheap, Premium).`,
      km: `### ប្រយោគបញ្ជា CASE
ប្រយោគបញ្ជា \`CASE\` ដំណើរការកាត់លក្ខខណ្ឌជាបន្តបន្ទាប់ និងបញ្ជូនតម្លៃមកវិញនៅពេលដែលលក្ខខណ្ឌដំបូងត្រូវបានបំពេញ (ដូចជាលក្ខខណ្ឌ If-Then-Else)។

នៅពេលលក្ខខណ្ឌណាមួយពិត វានឹងបញ្ឈប់ការផ្ទៀងផ្ទាត់ និងបង្ហាញលទ្ធផលនោះភ្លាម។ ប្រសិនបើគ្មានលក្ខខណ្ឌណាមួយពិត វានឹងបង្ហាញតម្លៃក្នុងផ្នែក \`ELSE\`។

ប្រសិនបើគ្មានផ្នែក \`ELSE\` ហើយគ្មានលក្ខខណ្ឌណាមួយពិត វានឹងបង្ហាញតម្លៃ \`NULL\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column_name,
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE resultN
END AS alias_name
FROM table_name;
\`\`\`

> **អនុសាសន៍:** ប្រយោគ CASE គឺល្អឥតខ្ចោះសម្រាប់ការបែងចែកក្រុមតម្លៃលេខ ទៅជាស្លាកអត្ថបទដែលងាយយល់ (ឧទាហរណ៍ តម្លៃទំនិញ -> ធូរថ្លៃ, ថ្លៃបង្គួរ)។`
    },
    starterCode: `-- Use CASE to categorize product prices
SELECT ProductName, Price,
CASE
    WHEN Price < 15.00 THEN 'Budget Friendly'
    WHEN Price BETWEEN 15.00 AND 20.00 THEN 'Standard Price'
    ELSE 'Premium product'
END AS PriceCategory
FROM Products;`
  },
  {
    id: "mysql-null-functions",
    title: { en: "MySQL Null Functions", km: "អនុគមន៍ដោះស្រាយ NULL" },
    content: {
      en: `### Handling NULL values (IFNULL, COALESCE)
When performing arithmetic or displaying values, a \`NULL\` value can break the calculation or look unprofessional in output.

MySQL offers functions to handle NULLs:
1. **\`IFNULL()\`** / **\`COALESCE()\`**: Returns a specified alternative value if the expression is NULL.
   \`\`\`sql
   SELECT ProductName, Price * (1 + IFNULL(Tax, 0)) FROM Products;
   \`\`\`
2. **\`COALESCE()\`**: Returns the first non-NULL value in a list of arguments.
   \`\`\`sql
   SELECT CustomerName, COALESCE(PostalCode, 'No Code Provided') FROM Customers;
   \`\`\`

> **Note:** In our SQLite environment, both \`IFNULL()\` and \`COALESCE()\` are fully supported and work identically to MySQL's built-in functions.`,
      km: `### អនុគមន៍ដោះស្រាយតម្លៃទទេ (IFNULL, COALESCE)
នៅពេលគណនាលេខ ឬបង្ហាញទិន្នន័យ តម្លៃ \`NULL\` អាចធ្វើឱ្យការគណនាមានកំហុស ឬបង្ហាញលទ្ធផលមិនស្អាត។

MySQL ផ្តល់នូវអនុគមន៍ដើម្បីដោះស្រាយបញ្ហានេះ៖
1. **\`IFNULL()\`** / **\`COALESCE()\`**៖ ជំនួសតម្លៃជំនួសជាក់លាក់មួយ ប្រសិនបើតម្លៃជួរឈរមានតម្លៃ NULL។
   \`\`\`sql
   SELECT ProductName, Price * (1 + IFNULL(Tax, 0)) FROM Products;
   \`\`\`
2. **\`COALESCE()\`**៖ បញ្ជូនតម្លៃដំបូងដែលមិនមែនជា NULL ចេញពីបញ្ជីអាគុយម៉ង់។
   \`\`\`sql
   SELECT CustomerName, COALESCE(PostalCode, 'No Code Provided') FROM Customers;
   \`\`\`

> **សម្គាល់:** នៅក្នុងបរិស្ថាន SQLite របស់យើង ទាំង \`IFNULL()\` និង \`COALESCE()\` ត្រូវបានគាំទ្រពេញលេញ និងដំណើរការដូចគ្នាទៅនឹង MySQL ដែរ។`
    },
    starterCode: `-- Select customer names and replace postal codes if they are NULL (none are NULL in our seeds, let's test)
SELECT CustomerName, COALESCE(PostalCode, 'No Code') AS ZipCode FROM Customers;`
  },
  {
    id: "mysql-comments",
    title: { en: "MySQL Comments", km: "ការសរសេរពន្យល់ Comments" },
    content: {
      en: `### SQL Comments
Comments are used to explain sections of SQL statements, or to prevent execution of SQL statements while testing.

Types of Comments:
1. **Single-line Comments:**
   Starts with double hyphens (\`--\`). Any text between \`--\` and the end of the line will be ignored.
   \`\`\`sql
   -- This is a comment
   SELECT * FROM Customers;
   \`\`\`
2. **Inline/Single-line Hash Comments:**
   MySQL also supports hash (\`#\`) for single-line comments:
   \`\`\`sql
   # This is another comment
   SELECT * FROM Customers;
   \`\`\`
3. **Multi-line Comments:**
   Starts with \`/*\` and ends with \`*/\`. Any text between will be ignored.
   \`\`\`sql
   /* This is a
   multi-line comment */
   SELECT * FROM Customers;
   \`\`\`

> **Tip:** Use comments in your complex queries to explain logical steps, especially in nested subqueries and joins.`,
      km: `### ការសរសេរអត្ថបទពន្យល់ Comments
Comments ត្រូវបានប្រើដើម្បីពន្យល់កូដផ្នែកផ្សេងៗនៃសំណួរ SQL ឬការពារការរត់ផ្នែកខ្លះនៃកូដនៅពេលកំពុងធ្វើតេស្តសាកល្បង។

ប្រភេទនៃ Comments៖
1. **សរសេរមួយជួរ (Single-line Comments)៖**
   ចាប់ផ្តើមដោយសញ្ញាដកពីរ (\`--\`)។ រាល់អត្ថបទទាំងអស់ចាប់ពីសញ្ញា \`--\` ដល់ចុងជួរ នឹងត្រូវបានរំលងមិនដំណើរការឡើយ។
   \`\`\`sql
   -- នេះគឺជា Comment
   SELECT * FROM Customers;
   \`\`\`
2. **សរសេរមួយជួរដោយប្រើទ្រង់ទ្រាយ Hash៖**
   MySQL គាំទ្រសញ្ញាទ្រុងជ្រូក (\`#\`) សម្រាប់ Comment មួយជួរផងដែរ៖
   \`\`\`sql
   # នេះក៏ជា Comment ដែរ
   SELECT * FROM Customers;
   \`\`\`
3. **សរសេរច្រើនជួរ (Multi-line Comments)៖**
   ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ រាល់អត្ថបទទាំងអស់ដែលស្ថិតនៅចន្លោះសញ្ញានេះ នឹងត្រូវរំលងចោល។
   \`\`\`sql
   /* នេះគឺជា Comment
   ដែលសរសេរច្រើនជួរ */
   SELECT * FROM Customers;
   \`\`\`

> **អនុសាសន៍:** គួរប្រើប្រាស់ Comments ក្នុងសំណួរស្មុគស្មាញដើម្បីពន្យល់ពីដំណាក់កាលនីមួយៗ ជាពិសេសនៅក្នុងសំណួររង (subqueries) និងការតភ្ជាប់តារាង (joins)។`
    },
    starterCode: `-- This is a single line comment
/* This is a
multi-line comment block */
SELECT * FROM Customers; -- inline comment`
  },
  {
    id: "mysql-operators",
    title: { en: "MySQL Operators", km: "ប្រមាណវិធីគណនា Operators" },
    content: {
      en: `### SQL Operators
Operators are reserved words or characters used primarily in an SQL statement's \`WHERE\` clause to perform operations, such as comparisons and arithmetic calculations.

Operator Groups:
1. **Arithmetic Operators:** \`+\` (Add), \`-\` (Subtract), \`*\` (Multiply), \`/\` (Divide), \`%\` (Modulo).
2. **Comparison Operators:** \`=\`, \`<>\` or \`!=\` (Not equal), \`>\`, \`<\`, \`>=\`, \`<=\`.
3. **Logical Operators:** \`AND\`, \`OR\`, \`NOT\`, \`BETWEEN\`, \`IN\`, \`LIKE\`, \`EXISTS\`, \`ALL\`, \`ANY\`.

> **Note:** Bitwise operators (\`&\`, \`|\`, \`^\`) are also supported in MySQL for binary bit manipulations.`,
      km: `### ប្រមាណវិធីគណនា SQL Operators
Operators គឺជាពាក្យគន្លឹះ ឬនិមិត្តសញ្ញាពិសេសដែលប្រើប្រាស់នៅក្នុងឃ្លា \`WHERE\` នៃសំណួរ SQL ដើម្បីអនុវត្តប្រតិបត្តិការប្រៀបធៀប និងគណនាលេខ។

ក្រុមប្រមាណវិធីសំខាន់ៗ៖
1. **ប្រមាណវិធីគណិតវិទ្យា (Arithmetic)៖** \`+\` (បូក), \`-\` (ដក), \`*\` (គុណ), \`/\` (ចែក), \`%\` (ផលសំណល់)។
2. **ប្រមាណវិធីប្រៀបធៀប (Comparison)៖** \`=\`, \`<>\` ឬ \`!=\` (មិនស្មើ), \`>\`, \`<\`, \`>=\`, \`<=\`។
3. **ប្រមាណវិធីតក្កវិទ្យា (Logical)៖** \`AND\`, \`OR\`, \`NOT\`, \`BETWEEN\`, \`IN\`, \`LIKE\`, \`EXISTS\`, \`ALL\`, \`ANY\`។

> **សម្គាល់:** ក្រុមប្រមាណវិធីសម្រាប់ប៊ីត (Bitwise operators) ដូចជា (\`&\`, \`|\`, \`^\`) ក៏ត្រូវបានគាំទ្រក្នុង MySQL សម្រាប់ការចាត់ចែងទិន្នន័យកម្រិតប៊ីតផងដែរ។`
    },
    starterCode: `-- Select products with their prices adjusted with operators
SELECT ProductName, Price, Price + 5.00 AS MarkUpPrice FROM Products;`
  },
  {
    id: "mysql-create-db",
    title: { en: "MySQL Create DB", km: "ការបង្កើត DB ថ្មី" },
    content: {
      en: `### The CREATE DATABASE Statement
The \`CREATE DATABASE\` statement is used to create a new SQL database.

**Syntax:**
\`\`\`sql
CREATE DATABASE database_name;
\`\`\`

Once created, you can tell the database server to start using this database context by writing:
\`\`\`sql
USE database_name;
\`\`\`

> **Warning:** You must have administrative/root privileges on the MySQL server to create databases. database names must be unique.`,
      km: `### ឃ្លាបញ្ជា CREATE DATABASE
ប្រយោគបញ្ជា \`CREATE DATABASE\` ត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតមូលដ្ឋានទិន្នន័យ (Database) ថ្មីស្រឡាងមួយ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE DATABASE database_name;
\`\`\`

នៅពេលបង្កើតរួចរាល់ អ្នកត្រូវបញ្ជាឱ្យម៉ាស៊ីនបម្រើចាប់ផ្តើមប្រើប្រាស់មូលដ្ឋានទិន្នន័យនេះដោយសរសេរ៖
\`\`\`sql
USE database_name;
\`\`\`

> **ការព្រមាន:** អ្នកត្រូវតែមានសិទ្ធិជាអ្នកគ្រប់គ្រង (Admin/Root privileges) នៅលើម៉ាស៊ីនបម្រើ MySQL ដើម្បីអាចបង្កើត Database បាន។ ឈ្មោះរបស់ Database មិនត្រូវជាន់គ្នាឡើយ។`
    },
    starterCode: `-- Create a database called 'sabaycode_db'
-- (In our SQLite sandbox, this syntax is simulated successfully)
CREATE TABLE dummy_db (status TEXT);
INSERT INTO dummy_db VALUES ('Database sabaycode_db created successfully!');
SELECT * FROM dummy_db;`
  },
  {
    id: "mysql-drop-db",
    title: { en: "MySQL Drop DB", km: "ការលុប DB ចោល" },
    content: {
      en: `### The DROP DATABASE Statement
The \`DROP DATABASE\` statement is used to delete an existing SQL database.

**Syntax:**
\`\`\`sql
DROP DATABASE database_name;
\`\`\`

> **Warning:** Be extremely careful when dropping a database! Deleting a database will result in the loss of **ALL** tables, relationships, and data stored within it permanently.`,
      km: `### ឃ្លាបញ្ជា DROP DATABASE
ប្រយោគបញ្ជា \`DROP DATABASE\` ត្រូវបានប្រើប្រាស់ដើម្បីលុបមូលដ្ឋានទិន្នន័យ (Database) ដែលមានស្រាប់ចោលទាំងស្រុង។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
DROP DATABASE database_name;
\`\`\`

> **ការព្រមាន:** ត្រូវមានការប្រុងប្រយ័ត្នខ្ពស់បំផុតនៅពេលលុប Database! ការលុបវាចោលនឹងបណ្តាលឱ្យបាត់បង់រាល់តារាង (Tables) ទំនាក់ទំនង និងទិន្នន័យទាំងអស់ដែលផ្ទុកនៅក្នុងនោះជាអចិន្ត្រៃយ៍។`
    },
    starterCode: `-- Simulate dropping database safely
CREATE TABLE dummy_drop (msg TEXT);
INSERT INTO dummy_drop VALUES ('Database dropped successfully. All data lost.');
SELECT * FROM dummy_drop;`
  }
];
