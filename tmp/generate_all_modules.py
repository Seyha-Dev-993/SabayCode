import json

ts_content = '''import { DataAnalyticsModule, DataAnalyticsLesson } from '../types/dataAnalyticsClass';

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
'''

# Define all 12 modules data structures
modules_data = [
  # Module 1
  {
    "id": "module-1",
    "moduleNumber": 1,
    "title": {
      "en": "Module 1: Introduction to Data Analytics & Python Setup",
      "km": "មូឌុលទី ១៖ ស្វែងយល់អំពី Data Analytics និងការដំឡើង Python"
    },
    "description": {
      "en": "Understand the role of a data analyst, set up Python 3 environments, and run your first data inspection script.",
      "km": "យល់ដឹងពីតួនាទីរបស់ Data Analyst ការដំឡើងកម្មវិធី Python 3 និងការសរសេរ Script ដំបូងសម្រាប់ការវិភាគទិន្នន័យ។"
    },
    "lessons": [
      {
        "id": "m1-l1", "moduleId": "module-1", "moduleNumber": 1, "lessonNumber": 1,
        "title": {"en": "What is Data Analytics & The Data Lifecycle", "km": "តើអ្វីទៅជា Data Analytics និងវដ្តជីវិតនៃទិន្នន័យ (Data Lifecycle)?"},
        "durationMinutes": 25, "difficulty": "Beginner",
        "description": {"en": "Discover how modern companies turn raw numbers into strategic decisions using the 4 main types of data analytics.", "km": "ស្វែងយល់ពីរបៀបដែលក្រុមហ៊ុនទំនើបបម្លែងទិន្នន័យឆៅទៅជាការសម្រេចចិត្តបែបយុទ្ធសាស្ត្រតាមរយៈប្រភេទនៃការវិភាគទិន្នន័យទាំង ៤។"},
        "tutorial": {
          "en": "### Understanding Data Analytics\nData Analytics is the science of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.\n\n#### The 4 Types of Analytics\n1. **Descriptive Analytics:** What happened? (e.g., Total sales last month in Phnom Penh was $50,000).\n2. **Diagnostic Analytics:** Why did it happen? (e.g., Sales dropped due to rainy season delays).\n3. **Predictive Analytics:** What is likely to happen? (e.g., Forecasting Q4 demand using historical trends).\n4. **Prescriptive Analytics:** What action should we take? (e.g., Recommending stock reorders before Khmer New Year).\n\n#### The Standard Data Analytics Workflow\n```text\nRaw Data -> Collection -> Data Cleaning -> Exploration (EDA) -> Modeling/SQL -> Visualization -> Business Insight\n```",
          "km": "### ការយល់ដឹងអំពី Data Analytics\nData Analytics គឺជាវិទ្យាសាស្ត្រនៃការពិនិត្យ សម្អាត បម្លែង និងវិភាគទិន្នន័យ ដើម្បីស្វែងរកព័ត៌មានដែលមានប្រយោជន៍ និងជួយដល់ការសម្រេចចិត្តក្នុងអាជីវកម្ម។\n\n#### ប្រភេទទាំង ៤ នៃ Data Analytics\n១. **Descriptive Analytics (ការវិភាគពិពណ៌នា):** តើមានអ្វីកើតឡើង? (ឧ. ការលក់សរុបខែមុននៅភ្នំពេញគឺ $50,000)។\n២. **Diagnostic Analytics (ការវិភាគរកមូលហេតុ):** ហេតុអ្វីបានជាវាកើតឡើង? (ឧ. ការលក់ធ្លាក់ចុះដោយសារភ្លៀងធ្លាក់ខ្លាំង)។\n៣. **Predictive Analytics (ការវិភាគទស្សន៍ទាយ):** តើអ្វីអាចនឹងកើតឡើង? (ឧ. ការព្យាករណ៍តម្រូវការទំនិញនៅត្រីមាសទី ៤)។\n៤. **Prescriptive Analytics (ការវិភាគផ្តល់អនុសាសន៍):** តើត្រូវប្រកបសកម្មភាពអ្វី? (ឧ. ការណែនាំឱ្យស្តុកទំនិញបន្ថែមមុនចូលឆ្នាំខ្មែរ)។"
        },
        "codeExample": {
          "code": "# Calculate total sales and average transaction amount\nsales_data = [120, 450, 310, 890, 220, 640]\ntotal_revenue = sum(sales_data)\navg_transaction = total_revenue / len(sales_data)\n\nprint(f\"Total Sales Revenue: ${total_revenue}\")\nprint(f\"Average Transaction Value: ${avg_transaction:.2f}\")",
          "language": "python",
          "title": {"en": "Basic Descriptive Analysis in Python", "km": "ការវិភាគបែប Descriptive មូលដ្ឋានក្នុង Python"},
          "description": {"en": "Calculate key financial summary metrics using native Python numerical operations.", "km": "គណនាសូចនាករសរុបផ្នែកហិរញ្ញវត្ថុដោយប្រើកូដ Python គណនាប្រាក់ចំណូល និងមធ្យមភាគ។"}
        },
        "outputPreview": {
          "output": "Total Sales Revenue: $2630\nAverage Transaction Value: $438.33",
          "explanation": {"en": "The script sums up six transaction items and divides by the count to get the mean value.", "km": "Script នេះបូកសរុបប្រតិបត្តិការចំនួន ៦ និងចែកនឹងចំនួនសរុបដើម្បីទាញរកតម្លៃមធ្យមភាគ។"}
        },
        "tryItYourself": {
          "starterCode": "# Calculate total orders and total revenue for Phnom Penh Branch\norders = [45, 120, 85, 210, 95]\nunit_price = 15.5\n\ntotal_orders = sum(orders)\ntotal_revenue = total_orders * unit_price\n\nprint(\"Total Items Sold:\", total_orders)\nprint(\"Total Branch Revenue: $\", total_revenue)",
          "expectedOutput": "Total Items Sold: 555\nTotal Branch Revenue: $ 8602.5",
          "language": "python",
          "hints": [{"en": "Click Run Code to execute the Python script.", "km": "ចុច Run Code ដើម្បីដំណើរការកូដ Python។"}]
        },
        "quiz": [
          {
            "id": "q1",
            "question": {"en": "Which analytics type answers the question 'Why did sales decrease last month?'", "km": "តើប្រភេទវិភាគទិន្នន័យមួយណាដែលឆ្លើយនឹងសំណួរ 'ហេតុអ្វីបានជាការលក់ធ្លាក់ចុះកាលពីខែមុន?'"},
            "options": [
              {"id": "a", "text": {"en": "Descriptive Analytics", "km": "Descriptive Analytics"}, "isCorrect": False},
              {"id": "b", "text": {"en": "Diagnostic Analytics", "km": "Diagnostic Analytics"}, "isCorrect": True},
              {"id": "c", "text": {"en": "Predictive Analytics", "km": "Predictive Analytics"}, "isCorrect": False},
              {"id": "d", "text": {"en": "Prescriptive Analytics", "km": "Prescriptive Analytics"}, "isCorrect": False}
            ],
            "explanation": {"en": "Diagnostic Analytics investigates root causes behind historical patterns.", "km": "Diagnostic Analytics ផ្តោតលើការស្រាវជ្រាវស្វែងរកមូលហេតុពីក្រោយព្រឹត្តិការណ៍ដែលបានកើតឡើង។"}
          }
        ]
      },
      {
        "id": "m1-l2", "moduleId": "module-1", "moduleNumber": 1, "lessonNumber": 2,
        "title": {"en": "Setting Up Python 3, Jupyter Notebooks & VS Code", "km": "ការដំឡើង Python 3, Jupyter Notebooks និង VS Code"},
        "durationMinutes": 30, "difficulty": "Beginner",
        "description": {"en": "Configure Python 3 virtual environments, install data science packages via pip, and navigate Jupyter notebooks.", "km": "រៀនពីរបៀបដំឡើង Virtual Environments, pip install data science packages និងការប្រើប្រាស់ Jupyter Notebooks។"},
        "tutorial": {
          "en": "### Setting Up Your Data Science Workstation\nA Data Analyst relies on interactive coding environments like Jupyter Notebooks and VS Code to explore datasets step by step.\n\n#### Essential Packages for Analytics:\n- **NumPy:** High-performance numerical vector arrays.\n- **Pandas:** DataFrames and data wrangling tools.\n- **Matplotlib & Seaborn:** Statistical data visualization.\n- **SQLAlchemy:** Database connectivity for SQL queries.\n\n#### Package Installation Command:\n```bash\npip install numpy pandas matplotlib seaborn sqlalchemy\n```",
          "km": "### ការរៀបចំដំឡើងបរិស្ថានការងារ Data Science\nData Analyst ប្រើប្រាស់បរិស្ថានកូដ Interactive ដូចជា Jupyter Notebooks និង VS Code ដើម្បីពិនិត្យទិន្នន័យជំហានៗ។\n\n#### Packages សំខាន់ៗសម្រាប់ Analytics៖\n- **NumPy:** ការគណនាគណិតវិទ្យាល្បឿនលឿនលើ Array\n- **Pandas:** គ្របដណ្តប់ DataFrames និងការសម្អាតទិន្នន័យ\n- **Matplotlib & Seaborn:** ការបង្កើត Chart និង Plot\n- **SQLAlchemy:** ការភ្ជាប់ទៅកាន់ Database"
        },
        codeExample: {
          "code": "# Verify library installations and inspect version numbers\nimport sys\nimport numpy as np\nimport pandas as pd\n\nprint(\"Python Version:\", sys.version.split()[0])\nprint(\"NumPy Version:\", np.__version__)\nprint(\"Pandas Version:\", pd.__version__)",
          "language": "python",
          "title": {"en": "Verifying Package Installation", "km": "ការពិនិត្យមើល Version នៃ Packages ដែលបានដំឡើង"},
          "description": {"en": "Checks that Python, NumPy, and Pandas are installed and working correctly.", "km": "ពិនិត្យមើលថាតើ Python, NumPy, និង Pandas ត្រូវបានដំឡើងត្រឹមត្រូវឬទេ។"}
        },
        outputPreview: {
          "output": "Python Version: 3.11.4\nNumPy Version: 1.24.3\nPandas Version: 2.0.2",
          "explanation": {"en": "Confirms active installation of essential data science dependencies.", "km": "បញ្ជាក់ការដំឡើងជោគជ័យនៃ dependencies សំខាន់ៗ។"}
        },
        tryItYourself: {
          "starterCode": "import math\n\n# Test standard library math functions for data scaling\nvalues = [100, 250, 400, 900]\nsqrt_values = [math.sqrt(v) for v in values]\n\nprint(\"Original Values:\", values)\nprint(\"Square Root Scaled:\", sqrt_values)",
          "expectedOutput": "Original Values: [100, 250, 400, 900]\nSquare Root Scaled: [10.0, 15.811388300841896, 20.0, 30.0]",
          "language": "python",
          "hints": [{"en": "Math functions process individual values in a loop or list comprehension.", "km": "Math functions គណនាតម្លៃនីមួយៗក្នុង list comprehension។"}]
        },
        "quiz": [
          {
            "id": "q2",
            "question": {"en": "Which package management tool is standard for installing Python packages like Pandas?", "km": "តើកម្មវិធីគ្រប់គ្រង Package មួយណាជាស្តង់ដារសម្រាប់ដំឡើង Python packages ដូចជា Pandas?"},
            "options": [
              {"id": "a", "text": {"en": "npm", "km": "npm"}, "isCorrect": False},
              {"id": "b", "text": {"en": "pip", "km": "pip"}, "isCorrect": True},
              {"id": "c", "text": {"en": "git", "km": "git"}, "isCorrect": False},
              {"id": "d", "text": {"en": "brew", "km": "brew"}, "isCorrect": False}
            ],
            "explanation": {"en": "pip is Python's official package installer.", "km": "pip គឺជាកម្មវិធីផ្លូវការសម្រាប់ដំឡើង Python packages។"}
          }
        ]
      },
      {
        "id": "m1-l3", "moduleId": "module-1", "moduleNumber": 1, "lessonNumber": 3,
        "title": {"en": "Writing Your First Analytics Script & Variable Data Types", "km": "ការសរសេរ Script វិភាគដំបូង និងប្រភេទ Variable Data Types"},
        "durationMinutes": 25, "difficulty": "Beginner",
        "description": {"en": "Master Python primitive types (int, float, str, bool) and format sales metrics dynamically.", "km": "ស្ទាត់ជំនាញប្រភេទ Python Primitive Data Types និងការរៀបចំទម្រង់លទ្ធផលលក់ឌីណាមិក។"},
        "tutorial": {
          "en": "### Primitive Data Types in Data Analytics\nData Analyst workflows revolve around correctly casting and operating on data types:\n- **Integers (`int`):** Whole counts (e.g., number of orders: 150).\n- **Floating Points (`float`):** Monetary or continuous values (e.g., unit price: 12.50).\n- **Strings (`str`):** Text fields, customer names, or order status tags.\n- **Booleans (`bool`):** True/False flags indicating completed vs cancelled transactions.",
          "km": "### ប្រភេទ Data Types ក្នុង Data Analytics\n- **Integers (`int`):** ចំនួនគត់ (ឧ. ចំនួនការបញ្ជាទិញ៖ 150)\n- **Floating Points (`float`):** ចំនួនទសភាគ/ប្រាក់ (ឧ. តម្លៃទំនិញ៖ 12.50)\n- **Strings (`str`):** អក្សរ/ឈ្មោះទីក្រុង\n- **Booleans (`bool`):** តម្លៃ ពិត (True) ឬ ភូត (False)"
        },
        codeExample: {
          "code": "# Order record details\norder_id = \"KH-9021\"\nitem_count = 4\nunit_price = 24.99\nis_express_shipping = True\n\nsubtotal = item_count * unit_price\nshipping_fee = 2.50 if is_express_shipping else 0.0\ntotal_bill = subtotal + shipping_fee\n\nprint(f\"Invoice [{order_id}]:\")\nprint(f\"Subtotal: ${subtotal:.2f}\")\nprint(f\"Shipping Fee: ${shipping_fee:.2f}\")\nprint(f\"Total Due: ${total_bill:.2f}\")",
          "language": "python",
          "title": {"en": "Order Invoice Calculation", "km": "ការគណនាវិក្កយបត្របញ្ជាទិញ"},
          "description": {"en": "Combines integer counts, floating prices, string IDs, and boolean flags.", "km": "បូកបញ្ចូន integer, float, string និង boolean flags។"}
        },
        outputPreview: {
          "output": "Invoice [KH-9021]:\nSubtotal: $99.96\nShipping Fee: $2.50\nTotal Due: $102.46",
          "explanation": {"en": "Calculates the invoice summary with formatted decimals.", "km": "បង្ហាញសង្ខេបវិក្កយបត្រដែលមានទសភាគត្រឹមត្រូវ។"}
        },
        tryItYourself: {
          starterCode: "base_salary = 450.00\nbonus_percentage = 0.12 # 12% bonus\ntax_rate = 0.05 # 5% tax\n\ngross = base_salary * (1 + bonus_percentage)\nnet_pay = gross * (1 - tax_rate)\n\nprint(f\"Gross Pay: ${gross:.2f}\")\nprint(f\"Net Pay after Tax: ${net_pay:.2f}\")",
          expectedOutput": "Gross Pay: $504.00\nNet Pay after Tax: $478.80",
          language: "python",
          hints: [{"en": "Apply percentages to calculate gross and net pay.", "km": "គុណភាគរយដើម្បីទាញរក Gross និង Net pay។"}]
        },
        "quiz": [
          {
            "id": "q3",
            "question": {"en": "What data type is returned by the expression 10 / 2 in Python 3?", "km": "តើ Expression 10 / 2 បញ្ជូនប្រភេទ Data Type មួយណា ក្នុង Python 3?"},
            "options": [
              {"id": "a", "text": {"en": "int", "km": "int"}, "isCorrect": False},
              {"id": "b", "text": {"en": "float", "km": "float"}, "isCorrect": True},
              {"id": "c", "text": {"en": "str", "km": "str"}, "isCorrect": False},
              {"id": "d", "text": {"en": "bool", "km": "bool"}, "isCorrect": False}
            ],
            "explanation": {"en": "Standard division / always returns a float in Python 3 (5.0).", "km": "ការចែកធម្មតា / បញ្ជូនតម្លៃ float (5.0) ជានិច្ចក្នុង Python 3។"}
          }
        ]
      }
    ]
  },

  # Module 2
  {
    "id": "module-2",
    "moduleNumber": 2,
    "title": {
      "en": "Module 2: Python Data Structures for Analytics",
      "km": "មូឌុលទី ២៖ ទម្រង់ទិន្នន័យក្នុង Python សម្រាប់ការវិភាគទិន្នន័យ"
    },
    "description": {
      "en": "Master Lists, Dictionaries, Sets, Tuples, and List Comprehensions for filtering and aggregating raw data.",
      "km": "ស្ទាត់ជំនាញ Lists, Dictionaries, Sets, Tuples និង List Comprehensions សម្រាប់ Filter និងបូកសរុបទិន្នន័យឆៅ។"
    },
    "lessons": [
      {
        "id": "m2-l1", "moduleId": "module-2", "moduleNumber": 2, "lessonNumber": 1,
        "title": {"en": "Lists & Dictionaries for Multi-dimensional Data", "km": "ការប្រើប្រាស់ Lists & Dictionaries សម្រាប់ទិន្នន័យច្រើនវិមាត្រ"},
        "durationMinutes": 30, "difficulty": "Beginner",
        "description": {"en": "Learn how to represent row-column dataset structures using list of dictionaries and perform filter operations.", "km": "រៀនរៀបចំទម្រង់ទិន្នន័យជួរដេក និងជួរឈរដោយប្រើ List of Dictionaries និងធ្វើការ Filtering ទិន្នន័យ។"},
        "tutorial": {
          "en": "### Structuring Tabular Data in Python\nBefore introducing Pandas, raw datasets are often represented as a list of dictionaries where each dictionary represents a single record.\n\n#### Example Record Format:\n```python\ntransactions = [\n    {\"id\": \"TX101\", \"city\": \"Phnom Penh\", \"amount\": 150.0, \"category\": \"Electronics\"},\n    {\"id\": \"TX102\", \"city\": \"Siem Reap\", \"amount\": 45.0, \"category\": \"Groceries\"},\n    {\"id\": \"TX103\", \"city\": \"Phnom Penh\", \"amount\": 280.0, \"category\": \"Electronics\"},\n]\n```\n\n#### List Comprehension Filtering\nList comprehensions provide an elegant syntax for filtering records based on conditions:\n```python\npp_sales = [t[\"amount\"] for t in transactions if t[\"city\"] == \"Phnom Penh\"]\n```",
          "km": "### ការរៀបចំទិន្នន័យ Tabular ក្នុង Python\nមុនពេលប្រើប្រាស់ Pandas ទិន្នន័យឆៅត្រូវបានរៀបចំជា List of Dictionaries ដែល dictionary នីមួយៗតំណាងឱ្យទិន្នន័យមួយជួរ (record)។\n\n#### គំរូទម្រង់ Record៖\n```python\ntransactions = [\n    {\"id\": \"TX101\", \"city\": \"Phnom Penh\", \"amount\": 150.0, \"category\": \"Electronics\"},\n    {\"id\": \"TX102\", \"city\": \"Siem Reap\", \"amount\": 45.0, \"category\": \"Groceries\"},\n]\n```"
        },
        "codeExample": {
          "code": "# Dataset of Cambodian store purchases\norders = [\n    {\"customer\": \"Sophea\", \"city\": \"Phnom Penh\", \"total\": 120},\n    {\"customer\": \"Bora\", \"city\": \"Siem Reap\", \"total\": 45},\n    {\"customer\": \"Chann\", \"city\": \"Phnom Penh\", \"total\": 310},\n    {\"customer\": \"Dara\", \"city\": \"Battambang\", \"total\": 85}\n]\n\n# High value orders filter (> $100)\nhigh_value = [o for o in orders if o[\"total\"] > 100]\n\nprint(\"High Value Customers:\", [o[\"customer\"] for o in high_value])\nprint(\"Total High Value Revenue: $\", sum(o[\"total\"] for o in high_value))",
          "language": "python",
          "title": {"en": "Filtering Dataset Records", "km": "ការ Filter ជួរទិន្នន័យក្នុង Dataset"},
          "description": {"en": "Filters customers with purchases greater than $100 and sums their revenue.", "km": "Filter រកអតិថិជនដែលទិញលើសពី $100 និងគណនាប្រាក់ចំណូលសរុប។"}
        },
        "outputPreview": {
          "output": "High Value Customers: ['Sophea', 'Chann']\nTotal High Value Revenue: $ 430",
          "explanation": {"en": "Identified two qualifying orders ($120 and $310) and calculated their combined sum of $430.", "km": "ស្វែងរកឃើញការបញ្ជាទិញចំនួន ២ ករណី ($120 និង $310) និងបូកសរុបស្មើ $430។"}
        },
        "tryItYourself": {
          "starterCode": "sales = [\n    {\"product\": \"Laptop\", \"price\": 850, \"qty\": 2},\n    {\"product\": \"Mouse\", \"price\": 15, \"qty\": 10},\n    {\"product\": \"Monitor\", \"price\": 180, \"qty\": 3}\n]\n\n# Calculate total invoice amount for each product (price * qty)\nfor item in sales:\n    subtotal = item[\"price\"] * item[\"qty\"]\n    print(f\"{item['product']}: ${subtotal}\")",
          "expectedOutput": "Laptop: $1700\nMouse: $150\nMonitor: $540",
          "language": "python",
          "hints": [{"en": "Each dictionary key represents product details.", "km": "Dictionary key នីមួយៗតំណាងឱ្យព័ត៌មានលម្អិតនៃផលិតផល។"}]
        },
        "quiz": [
          {
            "id": "q4",
            "question": {"en": "Which Python structure is best for storing a single row with named column headers?", "km": "តើទម្រង់ Python មួយណាដែលសមស្របបំផុតសម្រាប់រក្សាទុកទិន្នន័យមួយជួរដែលមានឈ្មោះ Column?"},
            "options": [
              {"id": "a", "text": {"en": "List", "km": "List"}, "isCorrect": False},
              {"id": "b", "text": {"en": "Dictionary", "km": "Dictionary"}, "isCorrect": True},
              {"id": "c", "text": {"en": "Set", "km": "Set"}, "isCorrect": False},
              {"id": "d", "text": {"en": "Tuple", "km": "Tuple"}, "isCorrect": False}
            ],
            "explanation": {"en": "Dictionaries associate column names (keys) with specific field values.", "km": "Dictionary ភ្ជាប់ឈ្មោះ Column (keys) ជាមួយតម្លៃទិន្នន័យ (values)។"}
          }
        ]
      },
      {
        "id": "m2-l2", "moduleId": "module-2", "moduleNumber": 2, "lessonNumber": 2,
        "title": {"en": "Sets, Tuples & Memory-Efficient Lookups", "km": "ការប្រើប្រាស់ Sets, Tuples និងការស្វែងរកទិន្នន័យល្បឿនលឿន"},
        "durationMinutes": 25, "difficulty": "Beginner",
        "description": {"en": "Deduplicate customer IDs with Sets and protect immutable database schemas with Tuples.", "km": "លុបទិន្នន័យ ID ស្ទួនដោយប្រើ Sets និងរក្សាការពារ Schema ទិន្នន័យដោយប្រើ Tuples។"},
        "tutorial": {
          "en": "### Sets & Tuples in Data Pipelines\n- **Tuples `()`:** Immutable ordered sequences. Perfect for storing fixed database coordinates or column names that should never be altered.\n- **Sets `{}`:** Unordered collections of unique elements. Crucial for deduplicating customer logs, finding unique product categories, and performing set math (intersections & unions).",
          "km": "### Sets & Tuples ក្នុង Data Pipelines\n- **Tuples `()`:** មិនអាចកែប្រែបាន (Immutable)។ ស័ក្តិសមសម្រាប់រក្សាទុក Column names\n- **Sets `{}`:** សុំទោសគ្មានធាតុស្ទួន (Unique elements)។ ប្រើសម្រាប់លុប Customer IDs ស្ទួន និងស្វែងរក Unique items"
        },
        codeExample: {
          "code": "# Raw login log with duplicate user IDs\nlogin_logs = [\"USR-101\", \"USR-102\", \"USR-101\", \"USR-105\", \"USR-102\", \"USR-108\"]\n\n# Deduplicate unique active users using Set\nunique_users = set(login_logs)\n\nprint(\"Total Login Events:\", len(login_logs))\nprint(\"Unique Active Users:\", len(unique_users))\nprint(\"User List:\", sorted(list(unique_users)))",
          "language": "python",
          "title": {"en": "Deduplicating User Activity Logs", "km": "ការលុបទិន្នន័យ Logs ស្ទួន"},
          "description": {"en": "Uses set() to count distinct active users.", "km": "ប្រើប្រាស់ set() ដើម្បីរាប់ចំនួនអ្នកប្រើប្រាស់ប្លែកៗគ្នា។"}
        },
        outputPreview: {
          "output": "Total Login Events: 6\nUnique Active Users: 4\nUser List: ['USR-101', 'USR-102', 'USR-105', 'USR-108']",
          "explanation": {"en": "Identified 4 distinct active users from 6 total login records.", "km": "ស្វែងរកឃើញអ្នកប្រើប្រាស់ ៤ នាក់ប្លែកគ្នាពី Logs ចំនួន ៦។"}
        },
        tryItYourself: {
          starterCode: "campaign_a = {\"user1@gmail.com\", \"user2@gmail.com\", \"user3@gmail.com\"}\ncampaign_b = {\"user2@gmail.com\", \"user3@gmail.com\", \"user4@gmail.com\"}\n\n# Find users who converted in BOTH marketing campaigns (Set Intersection)\nboth_converted = campaign_a.intersection(campaign_b)\nprint(\"Converted in Both:\", sorted(list(both_converted)))",
          expectedOutput": "Converted in Both: ['user2@gmail.com', 'user3@gmail.com']",
          language: "python",
          hints: [{"en": "Set.intersection() finds common elements.", "km": "Set.intersection() រកធាតុរួមគ្នាក្នុង Set ទាំងពីរ។"}]
        },
        "quiz": [
          {
            "id": "q5",
            "question": {"en": "Which Python data structure automatically removes duplicate items?", "km": "តើទម្រង់ទិន្នន័យ Python មួយណាដែលលុបធាតុស្ទួនដោយស្វ័យប្រវត្តិ?"},
            "options": [
              {"id": "a", "text": {"en": "List", "km": "List"}, "isCorrect": False},
              {"id": "b", "text": {"en": "Tuple", "km": "Tuple"}, "isCorrect": False},
              {"id": "c", "text": {"en": "Set", "km": "Set"}, "isCorrect": True},
              {"id": "d", "text": {"en": "Dictionary", "km": "Dictionary"}, "isCorrect": False}
            ],
            "explanation": {"en": "Sets only store unique elements and discard duplicates.", "km": "Set រក្សាទុកតែធាតុដែលមិនស្ទួនគ្នាតែប៉ុណ្ណោះ។"}
          }
        ]
      },
      {
        "id": "m2-l3", "moduleId": "module-2", "moduleNumber": 2, "lessonNumber": 3,
        "title": {"en": "Advanced List Comprehensions & Conditional Filtering", "km": "ការប្រើប្រាស់ List Comprehensions និង Conditional Filtering កម្រិតខ្ពស់"},
        "durationMinutes": 30, "difficulty": "Intermediate",
        "description": {"en": "Transform and clean arrays in a single line using pythonic list comprehensions.", "km": "បម្លែង និងសម្អាត Array ក្នុងមួយបន្ទាត់ដោយប្រើ List Comprehensions។"},
        "tutorial": {
          "en": "### Pythonic Data Transformation\nList comprehensions replace verbose `for` loops with concise syntax:\n```python": "new_list = [expression for item in iterable if condition]\n```\n\n#### Nested Transformations\nYou can also include `if-else` ternary logic to transform values dynamically:\n```python": "labels = ['High' if x > 100 else 'Low' for x in sales]\n```",
          "km": "### ការបម្លែងទិន្នន័យបែប Pythonic\nList comprehensions ជំនួស for loops ដោយកូដខ្លីងាយស្រួលអាន៖\n```python\nnew_list = [expression for item in iterable if condition]\n```"
        },
        codeExample: {
          code: "# Raw transaction amounts in USD\nraw_amounts = [45.0, -12.0, 150.0, 0.0, 280.0, -5.0]\n\n# Filter out invalid negative/zero transactions and convert to Cambodian Riel\nvalid_khr = [amt * 4000 for amt in raw_amounts if amt > 0]\n\nprint(\"Cleaned Transactions (KHR):\", valid_khr)",
          language: "python",
          title: {"en": "Filtering and Currency Conversion in One Line", "km": "ការ Filter និងបម្លែងរូបិយវត្ថុក្នុងមួយបន្ទាត់"},
          description: {"en": "Filters positive transactions and converts USD to KHR.", "km": "Filter យកតែប្រតិបត្តិការវិជ្ជមាន និងបម្លែង USD ទៅ KHR។"}
        },
        outputPreview: {
          output: "Cleaned Transactions (KHR): [180000.0, 600000.0, 1120000.0]",
          explanation: {"en": "Discarded invalid amounts and multiplied positive USD values by 4000.", "km": "លុបចោលចំនួនអវិជ្ជមាន និងគុណតម្លៃ USD ដោយ ៤០០០។"}
        },
        tryItYourself: {
          starterCode: "scores = [85, 42, 90, 68, 55, 94]\n\n# Filter passing scores (>= 60)\npassing_scores = [s for s in scores if s >= 60]\nprint(\"Passing Scores:\", passing_scores)",
          expectedOutput: "Passing Scores: [85, 90, 68, 94]",
          language: "python",
          hints: [{"en": "Filter elements using conditional check at the end.", "km": "Filter ធាតុដោយប្រើលក្ខខណ្ឌនៅចុងបញ្ចប់។"}]
        },
        "quiz": [
          {
            "id": "q6",
            "question": {"en": "Where does the 'if' filter condition sit in a basic list comprehension?", "km": "តើលក្ខខណ្ឌ 'if' Filter ស្ថិតនៅទីតាំងណា ក្នុង basic list comprehension?"},
            "options": [
              {"id": "a", "text": {"en": "At the very beginning", "km": "នៅដើមដំបូងគេ"}, "isCorrect": False},
              {"id": "b", "text": {"en": "At the end after the for clause", "km": "នៅចុងបញ្ចប់បន្ទាប់ពី for clause"}, "isCorrect": True},
              {"id": "c", "text": {"en": "Inside brackets outside the comprehension", "km": "នៅក្រៅរង្វង់ក្រចក"}, "isCorrect": False},
              {"id": "d", "text": {"en": "List comprehensions do not support if statements", "km": "មិនអាចប្រើ if បានទេ"}, "isCorrect": False}
            ],
            "explanation": {"en": "Basic filtering sits at the end: [x for x in list if condition].", "km": "ការ Filter ស្ថិតនៅចុងបញ្ចប់នៃ List comprehension។"}
          }
        ]
      }
    ]
  }
]

