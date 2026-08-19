import { ReferenceItem, Quiz, MiniProject } from '../types';

export const mysqlReferences: ReferenceItem[] = [
  {
    id: "ref-mysql-select",
    syntax: "SELECT col1, col2 FROM table_name WHERE condition ORDER BY col1 DESC LIMIT 10;",
    desc: {
      en: "Retrieves specific columns, filters with WHERE, sorts descending, and limits records.",
      km: "ទាញយកជួរឈរជាក់លាក់ ច្រោះតាមលក្ខខណ្ឌ WHERE តម្រៀបតាមលំដាប់ចុះ និងកំណត់ចំនួនទិន្នន័យ។"
    },
    example: "SELECT CustomerName, City FROM Customers WHERE Country='Germany' ORDER BY CustomerName DESC LIMIT 2;"
  },
  {
    id: "ref-mysql-insert",
    syntax: "INSERT INTO table_name (col1, col2) VALUES (val1, val2);",
    desc: {
      en: "Inserts a new record with corresponding column values into a table.",
      km: "បញ្ចូលកំណត់ត្រាថ្មីទៅក្នុងតារាងជាមួយតម្លៃទៅតាមជួរឈរនីមួយៗ។"
    },
    example: "INSERT INTO Customers (CustomerName, City, Country) VALUES ('SabayCode', 'Phnom Penh', 'Cambodia');"
  },
  {
    id: "ref-mysql-update",
    syntax: "UPDATE table_name SET col1 = val1 WHERE condition;",
    desc: {
      en: "Updates existing columns in matching rows. ALWAYS specify a WHERE filter!",
      km: "កែប្រែទិន្នន័យជួរឈរដែលមានស្រាប់។ ត្រូវបញ្ជាក់លក្ខខណ្ឌ WHERE ជានិច្ច!"
    },
    example: "UPDATE Customers SET ContactName = 'Bona' WHERE CustomerID = 3;"
  },
  {
    id: "ref-mysql-delete",
    syntax: "DELETE FROM table_name WHERE condition;",
    desc: {
      en: "Permanently deletes matching rows from a table. ALWAYS specify a WHERE filter!",
      km: "លុបកំណត់ត្រាដែលត្រូវគ្នាចេញពីតារាងជាអចិន្ត្រៃយ៍។ ត្រូវបញ្ជាក់លក្ខខណ្ឌ WHERE ជានិច្ច!"
    },
    example: "DELETE FROM Customers WHERE CustomerID = 5;"
  },
  {
    id: "ref-mysql-join",
    syntax: "SELECT t1.col, t2.col FROM t1 INNER JOIN t2 ON t1.key = t2.key;",
    desc: {
      en: "Combines records from two tables based on a matching foreign-primary key relationship.",
      km: "រួមបញ្ចូលគ្នានូវកំណត់ត្រាពីតារាងពីរ ដោយផ្អែកលើទំនាក់ទំនងសោក្រៅ និងសោចម្បង។"
    },
    example: "SELECT o.OrderID, c.CustomerName FROM Orders o INNER JOIN Customers c ON o.CustomerID = c.CustomerID;"
  },
  {
    id: "ref-mysql-create-table",
    syntax: "CREATE TABLE name (col1 INT PRIMARY KEY AUTO_INCREMENT, col2 VARCHAR(100) NOT NULL);",
    desc: {
      en: "Creates a new table structure with data types and column constraints.",
      km: "បង្កើតរចនាសម្ព័ន្ធតារាងថ្មីមួយ ជាមួយនឹងប្រភេទទិន្នន័យ និងលក្ខខណ្ឌជួរឈរ។"
    },
    example: "CREATE TABLE Employees (EmployeeID INTEGER PRIMARY KEY AUTO_INCREMENT, Name TEXT NOT NULL);"
  }
];

