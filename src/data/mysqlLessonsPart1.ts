import { Lesson } from '../types';

export const mysqlLessonsPart1: Lesson[] = [
  {
    id: "mysql-home",
    title: { en: "MySQL Home", km: "ទំព័រដើម MySQL" },
    content: {
      en: `### Welcome to MySQL Course
MySQL is the world's most popular open-source Relational Database Management System (RDBMS). It is extremely fast, reliable, and widely used for web and enterprise software development.

In this course, you will learn to manage databases, write clean SQL queries, design database schemas, and master table joins, constraints, and views.

Our integrated playground lets you execute actual queries against a pre-seeded relational database (Customers, Orders, Employees, and Products tables)!

> **Tip:** Click "Run Code" to execute the SQL query on the right side. You will see real-time table results in the console panel!`,
      km: `### ស្វាគមន៍មកកាន់វគ្គសិក្សា MySQL
MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងប្រភពបើកចំហ (RDBMS) ដែលពេញនិយមបំផុតនៅលើពិភពលោក។ វាមានល្បឿនលឿន គួរឱ្យទុកចិត្ត និងត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ និងកម្មវិធីសហគ្រាស។

នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ សរសេរសំណួរ SQL ឱ្យមានរបៀបរៀបរយ រចនាប្លង់មូលដ្ឋានទិន្នន័យ និងស្ទាត់ជំនាញលើការភ្ជាប់តារាង (table joins) ការកំណត់លក្ខខណ្ឌ (constraints) និងទិដ្ឋភាព (views)។

ប្រអប់សាកល្បងរបស់យើងអនុញ្ញាតឱ្យអ្នកដំណើរការសំណួរពិតប្រាកដប្រឆាំងនឹងតារាងគំរូ (Customers, Orders, Employees, និង Products)!

> **អនុសាសន៍:** ចុច "Run Code" ដើម្បីដំណើរការសំណួរ SQL នៅខាងស្តាំ។ អ្នកនឹងឃើញលទ្ធផលតារាងភ្លាមៗនៅក្នុងផ្ទាំងបញ្ជា!`
    },
    starterCode: `-- Welcome to MySQL! Let's select all customer records to start.
SELECT * FROM Customers;`
  },
  {
    id: "mysql-intro",
    title: { en: "MySQL Intro", km: "សេចក្តីផ្តើមអំពី MySQL" },
    content: {
      en: `### What is MySQL?
MySQL is a Relational Database Management System (RDBMS) developed by Oracle Corporation.
- It stores data in **tables** consisting of columns and rows.
- It uses **SQL** (Structured Query Language) to interact with data.
- It runs on multiple platforms (Linux, Windows, macOS).

MySQL is commonly used with languages like PHP, Python, Java, and Node.js to create dynamic backends.

> **Note:** Databases are essential because they persist application data securely, even when servers restart.`,
      km: `### តើ MySQL ជាអ្វី?
MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (RDBMS) ដែលបង្កើតឡើងដោយសាជីវកម្ម Oracle។
- វាលាក់ទុកទិន្នន័យក្នុង **តារាង (Tables)** ដែលមានជួរឈរ (Columns) និងជួរដេក (Rows)។
- វាប្រើប្រាស់ភាសា **SQL** (Structured Query Language) ដើម្បីធ្វើអន្តរកម្មជាមួយទិន្នន័យ។
- វាដំណើរការលើប្រព័ន្ធប្រតិបត្តិការជាច្រើន (Linux, Windows, macOS)។

MySQL ត្រូវបានប្រើប្រាស់ជាទូទៅជាមួយភាសាដូចជា PHP, Python, Java, និង Node.js ដើម្បីបង្កើតប្រព័ន្ធគ្រប់គ្រងទិន្នន័យដ៏រឹងមាំ។

> **សម្គាល់:** មូលដ្ឋានទិន្នន័យមានសារៈសំខាន់ណាស់ ព្រោះវាជួយរក្សាទុកទិន្នន័យកម្មវិធីប្រកបដោយសុវត្ថិភាព ទោះបីជាម៉ាស៊ីនបម្រើត្រូវបានបិទបើកឡើងវិញក៏ដោយ។`
    },
    starterCode: `-- Select the list of all employees in our sample database
SELECT FirstName, LastName, BirthDate FROM Employees;`
  },
  {
    id: "mysql-rdbms",
    title: { en: "MySQL RDBMS", km: "ស្វែងយល់អំពី RDBMS" },
    content: {
      en: `### Relational Database Management System (RDBMS)
RDBMS stands for **Relational Database Management System**. It is the software foundation for SQL-based databases.

Key RDBMS Concepts:
1. **Table:** A collection of related data entries structured in rows and columns.
2. **Field/Column:** A vertical entity containing specific information about the records.
3. **Record/Row:** A horizontal entry in a table representing a single item.
4. **Primary Key:** A unique identifier for each record in a table.

MySQL enforces relationship rules like Foreign Keys to link tables together safely.

> **Tip:** In a relational database, data redundancy is minimized by splitting data into multiple specialized tables and linking them using relationships.`,
      km: `### ប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (RDBMS)
RDBMS មកពីពាក្យថា **Relational Database Management System**។ វាគឺជាគ្រឹះកម្មវិធីសម្រាប់មូលដ្ឋានទិន្នន័យដែលផ្អែកលើភាសា SQL។

គោលគំនិតសំខាន់ៗនៃ RDBMS៖
1. **តារាង (Table)៖** សំណុំទិន្នន័យពាក់ព័ន្ធដែលត្រូវបានរៀបចំជាជួរដេក និងជួរឈរ។
2. **ប្រអប់/ជួរឈរ (Column)៖** អង្គភាពបញ្ឈរដែលមានព័ត៌មានជាក់លាក់អំពីកំណត់ត្រា។
3. **កំណត់ត្រា/ជួរដេក (Row)៖** ធាតុផ្ដេកនៅក្នុងតារាងតំណាងឱ្យធាតុតែមួយ។
4. **សោចម្បង (Primary Key)៖** លេខសម្គាល់តែមួយគត់សម្រាប់កំណត់ត្រានីមួយៗនៅក្នុងតារាង។

MySQL អនុវត្តច្បាប់ទំនាក់ទំនងដូចជា Foreign Keys ដើម្បីភ្ជាប់តារាងជាមួយគ្នាដោយសុវត្ថិភាព។

> **អនុសាសន៍:** នៅក្នុងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង ការស្ទួនគ្នានៃទិន្នន័យត្រូវបានកាត់បន្ថយដោយបំបែកទិន្នន័យទៅជាតារាងឯកទេសជាច្រើន និងភ្ជាប់ពួកវាដោយប្រើប្រាស់ទំនាក់ទំនង។`
    },
    starterCode: `-- Run a query to view all products and their unit prices
SELECT ProductName, Price FROM Products;`
  },
  {
    id: "mysql-sql",
    title: { en: "MySQL SQL", km: "ភាសា SQL ក្នុង MySQL" },
    content: {
      en: `### What is SQL?
SQL stands for **Structured Query Language**. It is the standard language designed for managing data in an RDBMS.

Most common SQL commands are:
- \`SELECT\` - Extracts data from a database
- \`UPDATE\` - Updates data in a database
- \`DELETE\` - Deletes data from a database
- \`INSERT INTO\` - Inserts new data into a database
- \`CREATE DATABASE\` - Creates a new database
- \`ALTER DATABASE\` - Modifies a database
- \`CREATE TABLE\` - Creates a new table
- \`ALTER TABLE\` - Modifies a table
- \`DROP TABLE\` - Deletes a table

> **Note:** SQL keywords are **NOT** case-sensitive: \`select\` is the same as \`SELECT\`. However, writing keywords in UPPERCASE is standard practice.`,
      km: `### តើអ្វីទៅជា SQL?
SQL មកពីពាក្យថា **Structured Query Language**។ វាជាភាសាស្តង់ដារដែលត្រូវបានរចនាឡើងសម្រាប់គ្រប់គ្រងទិន្នន័យនៅក្នុង RDBMS។

ពាក្យបញ្ជា SQL ទូទៅបំផុតមានដូចជា៖
- \`SELECT\` - ទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យ
- \`UPDATE\` - កែប្រែទិន្នន័យក្នុងមូលដ្ឋានទិន្នន័យ
- \`DELETE\` - លុបទិន្នន័យពីមូលដ្ឋានទិន្នន័យ
- \`INSERT INTO\` - បញ្ចូលទិន្នន័យថ្មីទៅក្នុងមូលដ្ឋានទិន្នន័យ
- \`CREATE DATABASE\` - បង្កើតមូលដ្ឋានទិន្នន័យថ្មី
- \`ALTER DATABASE\` - កែប្រែមូលដ្ឋានទិន្នន័យ
- \`CREATE TABLE\` - បង្កើតតារាងថ្មី
- \`ALTER TABLE\` - កែប្រែរចនាសម្ព័ន្ធតារាង
- \`DROP TABLE\` - លុបតារាងចោល

> **សម្គាល់:** ពាក្យគន្លឹះ SQL **មិន** ប្រកាន់អក្សរតូចធំឡើយ៖ \`select\` គឺដូចគ្នានឹង \`SELECT\` ដែរ។ ទោះជាយ៉ាងណាក៏ដោយ ការសរសេរពាក្យគន្លឹះជាអក្សរធំគឺជាការអនុវត្តល្អបំផុត។`
    },
    starterCode: `-- Try writing a simple SELECT query to inspect supplier categories
SELECT DISTINCT SupplierID, CategoryID FROM Products;`
  },
  {
    id: "mysql-select",
    title: { en: "MySQL SELECT", km: "ការប្រើប្រាស់ SELECT" },
    content: {
      en: `### The SELECT Statement
The \`SELECT\` statement is used to retrieve data from one or more database tables.

**Syntax:**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name;
\`\`\`

If you want to retrieve all available columns, use the asterisk (\`*\`) wildcard character:
\`\`\`sql
SELECT * FROM table_name;
\`\`\`

> **Tip:** Selecting only the columns you need reduces data transfer overhead and speeds up query execution.`,
      km: `### ប្រយោគបញ្ជា SELECT
ប្រយោគបញ្ជា \`SELECT\` ត្រូវបានប្រើដើម្បីទាញយកទិន្នន័យពីតារាងមួយ ឬច្រើននៅក្នុងមូលដ្ឋានទិន្នន័យ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name;
\`\`\`

ប្រសិនបើអ្នកចង់ទាញយកគ្រប់ជួរឈរទាំងអស់ដែលមាន សូមប្រើសញ្ញាផ្កាយ (\`*\`)៖
\`\`\`sql
SELECT * FROM table_name;
\`\`\`

> **អនុសាសន៍:** ការជ្រើសរើសតែជួរឈរដែលអ្នកត្រូវការជួយកាត់បន្ថយទំហំបញ្ជូនទិន្នន័យ និងបង្កើនល្បឿនដំណើរការសំណួរ។`
    },
    starterCode: `-- Retrieve only the CustomerName and City columns from the Customers table
SELECT CustomerName, City FROM Customers;`
  },
  {
    id: "mysql-select-distinct",
    title: { en: "MySQL SELECT DISTINCT", km: "ការប្រើ SELECT DISTINCT" },
    content: {
      en: `### The SELECT DISTINCT Statement
The \`SELECT DISTINCT\` statement is used to return only unique (different) values.

Inside a table, a column often contains many duplicate values; sometimes you only want to list the different values.

**Syntax:**
\`\`\`sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
\`\`\`

> **Note:** DISTINCT filters out all duplicate rows in your result set, returning unique rows.`,
      km: `### ប្រយោគបញ្ជា SELECT DISTINCT
ប្រយោគបញ្ជា \`SELECT DISTINCT\` ត្រូវបានប្រើដើម្បីទាញយកតែតម្លៃដែលប្លែកៗ (គ្មានតម្លៃជាន់គ្នា) ប៉ុណ្ណោះ។

នៅក្នុងតារាង ជួរឈរជាច្រើនតែងតែមានតម្លៃស្ទួនគ្នា។ ជួនកាលអ្នកគ្រាន់តែចង់បង្ហាញតម្លៃដែលខុសៗគ្នា។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
\`\`\`

> **សម្គាល់:** DISTINCT នឹងច្រោះយកតែជួរដេកដែលប្លែកគ្នាចេញពីលទ្ធផល ដោយលុបចោលរាល់ទិន្នន័យដែលស្ទួនគ្នា។`
    },
    starterCode: `-- Let's list the distinct countries our customers are located in
SELECT DISTINCT Country FROM Customers;`
  },
  {
    id: "mysql-where",
    title: { en: "MySQL WHERE", km: "លក្ខខណ្ឌ WHERE" },
    content: {
      en: `### The WHERE Clause
The \`WHERE\` clause is used to filter records. It extracts only those records that fulfill a specified condition.

**Syntax:**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\`

You can use text values, numbers, and operators (\`=\`, \`>\`, \`<\`, \`>=\`, \`<=\`, \`<>\`):
- For numeric fields: \`WHERE Price > 15\`
- For text fields (enclosed in single quotes): \`WHERE City = 'Berlin'\`

> **Warning:** Remember to enclose text values in single quotes. Numeric values should not be enclosed.`,
      km: `### លក្ខខណ្ឌ WHERE
លក្ខខណ្ឌ \`WHERE\` ត្រូវបានប្រើដើម្បីចម្រោះកំណត់ត្រា។ វាស្រង់យកតែកំណត់ត្រណាដែលបំពេញតាមលក្ខខណ្ឌជាក់លាក់ប៉ុណ្ណោះ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\`

អ្នកអាចប្រើប្រាស់តម្លៃជាអក្សរ លេខ និងសញ្ញាប្រៀបធៀប (\`=\`, \`>\`, \`<\`, \`>=\`, \`<=\`, \`<>\`)៖
- សម្រាប់ប្រភេទទិន្នន័យជាលេខ៖ \`WHERE Price > 15\`
- សម្រាប់ប្រភេទទិន្នន័យជាអក្សរ (ត្រូវដាក់ក្នុងសញ្ញាសម្រង់ទោល)៖ \`WHERE City = 'Berlin'\`

> **ការព្រមាន:** ត្រូវចងចាំជានិច្ចថារាល់អត្ថបទត្រូវតែព័ទ្ធជុំវិញដោយសញ្ញាសម្រង់ទោល។ ចំណែកឯលេខមិនបាច់ឡើយ។`
    },
    starterCode: `-- Find all customers from Germany
SELECT * FROM Customers WHERE Country = 'Germany';`
  },
  {
    id: "mysql-order-by",
    title: { en: "MySQL ORDER BY", km: "ការតម្រៀប ORDER BY" },
    content: {
      en: `### The ORDER BY Keyword
The \`ORDER BY\` keyword is used to sort the result-set in ascending or descending order.

- By default, it sorts records in ascending order (\`ASC\`).
- To sort the records in descending order, use the \`DESC\` keyword.

**Syntax:**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC|DESC, column2 ASC|DESC;
\`\`\`

> **Tip:** You can sort by multiple columns. The query sorts by the first column, and if there are duplicate values, it sorts by the second column.`,
      km: `### ពាក្យគន្លឹះ ORDER BY
ពាក្យគន្លឹះ \`ORDER BY\` ត្រូវបានប្រើដើម្បីតម្រៀបលទ្ធផលតាមលំដាប់ឡើង ឬចុះ។

- ជាលំនាំដើម វាត្រូវបានតម្រៀបតាមលំដាប់ឡើង (\`ASC\`)។
- ដើម្បីតម្រៀបកំណត់ត្រាតាមលំដាប់ចុះ សូមប្រើពាក្យគន្លឹះ \`DESC\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC|DESC, column2 ASC|DESC;
\`\`\`

> **អនុសាសន៍:** អ្នកអាចតម្រៀបតាមជួរឈរច្រើនក្នុងពេលតែមួយ។ ប្រព័ន្ធនឹងតម្រៀបតាមជួរឈរដំបូង ហើយប្រសិនបើមានតម្លៃស្ទួនគ្នា វានឹងតម្រៀបតាមជួរឈរបន្ទាប់។`
    },
    starterCode: `-- Get all products sorted by price in descending order
SELECT * FROM Products ORDER BY Price DESC;`
  },
  {
    id: "mysql-and",
    title: { en: "MySQL AND", km: "ប្រមាណវិធី AND" },
    content: {
      en: `### The AND Operator
The \`WHERE\` clause can be combined with the \`AND\` operator.

The \`AND\` operator is used to filter records based on more than one condition. It returns a record if **all** the conditions separated by \`AND\` are TRUE.

**Syntax:**
\`\`\`sql
SELECT column1, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3;
\`\`\`

> **Note:** You can chain as many \`AND\` operators as you need to make your search highly specific.`,
      km: `### ប្រមាណវិធី AND
លក្ខខណ្ឌ \`WHERE\` អាចត្រូវបានរួមបញ្ចូលជាមួយប្រមាណវិធី \`AND\`។

ប្រមាណវិធី \`AND\` ត្រូវបានប្រើដើម្បីចម្រោះកំណត់ត្រាដោយផ្អែកលើលក្ខខណ្ឌច្រើនជាងមួយ។ វាបង្ហាញទិន្នន័យលុះត្រាតែរាល់លក្ខខណ្ឌទាំងអស់ដែលភ្ជាប់ដោយ \`AND\` គឺ **ពិត (TRUE)**។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3;
\`\`\`

> **សម្គាល់:** អ្នកអាចភ្ជាប់ប្រមាណវិធី \`AND\` ច្រើនតាមដែលអ្នកចង់បានដើម្បីធ្វើឱ្យការស្វែងរករបស់អ្នកកាន់តែលម្អិត និងជាក់លាក់។`
    },
    starterCode: `-- Find customers who live in Germany and whose city is Berlin
SELECT * FROM Customers WHERE Country = 'Germany' AND City = 'Berlin';`
  },
  {
    id: "mysql-or",
    title: { en: "MySQL OR", km: "ប្រមាណវិធី OR" },
    content: {
      en: `### The OR Operator
The \`OR\` operator is used to filter records. It displays a record if **any** of the conditions separated by \`OR\` is TRUE.

**Syntax:**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3;
\`\`\`

You can combine \`AND\` and \`OR\` operators using parentheses \`()\` to form complex logic filters.

> **Tip:** Parents dictate operator precedence. SQL evaluates conditions inside parentheses first.`,
      km: `### ប្រមាណវិធី OR
ប្រមាណវិធី \`OR\` ត្រូវបានប្រើសម្រាប់ចម្រោះកំណត់ត្រា។ វាបង្ហាញកំណត់ត្រាប្រសិនបើមានលក្ខខណ្ឌណាមួយដែលភ្ជាប់ដោយ \`OR\` គឺ **ពិត (TRUE)**។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3;
\`\`\`

អ្នកអាចរួមបញ្ចូលប្រមាណវិធី \`AND\` និង \`OR\` ចូលគ្នាដោយប្រើវង់ក្រចក \`()\` ដើម្បីបង្កើតជាតម្រងលក្ខខណ្ឌស្មុគស្មាញ។

> **អនុសាសន៍:** វង់ក្រចកដើរតួនាទីកំណត់អាទិភាពនៃប្រមាណវិធី។ SQL នឹងគណនាលក្ខខណ្ឌនៅក្នុងវង់ក្រចកមុនគេ។`
    },
    starterCode: `-- Find customers from Germany OR Berlin OR UK
SELECT * FROM Customers WHERE Country = 'Germany' OR City = 'Berlin' OR Country = 'UK';`
  },
  {
    id: "mysql-not",
    title: { en: "MySQL NOT", km: "ប្រមាណវិធី NOT" },
    content: {
      en: `### The NOT Operator
The \`NOT\` operator is used in combination with other operators to negate a condition in a \`WHERE\` clause.

It displays a record if the condition(s) is NOT TRUE.

**Syntax:**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
\`\`\`

Common uses:
- \`WHERE NOT Country = 'Germany'\`
- \`WHERE NOT Price > 50\`

> **Tip:** The \`NOT\` operator is very useful when you want to exclude a specific group of records from your results.`,
      km: `### ប្រមាណវិធី NOT
ប្រមាណវិធី \`NOT\` ត្រូវបានប្រើរួមគ្នាជាមួយប្រមាណវិធីផ្សេងទៀត ដើម្បីបដិសេធ (ប្លាស់ប្តូរទៅជាផ្ទុយ) លក្ខខណ្ឌនៅក្នុងឃ្លា \`WHERE\`។

វាបង្ហាញកំណត់ត្រាប្រសិនបើលក្ខខណ្ឌនោះ **មិនពិត (NOT TRUE)**។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
\`\`\`

ការប្រើប្រាស់ទូទៅ៖
- \`WHERE NOT Country = 'Germany'\` (មិនមែនប្រទេសអាល្លឺម៉ង់)
- \`WHERE NOT Price > 50\` (តម្លៃមិនធំជាង ៥០)

> **អនុសាសន៍:** ប្រមាណវិធី \`NOT\` មានប្រយោជន៍ខ្លាំងនៅពេលអ្នកចង់ដកចេញនូវក្រុមទិន្នន័យជាក់លាក់ណាមួយពីលទ្ធផល។`
    },
    starterCode: `-- Find all customers who do NOT live in Germany
SELECT * FROM Customers WHERE NOT Country = 'Germany';`
  },
  {
    id: "mysql-insert-into",
    title: { en: "MySQL INSERT INTO", km: "ការបញ្ចូល INSERT INTO" },
    content: {
      en: `### The INSERT INTO Statement
The \`INSERT INTO\` statement is used to insert new records in a table.

**Syntax:**
You can specify both column names and the values to be inserted:
\`\`\`sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
\`\`\`

If you are adding values for all columns of the table, you do not need to specify the column names in the query, but make sure the values are in the correct order:
\`\`\`sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
\`\`\`

> **Warning:** Ensure that strings are wrapped in quotes, and datatypes match column definitions to avoid insertion errors.`,
      km: `### ប្រយោគបញ្ជា INSERT INTO
ប្រយោគបញ្ជា \`INSERT INTO\` ត្រូវបានប្រើដើម្បីបញ្ចូលកំណត់ត្រាថ្មីទៅក្នុងតារាង។

**វាក្យសម្ពន្ធ៖**
អ្នកអាចបញ្ជាក់ទាំងឈ្មោះជួរឈរ និងតម្លៃដែលត្រូវបញ្ចូល៖
\`\`\`sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
\`\`\`

ប្រសិនបើអ្នកចង់បន្ថែមតម្លៃសម្រាប់គ្រប់ជួរឈរទាំងអស់ អ្នកមិនចាំបាច់បញ្ជាក់ឈ្មោះជួរឈរឡើយ ប៉ុន្តែត្រូវប្រាកដថាតម្លៃទាំងនោះស្ថិតក្នុងលំដាប់លំដោយត្រឹមត្រូវ៖
\`\`\`sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
\`\`\`

> **ការព្រមាន:** ត្រូវប្រាកដថាខ្សែអក្សរត្រូវបានព័ទ្ធជុំវិញដោយសញ្ញាសម្រង់ ហើយប្រភេទព័ត៌មានត្រូវគ្នាជាមួយការកំណត់ជួរឈរដើម្បីចៀសវាងកំហុសក្នុងការបញ្ចូល។`
    },
    starterCode: `-- Insert a new customer into the Customers table
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('SabayCode Academy', 'Kimsour Som', 'St. 210', 'Phnom Penh', '12000', 'Cambodia');

-- Fetch everything to see the newly added customer!
SELECT * FROM Customers;`
  },
  {
    id: "mysql-null-values",
    title: { en: "MySQL NULL Values", km: "តម្លៃទទេ NULL Values" },
    content: {
      en: `### What is a NULL Value?
A field with a \`NULL\` value is a field with no value. It represents missing, unknown, or inapplicable data.

If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a \`NULL\` value.

- **Note:** It is not possible to test for \`NULL\` values with comparison operators, such as \`=\` or \`<>\`.
- Instead, use \`IS NULL\` and \`IS NOT NULL\` operators.

**Syntax:**
\`\`\`sql
SELECT columns FROM table_name WHERE column_name IS NULL;
SELECT columns FROM table_name WHERE column_name IS NOT NULL;
\`\`\`

> **Warning:** Do not confuse NULL with a zero value (0) or an empty string. A NULL value represents a state of "no value".`,
      km: `### តើអ្វីទៅជាតម្លៃ NULL?
ប្រអប់ទិន្នន័យដែលមានតម្លៃ \`NULL\` គឺជាប្រអប់ដែលគ្មានទិន្នន័យ (តម្លៃទទេ។) វាបង្ហាញពីទិន្នន័យដែលបាត់បង់ មិនស្គាល់ ឬមិនអាចអនុវត្តបាន។

ប្រសិនបើប្រអប់នៅក្នុងតារាងជាជម្រើសវាមិនតម្រូវឱ្យវាយតម្លៃទេ នោះប្រអប់នោះនឹងត្រូវបានរក្សាទុកជាមួយនឹងតម្លៃ \`NULL\`។

- **សម្គាល់:** អ្នកមិនអាចប្រើប្រាស់សញ្ញាប្រៀបធៀបដូចជា \`=\` ឬ \`<>\` ដើម្បីពិនិត្យតម្លៃ \`NULL\` ឡើយ។
- ផ្ទុយទៅវិញ ត្រូវប្រើប្រាស់ប្រមាណវិធី \`IS NULL\` និង \`IS NOT NULL\`។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
SELECT columns FROM table_name WHERE column_name IS NULL;
SELECT columns FROM table_name WHERE column_name IS NOT NULL;
\`\`\`

> **ការព្រមាន:** កុំច្រឡំតម្លៃ NULL ជាមួយតម្លៃសូន្យ (0) ឬខ្សែអក្សរទទេឱ្យសោះ។ តម្លៃ NULL តំណាងឱ្យភាព "គ្មានតម្លៃ" ទាំងស្រុង។`
    },
    starterCode: `-- Find customers whose PostalCode is not empty/null
SELECT * FROM Customers WHERE PostalCode IS NOT NULL;`
  },
  {
    id: "mysql-update",
    title: { en: "MySQL UPDATE", km: "ការកែប្រែ UPDATE" },
    content: {
      en: `### The UPDATE Statement
The \`UPDATE\` statement is used to modify existing records in a table.

**Syntax:**
\`\`\`sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
\`\`\`

> **Warning:** Be careful when updating records! If you omit the \`WHERE\` clause, **ALL** records in the table will be updated!

Our playground environment is stateless, so destructive query changes start fresh on subsequent executions.`,
      km: `### ប្រយោគបញ្ជា UPDATE
ប្រយោគបញ្ជា \`UPDATE\` ត្រូវបានប្រើដើម្បីកែប្រែទិន្នន័យដែលមានស្រាប់នៅក្នុងតារាង។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
\`\`\`

> **ការព្រមាន:** ត្រូវមានការប្រុងប្រយ័ត្នខ្ពស់នៅពេលកែប្រែទិន្នន័យ! ប្រសិនបើអ្នកភ្លេចសរសេរឃ្លា \`WHERE\` កំណត់ត្រា **ទាំងអស់ (ALL)** នៅក្នុងតារាងនឹងត្រូវកែប្រែស្មើគ្នាទាំងអស់!

បរិស្ថានសាកល្បងរបស់យើងគឺគ្មានស្ថានភាព (stateless) ដូច្នេះការលុប ឬកែប្រែទិន្នន័យនឹងចាប់ផ្តើមជាថ្មីជានិច្ចនៅពេលដំណើរការបន្ទាប់។`
    },
    starterCode: `-- Update CustomerName and City of CustomerID = 1
UPDATE Customers
SET CustomerName = 'Alfreds Brand New', City = 'Frankfurt'
WHERE CustomerID = 1;

-- Select to verify the update
SELECT * FROM Customers WHERE CustomerID = 1;`
  },
  {
    id: "mysql-delete",
    title: { en: "MySQL DELETE", km: "ការលុប DELETE" },
    content: {
      en: `### The DELETE Statement
The \`DELETE\` statement is used to remove existing records from a table.

**Syntax:**
\`\`\`sql
DELETE FROM table_name WHERE condition;
\`\`\`

> **Warning:** Be extremely careful when deleting records in a table! If you omit the \`WHERE\` clause, **ALL** records in the table will be permanently deleted!

To delete all rows in a table without deleting the table structure:
\`\`\`sql
DELETE FROM table_name;
\`\`\``,
      km: `### ប្រយោគបញ្ជា DELETE
ប្រយោគបញ្ជា \`DELETE\` ត្រូវបានប្រើដើម្បីលុបកំណត់ត្រាដែលមានស្រាប់ចេញពីតារាង។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
DELETE FROM table_name WHERE condition;
\`\`\`

> **ការព្រមាន:** ត្រូវប្រុងប្រយ័ត្នខ្ពស់បំផុតនៅពេលលុបកំណត់ត្រាពីតារាង! ប្រសិនបើអ្នកភ្លេចសរសេរឃ្លា \`WHERE\` កំណត់ត្រា **ទាំងអស់ (ALL)** នៅក្នុងតារាងនឹងត្រូវលុបចោលទាំងស្រុង!

ដើម្បីលុបជួរដេកទាំងអស់នៅក្នុងតារាងដោយមិនប៉ះពាល់ដល់រចនាសម្ព័ន្ធតារាង៖
\`\`\`sql
DELETE FROM table_name;
\`\`\`单元`
    },
    starterCode: `-- Delete customer where CustomerID is 2
DELETE FROM Customers WHERE CustomerID = 2;

-- Check customers list to verify
SELECT * FROM Customers;`
  }
];