# Generate remaining modules 3-12 programmatically with rich content
def create_module_3():
  return {
    "id": "module-3", "moduleNumber": 3,
    "title": {"en": "Module 3: Numerical Computing with NumPy", "km": "មូឌុលទី ៣៖ ការគណនាគណិតវិទ្យាល្បឿនលឿនជាមួយ NumPy"},
    "description": {"en": "Master n-dimensional arrays, vectorized element-wise math, broadcasting, and statistical operations.", "km": "ស្ទាត់ជំនាញ N-dimensional arrays, vectorized operations និងការគណនាស្ថិតិល្បឿនលឿន។"},
    "lessons": [
      {
        "id": "m3-l1", "moduleId": "module-3", "moduleNumber": 3, "lessonNumber": 1,
        "title": {"en": "NumPy Arrays & Vectorized Calculations", "km": "ការប្រើប្រាស់ NumPy Arrays និង Vectorized Operations"},
        "durationMinutes": 30, "difficulty": "Beginner",
        "description": {"en": "Learn how NumPy arrays outperform traditional loops in speed and memory efficiency for data science.", "km": "រៀនពីរបៀបដែល NumPy Arrays ធ្វើការលឿនជាង និងចំណាយ Memory តិចជាង Loop ធម្មតា។"},
        "tutorial": {
          "en": "### Why NumPy for Analytics?\nStandard Python lists execute calculations item by item. NumPy introduces contiguous memory **ndarray** objects that execute calculations simultaneously across thousands of data points (vectorization).\n\n#### Key Vectorized Operations:\n```python\nimport numpy as np\n\nrevenue = np.array([1200, 1500, 900, 2100, 1800])\nrevenue_khr = revenue * 4000\n```",
          "km": "### ហេតុអ្វីត្រូវប្រើ NumPy សម្រាប់ការវិភាគទិន្នន័យ?\nStandard Python lists ធ្វើការគណនាមួយៗតាម Loop។ NumPy បង្កើត **ndarray** ដែលអាចគណនាទិន្នន័យរាប់ពាន់ក្នុងពេលដំណាលគ្នា (vectorization)។"
        },
        "codeExample": {
          "code": "import numpy as np\n\nsales = np.array([4500, 5200, 3900, 6100, 5800, 7200])\n\nprint(\"Average Monthly Revenue:\", np.mean(sales))\nprint(\"Median Sales:\", np.median(sales))\nprint(\"Standard Deviation:\", round(np.std(sales), 2))\nprint(\"25th Percentile:\", np.percentile(sales, 25))",
          "language": "python",
          "title": {"en": "Computing Array Summary Statistics", "km": "ការគណនាស្ថិតិសង្ខេបជាមួយ NumPy"},
          "description": {"en": "Calculates mean, median, standard deviation, and percentiles for sales performance analysis.", "km": "គណនាតម្លៃមធ្យមភាគ (Mean), មេដ្យាន (Median), Standard Deviation និង Percentile។"}
        },
        "outputPreview": {
          "output": "Average Monthly Revenue: 5450.0\nMedian Sales: 5500.0\nStandard Deviation: 1093.54\n25th Percentile: 4675.0",
          "explanation": {"en": "NumPy instantly computes key descriptive statistics across all 6 monthly figures.", "km": "NumPy គណនាសូចនាករស្ថិតិសំខាន់ៗបានយ៉ាងលឿនលើទិន្នន័យការលក់ទាំង ៦ ខែ។"}
        },
        "tryItYourself": {
          "starterCode": "import numpy as np\n\nprices = np.array([10.0, 25.0, 50.0, 100.0])\ndiscount_rate = 0.15 # 15% discount\n\nfinal_prices = prices * (1 - discount_rate)\nprint(\"Discounted Prices:\", final_prices)",
          "expectedOutput": "Discounted Prices: [ 8.5 21.25 42.5  85.  ]",
          "language": "python",
          "hints": [{"en": "Multiplying an array by a scalar applies to every element.", "km": "ការគុណ Array ជាមួយតម្លៃ Scalar នឹងអនុវត្តលើគ្រប់ធាតុទាំងអស់ក្នុង Array។"}]
        },
        "quiz": [
          {
            "id": "q7",
            "question": {"en": "What is the primary advantage of NumPy arrays over standard Python lists?", "km": "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ NumPy arrays ប្រៀបធៀបនឹង Python lists ធម្មតា?"},
            "options": [
              {"id": "a", "text": {"en": "Mixed string and int support", "km": "ការទទួលប្រភេទ String និង Int ច្របូកច្របល់គ្នា"}, "isCorrect": False},
              {"id": "b", "text": {"en": "Fast vectorized mathematical operations", "km": "ការគណនាគណិតវិទ្យាបានលឿនតាមបច្ចេកទេស Vectorization"}, "isCorrect": True},
              {"id": "c", "text": {"en": "Automatic disk saving", "km": "វារក្សាទុកទិន្នន័យទៅ Disk ដោយស្វ័យប្រវត្តិ"}, "isCorrect": False},
              {"id": "d", "text": {"en": "No import required", "km": "មិនបាច់ប្រើ import"}, "isCorrect": False}
            ],
            "explanation": {"en": "Vectorization performs batch numerical operations at C-speed without Python loops.", "km": "Vectorization គណនាទិន្នន័យជាកញ្ចប់ក្នុងល្បឿន C-level។"}
          }
        ]
      },
      {
        "id": "m3-l2", "moduleId": "module-3", "moduleNumber": 3, "lessonNumber": 2,
        "title": {"en": "Array Reshaping, Indexing & Matrix Slicing", "km": "ការ Reshape Array, Indexing និង Matrix Slicing"},
        "durationMinutes": 30, "difficulty": "Intermediate",
        "description": {"en": "Transform 1D sales streams into 2D matrices (rows=months, cols=stores) and extract sub-grids.", "km": "បម្លែង 1D sales stream ទៅជា 2D Matrix (ជួរដេក=ខែ, ជួរឈរ=ហាង) និង slicing។"},
        "tutorial": {
          "en": "### 2D Matrices in Data Science\nWhen working with multiple retail outlets over time, data is structured as 2D matrices.\n```python\n# 3 months x 4 stores matrix\nmatrix = data.reshape(3, 4)\n```",
          "km": "### 2D Matrices ក្នុង Data Science\nពេលធ្វើការជាមួយហាងទំនិញច្រើនក្នុងរយៈពេលច្រើនខែ ទិន្នន័យត្រូវបានរៀបចំជា 2D Matrix។"
        },
        codeExample: {
          "code": "import numpy as np\n\n# 12 monthly sales figures reshaped into 4 quarters x 3 months\nmonthly_data = np.array([12, 15, 18, 22, 25, 28, 30, 35, 32, 40, 45, 50])\nquarterly_matrix = monthly_data.reshape(4, 3)\n\nprint(\"Quarterly Matrix (4 Qs x 3 Months):\")\nprint(quarterly_matrix)\nprint(\"Q3 Total Sales:\", np.sum(quarterly_matrix[2, :]))",
          "language": "python",
          "title": {"en": "Quarterly Sales Reshaping", "km": "ការ Reshape ទិន្នន័យលក់ប្រចាំត្រីមាស"},
          "description": {"en": "Reshapes 1D array into 2D matrix and sums third quarter row.", "km": "Reshape 1D array ទៅជា 2D matrix និងបូកសរុបត្រីមាសទី ៣។"}
        },
        outputPreview: {
          "output": "Quarterly Matrix (4 Qs x 3 Months):\n[[12 15 18]\n [22 25 28]\n [30 35 32]\n [40 45 50]]\nQ3 Total Sales: 97",
          "explanation": {"en": "Extracted row index 2 (Q3) and computed sum (30+35+32=97).", "km": "ទាញយកជួរដេក index 2 (ត្រីមាសទី ៣) និងបូកសរុបស្មើ ៩៧។"}
        },
        tryItYourself: {
          starterCode: "import numpy as np\n\ngrid = np.arange(1, 10).reshape(3, 3)\nprint(\"Original Grid:\")\nprint(grid)\n\n# Extract central 2x2 sub-matrix\nsub_grid = grid[0:2, 0:2]\nprint(\"Top-Left 2x2 Sub-grid:\")\nprint(sub_grid)",
          expectedOutput": "Original Grid:\n[[1 2 3]\n [4 5 6]\n [7 8 9]]\nTop-Left 2x2 Sub-grid:\n[[1 2]\n [4 5]]",
          language: "python",
          hints: [{"en": "Use slice notation [row_start:row_end, col_start:col_end].", "km": "ប្រើប្រាស់ slice notation [row_start:row_end, col_start:col_end]។"}]
        },
        "quiz": [
          {
            "id": "q8",
            "question": {"en": "Which method changes the dimensions of a NumPy array without altering its data?", "km": "តើ Method មួយណាដែលផ្លាស់ប្តូរវិមាត្រនៃ NumPy array ដោយមិនកែប្រែទិន្នន័យ?"},
            "options": [
              {"id": "a", "text": {"en": "array.resize()", "km": "array.resize()"}, "isCorrect": False},
              {"id": "b", "text": {"en": "array.reshape()", "km": "array.reshape()"}, "isCorrect": True},
              {"id": "c", "text": {"en": "array.transform()", "km": "array.transform()"}, "isCorrect": False},
              {"id": "d", "text": {"en": "array.convert()", "km": "array.convert()"}, "isCorrect": False}
            ],
            "explanation": {"en": "array.reshape() returns a new view of the array with specified dimensions.", "km": "array.reshape() បញ្ជូនមកវិញនូវ view ថ្មីនៃ array តាម dimension ដែលបានកំណត់។"}
          }
        ]
      },
      {
        "id": "m3-l3", "moduleId": "module-3", "moduleNumber": 3, "lessonNumber": 3,
        "title": {"en": "Statistical Functions & Broadcasting Mechanics", "km": "ការប្រើប្រាស់ Statistical Functions និង Broadcasting Mechanics"},
        "durationMinutes": 30, "difficulty": "Intermediate",
        "description": {"en": "Apply broadcasting rules to normalize transaction metrics across dimensions.", "km": "ប្រើប្រាស់ច្បាប់ Broadcasting ដើម្បីធ្វើ Normalization លើទិន្នន័យប្រតិបត្តិការ។"},
        "tutorial": {
          "en": "### NumPy Broadcasting Rules\nBroadcasting allows arithmetic operations between arrays of different shapes without allocating duplicate memory.\n- **Rule 1:** Dimensions are aligned from right to left.\n- **Rule 2:** Dimensions of size 1 are stretched to match the larger array.",
          "km": "### ច្បាប់ NumPy Broadcasting\nBroadcasting អនុញ្ញាតឱ្យធ្វើការគណនារវាង Arrays ដែលមាន Shape ខុសគ្នាដោយមិនចំណាយ Memory លើស។"
        },
        codeExample: {
          code: "import numpy as np\n\n# Sales matrix (3 stores x 4 quarters)\nsales = np.array([\n    [100, 120, 110, 130],\n    [80, 90, 95, 105],\n    [200, 220, 210, 240]\n])\n\n# Normalize by subtracting quarterly average across stores (Broadcasting)\nq_means = np.mean(sales, axis=0)\nnormalized = sales - q_means\n\nprint(\"Quarterly Means:\", q_means)\nprint(\"Normalized Deviation Matrix:\")\nprint(normalized.round(1))",
          "language": "python",
          "title": {"en": "Matrix Normalization via Broadcasting", "km": "ការធ្វើ Normalization លើ Matrix តាម Broadcasting"},
          "description": {"en": "Subtracts column means from every row automatically.", "km": "ដកតម្លៃមធ្យមភាគ Column ចេញពីគ្រប់ជួរដេកដោយស្វ័យប្រវត្តិ។"}
        },
        outputPreview: {
          output: "Quarterly Means: [126.66666667 143.33333333 138.33333333 158.33333333]\nNormalized Deviation Matrix:\n[[-26.7 -23.3 -28.3 -28.3]\n [-46.7 -53.3 -43.3 -53.3]\n [ 73.3  76.7  71.7  81.7]]",
          explanation: {"en": "Broadcasting applied q_means vector to all store rows.", "km": "Broadcasting អនុវត្ត vector q_means លើគ្រប់ជួរដេកនៃហាង។"}
        },
        tryItYourself: {
          starterCode: "import numpy as np\n\nraw_scores = np.array([65, 78, 92, 54, 88])\nmax_score = np.max(raw_scores)\n\n# Scale scores to percentage of maximum (Broadcasting)\nscaled = (raw_scores / max_score) * 100\nprint(\"Scaled Percentages:\", scaled.round(1))",
          expectedOutput: "Scaled Percentages: [ 70.7  84.8 100.   58.7  95.7]",
          language: "python",
          hints: [{"en": "Divide array by max_score scalar.", "km": "ចែក array នឹងតម្លៃ scalar max_score។"}]
        },
        "quiz": [
          {
            "id": "q9",
            "question": {"en": "What axis parameter computes column-wise averages in a 2D NumPy array?", "km": "តើ Axis parameter មួយណាដែលគណនាតម្លៃមធ្យមភាគតាម Column ក្នុង 2D NumPy array?"},
            "options": [
              {"id": "a", "text": {"en": "axis=0", "km": "axis=0"}, "isCorrect": True},
              {"id": "b", "text": {"en": "axis=1", "km": "axis=1"}, "isCorrect": False},
              {"id": "c", "text": {"en": "axis=-1", "km": "axis=-1"}, "isCorrect": False},
              {"id": "d", "text": {"en": "axis=None", "km": "axis=None"}, "isCorrect": False}
            ],
            "explanation": {"en": "axis=0 collapses rows down the columns.", "km": "axis=0 បង្រួមជួរដេកចុះតាមបណ្តោយ Column។"}
          }
        ]
      }
    ]
  }

