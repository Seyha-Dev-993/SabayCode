import { Lesson } from '../types';

export const mysqlLessonsPart4: Lesson[] = [
  {
    id: "mysql-create-table",
    title: { en: "MySQL Create Table", km: "ការបង្កើតតារាង" },
    content: {
      en: `### The CREATE TABLE Statement
The \`CREATE TABLE\` statement is used to create a new table in a database.

**Syntax:**
\`\`\`sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);
\`\`\`

The columns parameters specify the names of the columns of the table. The datatype parameter specifies the type of data the column can hold (e.g. \`VARCHAR\`, \`INT\`, \`DATE\`, \`DECIMAL\`).

> **Tip:** Always define a primary key (like an auto-incrementing ID) for every table to uniquely index records.`,
      km: `### ឃ្លាបញ្ជា CREATE TABLE
ប្រយោគបញ្ជា \`CREATE TABLE\` ត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតតារាងថ្មីមួយនៅក្នុងមូលដ្ឋានទិន្នន័យ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);
\`\`\`

ប៉ារ៉ាម៉ែត្រជួរឈរកំណត់ឈ្មោះជួរឈរនៃតារាង។ ចំណែកឯ datatype កំណត់ប្រភេទទិន្នន័យដែលជួរឈរនោះអាចផ្ទុកបាន (ដូចជា \`VARCHAR\`, \`INT\`, \`DATE\`, \`DECIMAL\`)។

> **អនុសាសន៍:** គួរតែកំណត់សោចម្បង (Primary Key ដូចជា ID កើនឡើងស្វ័យប្រវត្ត) ជានិច្ចសម្រាប់រាល់តារាងទាំងអស់ ដើម្បីងាយស្រួលរៀបចំលំដាប់កំណត់ត្រា។`
    },
    starterCode: `-- Create a table for student records
CREATE TABLE Students (
    StudentID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(100) NOT NULL,
    GPA DECIMAL(3, 2),
    EnrollmentDate DATE
);

-- Insert a test student and retrieve
INSERT INTO Students (Name, GPA, EnrollmentDate) VALUES ('Bona Sok', 3.85, '2026-03-01');
SELECT * FROM Students;`
  },
  {
    id: "mysql-drop-table",
    title: { en: "MySQL Drop Table", km: "ការលុបតារាងចោល" },
    content: {
      en: `### The DROP TABLE Statement
The \`DROP TABLE\` statement is used to drop (delete) an existing table in a database.

**Syntax:**
\`\`\`sql
DROP TABLE table_name;
\`\`\`

> **Warning:** Be extremely careful when dropping tables! Dropping a table will permanently delete the entire table structure, as well as **ALL** rows of data stored within it.`,
      km: `### ឃ្លាបញ្ជា DROP TABLE
ប្រយោគបញ្ជា \`DROP TABLE\` ត្រូវបានប្រើប្រាស់ដើម្បីលុបតារាង (Table) ដែលមានស្រាប់ចេញពីមូលដ្ឋានទិន្នន័យចោលទាំងស្រុង។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
DROP TABLE table_name;
\`\`\`

> **ការព្រមាន:** ត្រូវមានការប្រុងប្រយ័ត្នខ្ពស់បំផុតនៅពេលលុបតារាង! ការលុបវានឹងបំផ្លាញរចនាសម្ព័ន្ធតារាងទាំងមូល ព្រមទាំងលុបរាល់ទិន្នន័យទាំងអស់ដែលផ្ទុកនៅក្នុងនោះជាអចិន្ត្រៃយ៍។`
    },
    starterCode: `-- Create a temp table and drop it
CREATE TABLE TrashTable (id INT, junk TEXT);
INSERT INTO TrashTable VALUES (1, 'Trash data');

-- Drop it
DROP TABLE TrashTable;

-- This query would fail if we try to select from TrashTable now
SELECT 'Table dropped successfully!' AS Status;`
  },
  {
    id: "mysql-alter-table",
    title: { en: "MySQL Alter Table", km: "ការកែប្រែតារាង" },
    content: {
      en: `### The ALTER TABLE Statement
The \`ALTER TABLE\` statement is used to add, delete, or modify columns in an existing table.

It is also used to add and drop various constraints on an existing table.

**ADD Column Syntax:**
\`\`\`sql
ALTER TABLE table_name
ADD column_name datatype;
\`\`\`

**DROP Column Syntax:**
\`\`\`sql
ALTER TABLE table_name
DROP COLUMN column_name;
\`\`\``,
      km: `### ឃ្លាបញ្ជា ALTER TABLE
ប្រយោគបញ្ជា \`ALTER TABLE\` ត្រូវបានប្រើប្រាស់ដើម្បី បន្ថែម លុប ឬកែប្រែជួរឈរនៅក្នុងតារាងដែលមានស្រាប់។

វាក៏ត្រូវបានគេប្រើប្រាស់ដើម្បីបន្ថែម និងដកចេញនូវលក្ខខណ្ឌ (constraints) ផ្សេងៗនៅលើតារាងដែលមានស្រាប់ផងដែរ។

**វាក្យសម្ពន្ធបន្ថែមជួរឈរ (ADD)៖**
\`\`\`sql
ALTER TABLE table_name
ADD column_name datatype;
\`\`\`

**វាក្យសម្ពន្ធលុបជួរឈរ (DROP)៖**
\`\`\`sql
ALTER TABLE table_name
DROP COLUMN column_name;
\`\`\``
    },
    starterCode: `-- Add an email column to our Customers table
ALTER TABLE Customers ADD Email VARCHAR(150);

-- Query the table to see the new empty column!
SELECT CustomerName, Email FROM Customers;`
  },
  {
    id: "mysql-constraints",
    title: { en: "MySQL Constraints", km: "លក្ខខណ្ឌតារាង" },
    content: {
      en: `### SQL Constraints
SQL constraints are used to specify rules for the data in a table.

Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data.

Most Common Constraints:
- \`NOT NULL\` - Ensures that a column cannot have a NULL value.
- \`UNIQUE\` - Ensures that all values in a column are different.
- \`PRIMARY KEY\` - A combination of NOT NULL and UNIQUE. Uniquely identifies each row.
- \`FOREIGN KEY\` - Uniquely identifies a row in another table.
- \`CHECK\` - Ensures that the values in a column satisfy a specific condition.
- \`DEFAULT\` - Sets a default value for a column if no value is specified.

> **Tip:** Enforcing data integrity at the database level using constraints is much safer than relying purely on application-level validations.`,
      km: `### លក្ខខណ្ឌតារាង (SQL Constraints)
SQL Constraints ត្រូវបានប្រើប្រាស់ដើម្បីកំណត់ច្បាប់ទិន្នន័យនៅក្នុងតារាង។

លក្ខខណ្ឌទាំងនេះជួយកម្រិតប្រភេទព័ត៌មានដែលអាចបញ្ចូលទៅក្នុងតារាង ដើម្បីធានានូវភាពត្រឹមត្រូវ និងភាពជឿជាក់ខ្ពស់នៃទិន្នន័យ។

លក្ខខណ្ឌដែលពេញនិយមបំផុត៖
- \`NOT NULL\` - ធានាថាជួរឈរមិនអាចគ្មានតម្លៃ (NULL) ឡើយ។
- \`UNIQUE\` - ធានាថារាល់តម្លៃទាំងអស់នៅក្នុងជួរឈរត្រូវតែប្លែកៗគ្នា (មិនស្ទួន)។
- \`PRIMARY KEY\` - ជាការរួមបញ្ចូលគ្នារវាង NOT NULL និង UNIQUE ដើម្បីកំណត់អត្តសញ្ញាណជួរដេកនីមួយៗ។
- \`FOREIGN KEY\` - ភ្ជាប់អត្តសញ្ញាណទៅកាន់ជួរដេកនៃតារាងផ្សេងទៀត។
- \`CHECK\` - ធានាថាតម្លៃនៅក្នុងជួរឈរត្រូវតែបំពេញតាមលក្ខខណ្ឌជាក់លាក់។
- \`DEFAULT\` - កំណត់តម្លៃលំនាំដើមសម្រាប់ជួរឈរ ប្រសិនបើគ្មានតម្លៃបញ្ជាក់។

> **អនុសាសន៍:** ការអនុវត្តភាពត្រឹមត្រូវនៃទិន្នន័យនៅកម្រិតមូលដ្ឋានទិន្នន័យ (Database level) ដោយប្រើ constraints គឺមានសុវត្ថិភាពជាងការរំពឹងលើកម្មវិធី (Application validation) តែមួយមុខ។`
    },
    starterCode: `-- View constraints schema info of our seeded Products table
SELECT sql FROM sqlite_master WHERE type='table' AND name='Products';`
  },
  {
    id: "mysql-not-null",
    title: { en: "MySQL Not Null", km: "លក្ខខណ្ឌ NOT NULL" },
    content: {
      en: `### The NOT NULL Constraint
By default, a column can hold NULL values.

The \`NOT NULL\` constraint enforces a column to NOT accept NULL values. This means you cannot insert or update records without entering values into this field.

**Syntax:**
\`\`\`sql
CREATE TABLE Employees (
    ID INT NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50)
);
\`\`\`

> **Warning:** Attempting to insert a NULL value into a NOT NULL column will trigger an SQL execution error.`,
      km: `### លក្ខខណ្ឌ NOT NULL
ជាលំនាំដើម ជួរឈរណាមួយក៏អាចផ្ទុកតម្លៃ NULL បានដែរ។

លក្ខខណ្ឌ \`NOT NULL\` បង្ខំឱ្យជួរឈរមិនទទួលយកតម្លៃ NULL ឡើយ។ នេះមានន័យថាអ្នកមិនអាចបញ្ចូល ឬកែប្រែទិន្នន័យដោយមិនបំពេញតម្លៃក្នុងប្រអប់នេះបានទេ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Employees (
    ID INT NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50)
);
\`\`\`

> **ការព្រមាន:** ការព្យាយាមបញ្ចូលតម្លៃ NULL ទៅក្នុងជួរឈរដែលបានកំណត់ NOT NULL នឹងបង្កជាកំហុសនៃការដំណើរការ SQL ភ្លាមៗ។`
    },
    starterCode: `-- Create a table where columns cannot be NULL
CREATE TABLE Members (
    MemberID INT NOT NULL,
    JoinDate DATE NOT NULL
);

-- Attempting to insert empty will fail! Let's insert a correct record
INSERT INTO Members (MemberID, JoinDate) VALUES (1, '2026-03-01');
SELECT * FROM Members;`
  },
  {
    id: "mysql-unique",
    title: { en: "MySQL Unique", km: "លក្ខខណ្ឌ UNIQUE" },
    content: {
      en: `### The UNIQUE Constraint
The \`UNIQUE\` constraint ensures that all values in a column are distinct.

Both the \`UNIQUE\` and \`PRIMARY KEY\` constraints provide a guarantee for uniqueness for a column or set of columns.

- A \`PRIMARY KEY\` constraint automatically has a \`UNIQUE\` constraint.
- However, you can have many \`UNIQUE\` constraints per table, but only **one** \`PRIMARY KEY\` constraint per table.

**Syntax:**
\`\`\`sql
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
\`\`\``,
      km: `### លក្ខខណ្ឌ UNIQUE
លក្ខខណ្ឌ \`UNIQUE\` ធានាថារាល់តម្លៃទាំងអស់នៅក្នុងជួរឈរមួយត្រូវតែខុសគ្នាដាច់ពីគ្នា (មិនស្ទួន)។

ទាំង \`UNIQUE\` និង \`PRIMARY KEY\` សុទ្ធតែផ្តល់ការធានាលើភាពមិនស្ទួននៃតម្លៃជួរឈរ។

- លក្ខខណ្ឌ \`PRIMARY KEY\` រាប់បញ្ចូលទាំង \`UNIQUE\` ដោយស្វ័យប្រវត្ត។
- ទោះជាយ៉ាងណាក៏ដោយ អ្នកអាចមានលក្ខខណ្ឌ \`UNIQUE\` ជាច្រើនក្នុងតារាងតែមួយ ប៉ុន្តែអាចមាន \`PRIMARY KEY\` តែ **មួយគត់** ប៉ុណ្ណោះក្នុងមួយតារាង។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
\`\`\``
    },
    starterCode: `-- Try creating a table with UNIQUE emails
CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);

INSERT INTO Accounts VALUES (1, 'info@sabaycode.com');
-- Inserting the exact same email again would fail due to UNIQUE constraint!
SELECT * FROM Accounts;`
  },
  {
    id: "mysql-primary-key",
    title: { en: "MySQL Primary Key", km: "សោចម្បង PRIMARY KEY" },
    content: {
      en: `### The PRIMARY KEY Constraint
The \`PRIMARY KEY\` constraint uniquely identifies each record in a table.

Primary keys must contain **UNIQUE** values, and cannot contain **NULL** values.

A table can have only one primary key, which may consist of single or multiple fields (composite key).

**Syntax:**
\`\`\`sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100)
);
\`\`\`

> **Tip:** Think of a primary key as a student's ID card number, or an order's unique tracking receipt number.`,
      km: `### សោចម្បង PRIMARY KEY
លក្ខខណ្ឌ \`PRIMARY KEY\` ត្រូវបានប្រើដើម្បីកំណត់អត្តសញ្ញាណតែមួយគត់ និងច្បាស់លាស់សម្រាប់រាល់កំណត់ត្រានីមួយៗនៅក្នុងតារាង។

សោចម្បងត្រូវតែផ្ទុកតម្លៃ **UNIQUE (មិនស្ទួន)** និងមិនអាចមានតម្លៃ **NULL (ទទេ)** ឡើយ។

តារាងមួយអាចមានសោចម្បងបានតែមួយគត់ ដែលវាអាចបង្កើតឡើងដោយជួរឈរតែមួយ ឬច្រើនជួរឈររួមគ្នា (Composite key)។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100)
);
\`\`\`

> **អនុសាសន៍:** ចូរគិតពីសោចម្បង ដូចជាលេខអត្តសញ្ញាណប័ណ្ណរបស់សិស្ស ឬលេខវិក្កយបត្របញ្ជាទិញដែលមិនអាចជាន់គ្នាបានអញ្ចឹង។`
    },
    starterCode: `-- View table primary key in the SQLite Master schema
SELECT sql FROM sqlite_master WHERE type='table' AND name='Customers';`
  },
  {
    id: "mysql-foreign-key",
    title: { en: "MySQL Foreign Key", km: "សោក្រៅ FOREIGN KEY" },
    content: {
      en: `### The FOREIGN KEY Constraint
A \`FOREIGN KEY\` is a key used to link two tables together.

A \`FOREIGN KEY\` is a field (or collection of fields) in one table, that refers to the \`PRIMARY KEY\` in another table.

The table with the foreign key is called the child table, and the table with the primary key is called the parent table.

**Syntax:**
\`\`\`sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
\`\`\`

> **Note:** Foreign keys prevent invalid data from being inserted into the foreign key column, as it must exist in the referenced table.`,
      km: `### សោក្រៅ FOREIGN KEY
\`FOREIGN KEY\` គឺជាសោដែលប្រើប្រាស់ដើម្បីភ្ជាប់តារាងពីរចូលគ្នា។

\`FOREIGN KEY\` គឺជាជួរឈរមួយ (ឬសំណុំជួរឈរ) នៅក្នុងតារាងមួយ ដែលយោងទៅកាន់ \`PRIMARY KEY\` នៅក្នុងតារាងមួយទៀត។

តារាងដែលមានសោក្រៅត្រូវបានគេហៅថា តារាងកូន (Child table) ហើយតារាងដែលមានសោចម្បងត្រូវបានគេហៅថា តារាងមេ (Parent table)។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
\`\`\`

> **សម្គាល់:** សោក្រៅជួយការពារមិនឱ្យបញ្ចូលទិន្នន័យខុសឆ្គង ព្រោះទិន្នន័យសោក្រៅដែលបញ្ចូលត្រូវតែមានស្រាប់នៅក្នុងតារាងយោង (តារាងមេ)។`
    },
    starterCode: `-- Inspect the relationship between Orders and Customers schema
SELECT sql FROM sqlite_master WHERE type='table' AND name='Orders';`
  },
  {
    id: "mysql-check",
    title: { en: "MySQL CHECK", km: "លក្ខខណ្ឌ CHECK" },
    content: {
      en: `### The CHECK Constraint
The \`CHECK\` constraint is used to limit the value range that can be placed in a column.

If you define a \`CHECK\` constraint on a single column, it allows only certain values for this column.

**Syntax:**
\`\`\`sql
CREATE TABLE Persons (
    ID INT PRIMARY KEY,
    Age INT,
    CHECK (Age >= 18)
);
\`\`\`

> **Tip:** You can combine multiple check constraints using \`AND\`/\`OR\` logic, such as \`CHECK (Age >= 18 AND Country = 'Cambodia')\`.`,
      km: `### លក្ខខណ្ឌ CHECK
លក្ខខណ្ឌ \`CHECK\` ត្រូវបានប្រើប្រាស់ដើម្បីកម្រិតដែនតម្លៃ (range) ដែលអាចរក្សាទុកនៅក្នុងជួរឈរណាមួយ។

ប្រសិនបើអ្នកកំណត់លក្ខខណ្ឌ \`CHECK\` លើជួរឈរណាមួយ វានឹងអនុញ្ញាតឱ្យបញ្ចូលតែកម្រិតតម្លៃណាដែលបំពេញលក្ខខណ្ឌនោះប៉ុណ្ណោះ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Persons (
    ID INT PRIMARY KEY,
    Age INT,
    CHECK (Age >= 18)
);
\`\`\`

> **អនុសាសន៍:** អ្នកអាចបញ្ចូលលក្ខខណ្ឌឆែកច្រើនដោយប្រើតក្កវិជ្ជា \`AND\`/\`OR\` ដូចជា \`CHECK (Age >= 18 AND Country = 'Cambodia')\`។`
    },
    starterCode: `-- Create a table checking for minimum product price
CREATE TABLE Catalog (
    ItemID INT PRIMARY KEY,
    Price DECIMAL(10,2),
    CHECK (Price > 0.00)
);

INSERT INTO Catalog VALUES (1, 9.99);
-- Inserting price = -1 would fail!
SELECT * FROM Catalog;`
  },
  {
    id: "mysql-default",
    title: { en: "MySQL DEFAULT", km: "លក្ខខណ្ឌលំនាំដើម DEFAULT" },
    content: {
      en: `### The DEFAULT Constraint
The \`DEFAULT\` constraint is used to set a default value for a column.

The default value will be added to all new records if no other value is specified.

**Syntax:**
\`\`\`sql
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Country VARCHAR(100) DEFAULT 'Cambodia'
);
\`\`\`

The default value can also be system function values, such as \`CURRENT_TIMESTAMP\` to automatically log insertion times.

> **Tip:** Using DEFAULT reduces validation and default assignment logic in your backend application codebase.`,
      km: `### លក្ខខណ្ឌលំនាំដើម DEFAULT
លក្ខខណ្ឌ \`DEFAULT\` ត្រូវបានប្រើប្រាស់ដើម្បីកំណត់តម្លៃលំនាំដើមសម្រាប់ជួរឈរណាមួយ។

តម្លៃលំនាំដើមនេះនឹងត្រូវបញ្ចូលទៅក្នុងរាល់កំណត់ត្រាថ្មីទាំងអស់ដោយស្វ័យប្រវត្ត ប្រសិនបើគ្មានតម្លៃជាក់លាក់ណាមួយត្រូវបានបញ្ជាក់ឡើយ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE TABLE Users (
    ID INT PRIMARY KEY,
    Country VARCHAR(100) DEFAULT 'Cambodia'
);
\`\`\`

តម្លៃលំនាំដើមក៏អាចជាតម្លៃនៃអនុគមន៍ប្រព័ន្ធផងដែរ ដូចជា \`CURRENT_TIMESTAMP\` ដើម្បីកត់ត្រាពេលវេលាបញ្ចូលទិន្នន័យដោយស្វ័យប្រវត្ត។

> **អនុសាសន៍:** ការប្រើប្រាស់ DEFAULT ជួយកាត់បន្ថយកូដផ្ទៀងផ្ទាត់ និងកូដកំណត់តម្លៃលំនាំដើមនៅក្នុងកម្មវិធី backend របស់អ្នក។`
    },
    starterCode: `-- Create a table with default active status
CREATE TABLE Subscriptions (
    SubID INT PRIMARY KEY,
    Status VARCHAR(50) DEFAULT 'Active'
);

INSERT INTO Subscriptions (SubID) VALUES (101); -- Omitted Status column
SELECT * FROM Subscriptions;`
  },
  {
    id: "mysql-index",
    title: { en: "MySQL Index", km: "សន្ទស្សន៍ INDEX" },
    content: {
      en: `### The CREATE INDEX Statement
The \`CREATE INDEX\` statement is used to create indexes in tables.

Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.

**Syntax:**
\`\`\`sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
\`\`\`

> **Warning:** Updating a table with indexes takes more time than updating a table without, because the indexes also need an update. So, only create indexes on columns that will be searched against frequently.`,
      km: `### ឃ្លាបញ្ជា CREATE INDEX
ប្រយោគបញ្ជា \`CREATE INDEX\` ត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតសន្ទស្សន៍ (INDEX) នៅក្នុងតារាង។

Indexes ត្រូវបានប្រើដើម្បីស្វែងរក និងទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យបានលឿនបំផុត។ អ្នកប្រើប្រាស់មិនអាចមើលឃើញ indexes ឡើយ វាត្រូវបានប្រើប្រាស់ដោយម៉ាស៊ីនទិន្នន័យជាផ្ទៃក្នុងប៉ុណ្ណោះ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
\`\`\`

> **ការព្រមាន:** ការកែប្រែទិន្នន័យ (INSERT, UPDATE, DELETE) លើតារាងដែលមាន INDEX នឹងចំណាយពេលយូរជាងតារាងធម្មតា ព្រោះប្រព័ន្ធត្រូវកែប្រែទិន្នន័យសន្ទស្សន៍ក្នុងពេលតែមួយ។ ដូច្នេះ គួរតែបង្កើត INDEX តែលើជួរឈរណាដែលត្រូវបានគេប្រើប្រាស់សម្រាប់ស្វែងរកញឹកញាប់ប៉ុណ្ណោះ។`
    },
    starterCode: `-- Create an index on CustomerName to speed up search queries
CREATE INDEX idx_customer_name ON Customers (CustomerName);

-- Verify that the index was registered in schema
SELECT name, tbl_name FROM sqlite_master WHERE type='index';`
  },
  {
    id: "mysql-auto-increment",
    title: { en: "MySQL Auto Increment", km: "លេខកើនស្វ័យប្រវត្ត" },
    content: {
      en: `### AUTO_INCREMENT Field
Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.

Often, this is the primary key field that we would like to be created automatically every time a new record is inserted.

**MySQL Syntax:**
\`\`\`sql
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL
);
\`\`\`

By default, the starting value for \`AUTO_INCREMENT\` is 1, and it will increment by 1 for each new record. To let MySQL start with another value, write:
\`\`\`sql
ALTER TABLE Customers AUTO_INCREMENT=100;
\`\`\`

> **Note:** In our SQLite environment, we use \`AUTOINCREMENT\` which operates identically to MySQL's \`AUTO_INCREMENT\`.`,
      km: `### ដែនកើនស្វ័យប្រវត្ត AUTO_INCREMENT
លេខកើនស្វ័យប្រវត្ត អនុញ្ញាតឱ្យលេខសម្គាល់តែមួយគត់ត្រូវបានបង្កើតឡើងដោយស្វ័យប្រវត្តនៅពេលដែលកំណត់ត្រាថ្មីត្រូវបានបញ្ចូលទៅក្នុងតារាង។

ជាញឹកញាប់ វាត្រូវបានគេប្រើប្រាស់សម្រាប់ជួរឈរសោចម្បង (Primary key) ដើម្បីឱ្យប្រព័ន្ធបង្កើតលេខកូដសម្គាល់ដោយស្វ័យប្រវត្តាល់រាល់ពេលមានទិន្នន័យថ្មី។

**វាក្យសម្ពន្ធ MySQL៖**
\`\`\`sql
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL
);
\`\`\`

ជាលំនាំដើម តម្លៃចាប់ផ្តើមសម្រាប់ \`AUTO_INCREMENT\` គឺលេខ ១ ហើយវានឹងកើនឡើងម្ដង ១ លេខ។ ដើម្បីប្តូរតម្លៃចាប់ផ្តើមក្នុង MySQL សូមសរសេរ៖
\`\`\`sql
ALTER TABLE Customers AUTO_INCREMENT=100;
\`\`\`

> **សម្គាល់:** នៅក្នុងបរិស្ថាន SQLite របស់យើង យើងសរសេរ \`AUTOINCREMENT\` ដែលវាដំណើរការដូចគ្នាទាំងស្រុងទៅនឹង \`AUTO_INCREMENT\` របស់ MySQL ដែរ។`
    },
    starterCode: `-- Create a table demonstrating auto increment behavior
CREATE TABLE Logs (
    LogID INTEGER PRIMARY KEY AUTOINCREMENT,
    Message TEXT
);

INSERT INTO Logs (Message) VALUES ('System online on port 3000'), ('User log-in event completed');
SELECT * FROM Logs;`
  },
  {
    id: "mysql-dates",
    title: { en: "MySQL Dates", km: "ការគ្រប់គ្រងកាលបរិច្ឆេទ" },
    content: {
      en: `### Working with Dates
Managing dates is one of the most critical aspects of working with relational databases.

MySQL comes with the following data types for storing a date or a date/time value in the database:
- \`DATE\` - format \`YYYY-MM-DD\`
- \`DATETIME\` - format \`YYYY-MM-DD HH:MI:SS\`
- \`TIMESTAMP\` - format \`YYYY-MM-DD HH:MI:SS\`
- \`YEAR\` - format \`YYYY\` or \`YY\`

To query specific dates, you can use comparison operators:
\`\`\`sql
SELECT * FROM Orders WHERE OrderDate = '1996-07-04';
\`\`\`

> **Note:** Databases are strict with date formats. Using invalid layouts can trigger silent failures or query parsing exceptions.`,
      km: `### ការគ្រប់គ្រងកាលបរិច្ឆេទ (MySQL Dates)
ការគ្រប់គ្រងកាលបរិច្ឆេទគឺជាផ្នែកមួយដ៏សំខាន់បំផុតនៅពេលធ្វើការជាមួយមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។

MySQL ផ្តល់នូវប្រភេទទិន្នន័យកាលបរិច្ឆេទសំខាន់ៗដូចខាងក្រោម៖
- \`DATE\` - ទ្រង់ទ្រាយ \`YYYY-MM-DD\`
- \`DATETIME\` - ទ្រង់ទ្រាយ \`YYYY-MM-DD HH:MI:SS\`
- \`TIMESTAMP\` - ទ្រង់ទ្រាយ \`YYYY-MM-DD HH:MI:SS\`
- \`YEAR\` - ទ្រង់ទ្រាយ \`YYYY\` ឬ \`YY\`

ដើម្បីសួររកកាលបរិច្ឆេទជាក់លាក់ អ្នកអាចប្រើប្រាស់សញ្ញាប្រៀបធៀបបាន៖
\`\`\`sql
SELECT * FROM Orders WHERE OrderDate = '1996-07-04';
\`\`\`

> **សម្គាល់:** មូលដ្ឋានទិន្នន័យមានលក្ខណៈតឹងរ៉ឹងខ្លាំងជាមួយទ្រង់ទ្រាយកាលបរិច្ឆេទ។ ការសរសេរខុសទ្រង់ទ្រាយអាចបណ្តាលឱ្យសំណួរមិនដំណើរការ ឬបង្ហាញលទ្ធផលខុស។`
    },
    starterCode: `-- Find orders placed after July 5th, 1996
SELECT * FROM Orders WHERE OrderDate > '1996-07-05';`
  },
  {
    id: "mysql-views",
    title: { en: "MySQL Views", km: "ទិដ្ឋភាព VIEWS" },
    content: {
      en: `### The CREATE VIEW Statement
In SQL, a view is a virtual table based on the result-set of an SQL statement.

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

**Syntax:**
\`\`\`sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\`

Once a view is created, you can query it just like a normal table:
\`\`\`sql
SELECT * FROM view_name;
\`\`\`

> **Tip:** Views are perfect for packaging and hiding complex join logic, making it easier for client applications to fetch denormalized records easily.`,
      km: `### ឃ្លាបញ្ជា CREATE VIEW
នៅក្នុង SQL, View គឺជាតារាងនិម្មិត (virtual table) ដែលផ្អែកលើលទ្ធផលនៃសំណួរ SQL ជាក់លាក់ណាមួយ។

View មានជួរដេក និងជួរឈរដូចគ្នាទៅនឹងតារាងពិតប្រាកដអញ្ចឹង។ ជួរឈរនៅក្នុង View គឺជាជួរឈរដែលបានមកពីតារាងពិតប្រាកដមួយ ឬច្រើននៅក្នុងមូលដ្ឋានទិន្នន័យ។

**វាក្យសម្ពន្ធ៖**
\`\`\`sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\`

នៅពេល View ត្រូវបានបង្កើតរួចរាល់ អ្នកអាចសាកសួរព័ត៌មាន (Query) ពីវាដូចជាតារាងធម្មតាដែរ៖
\`\`\`sql
SELECT * FROM view_name;
\`\`\`

> **អនុសាសន៍:** Views គឺល្អឥតខ្ចោះសម្រាប់ការវេចខ្ចប់ និងលាក់កំបាំងកូដ Join តារាងដ៏ស្មុគស្មាញ ដែលជួយឱ្យកម្មវិធីរបស់អ្នកអាចទាញយកទិន្នន័យចម្រុះបានយ៉ាងងាយស្រួល។`
    },
    starterCode: `-- Create a view summarizing customer orders
CREATE VIEW ActiveOrders AS
SELECT o.OrderID, c.CustomerName, o.OrderDate
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID;

-- Query from our newly created View!
SELECT * FROM ActiveOrders;`
  },
  {
    id: "mysql-data-types",
    title: { en: "MySQL Data Types", km: "ប្រភេទទិន្នន័យ Data Types" },
    content: {
      en: `### MySQL Data Types
In MySQL, each column in a database table is required to have a name and a data type.

Data types specify what type of value the column can hold:
1. **String Types:**
   - \`CHAR(size)\`: Fixed-length string.
   - \`VARCHAR(size)\`: Variable-length string.
   - \`TEXT\`: Long blocks of text (up to 65k characters).
2. **Numeric Types:**
   - \`INT\`: Standard integer numbers.
   - \`DECIMAL(size, d)\`: Exact fractional fixed-point numbers (perfect for currency).
   - \`FLOAT\` / \`DOUBLE\`: Floating-point approximate decimal numbers.
3. **Date and Time Types:**
   - \`DATE\`, \`DATETIME\`, \`TIMESTAMP\`.

> **Note:** Selecting the most compact, appropriate data type optimizes table size on disk and maximizes query performance speed.`,
      km: `### ប្រភេទទិន្នន័យ MySQL Data Types
នៅក្នុង MySQL រាល់ជួរឈរទាំងអស់នៅក្នុងតារាងមូលដ្ឋានទិន្នន័យ ត្រូវតែមានឈ្មោះ និងកំណត់ប្រភេទទិន្នន័យជាក់លាក់។

ប្រភេទទិន្នន័យកំណត់ថាតម្លៃបែបណាដែលជួរឈរនោះអាចរក្សាទុកបាន៖
1. **ប្រភេទខ្សែអក្សរ (String)៖**
   - \`CHAR(size)\`៖ ខ្សែអក្សរដែលមានប្រវែងលំនឹងថេរ។
   - \`VARCHAR(size)\`៖ ខ្សែអក្សរដែលមានប្រវែងប្រែប្រួលតាមតម្រូវការ។
   - \`TEXT\`៖ អត្ថបទវែងៗ (ផ្ទុកបានរហូតដល់ ៦៥,០០០ តួអក្សរ)។
2. **ប្រភេទលេខ (Numeric)៖**
   - \`INT\`៖ តម្លៃលេខគត់ស្តង់ដារ។
   - \`DECIMAL(size, d)\`៖ លេខទសភាគច្បាស់លាស់ (ល្អបំផុតសម្រាប់រូបិយប័ណ្ណ)។
   - \`FLOAT\` / \`DOUBLE\`៖ លេខទសភាគដែលប្រហាក់ប្រហែល។
3. **ប្រភេទកាលបរិច្ឆេទ (Date and Time)៖**
   - \`DATE\`, \`DATETIME\`, \`TIMESTAMP\`។

> **សម្គាល់:** ការជ្រើសរើសប្រភេទទិន្នន័យដែលសមស្រប និងតូចបំផុត ជួយសម្រួលដល់ទំហំផ្ទុកតារាងលើថាសរឹង និងបង្កើនល្បឿនដំណើរការសំណួរ។`
    },
    starterCode: `-- Look at database catalog types
SELECT name, type FROM sqlite_master WHERE type='table';`
  },
  {
    id: "mysql-functions",
    title: { en: "MySQL Functions", km: "អនុគមន៍ MySQL Functions" },
    content: {
      en: `### Built-in MySQL Functions
MySQL has many built-in functions for performing operations on strings, numbers, and dates.

Common Function categories:
1. **String Functions:**
   - \`CONCAT(s1, s2...)\`: Combines strings.
   - \`LOWER(s)\` / \`UPPER(s)\`: Converts text to lowercase/uppercase.
   - \`LENGTH(s)\`: Returns string length.
2. **Numeric Functions:**
   - \`ROUND(num, decimals)\`: Rounds a number.
   - \`ABS(num)\`: Returns absolute value.
3. **Date Functions:**
   - \`NOW()\`: Returns current date and time.
   - \`CURDATE()\`: Returns current date.

> **Tip:** You can write these functions directly in SELECT lists or WHERE filters to format and manipulate data on the database level.`,
      km: `### អនុគមន៍ស្រាប់ៗរបស់ MySQL (Built-in Functions)
MySQL មានអនុគមន៍ស្រាប់ៗជាច្រើនសម្រាប់អនុវត្តការងារលើ ខ្សែអក្សរ លេខ និងកាលបរិច្ឆេទ។

ប្រភេទអនុគមន៍ទូទៅ៖
1. **អនុគមន៍ខ្សែអក្សរ (String)៖**
   - \`CONCAT(s1, s2...)\`៖ ភ្ជាប់ខ្សែអក្សរចូលគ្នា។
   - \`LOWER(s)\` / \`UPPER(s)\`៖ បំប្លែងអត្ថបទទៅជាអក្សរតូច/ធំ។
   - \`LENGTH(s)\`៖ បញ្ជូនមកវិញនូវប្រវែងខ្សែអក្សរ។
2. **អនុគមន៍លេខ (Numeric)៖**
   - \`ROUND(num, decimals)\`៖ កាត់បង្គត់លេខក្បៀស។
   - \`ABS(num)\`៖ បញ្ជូនតម្លៃដាច់ខាតនៃលេខ។
3. **អនុគមន៍កាលបរិច្ឆេទ (Date)៖**
   - \`NOW()\`៖ បញ្ជូនកាលបរិច្ឆេទ និងពេលវេលាបច្ចុប្បន្ន។
   - \`CURDATE()\`៖ បញ្ជូនកាលបរិច្ឆេតបច្ចុប្បន្ន។

> **អនុសាសន៍:** អ្នកអាចសរសេរអនុគមន៍ទាំងនេះដោយផ្ទាល់នៅក្នុងបញ្ជី SELECT ឬតម្រង WHERE ដើម្បីរៀបចំ និងគ្រប់គ្រងទិន្នន័យនៅកម្រិតមូលដ្ឋានទិន្នន័យ។`
    },
    starterCode: `-- Use UPPER and LENGTH string functions
SELECT CustomerName, UPPER(CustomerName) AS UppercaseName, LENGTH(CustomerName) AS NameLength
FROM Customers;`
  }
];
