import os

content = '''import { DataAnalyticsModule, DataAnalyticsLesson } from '../types/dataAnalyticsClass';

export const DATA_ANALYTICS_CLASS_INFO = {
  id: 'data-analytics',
  title: {
    en: 'Data Analytics with Python & SQL',
    km: 'ថ្នាក់រៀន Data Analytics ជាមួយ Python & SQL',
  },
  subtitle: {
    en: 'Master data cleaning, wrangling, visualization, statistical analysis, and SQL database querying with real Cambodian e-commerce and fintech datasets.',
    km: 'ស្ទាត់ជំនាញក្នុងការសម្អាតទិន្នន័យ វិភាគ រៀបចំ Data Visualization និង Query Database ជាមួយ Python និង SQL ដោយប្រើប្រាស់ប្រព័ន្ធទិន្នន័យជាក់ស្តែង។',
  },
  rating: 4.96,
  reviewCount: 2840,
  enrolledStudents: 15200,
  badge: {
    en: 'DATA ANALYTICS MASTER',
    km: 'វគ្គសិក្សា DATA ANALYTICS MASTER',
  },
  durationWeeks: 14,
  durationHours: 65,
  totalModules: 12,
  difficulty: 'Beginner to Intermediate',
  level: {
    en: 'Beginner to Intermediate',
    km: 'កម្រិតដំបូង ដល់ មធ្យម',
  },
  certificate: {
    en: 'Verified Data Analyst Certificate',
    km: 'វិញ្ញាបនប័ត្របញ្ជាក់ការសិក្សា Data Analyst',
  },
  category: 'Data Science & Analytics',
  skillsLearned: [
    'Python 3 Fundamentals',
    'NumPy Numerical Computing',
    'Pandas Data Wrangling',
    'Data Cleaning & Formatting',
    'Matplotlib & Seaborn Charts',
    'SQL Select, Where & Joins',
    'SQL Window Functions & CTEs',
    'pandas.read_sql & Database Connectors',
    'Exploratory Data Analysis (EDA)',
    'Data Storytelling & Executive Dashboards',
    'Business Metrics & Key Performance Indicators (KPIs)',
    'E-Commerce & Fintech Analytics Capstone',
  ],
  whatYouWillLearn: [
    {
      en: 'Perform end-to-end data processing pipelines from raw files and SQL tables into actionable business insights.',
      km: 'បង្កើតដំណើរការវិភាគទិន្នន័យពេញលេញចាប់ពីទិន្នន័យឆៅ និង SQL Tables រហូតដល់ការទាញសេចក្តីសន្និដ្ឋានសម្រាប់អាជីវកម្ម។',
    },
    {
      en: 'Wrangle messy real-world datasets with Pandas, handling missing values, duplicates, and datetime conversions.',
      km: 'រៀបចំ និងសម្អាតទិន្នន័យស្មុគស្មាញជាមួយ Pandas ដោយដោះស្រាយ Missing Values, Duplicates និងការបម្លែងប្រភេទកាលបរិច្ឆេទ។',
    },
    {
      en: 'Design publication-grade visualizations with Seaborn and Matplotlib to highlight trends and anomalies.',
      km: 'បង្កើតក្រាហ្វិក និង Chart ស្អាតៗកម្រិតអាជីពជាមួយ Seaborn និង Matplotlib ដើម្បីបង្ហាញ Trend និងភាពមិនប្រក្រតីនៃទិន្នន័យ។',
    },
    {
      en: 'Query relational databases using advanced SQL joins, group aggregation, CTEs, and window analytics functions.',
      km: 'សរសេរ SQL Queries កម្រិតខ្ពស់ដោយប្រើ Joins, Grouping, CTEs និង Window Functions លើ Database។',
    },
    {
      en: 'Connect Python applications directly to SQLite and PostgreSQL databases for automated reporting.',
      km: 'ភ្ជាប់កម្មវិធី Python ដោយផ្ទាល់ទៅកាន់ SQLite និង PostgreSQL Databases សម្រាប់ការបង្កើតរបាយការណ៍ស្វ័យប្រវត្តិ។',
    },
    {
      en: 'Execute a comprehensive Exploratory Data Analysis (EDA) on Cambodian E-Commerce sales and customer behavior.',
      km: 'អនុវត្តការវិភាគ Exploratory Data Analysis (EDA) លើទិន្នន័យលក់ និងចរិតលក្ខណៈអតិថិជនក្នុងទីផ្សារ E-Commerce នៅកម្ពុជា។',
    },
  ],
};

export const DATA_ANALYTICS_MODULES: DataAnalyticsModule[] = [
  // MODULE 1: Introduction to Data Analytics & Python Setup
  {
    id: 'module-1',
    moduleNumber: 1,
    title: {
      en: 'Module 1: Introduction to Data Analytics & Python Setup',
      km: 'មូឌុលទី ១៖ ស្វែងយល់អំពី Data Analytics និងការដំឡើង Python',
    },
    description: {
      en: 'Understand the role of a data analyst, set up Python 3 environments, and run your first data inspection script.',
      km: 'យល់ដឹងពីតួនាទីរបស់ Data Analyst ការដំឡើងកម្មវិធី Python 3 និងការសរសេរ Script ដំបូងសម្រាប់ការវិភាគទិន្នន័យ។',
    },
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 1,
        title: {
          en: 'What is Data Analytics & The Data Lifecycle',
          km: 'តើអ្វីទៅជា Data Analytics និងវដ្តជីវិតនៃទិន្នន័យ (Data Lifecycle)?',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Discover how modern companies turn raw numbers into strategic decisions using the 4 main types of data analytics.',
          km: 'ស្វែងយល់ពីរបៀបដែលក្រុមហ៊ុនទំនើបបម្លែងទិន្នន័យឆៅទៅជាការសម្រេចចិត្តបែបយុទ្ធសាស្ត្រតាមរយៈប្រភេទនៃការវិភាគទិន្នន័យទាំង ៤។',
        },
        tutorial: {
          en: `### Understanding Data Analytics
Data Analytics is the science of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.

#### The 4 Types of Analytics
1. **Descriptive Analytics:** What happened? (e.g., Total sales last month in Phnom Penh was $50,000).
2. **Diagnostic Analytics:** Why did it happen? (e.g., Sales dropped due to rainy season delays).
3. **Predictive Analytics:** What is likely to happen? (e.g., Forecasting Q4 demand using historical trends).
4. **Prescriptive Analytics:** What action should we take? (e.g., Recommending stock reorders before Khmer New Year).

#### The Standard Data Analytics Workflow
\`\`\`text
Raw Data -> Collection -> Data Cleaning -> Exploration (EDA) -> Modeling/SQL -> Visualization -> Business Insight
\`\`\``,
          km: `### ការយល់ដឹងអំពី Data Analytics
Data Analytics គឺជាវិទ្យាសាស្ត្រនៃការពិនិត្យ សម្អាត បម្លែង និងវិភាគទិន្នន័យ ដើម្បីស្វែងរកព័ត៌មានដែលមានប្រយោជន៍ និងជួយដល់ការសម្រេចចិត្តក្នុងអាជីវកម្ម។

#### ប្រភេទទាំង ៤ នៃ Data Analytics
១. **Descriptive Analytics (ការវិភាគពិពណ៌នា):** តើមានអ្វីកើតឡើង? (ឧ. ការលក់សរុបខែមុននៅភ្នំពេញគឺ $50,000)។
២. **Diagnostic Analytics (ការវិភាគរកមូលហេតុ):** ហេតុអ្វីបានជាវាកើតឡើង? (ឧ. ការលក់ធ្លាក់ចុះដោយសារភ្លៀងធ្លាក់ខ្លាំង)។
៣. **Predictive Analytics (ការវិភាគទស្សន៍ទាយ):** តើអ្វីអាចនឹងកើតឡើង? (ឧ. ការព្យាករណ៍តម្រូវការទំនិញនៅត្រីមាសទី ៤)។
៤. **Prescriptive Analytics (ការវិភាគផ្តល់អនុសាសន៍):** តើត្រូវប្រកបសកម្មភាពអ្វី? (ឧ. ការណែនាំឱ្យស្តុកទំនិញបន្ថែមមុនចូលឆ្នាំខ្មែរ)។`,
        },
        codeExample: {
          code: `# Calculate total sales and average transaction amount
sales_data = [120, 450, 310, 890, 220, 640]
total_revenue = sum(sales_data)
avg_transaction = total_revenue / len(sales_data)

print(f"Total Sales Revenue: \\\${total_revenue}")
print(f"Average Transaction Value: \\\${avg_transaction:.2f}")`,
          language: 'python',
          title: {
            en: 'Basic Descriptive Analysis in Python',
            km: 'ការវិភាគបែប Descriptive មូលដ្ឋានក្នុង Python',
          },
          description: {
            en: 'Calculate key financial summary metrics using native Python numerical operations.',
            km: 'គណនាសូចនាករសរុបផ្នែកហិរញ្ញវត្ថុដោយប្រើកូដ Python គណនាប្រាក់ចំណូល និងមធ្យមភាគ។',
          },
        },
        outputPreview: {
          output: `Total Sales Revenue: $2630
Average Transaction Value: $438.33`,
          explanation: {
            en: 'The script sums up six transaction items and divides by the count to get the mean value.',
            km: 'Script នេះបូកសរុបប្រតិបត្តិការចំនួន ៦ និងចែកនឹងចំនួនសរុបដើម្បីទាញរកតម្លៃមធ្យមភាគ។',
          },
        },
        tryItYourself: {
          starterCode: `# Calculate total orders and total revenue for Phnom Penh Branch
orders = [45, 120, 85, 210, 95]
unit_price = 15.5

total_orders = sum(orders)
total_revenue = total_orders * unit_price

print("Total Items Sold:", total_orders)
print("Total Branch Revenue: $", total_revenue)`,
          expectedOutput: `Total Items Sold: 555
Total Branch Revenue: $ 8602.5`,
          language: 'python',
          hints: [
            {
              en: 'Click Run Code to execute the Python script.',
              km: 'ចុច Run Code ដើម្បីដំណើរការកូដ Python។',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: {
              en: 'Which analytics type answers the question "Why did sales decrease last month?"',
              km: 'តើប្រភេទវិភាគទិន្នន័យមួយណាដែលឆ្លើយនឹងសំណួរ "ហេតុអ្វីបានជាការលក់ធ្លាក់ចុះកាលពីខែមុន?"',
            },
            options: [
              { id: 'a', text: { en: 'Descriptive Analytics', km: 'Descriptive Analytics' }, isCorrect: false },
              { id: 'b', text: { en: 'Diagnostic Analytics', km: 'Diagnostic Analytics' }, isCorrect: true },
              { id: 'c', text: { en: 'Predictive Analytics', km: 'Predictive Analytics' }, isCorrect: false },
              { id: 'd', text: { en: 'Prescriptive Analytics', km: 'Prescriptive Analytics' }, isCorrect: false },
            ],
            explanation: {
              en: 'Diagnostic Analytics investigates root causes behind historical patterns.',
              km: 'Diagnostic Analytics ផ្តោតលើការស្រាវជ្រាវស្វែងរកមូលហេតុពីក្រោយព្រឹត្តិការណ៍ដែលបានកើតឡើង។',
            },
          },
        ],
      },
      {
        id: 'm1-l2',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 2,
        title: {
          en: 'Setting Up Python 3, Jupyter Notebooks & VS Code',
          km: 'ការដំឡើង Python 3, Jupyter Notebooks និង VS Code',
        },
        durationMinutes: 30,
        difficulty: 'Beginner',
        description: {
          en: 'Configure Python 3 virtual environments, install data science packages via pip, and navigate Jupyter notebooks.',
          km: 'រៀនពីរបៀបដំឡើង Virtual Environments, pip install data science packages និងការប្រើប្រាស់ Jupyter Notebooks។',
        },
        tutorial: {
          en: `### Setting Up Your Data Science Workstation
A Data Analyst relies on interactive coding environments like Jupyter Notebooks and VS Code to explore datasets step by step.

#### Essential Packages for Analytics:
- **NumPy:** High-performance numerical vector arrays.
- **Pandas:** DataFrames and data wrangling tools.
- **Matplotlib & Seaborn:** Statistical data visualization.
- **SQLAlchemy:** Database connectivity for SQL queries.

#### Package Installation Command:
\`\`\`bash
pip install numpy pandas matplotlib seaborn sqlalchemy
\`\`\``,
          km: `### ការរៀបចំដំឡើងបរិស្ថានការងារ Data Science
Data Analyst ប្រើប្រាស់បរិស្ថានកូដ Interactive ដូចជា Jupyter Notebooks និង VS Code ដើម្បីពិនិត្យទិន្នន័យជំហានៗ។

#### Packages សំខាន់ៗសម្រាប់ Analytics៖
- **NumPy:** ការគណនាគណិតវិទ្យាល្បឿនលឿនលើ Array
- **Pandas:** គ្របដណ្តប់ DataFrames និងការសម្អាតទិន្នន័យ
- **Matplotlib & Seaborn:** ការបង្កើត Chart និង Plot
- **SQLAlchemy:** ការភ្ជាប់ទៅកាន់ Database`,
        },
        codeExample: {
          code: `# Verify library installations and inspect version numbers
import sys
import numpy as np
import pandas as pd

print("Python Version:", sys.version.split()[0])
print("NumPy Version:", np.__version__)
print("Pandas Version:", pd.__version__)`,
          language: 'python',
          title: {
            en: 'Verifying Package Installation',
            km: 'ការពិនិត្យមើល Version នៃ Packages ដែលបានដំឡើង',
          },
          description: {
            en: 'Checks that Python, NumPy, and Pandas are installed and working correctly.',
            km: 'ពិនិត្យមើលថាតើ Python, NumPy, និង Pandas ត្រូវបានដំឡើងត្រឹមត្រូវឬទេ។',
          },
        },
        outputPreview: {
          output: `Python Version: 3.11.4
NumPy Version: 1.24.3
Pandas Version: 2.0.2`,
          explanation: {
            en: 'Confirms active installation of essential data science dependencies.',
            km: 'បញ្ជាក់ការដំឡើងជោគជ័យនៃ dependencies សំខាន់ៗ។',
          },
        },
        tryItYourself: {
          starterCode: `import math

# Test standard library math functions for data scaling
values = [100, 250, 400, 900]
sqrt_values = [math.sqrt(v) for v in values]

print("Original Values:", values)
print("Square Root Scaled:", sqrt_values)`,
          expectedOutput: `Original Values: [100, 250, 400, 900]
Square Root Scaled: [10.0, 15.811388300841896, 20.0, 30.0]`,
          language: 'python',
          hints: [
            {
              en: 'Math functions process individual values in a loop or list comprehension.',
              km: 'Math functions គណនាតម្លៃនីមួយៗក្នុង list comprehension។',
            },
          ],
        },
        quiz: [
          {
            id: 'q2',
            question: {
              en: 'Which package management tool is standard for installing Python packages like Pandas?',
              km: 'តើកម្មវិធីគ្រប់គ្រង Package មួយណាជាស្តង់ដារសម្រាប់ដំឡើង Python packages ដូចជា Pandas?',
            },
            options: [
              { id: 'a', text: { en: 'npm', km: 'npm' }, isCorrect: false },
              { id: 'b', text: { en: 'pip', km: 'pip' }, isCorrect: true },
              { id: 'c', text: { en: 'git', km: 'git' }, isCorrect: false },
              { id: 'd', text: { en: 'brew', km: 'brew' }, isCorrect: false },
            ],
            explanation: {
              en: 'pip is Python\'s official package installer.',
              km: 'pip គឺជាកម្មវិធីផ្លូវការសម្រាប់ដំឡើង Python packages។',
            },
          },
        ],
      },
      {
        id: 'm1-l3',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 3,
        title: {
          en: 'Writing Your First Analytics Script & Variable Data Types',
          km: 'ការសរសេរ Script វិភាគដំបូង និងប្រភេទ Variable Data Types',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Master Python primitive types (int, float, str, bool) and format sales metrics dynamically.',
          km: 'ស្ទាត់ជំនាញប្រភេទ Python Primitive Data Types និងការរៀបចំទម្រង់លទ្ធផលលក់ឌីណាមិក។',
        },
        tutorial: {
          en: `### Primitive Data Types in Data Analytics
Data Analyst workflows revolve around correctly casting and operating on data types:
- **Integers (\`int\`):** Whole counts (e.g., number of orders: 150).
- **Floating Points (\`float\`):** Monetary or continuous values (e.g., unit price: 12.50).
- **Strings (\`str\`):** Text fields, customer names, or order status tags.
- **Booleans (\`bool\`):** True/False flags indicating completed vs cancelled transactions.`,
          km: `### ប្រភេទ Data Types ក្នុង Data Analytics
- **Integers (\`int\`):** ចំនួនគត់ (ឧ. ចំនួនការបញ្ជាទិញ៖ 150)
- **Floating Points (\`float\`):** ចំនួនទសភាគ/ប្រាក់ (ឧ. តម្លៃទំនិញ៖ 12.50)
- **Strings (\`str\`):** អក្សរ/ឈ្មោះទីក្រុង
- **Booleans (\`bool\`):** តម្លៃ ពិត (True) ឬ ភូត (False)`,
        },
        codeExample: {
          code: `# Order record details
order_id = "KH-9021"
item_count = 4
unit_price = 24.99
is_express_shipping = True

subtotal = item_count * unit_price
shipping_fee = 2.50 if is_express_shipping else 0.0
total_bill = subtotal + shipping_fee

print(f"Invoice [{order_id}]:")
print(f"Subtotal: \\\${subtotal:.2f}")
print(f"Shipping Fee: \\\${shipping_fee:.2f}")
print(f"Total Due: \\\${total_bill:.2f}")`,
          language: 'python',
          title: {
            en: 'Order Invoice Calculation',
            km: 'ការគណនាវិក្កយបត្របញ្ជាទិញ',
          },
          description: {
            en: 'Combines integer counts, floating prices, string IDs, and boolean flags.',
            km: 'បូកបញ្ចូន integer, float, string និង boolean flags។',
          },
        },
        outputPreview: {
          output: `Invoice [KH-9021]:
Subtotal: $99.96
Shipping Fee: $2.50
Total Due: $102.46`,
          explanation: {
            en: 'Calculates the invoice summary with formatted decimals.',
            km: 'បង្ហាញសង្ខេបវិក្កយបត្រដែលមានទសភាគត្រឹមត្រូវ។',
          },
        },
        tryItYourself: {
          starterCode: `base_salary = 450.00
bonus_percentage = 0.12 # 12% bonus
tax_rate = 0.05 # 5% tax

gross = base_salary * (1 + bonus_percentage)
net_pay = gross * (1 - tax_rate)

print(f"Gross Pay: \\\${gross:.2f}")
print(f"Net Pay after Tax: \\\${net_pay:.2f}")`,
          expectedOutput: `Gross Pay: $504.00
Net Pay after Tax: $478.80`,
          language: 'python',
          hints: [
            {
              en: 'Apply percentages to calculate gross and net pay.',
              km: 'គុណភាគរយដើម្បីទាញរក Gross និង Net pay។',
            },
          ],
        },
        quiz: [
          {
            id: 'q3',
            question: {
              en: 'What data type is returned by the expression 10 / 2 in Python 3?',
              km: 'តើ Expression 10 / 2 បញ្ជូនប្រភេទ Data Type មួយណា ក្នុង Python 3?',
            },
            options: [
              { id: 'a', text: { en: 'int', km: 'int' }, isCorrect: false },
              { id: 'b', text: { en: 'float', km: 'float' }, isCorrect: true },
              { id: 'c', text: { en: 'str', km: 'str' }, isCorrect: false },
              { id: 'd', text: { en: 'bool', km: 'bool' }, isCorrect: false },
            ],
            explanation: {
              en: 'Standard division / always returns a float in Python 3 (5.0).',
              km: 'ការចែកធម្មតា / បញ្ជូនតម្លៃ float (5.0) ជានិច្ចក្នុង Python 3។',
            },
          },
        ],
      },
    ],
  },
];
'''

# We will generate all 12 modules completely in python script and write to src/data/dataAnalyticsClassData.ts!
print("Script scaffolded")