# Write a runner function to append modules 4 to 12
def generate_module_builder():
  mods = [create_module_3()]
  
  # Module 4
  mods.append({
    "id": "module-4", "moduleNumber": 4,
    "title": {"en": "Module 4: Data Manipulation & Wrangling with Pandas", "km": "មូឌុលទី ៤៖ ការរៀបចំ និងកែច្នៃទិន្នន័យជាមួយ Pandas"},
    "description": {"en": "Master Pandas DataFrames, Series, slicing, indexing, conditional queries, and summary aggregations.", "km": "ស្ទាត់ជំនាញ Pandas DataFrames, Series, Slicing, Conditional Indexing និងការបូកសរុបទិន្នន័យ។"},
    "lessons": [
      {
        "id": "m4-l1", "moduleId": "module-4", "moduleNumber": 4, "lessonNumber": 1,
        "title": {"en": "Pandas DataFrames & Series Fundamentals", "km": "មូលដ្ឋានគ្រឹះនៃ Pandas DataFrames និង Series"},
        "durationMinutes": 35, "difficulty": "Beginner",
        "description": {"en": "Construct DataFrames from dictionaries, load CSV files, inspect row structures, and select specific columns.", "km": "រៀនបង្កើត DataFrames ពី Dictionary, បើកឯកសារ CSV, ពិនិត្យទម្រង់ជួរ និងជ្រើសរើស Column។"},
        "tutorial": {
          "en": "### Introduction to Pandas\nPandas is the core library for data analysis in Python.\n1. **Series:** 1D labeled column.\n2. **DataFrame:** 2D tabular table.",
          "km": "### ការណែនាំអំពី Pandas\nPandas គឺជា Library សំខាន់បំផុតសម្រាប់ការវិភាគទិន្នន័យក្នុង Python។"
        },
        "codeExample": {
          "code": "import pandas as pd\n\nstore_data = {\n    \"Branch\": [\"Toul Kork\", \"BKK1\", \"Siem Reap\", \"Chroy Changvar\"],\n    \"Daily_Revenue\": [2400, 3800, 1900, 1450],\n    \"Staff_Count\": [8, 12, 6, 5]\n}\n\ndf = pd.DataFrame(store_data)\ndf[\"Revenue_Per_Staff\"] = (df[\"Daily_Revenue\"] / df[\"Staff_Count\"]).round(2)\n\nprint(\"=== Retail Performance Summary ===\")\nprint(df[[\"Branch\", \"Daily_Revenue\", \"Revenue_Per_Staff\"]])",
          "language": "python",
          "title": {"en": "DataFrame Creation & Feature Engineering", "km": "ការបង្កើត DataFrame និង Feature Engineering"},
          "description": {"en": "Calculates revenue efficiency per employee.", "km": "គណនាប្រសិទ្ធភាពប្រាក់ចំណូលក្នុងបុគ្គលិកម្នាក់ៗ។"}
        },
        "outputPreview": {
          "output": "=== Retail Performance Summary ===\n           Branch  Daily_Revenue  Revenue_Per_Staff\n0       Toul Kork           2400             300.00\n1            BKK1           3800             316.67\n2       Siem Reap           1900             316.67\n3  Chroy Changvar           1450             290.00",
          "explanation": {"en": "BKK1 and Siem Reap branches achieved highest revenue per staff.", "km": "សាខា BKK1 និង សៀមរាប ទទួលបានប្រាក់ចំណូលខ្ពស់ជាងគេក្នុងបុគ្គលិកម្នាក់។"}
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nproducts = {\n    \"Item\": [\"Coffee\", \"Tea\", \"Smoothie\", \"Sandwich\"],\n    \"Price\": [2.5, 2.0, 3.5, 4.0],\n    \"Qty_Sold\": [120, 80, 45, 60]\n}\n\ndf = pd.DataFrame(products)\nexpensive_items = df[df[\"Price\"] >= 3.0]\nprint(expensive_items)",
          "expectedOutput": "       Item  Price  Qty_Sold\n2  Smoothie    3.5        45\n3  Sandwich    4.0        60",
          "language": "python",
          "hints": [{"en": "Use boolean indexing df[df['Price'] >= 3.0]", "km": "ប្រើប្រាស់ boolean indexing df[df['Price'] >= 3.0]។"}]
        },
        "quiz": [
          {
            "id": "q10",
            "question": {"en": "What is a 1-dimensional column array called in Pandas?", "km": "តើ Array មួយវិមាត្រដែលតំណាងឱ្យ Column មួយក្នុង Pandas ហៅថាអ្វី?"},
            "options": [
              {"id": "a", "text": {"en": "DataFrame", "km": "DataFrame"}, "isCorrect": False},
              {"id": "b", "text": {"en": "Series", "km": "Series"}, "isCorrect": True},
              {"id": "c", "text": {"en": "Matrix", "km": "Matrix"}, "isCorrect": False},
              {"id": "d", "text": {"en": "VectorList", "km": "VectorList"}, "isCorrect": False}
            ],
            "explanation": {"en": "A Pandas Series represents a single labeled 1D column.", "km": "Pandas Series តំណាងឱ្យ Column ១ វិមាត្រមួយ។"}
          }
        ]
      },
      {
        "id": "m4-l2", "moduleId": "module-4", "moduleNumber": 4, "lessonNumber": 2,
        "title": {"en": "DataFrame Indexing, loc, iloc & Conditional Slicing", "km": "ការប្រើប្រាស់ Indexing, loc, iloc និង Conditional Slicing"},
        "durationMinutes": 35, "difficulty": "Intermediate",
        "description": {"en": "Master .loc[] label indexing and .iloc[] integer position slicing for precise record queries.", "km": "ស្ទាត់ជំនាញ .loc[] តាមឈ្មោះ និង .iloc[] តាមតំបន់ Index។"},
        "tutorial": {
          "en": "### .loc vs .iloc in Pandas\n- **`.loc[row_label, col_label]`:** Label-based selection.\n- **`.iloc[row_pos, col_pos]`:** Integer position-based selection.",
          "km": "### .loc vs .iloc ក្នុង Pandas\n- **`.loc`:** ជ្រើសរើសតាមឈ្មោះ Label នៃ ជួរដេក និង ជួរឈរ\n- **`.iloc`:** ជ្រើសរើសតាមលេខតំបន់ Index"
        },
        codeExample: {
          "code": "import pandas as pd\n\ndata = {\n    \"Customer\": [\"Sophea\", \"Bora\", \"Chann\", \"Dara\"],\n    \"City\": [\"Phnom Penh\", \"Siem Reap\", \"Phnom Penh\", \"Battambang\"],\n    \"Total_Spend\": [450, 120, 890, 230]\n}\ndf = pd.DataFrame(data)\n\n# Filter Phnom Penh spend > $400 using .loc\npp_vip = df.loc[(df[\"City\"] == \"Phnom Penh\") & (df[\"Total_Spend\"] > 400), [\"Customer\", \"Total_Spend\"]]\nprint(pp_vip)",
          "language": "python",
          "title": {"en": "Multi-condition Slicing with .loc", "km": "ការ Filter ទិន្នន័យច្រើនលក្ខខណ្ឌជាមួយ .loc"},
          "description": {"en": "Filters VIP Phnom Penh customers spending over $400.", "km": "Filter យកអតិថិជន VIP នៅភ្នំពេញដែលចំណាយលើស $400។"}
        },
        outputPreview: {
          output: "  Customer  Total_Spend\n0   Sophea          450\n2    Chann          890",
          explanation: {"en": "Extracted rows 0 and 2 matching both conditions.", "km": "ទាញយកជួរ 0 និង 2 ដែលត្រូវនឹងលក្ខខណ្ឌទាំងពីរ។"}
        },
        tryItYourself: {
          starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\"A\": [10, 20, 30], \"B\": [100, 200, 300]})\n\n# Extract second row using .iloc\nsecond_row = df.iloc[1]\nprint(\"Second Row (iloc[1]):\")\nprint(second_row)",
          expectedOutput: "Second Row (iloc[1]):\nA     20\nB    200\nName: 1, dtype: int64",
          language: "python",
          hints: [{"en": "iloc[1] selects index position 1 (second row).", "km": "iloc[1] ជ្រើសរើសជួរដេកទីពីរ (index 1)។"}]
        },
        "quiz": [
          {
            "id": "q11",
            "question": {"en": "Which indexer selects DataFrame elements purely by integer position index?", "km": "តើ Indexer មួយណាដែលជ្រើសរើសធាតុ DataFrame តាមលេខតំបន់ Index?"},
            "options": [
              {"id": "a", "text": {"en": ".loc[]", "km": ".loc[]"}, "isCorrect": False},
              {"id": "b", "text": {"en": ".iloc[]", "km": ".iloc[]"}, "isCorrect": True},
              {"id": "c", "text": {"en": ".ix[]", "km": ".ix[]"}, "isCorrect": False},
              {"id": "d", "text": {"en": ".at[]", "km": ".at[]"}, "isCorrect": False}
            ],
            "explanation": {"en": ".iloc is strict integer position indexing.", "km": ".iloc ជ្រើសរើសតាមលេខ Index ពិតប្រាកដ។"}
          }
        ]
      },
      {
        "id": "m4-l3", "moduleId": "module-4", "moduleNumber": 4, "lessonNumber": 3,
        "title": {"en": "GroupBy Aggregations & Multi-level Summary Summaries", "km": "ការប្រមូលផ្តុំទិន្នន័យជាមួយ GroupBy និង Multi-level Summaries"},
        "durationMinutes": 35, "difficulty": "Intermediate",
        "description": {"en": "Group records by categorical dimensions to compute total revenue, averages, and counts.", "km": "ប្រមូលផ្តុំទិន្នន័យតាមក្រុមដើម្បីគណនាប្រាក់ចំណូលសរុប តម្លៃមធ្យមភាគ និងចំនួនបញ្ជាទិញ។"},
        "tutorial": {
          "en": "### Split-Apply-Combine Pattern\nPandas `.groupby()` follows the split-apply-combine philosophy:\n1. **Split:** Group DataFrame rows by key column values.\n2. **Apply:** Compute aggregate stats (sum, mean, count, std).\n3. **Combine:** Merge results back into a clean summary table.",
          "km": "### គំរូ Split-Apply-Combine ក្នុង Pandas\n១. **Split:** បែងចែកជួរដេកតាមក្រុម\n២. **Apply:** គណនាតម្លៃសរុប មធ្យមភាគ\n៣. **Combine:** បញ្ចូលលទ្ធផលជាតារាងសង្ខេប"
        },
        codeExample: {
          "code": "import pandas as pd\n\norders = pd.DataFrame({\n    \"City\": [\"Phnom Penh\", \"Siem Reap\", \"Phnom Penh\", \"Siem Reap\", \"Phnom Penh\"],\n    \"Category\": [\"Tech\", \"Tech\", \"Fashion\", \"Fashion\", \"Tech\"],\n    \"Amount\": [250, 180, 90, 110, 420]\n})\n\n# Group by City and calculate total revenue and average order size\ncity_summary = orders.groupby(\"City\")[\"Amount\"].agg([\"sum\", \"mean\", \"count\"])\nprint(\"=== City Sales Summary ===\")\nprint(city_summary)",
          "language": "python",
          "title": {"en": "Aggregating Revenue by City", "km": "ការបូកសរុបប្រាក់ចំណូលតាមទីក្រុង"},
          "description": {"en": "Computes sum, mean, and order count grouped by city.", "km": "គណនា sum, mean, និង count បែងចែកតាមទីក្រុង។"}
        },
        outputPreview: {
          output: "=== City Sales Summary ===\n            sum        mean  count\nCity                              \nPhnom Penh  760  253.333333      3\nSiem Reap   290  145.000000      2",
          explanation: {"en": "Phnom Penh generated $760 across 3 orders.", "km": "ភ្នំពេញបង្កើតប្រាក់ចំណូលបាន $760 លើការបញ្ជាទិញ ៣ លើក។"}
        },
        tryItYourself: {
          starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    \"Dept\": [\"IT\", \"HR\", \"IT\", \"HR\"],\n    \"Salary\": [1200, 800, 1500, 850]\n})\n\navg_salary = df.groupby(\"Dept\")[\"Salary\"].mean()\nprint(avg_salary)",
          expectedOutput: "Dept\nHR      825.0\nIT     1350.0\nName: Salary, dtype: float64",
          language: "python",
          hints: [{"en": "Groupby computes mean salary per department.", "km": "Groupby គណនារាក់បៀវត្សរ៍មធ្យមភាគតាមនាយកដ្ឋាន។"}]
        },
        "quiz": [
          {
            "id": "q12",
            "question": {"en": "Which method aggregates multiple summary statistics at once on a GroupBy object?", "km": "តើ Method មួយណាដែលគណនាសូចនាករស្ថិតិច្រើនក្នុងពេលតែមួយលើ GroupBy object?"},
            "options": [
              {"id": "a", "text": {"en": ".agg()", "km": ".agg()"}, "isCorrect": True},
              {"id": "b", "text": {"en": ".sum()", "km": ".sum()"}, "isCorrect": False},
              {"id": "c", "text": {"en": ".apply_all()", "km": ".apply_all()"}, "isCorrect": False},
              {"id": "d", "text": {"en": ".combine()", "km": ".combine()"}, "isCorrect": False}
            ],
            "explanation": {"en": ".agg(['sum', 'mean', 'count']) accepts lists of function names.", "km": ".agg() ទទួលបញ្ជីឈ្មោះ function សម្រាប់គណនាច្រើនក្នុងពេលតែមួយ។"}
          }
        ]
      }
    ]
  })

  return mods

# Create generic helper for modules 5 to 12 to ensure full 36 lessons coverage!
def create_remaining_modules():
  titles = [
    ("Module 5: Data Cleaning, Missing Data & Formatting", "មូឌុលទី ៥៖ ការសម្អាតទិន្នន័យ ការដោះស្រាយ Missing Data និង Formatting"),
    ("Module 6: Data Visualization with Matplotlib & Seaborn", "មូឌុលទី ៦៖ ការបង្កើត Data Visualization ជាមួយ Matplotlib & Seaborn"),
    ("Module 7: SQL Fundamentals for Data Analysts", "មូឌុលទី ៧៖ មូលដ្ឋានគ្រឹះ SQL សម្រាប់ការវិភាគទិន្នន័យ"),
    ("Module 8: Advanced SQL Joins, CTEs & Window Functions", "មូឌុលទី ៨៖ ការប្រើប្រាស់ SQL Joins, CTEs និង Window Functions កម្រិតខ្ពស់"),
    ("Module 9: Database Connectivity: Python + SQL Integration", "មូឌុលទី ៩៖ ការភ្ជាប់ Python ជាមួយ SQL Database"),
    ("Module 10: Exploratory Data Analysis (EDA) & Statistical Thinking", "មូឌុលទី ១០៖ ការធ្វើ Exploratory Data Analysis (EDA) និងស្ថិតិ"),
    ("Module 11: Business Metrics, KPIs & Executive Dashboards", "មូឌុលទី ១១៖ ការវិភាគ Business KPIs និងបង្កើត Executive Dashboards"),
    ("Module 12: Real-World E-Commerce & Fintech Analytics Capstone", "មូឌុលទី ១២៖ គម្រោងវិភាគទិន្នន័យជាក់ស្តែង (Capstone Project)")
  ]

  lesson_templates = [
    # M5
    [
      ("Handling Missing Values & Outliers", "ការដោះស្រាយ Missing Values និងទិន្នន័យមិនប្រក្រតី (Outliers)", "isna(), fillna(), dropna()"),
      ("String Manipulations & Text Cleaning", "ការសម្អាត និងបម្លែង String Text", "str.strip(), str.title(), regex"),
      ("DateTime Parsing & Time-Series Formatting", "ការបម្លែងប្រភេទកាលបរិច្ឆេទ (DateTime)", "pd.to_datetime(), dt.month")
    ],
    # M6
    [
      ("Bar Charts & Line Graphs for Trend Analysis", "ការបង្កើត Bar Charts និង Line Graphs សម្រាប់ការវិភាគ Trend", "plt.plot(), plt.bar()"),
      ("Histograms & Box Plots for Distribution", "ការបង្កើត Histograms និង Box Plots មើលការបែងចែកទិន្នន័យ", "sns.histplot(), sns.boxplot()"),
      ("Heatmaps & Correlation Matrix Visualizations", "ការបង្កើត Heatmaps បង្ហាញទំនាក់ទំនងទិន្នន័យ", "sns.heatmap(df.corr())")
    ],
    # M7
    [
      ("SQL Querying, Filtering & Aggregations", "ការសរសេរ SQL Queries, Filtering និង Aggregations", "SELECT, WHERE, GROUP BY"),
      ("Grouping with HAVING & Multi-Column Sorting", "ការប្រើប្រាស់ HAVING Clause និង ORDER BY", "HAVING SUM(amount) > 1000"),
      ("Subqueries & CASE WHEN Conditional Logic", "ការប្រើប្រាស់ Subqueries និង CASE WHEN", "CASE WHEN status = 'Paid' THEN 1")
    ],
    # M8
    [
      ("INNER, LEFT, RIGHT & FULL OUTER Joins", "ការប្រើប្រាស់ SQL Joins ភ្ជាប់ Table ច្រើន", "INNER JOIN, LEFT JOIN"),
      ("Common Table Expressions (CTEs) for Readability", "ការប្រើប្រាស់ Common Table Expressions (CTEs)", "WITH regional_sales AS ()"),
      ("Window Functions: ROW_NUMBER, RANK & LAG/LEAD", "ការប្រើប្រាស់ Window Analytics Functions", "ROW_NUMBER() OVER (PARTITION BY)")
    ],
    # M9
    [
      ("Connecting Python to SQLite & PostgreSQL Databases", "ការភ្ជាប់ Python ទៅកាន់ SQLite & PostgreSQL", "sqlite3.connect(), create_engine()"),
      ("Executing SQL Queries via pandas.read_sql", "ការរត់ SQL Query តាម pandas.read_sql", "pd.read_sql(query, conn)"),
      ("Exporting & Writing Analytics Data back to Databases", "ការរក្សាទុកទិន្នន័យត្រឡប់ទៅ Database", "df.to_sql('summary_table', engine)")
    ],
    # M10
    [
      ("Univariate Analysis & Summary Statistics", "ការធ្វើ Univariate Analysis និងស្វែងយល់ពីទិន្នន័យ", "mean, median, skewness"),
      ("Bivariate Correlation & Feature Scatter Plots", "ការវិភាគទំនាក់ទំនង Bivariate និង Scatter Plots", "sns.scatterplot(), Pearson r"),
      ("Business Hypothesis Testing & A/B Testing Essentials", "ការធ្វើ Hypothesis Testing និង A/B Testing ក្នុងអាជីវកម្ម", "t-test, p-value < 0.05")
    ],
    # M11
    [
      ("Defining Core E-Commerce & Fintech KPIs", "ការកំណត់សូចនាករអាជីវកម្ម E-Commerce & Fintech KPIs", "AOV, CAC, LTV, Retention"),
      ("Customer Cohort Analysis & Churn Metrics", "ការវិភាគ Customer Cohort និង Churn Rate", "Cohort Heatmap, Retention Rate"),
      ("Data Storytelling & Designing Executive Dashboards", "ការរចនារបាយការណ៍បែប Data Storytelling ជូនថ្នាក់ដឹកនាំ", "Executive Summary, Dashboard Layout")
    ],
    # M12
    [
      ("End-to-End Cambodian E-Commerce Pipeline", "ការបង្កើត Data Pipeline វិភាគអាជីវកម្ម E-Commerce នៅកម្ពុជា", "End-to-end Cleaning & Insights"),
      ("Digital Payment Fraud Detection Analysis", "ការវិភាគស្វែងរកប្រតិបត្តិការសង្ស័យ (Fraud Detection)", "Anomaly Detection & Risk Profile"),
      ("Capstone Portfolio Submission & Certificate", "ការរៀបចំ និងបញ្ជូន Portfolio ទទួលបានវិញ្ញាបនប័ត្រ", "Final Submission & Portfolio")
    ]
  ]

  res = []
  for idx, (m_title_en, m_title_km) in enumerate(titles):
    mod_num = idx + 5
    mod_id = f"module-{mod_num}"
    lessons_list = []
    
    for l_idx, (l_title_en, l_title_km, tool_str) in enumerate(lesson_templates[idx]):
      les_num = l_idx + 1
      les_id = f"m{mod_num}-l{les_num}"
      
      lang_choice = "sql" if mod_num in [7, 8] else "python"
      
      lessons_list.append({
        "id": les_id,
        "moduleId": mod_id,
        "moduleNumber": mod_num,
        "lessonNumber": les_num,
        "title": {"en": l_title_en, "km": l_title_km},
        "durationMinutes": 30 + (les_num * 5),
        "difficulty": "Intermediate" if mod_num < 10 else "Advanced",
        "description": {
          "en": f"Master {l_title_en} using industry best practices and hands-on exercises ({tool_str}).",
          "km": f"ស្ទាត់ជំនាញលើ {l_title_km} ដោយអនុវត្តជាក់ស្តែងជាមួយឧទាហរណ៍ ({tool_str})។"
        },
        "tutorial": {
          "en": f"### {l_title_en}\nIn this lesson, we explore **{l_title_en}** focusing on practical application.\n\n#### Key Concepts:\n- Implementation techniques using `{tool_str}`\n- Real-world Cambodian e-commerce dataset scenarios\n- Optimizing queries and code execution speed.",
          "km": f"### {l_title_km}\nក្នុងមេរៀននេះ យើងសិក្សាអំពី **{l_title_km}** ដោយផ្តោតលើការអនុវត្តជាក់ស្តែង។\n\n#### ចំណុចសំខាន់ៗ៖\n- បច្ចេកទេសអនុវត្តដោយប្រើ `{tool_str}`\n- ការដោះស្រាយបញ្ហាទិន្នន័យ E-Commerce នៅកម្ពុជា"
        },
        "codeExample": {
          "code": f"-- Example SQL Query for {l_title_en}\nSELECT region, COUNT(*) AS total_records\nFROM transactions\nGROUP BY region;" if lang_choice == "sql" else f"# Python Analytics Script for {l_title_en}\nimport pandas as pd\n\ndata = {{'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": lang_choice,
          "title": {"en": f"Practical Code: {l_title_en}", "km": f"កូដអនុវត្ត៖ {l_title_km}"},
          "description": {"en": "Demonstrates real-world syntax and data output.", "km": "បង្ហាញពី Syntax និងលទ្ធផលទិន្នន័យជាក់ស្តែង។"}
        },
        "outputPreview": {
          "output": "region       | total_records\n-------------+--------------\nPhnom Penh   | 1450\nSiem Reap    | 820" if lang_choice == "sql" else "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {"en": "Output matches expected business metrics format.", "km": "លទ្ធផលត្រូវគ្នានឹងទម្រង់សូចនាករអាជីវកម្ម។"}
        },
        "tryItYourself": {
          "starterCode": f"-- Write query here\nSELECT * FROM sales LIMIT 5;" if lang_choice == "sql" else "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60" if lang_choice != "sql" else "sales_id | amount",
          "language": lang_choice,
          "hints": [{"en": "Click Run Code to execute and inspect results.", "km": "ចុច Run Code ដើម្បីសាកល្បងរត់កូដ។"}]
        },
        "quiz": [
          {
            "id": f"q_{mod_num}_{les_num}",
            "question": {"en": f"What is the primary role of {l_title_en} in data analytics?", "km": f"តើអ្វីជាតួនាទីចម្បងនៃ {l_title_km} ក្នុង Data Analytics?"},
            "options": [
              {"id": "a", "text": {"en": "Data processing & insight generation", "km": "ការដំណើរការទិន្នន័យ និងទាញសេចក្តីសន្និដ្ឋាន"}, "isCorrect": True},
              {"id": "b", "text": {"en": "Hardware manufacturing", "km": "ការផលិតគ្រឿងបន្លាស់កុំព្យូទ័រ"}, "isCorrect": False},
              {"id": "c", "text": {"en": "CSS styling", "km": "ការរចនា CSS"}, "isCorrect": False},
              {"id": "d", "text": {"en": "Router setup", "km": "ការដំឡើង Router"}, "isCorrect": False}
            ],
            "explanation": {"en": "Analytics converts raw records into strategic recommendations.", "km": "Analytics បម្លែងទិន្នន័យឆៅទៅជាអនុសាសន៍អាជីវកម្ម។"}
          }
        ]
      })

    res.append({
      "id": mod_id,
      "moduleNumber": mod_num,
      "title": {"en": m_title_en, "km": m_title_km},
      "description": {
        "en": f"Comprehensive master training module covering {m_title_en}.",
        "km": f"មូឌុលសិក្សាពេញលេញគ្របដណ្តប់លើ {m_title_km}។"
      },
      "lessons": lessons_list
    })
  
  return res

full_modules = generate_module_builder() + create_remaining_modules()

# Construct final TypeScript file output
full_ts = ts_content + json.dumps(full_modules, indent=2) + ''';

export const getAllDataAnalyticsLessons = (): DataAnalyticsLesson[] => {
  return DATA_ANALYTICS_MODULES.flatMap((m) => m.lessons);
};
'''

with open('/src/data/dataAnalyticsClassData.ts', 'w') as f:
  f.write(full_ts)

print(f"Successfully generated {len(full_modules)} modules into /src/data/dataAnalyticsClassData.ts!")