export const mysqlQuizzes: Quiz[] = [
  {
    id: "mysql-q1",
    question: {
      en: "Which of the following joins returns all rows from the left table, even if there are no matches in the right table?",
      km: "តើការតភ្ជាប់ (Join) មួយណាខាងក្រោមដែលបញ្ជូនរាល់ជួរដេកទាំងអស់ពីតារាងខាងឆ្វេង ទោះបីជាគ្មានទិន្នន័យត្រូវគ្នានៅខាងស្តាំក៏ដោយ?"
    },
    options: {
      en: [
        "INNER JOIN",
        "RIGHT JOIN",
        "LEFT JOIN",
        "CROSS JOIN"
      ],
      km: [
        "INNER JOIN",
        "RIGHT JOIN",
        "LEFT JOIN",
        "CROSS JOIN"
      ]
    },
    correctIndex: 2,
    explanation: {
      en: "LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table. The result is NULL from the right side if there is no match.",
      km: "LEFT JOIN បញ្ជូនរាល់កំណត់ត្រាទាំងអស់ពីតារាងខាងឆ្វេង និងកំណត់ត្រាដែលត្រូវគ្នាពីតារាងខាងស្តាំ។ លទ្ធផលនឹងបង្ហាញជា NULL នៅខាងស្តាំ ប្រសិនបើគ្មានតម្លៃត្រូវគ្នា។"
    }
  },
  {
    id: "mysql-q2",
    question: {
      en: "What happens if you run an UPDATE query without specifying a WHERE clause?",
      km: "តើនឹងមានអ្វីកើតឡើង ប្រសិនបើអ្នកដំណើរការសំណួរ UPDATE ដោយមិនបានបញ្ជាក់លក្ខខណ្ឌ WHERE?"
    },
    options: {
      en: [
        "The query returns a compilation syntax error.",
        "Only the first record in the table gets updated.",
        "No records are updated.",
        "ALL records in the table will be updated with the new values."
      ],
      km: [
        "សំណួរនឹងបង្ហាញកំហុសវាក្យសម្ពន្ធ (Syntax Error)។",
        "មានតែកំណត់ត្រាដំបូងបង្អស់ប៉ុណ្ណោះដែលត្រូវបានកែប្រែ។",
        "គ្មានកំណត់ត្រាណាមួយត្រូវបានកែប្រែឡើយ។",
        "រាល់កំណត់ត្រាទាំងអស់ (ALL) នៅក្នុងតារាងនឹងត្រូវកែប្រែទៅជាតម្លៃថ្មីស្មើគ្នាទាំងអស់។"
      ]
    },
    correctIndex: 3,
    explanation: {
      en: "Omitting the WHERE clause in UPDATE or DELETE statements applies the change to all rows in the table. This can destroy database consistency and must be done with caution.",
      km: "ការភ្លេចសរសេរឃ្លា WHERE នៅក្នុងប្រយោគ UPDATE ឬ DELETE នឹងធ្វើឱ្យការផ្លាស់ប្តូរនោះជះឥទ្ធិពលលើគ្រប់ជួរដេកទាំងអស់នៃតារាង ដែលអាចបំផ្លាញទិន្នន័យទាំងស្រុង។"
    }
  },
  {
    id: "mysql-q3",
    question: {
      en: "Which aggregate function is used to calculate the average value of a numeric column?",
      km: "តើអនុគមន៍បូកសរុប (Aggregate Function) មួយណាដែលត្រូវបានប្រើដើម្បីគណនាតម្លៃមធ្យមនៃជួរឈរលេខ?"
    },
    options: {
      en: [
        "SUM()",
        "AVG()",
        "MEAN()",
        "COUNT()"
      ],
      km: [
        "SUM()",
        "AVG()",
        "MEAN()",
        "COUNT()"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "The AVG() function returns the average value of a numeric column. MEAN() is not a valid standard SQL function.",
      km: "អនុគមន៍ AVG() បញ្ជូនត្រឡប់មកវិញនូវតម្លៃមធ្យមនៃជួរឈរលេខ។ ចំណែកឯ MEAN() មិនមែនជាអនុគមន៍ស្តង់ដារក្នុង SQL ឡើយ។"
    }
  },
  {
    id: "mysql-q4",
    question: {
      en: "Which keyword is used to ensure a column does not accept any empty or missing values?",
      km: "តើពាក្យគន្លឹះមួយណាដែលប្រើប្រាស់ដើម្បីធានាថាជួរឈរមិនអាចទទួលយកតម្លៃទទេ ឬបាត់បង់បាន?"
    },
    options: {
      en: [
        "UNIQUE",
        "DEFAULT",
        "NOT NULL",
        "PRIMARY KEY"
      ],
      km: [
        "UNIQUE",
        "DEFAULT",
        "NOT NULL",
        "PRIMARY KEY"
      ]
    },
    correctIndex: 2,
    explanation: {
      en: "The NOT NULL constraint enforces a column to reject NULL values, making it a mandatory field for data insertion.",
      km: "លក្ខខណ្ឌ NOT NULL បង្ខំឱ្យជួរឈរមិនទទួលយកតម្លៃ NULL ឡើយ ដែលធ្វើឱ្យវាក្លាយជាប្រអប់ទិន្នន័យដែលចាំបាច់ត្រូវតែបំពេញ។"
    }
  }
];

export const mysqlMiniProjects: MiniProject[] = [
  {
    id: "mysql-exercise-joins",
    title: {
      en: "Customer Order Value Tracker",
      km: "ប្រព័ន្ធស្វែងរកទិន្នន័យការបញ្ជាទិញទំនិញ"
    },
    desc: {
      en: "Write an SQL query to join the Customers, Orders, and Products tables. Display the CustomerName, OrderID, and Price of the product ordered. Filter the results to only include orders where the product Price is greater than 15.00, and sort the results by Price in descending order.",
      km: "សរសេរសំណួរ SQL ដើម្បីភ្ជាប់តារាង Customers, Orders, និង Products ចូលគ្នា។ បង្ហាញព័ត៌មាន CustomerName, OrderID, និង Price របស់ទំនិញដែលបានបញ្ជាទិញ។ ច្រោះយកតែការបញ្ជាទិញណាដែលទំនិញមានតម្លៃធំជាង ១៥.០០ ដុល្លារ និងតម្រៀបតាមតម្លៃលំដាប់ចុះ។"
    },
    starterCode: `-- Write your SQL query here
-- Join Customers, Orders, and Products
-- Filter Price > 15.00
-- Sort by Price DESC
`,
    solutionCode: `-- Correct SQL Solution
SELECT c.CustomerName, o.OrderID, p.Price
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN Products p ON o.EmployeeID = p.ProductID -- Simulating relationship link
WHERE p.Price > 15.00
ORDER BY p.Price DESC;`
  }
];
