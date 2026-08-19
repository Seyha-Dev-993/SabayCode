import { DataAnalyticsModule, DataAnalyticsLesson } from '../types/dataAnalyticsClass';

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

export const DATA_ANALYTICS_MODULES: DataAnalyticsModule[] = 
[
  {
    "id": "module-1",
    "moduleNumber": 1,
    "title": {
      "en": "Module 1: Introduction to Data Analytics & Python Setup",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17d6 \u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u17a2\u17c6\u1796\u17b8 Data Analytics \u1793\u17b7\u1784\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 Python"
    },
    "description": {
      "en": "Understand the role of a data analyst, set up Python 3 environments, and run your first data inspection script.",
      "km": "\u1799\u179b\u17cb\u178a\u17b9\u1784\u1796\u17b8\u178f\u17bd\u1793\u17b6\u1791\u17b8\u179a\u1794\u179f\u17cb Data Analyst \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Python 3 \u1793\u17b7\u1784\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a Script \u178a\u17c6\u1794\u17bc\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4"
    },
    "lessons": [
      {
        "id": "m1-l1",
        "moduleId": "module-1",
        "moduleNumber": 1,
        "lessonNumber": 1,
        "title": {
          "en": "What is Data Analytics & The Data Lifecycle",
          "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1791\u17c5\u1787\u17b6 Data Analytics \u1793\u17b7\u1784\u179c\u178a\u17d2\u178f\u1787\u17b8\u179c\u17b7\u178f\u1793\u17c3\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 (Data Lifecycle)?"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "description": {
          "en": "Discover how modern companies turn raw numbers into strategic decisions using the 4 main types of data analytics.",
          "km": "\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u179a\u1794\u17c0\u1794\u178a\u17c2\u179b\u1780\u17d2\u179a\u17bb\u1798\u17a0\u17ca\u17bb\u1793\u1791\u17c6\u1793\u17be\u1794\u1794\u1798\u17d2\u179b\u17c2\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1786\u17c5\u1791\u17c5\u1787\u17b6\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1794\u17c2\u1794\u1799\u17bb\u1791\u17d2\u1792\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u178f\u17b6\u1798\u179a\u1799\u17c8\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c3\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1791\u17b6\u17c6\u1784 \u17e4\u17d4"
        },
        "tutorial": {
          "en": "### Understanding Data Analytics\nData Analytics is the science of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.\n\n#### The 4 Types of Analytics\n1. **Descriptive Analytics:** What happened? (e.g., Total sales last month in Phnom Penh was $50,000).\n2. **Diagnostic Analytics:** Why did it happen? (e.g., Sales dropped due to rainy season delays).\n3. **Predictive Analytics:** What is likely to happen? (e.g., Forecasting Q4 demand using historical trends).\n4. **Prescriptive Analytics:** What action should we take? (e.g., Recommending stock reorders before Khmer New Year).\n\n#### The Standard Data Analytics Workflow\n```text\nRaw Data -> Collection -> Data Cleaning -> Exploration (EDA) -> Modeling/SQL -> Visualization -> Business Insight\n```",
          "km": "### \u1780\u17b6\u179a\u1799\u179b\u17cb\u178a\u17b9\u1784\u17a2\u17c6\u1796\u17b8 Data Analytics\nData Analytics \u1782\u17ba\u1787\u17b6\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1793\u17c3\u1780\u17b6\u179a\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 \u179f\u1798\u17d2\u17a2\u17b6\u178f \u1794\u1798\u17d2\u179b\u17c2\u1784 \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1796\u17d0\u178f\u17cc\u1798\u17b6\u1793\u178a\u17c2\u179b\u1798\u17b6\u1793\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd \u1793\u17b7\u1784\u1787\u17bd\u1799\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4\n\n#### \u1794\u17d2\u179a\u1797\u17c1\u1791\u1791\u17b6\u17c6\u1784 \u17e4 \u1793\u17c3 Data Analytics\n\u17e1. **Descriptive Analytics (\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1796\u17b7\u1796\u178e\u17cc\u1793\u17b6):** \u178f\u17be\u1798\u17b6\u1793\u17a2\u17d2\u179c\u17b8\u1780\u17be\u178f\u17a1\u17be\u1784? (\u17a7. \u1780\u17b6\u179a\u179b\u1780\u17cb\u179f\u179a\u17bb\u1794\u1781\u17c2\u1798\u17bb\u1793\u1793\u17c5\u1797\u17d2\u1793\u17c6\u1796\u17c1\u1789\u1782\u17ba $50,000)\u17d4\n\u17e2. **Diagnostic Analytics (\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179a\u1780\u1798\u17bc\u179b\u17a0\u17c1\u178f\u17bb):** \u17a0\u17c1\u178f\u17bb\u17a2\u17d2\u179c\u17b8\u1794\u17b6\u1793\u1787\u17b6\u179c\u17b6\u1780\u17be\u178f\u17a1\u17be\u1784? (\u17a7. \u1780\u17b6\u179a\u179b\u1780\u17cb\u1792\u17d2\u179b\u17b6\u1780\u17cb\u1785\u17bb\u17c7\u178a\u17c4\u1799\u179f\u17b6\u179a\u1797\u17d2\u179b\u17c0\u1784\u1792\u17d2\u179b\u17b6\u1780\u17cb\u1781\u17d2\u179b\u17b6\u17c6\u1784)\u17d4\n\u17e3. **Predictive Analytics (\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u179f\u17d2\u179f\u1793\u17cd\u1791\u17b6\u1799):** \u178f\u17be\u17a2\u17d2\u179c\u17b8\u17a2\u17b6\u1785\u1793\u17b9\u1784\u1780\u17be\u178f\u17a1\u17be\u1784? (\u17a7. \u1780\u17b6\u179a\u1796\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1791\u17c6\u1793\u17b7\u1789\u1793\u17c5\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 \u17e4)\u17d4\n\u17e4. **Prescriptive Analytics (\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1795\u17d2\u178f\u179b\u17cb\u17a2\u1793\u17bb\u179f\u17b6\u179f\u1793\u17cd):** \u178f\u17be\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u1780\u1794\u179f\u1780\u1798\u17d2\u1798\u1797\u17b6\u1796\u17a2\u17d2\u179c\u17b8? (\u17a7. \u1780\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u17b1\u17d2\u1799\u179f\u17d2\u178f\u17bb\u1780\u1791\u17c6\u1793\u17b7\u1789\u1794\u1793\u17d2\u1790\u17c2\u1798\u1798\u17bb\u1793\u1785\u17bc\u179b\u1786\u17d2\u1793\u17b6\u17c6\u1781\u17d2\u1798\u17c2\u179a)\u17d4"
        },
        "codeExample": {
          "code": "# Calculate total sales and average transaction amount\nsales_data = [120, 450, 310, 890, 220, 640]\ntotal_revenue = sum(sales_data)\navg_transaction = total_revenue / len(sales_data)\n\nprint(f\"Total Sales Revenue: ${total_revenue}\")\nprint(f\"Average Transaction Value: ${avg_transaction:.2f}\")",
          "language": "python",
          "title": {
            "en": "Basic Descriptive Analysis in Python",
            "km": "\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1794\u17c2\u1794 Descriptive \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1780\u17d2\u1793\u17bb\u1784 Python"
          },
          "description": {
            "en": "Calculate key financial summary metrics using native Python numerical operations.",
            "km": "\u1782\u178e\u1793\u17b6\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u179f\u179a\u17bb\u1794\u1795\u17d2\u1793\u17c2\u1780\u17a0\u17b7\u179a\u1789\u17d2\u1789\u179c\u178f\u17d2\u1790\u17bb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1780\u17bc\u178a Python \u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u17b6\u1780\u17cb\u1785\u17c6\u178e\u17bc\u179b \u1793\u17b7\u1784\u1798\u1792\u17d2\u1799\u1798\u1797\u17b6\u1782\u17d4"
          }
        },
        "outputPreview": {
          "output": "Total Sales Revenue: $2630\nAverage Transaction Value: $438.33",
          "explanation": {
            "en": "The script sums up six transaction items and divides by the count to get the mean value.",
            "km": "Script \u1793\u17c1\u17c7\u1794\u17bc\u1780\u179f\u179a\u17bb\u1794\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1785\u17c6\u1793\u17bd\u1793 \u17e6 \u1793\u17b7\u1784\u1785\u17c2\u1780\u1793\u17b9\u1784\u1785\u17c6\u1793\u17bd\u1793\u179f\u179a\u17bb\u1794\u178a\u17be\u1798\u17d2\u1794\u17b8\u1791\u17b6\u1789\u179a\u1780\u178f\u1798\u17d2\u179b\u17c3\u1798\u1792\u17d2\u1799\u1798\u1797\u17b6\u1782\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "# Calculate total orders and total revenue for Phnom Penh Branch\norders = [45, 120, 85, 210, 95]\nunit_price = 15.5\n\ntotal_orders = sum(orders)\ntotal_revenue = total_orders * unit_price\n\nprint(\"Total Items Sold:\", total_orders)\nprint(\"Total Branch Revenue: $\", total_revenue)",
          "expectedOutput": "Total Items Sold: 555\nTotal Branch Revenue: $ 8602.5",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute the Python script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a Python\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q1",
            "question": {
              "en": "Which analytics type answers the question 'Why did sales decrease last month?'",
              "km": "\u178f\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17bd\u1799\u178e\u17b6\u178a\u17c2\u179b\u1786\u17d2\u179b\u17be\u1799\u1793\u17b9\u1784\u179f\u17c6\u178e\u17bd\u179a '\u17a0\u17c1\u178f\u17bb\u17a2\u17d2\u179c\u17b8\u1794\u17b6\u1793\u1787\u17b6\u1780\u17b6\u179a\u179b\u1780\u17cb\u1792\u17d2\u179b\u17b6\u1780\u17cb\u1785\u17bb\u17c7\u1780\u17b6\u179b\u1796\u17b8\u1781\u17c2\u1798\u17bb\u1793?'"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Descriptive Analytics",
                  "km": "Descriptive Analytics"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "Diagnostic Analytics",
                  "km": "Diagnostic Analytics"
                },
                "isCorrect": true
              },
              {
                "id": "c",
                "text": {
                  "en": "Predictive Analytics",
                  "km": "Predictive Analytics"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Prescriptive Analytics",
                  "km": "Prescriptive Analytics"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Diagnostic Analytics investigates root causes behind historical patterns.",
              "km": "Diagnostic Analytics \u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u179f\u17d2\u179a\u17b6\u179c\u1787\u17d2\u179a\u17b6\u179c\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1798\u17bc\u179b\u17a0\u17c1\u178f\u17bb\u1796\u17b8\u1780\u17d2\u179a\u17c4\u1799\u1796\u17d2\u179a\u17b9\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u178e\u17cd\u178a\u17c2\u179b\u1794\u17b6\u1793\u1780\u17be\u178f\u17a1\u17be\u1784\u17d4"
            }
          }
        ]
      },
      {
        "id": "m1-l2",
        "moduleId": "module-1",
        "moduleNumber": 1,
        "lessonNumber": 2,
        "title": {
          "en": "Setting Up Python 3, Jupyter Notebooks & VS Code",
          "km": "\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 Python 3, Jupyter Notebooks \u1793\u17b7\u1784 VS Code"
        },
        "durationMinutes": 30,
        "difficulty": "Beginner",
        "description": {
          "en": "Configure Python 3 virtual environments, install data science packages via pip, and navigate Jupyter notebooks.",
          "km": "\u179a\u17c0\u1793\u1796\u17b8\u179a\u1794\u17c0\u1794\u178a\u17c6\u17a1\u17be\u1784 Virtual Environments, pip install data science packages \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Jupyter Notebooks\u17d4"
        },
        "tutorial": {
          "en": "### Setting Up Your Data Science Workstation\nA Data Analyst relies on interactive coding environments like Jupyter Notebooks and VS Code to explore datasets step by step.\n\n#### Essential Packages for Analytics:\n- **NumPy:** High-performance numerical vector arrays.\n- **Pandas:** DataFrames and data wrangling tools.\n- **Matplotlib & Seaborn:** Statistical data visualization.\n- **SQLAlchemy:** Database connectivity for SQL queries.\n\n#### Package Installation Command:\n```bash\npip install numpy pandas matplotlib seaborn sqlalchemy\n```",
          "km": "### \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6\u178a\u17c6\u17a1\u17be\u1784\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u1780\u17b6\u179a\u1784\u17b6\u179a Data Science\nData Analyst \u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u1780\u17bc\u178a Interactive \u178a\u17bc\u1785\u1787\u17b6 Jupyter Notebooks \u1793\u17b7\u1784 VS Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17c6\u17a0\u17b6\u1793\u17d7\u17d4\n\n#### Packages \u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Analytics\u17d6\n- **NumPy:** \u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179b\u17d2\u1794\u17bf\u1793\u179b\u17bf\u1793\u179b\u17be Array\n- **Pandas:** \u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb DataFrames \u1793\u17b7\u1784\u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\n- **Matplotlib & Seaborn:** \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Chart \u1793\u17b7\u1784 Plot\n- **SQLAlchemy:** \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Database"
        },
        "codeExample": {
          "code": "# Verify library installations and inspect version numbers\nimport sys\nimport numpy as np\nimport pandas as pd\n\nprint(\"Python Version:\", sys.version.split()[0])\nprint(\"NumPy Version:\", np.__version__)\nprint(\"Pandas Version:\", pd.__version__)",
          "language": "python",
          "title": {
            "en": "Verifying Package Installation",
            "km": "\u1780\u17b6\u179a\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1798\u17be\u179b Version \u1793\u17c3 Packages \u178a\u17c2\u179b\u1794\u17b6\u1793\u178a\u17c6\u17a1\u17be\u1784"
          },
          "description": {
            "en": "Checks that Python, NumPy, and Pandas are installed and working correctly.",
            "km": "\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1798\u17be\u179b\u1790\u17b6\u178f\u17be Python, NumPy, \u1793\u17b7\u1784 Pandas \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u178a\u17c6\u17a1\u17be\u1784\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17ac\u1791\u17c1\u17d4"
          }
        },
        "outputPreview": {
          "output": "Python Version: 3.11.4\nNumPy Version: 1.24.3\nPandas Version: 2.0.2",
          "explanation": {
            "en": "Confirms active installation of essential data science dependencies.",
            "km": "\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u1787\u17c4\u1782\u1787\u17d0\u1799\u1793\u17c3 dependencies \u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import math\n\n# Test standard library math functions for data scaling\nvalues = [100, 250, 400, 900]\nsqrt_values = [math.sqrt(v) for v in values]\n\nprint(\"Original Values:\", values)\nprint(\"Square Root Scaled:\", sqrt_values)",
          "expectedOutput": "Original Values: [100, 250, 400, 900]\nSquare Root Scaled: [10.0, 15.811388300841896, 20.0, 30.0]",
          "language": "python",
          "hints": [
            {
              "en": "Math functions process individual values in a loop or list comprehension.",
              "km": "Math functions \u1782\u178e\u1793\u17b6\u178f\u1798\u17d2\u179b\u17c3\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1780\u17d2\u1793\u17bb\u1784 list comprehension\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q2",
            "question": {
              "en": "Which package management tool is standard for installing Python packages like Pandas?",
              "km": "\u178f\u17be\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784 Package \u1798\u17bd\u1799\u178e\u17b6\u1787\u17b6\u179f\u17d2\u178f\u1784\u17cb\u178a\u17b6\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u17a1\u17be\u1784 Python packages \u178a\u17bc\u1785\u1787\u17b6 Pandas?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "npm",
                  "km": "npm"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "pip",
                  "km": "pip"
                },
                "isCorrect": true
              },
              {
                "id": "c",
                "text": {
                  "en": "git",
                  "km": "git"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "brew",
                  "km": "brew"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "pip is Python's official package installer.",
              "km": "pip \u1782\u17ba\u1787\u17b6\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u17a1\u17be\u1784 Python packages\u17d4"
            }
          }
        ]
      },
      {
        "id": "m1-l3",
        "moduleId": "module-1",
        "moduleNumber": 1,
        "lessonNumber": 3,
        "title": {
          "en": "Writing Your First Analytics Script & Variable Data Types",
          "km": "\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a Script \u179c\u17b7\u1797\u17b6\u1782\u178a\u17c6\u1794\u17bc\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791 Variable Data Types"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "description": {
          "en": "Master Python primitive types (int, float, str, bool) and format sales metrics dynamically.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u1794\u17d2\u179a\u1797\u17c1\u1791 Python Primitive Data Types \u1793\u17b7\u1784\u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6\u1791\u1798\u17d2\u179a\u1784\u17cb\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u1780\u17cb\u178c\u17b8\u178e\u17b6\u1798\u17b7\u1780\u17d4"
        },
        "tutorial": {
          "en": "### Primitive Data Types in Data Analytics\nData Analyst workflows revolve around correctly casting and operating on data types:\n- **Integers (`int`):** Whole counts (e.g., number of orders: 150).\n- **Floating Points (`float`):** Monetary or continuous values (e.g., unit price: 12.50).\n- **Strings (`str`):** Text fields, customer names, or order status tags.\n- **Booleans (`bool`):** True/False flags indicating completed vs cancelled transactions.",
          "km": "### \u1794\u17d2\u179a\u1797\u17c1\u1791 Data Types \u1780\u17d2\u1793\u17bb\u1784 Data Analytics\n- **Integers (`int`):** \u1785\u17c6\u1793\u17bd\u1793\u1782\u178f\u17cb (\u17a7. \u1785\u17c6\u1793\u17bd\u1793\u1780\u17b6\u179a\u1794\u1789\u17d2\u1787\u17b6\u1791\u17b7\u1789\u17d6 150)\n- **Floating Points (`float`):** \u1785\u17c6\u1793\u17bd\u1793\u1791\u179f\u1797\u17b6\u1782/\u1794\u17d2\u179a\u17b6\u1780\u17cb (\u17a7. \u178f\u1798\u17d2\u179b\u17c3\u1791\u17c6\u1793\u17b7\u1789\u17d6 12.50)\n- **Strings (`str`):** \u17a2\u1780\u17d2\u179f\u179a/\u1788\u17d2\u1798\u17c4\u17c7\u1791\u17b8\u1780\u17d2\u179a\u17bb\u1784\n- **Booleans (`bool`):** \u178f\u1798\u17d2\u179b\u17c3 \u1796\u17b7\u178f (True) \u17ac \u1797\u17bc\u178f (False)"
        },
        "codeExample": {
          "code": "# Order record details\norder_id = \"KH-9021\"\nitem_count = 4\nunit_price = 24.99\nis_express_shipping = True\n\nsubtotal = item_count * unit_price\nshipping_fee = 2.50 if is_express_shipping else 0.0\ntotal_bill = subtotal + shipping_fee\n\nprint(f\"Invoice [{order_id}]:\")\nprint(f\"Subtotal: ${subtotal:.2f}\")\nprint(f\"Shipping Fee: ${shipping_fee:.2f}\")\nprint(f\"Total Due: ${total_bill:.2f}\")",
          "language": "python",
          "title": {
            "en": "Order Invoice Calculation",
            "km": "\u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u179c\u17b7\u1780\u17d2\u1780\u1799\u1794\u178f\u17d2\u179a\u1794\u1789\u17d2\u1787\u17b6\u1791\u17b7\u1789"
          },
          "description": {
            "en": "Combines integer counts, floating prices, string IDs, and boolean flags.",
            "km": "\u1794\u17bc\u1780\u1794\u1789\u17d2\u1785\u17bc\u1793 integer, float, string \u1793\u17b7\u1784 boolean flags\u17d4"
          }
        },
        "outputPreview": {
          "output": "Invoice [KH-9021]:\nSubtotal: $99.96\nShipping Fee: $2.50\nTotal Due: $102.46",
          "explanation": {
            "en": "Calculates the invoice summary with formatted decimals.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179f\u1784\u17d2\u1781\u17c1\u1794\u179c\u17b7\u1780\u17d2\u1780\u1799\u1794\u178f\u17d2\u179a\u178a\u17c2\u179b\u1798\u17b6\u1793\u1791\u179f\u1797\u17b6\u1782\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "base_salary = 450.00\nbonus_percentage = 0.12 # 12% bonus\ntax_rate = 0.05 # 5% tax\n\ngross = base_salary * (1 + bonus_percentage)\nnet_pay = gross * (1 - tax_rate)\n\nprint(f\"Gross Pay: ${gross:.2f}\")\nprint(f\"Net Pay after Tax: ${net_pay:.2f}\")",
          "expectedOutput": "Gross Pay: $504.00\nNet Pay after Tax: $478.80",
          "language": "python",
          "hints": [
            {
              "en": "Apply percentages to calculate gross and net pay.",
              "km": "\u1782\u17bb\u178e\u1797\u17b6\u1782\u179a\u1799\u178a\u17be\u1798\u17d2\u1794\u17b8\u1791\u17b6\u1789\u179a\u1780 Gross \u1793\u17b7\u1784 Net pay\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q3",
            "question": {
              "en": "What data type is returned by the expression 10 / 2 in Python 3?",
              "km": "\u178f\u17be Expression 10 / 2 \u1794\u1789\u17d2\u1787\u17bc\u1793\u1794\u17d2\u179a\u1797\u17c1\u1791 Data Type \u1798\u17bd\u1799\u178e\u17b6 \u1780\u17d2\u1793\u17bb\u1784 Python 3?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "int",
                  "km": "int"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "float",
                  "km": "float"
                },
                "isCorrect": true
              },
              {
                "id": "c",
                "text": {
                  "en": "str",
                  "km": "str"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "bool",
                  "km": "bool"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Standard division / always returns a float in Python 3 (5.0).",
              "km": "\u1780\u17b6\u179a\u1785\u17c2\u1780\u1792\u1798\u17d2\u1798\u178f\u17b6 / \u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3 float (5.0) \u1787\u17b6\u1793\u17b7\u1785\u17d2\u1785\u1780\u17d2\u1793\u17bb\u1784 Python 3\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-2",
    "moduleNumber": 2,
    "title": {
      "en": "Module 2: Python Data Structures for Analytics",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e2\u17d6 \u1791\u1798\u17d2\u179a\u1784\u17cb\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1780\u17d2\u1793\u17bb\u1784 Python \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
    },
    "description": {
      "en": "Master Lists, Dictionaries, Sets, Tuples, and List Comprehensions for filtering and aggregating raw data.",
      "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789 Lists, Dictionaries, Sets, Tuples \u1793\u17b7\u1784 List Comprehensions \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Filter \u1793\u17b7\u1784\u1794\u17bc\u1780\u179f\u179a\u17bb\u1794\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1786\u17c5\u17d4"
    },
    "lessons": [
      {
        "id": "m2-l1",
        "moduleId": "module-2",
        "moduleNumber": 2,
        "lessonNumber": 1,
        "title": {
          "en": "Lists & Dictionaries for Multi-dimensional Data",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Lists & Dictionaries \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1785\u17d2\u179a\u17be\u1793\u179c\u17b7\u1798\u17b6\u178f\u17d2\u179a"
        },
        "durationMinutes": 30,
        "difficulty": "Beginner",
        "description": {
          "en": "Learn how to represent row-column dataset structures using list of dictionaries and perform filter operations.",
          "km": "\u179a\u17c0\u1793\u179a\u17c0\u1794\u1785\u17c6\u1791\u1798\u17d2\u179a\u1784\u17cb\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u179a\u178a\u17c1\u1780 \u1793\u17b7\u1784\u1787\u17bd\u179a\u1788\u179a\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be List of Dictionaries \u1793\u17b7\u1784\u1792\u17d2\u179c\u17be\u1780\u17b6\u179a Filtering \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4"
        },
        "tutorial": {
          "en": "### Structuring Tabular Data in Python\nBefore introducing Pandas, raw datasets are often represented as a list of dictionaries where each dictionary represents a single record.\n\n#### Example Record Format:\n```python\ntransactions = [\n    {\"id\": \"TX101\", \"city\": \"Phnom Penh\", \"amount\": 150.0, \"category\": \"Electronics\"},\n    {\"id\": \"TX102\", \"city\": \"Siem Reap\", \"amount\": 45.0, \"category\": \"Groceries\"},\n    {\"id\": \"TX103\", \"city\": \"Phnom Penh\", \"amount\": 280.0, \"category\": \"Electronics\"},\n]\n```\n\n#### List Comprehension Filtering\nList comprehensions provide an elegant syntax for filtering records based on conditions:\n```python\npp_sales = [t[\"amount\"] for t in transactions if t[\"city\"] == \"Phnom Penh\"]\n```",
          "km": "### \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 Tabular \u1780\u17d2\u1793\u17bb\u1784 Python\n\u1798\u17bb\u1793\u1796\u17c1\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Pandas \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1786\u17c5\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u17c0\u1794\u1785\u17c6\u1787\u17b6 List of Dictionaries \u178a\u17c2\u179b dictionary \u1793\u17b8\u1798\u17bd\u1799\u17d7\u178f\u17c6\u178e\u17b6\u1784\u17b1\u17d2\u1799\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17bd\u1799\u1787\u17bd\u179a (record)\u17d4\n\n#### \u1782\u17c6\u179a\u17bc\u1791\u1798\u17d2\u179a\u1784\u17cb Record\u17d6\n```python\ntransactions = [\n    {\"id\": \"TX101\", \"city\": \"Phnom Penh\", \"amount\": 150.0, \"category\": \"Electronics\"},\n    {\"id\": \"TX102\", \"city\": \"Siem Reap\", \"amount\": 45.0, \"category\": \"Groceries\"},\n]\n```"
        },
        "codeExample": {
          "code": "# Dataset of Cambodian store purchases\norders = [\n    {\"customer\": \"Sophea\", \"city\": \"Phnom Penh\", \"total\": 120},\n    {\"customer\": \"Bora\", \"city\": \"Siem Reap\", \"total\": 45},\n    {\"customer\": \"Chann\", \"city\": \"Phnom Penh\", \"total\": 310},\n    {\"customer\": \"Dara\", \"city\": \"Battambang\", \"total\": 85}\n]\n\n# High value orders filter (> $100)\nhigh_value = [o for o in orders if o[\"total\"] > 100]\n\nprint(\"High Value Customers:\", [o[\"customer\"] for o in high_value])\nprint(\"Total High Value Revenue: $\", sum(o[\"total\"] for o in high_value))",
          "language": "python",
          "title": {
            "en": "Filtering Dataset Records",
            "km": "\u1780\u17b6\u179a Filter \u1787\u17bd\u179a\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1780\u17d2\u1793\u17bb\u1784 Dataset"
          },
          "description": {
            "en": "Filters customers with purchases greater than $100 and sums their revenue.",
            "km": "Filter \u179a\u1780\u17a2\u178f\u17b7\u1790\u17b7\u1787\u1793\u178a\u17c2\u179b\u1791\u17b7\u1789\u179b\u17be\u179f\u1796\u17b8 $100 \u1793\u17b7\u1784\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u17b6\u1780\u17cb\u1785\u17c6\u178e\u17bc\u179b\u179f\u179a\u17bb\u1794\u17d4"
          }
        },
        "outputPreview": {
          "output": "High Value Customers: ['Sophea', 'Chann']\nTotal High Value Revenue: $ 430",
          "explanation": {
            "en": "Identified two qualifying orders ($120 and $310) and calculated their combined sum of $430.",
            "km": "\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1783\u17be\u1789\u1780\u17b6\u179a\u1794\u1789\u17d2\u1787\u17b6\u1791\u17b7\u1789\u1785\u17c6\u1793\u17bd\u1793 \u17e2 \u1780\u179a\u178e\u17b8 ($120 \u1793\u17b7\u1784 $310) \u1793\u17b7\u1784\u1794\u17bc\u1780\u179f\u179a\u17bb\u1794\u179f\u17d2\u1798\u17be $430\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "sales = [\n    {\"product\": \"Laptop\", \"price\": 850, \"qty\": 2},\n    {\"product\": \"Mouse\", \"price\": 15, \"qty\": 10},\n    {\"product\": \"Monitor\", \"price\": 180, \"qty\": 3}\n]\n\n# Calculate total invoice amount for each product (price * qty)\nfor item in sales:\n    subtotal = item[\"price\"] * item[\"qty\"]\n    print(f\"{item['product']}: ${subtotal}\")",
          "expectedOutput": "Laptop: $1700\nMouse: $150\nMonitor: $540",
          "language": "python",
          "hints": [
            {
              "en": "Each dictionary key represents product details.",
              "km": "Dictionary key \u1793\u17b8\u1798\u17bd\u1799\u17d7\u178f\u17c6\u178e\u17b6\u1784\u17b1\u17d2\u1799\u1796\u17d0\u178f\u17cc\u1798\u17b6\u1793\u179b\u1798\u17d2\u17a2\u17b7\u178f\u1793\u17c3\u1795\u179b\u17b7\u178f\u1795\u179b\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q4",
            "question": {
              "en": "Which Python structure is best for storing a single row with named column headers?",
              "km": "\u178f\u17be\u1791\u1798\u17d2\u179a\u1784\u17cb Python \u1798\u17bd\u1799\u178e\u17b6\u178a\u17c2\u179b\u179f\u1798\u179f\u17d2\u179a\u1794\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17bd\u1799\u1787\u17bd\u179a\u178a\u17c2\u179b\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7 Column?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "List",
                  "km": "List"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "Dictionary",
                  "km": "Dictionary"
                },
                "isCorrect": true
              },
              {
                "id": "c",
                "text": {
                  "en": "Set",
                  "km": "Set"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Tuple",
                  "km": "Tuple"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Dictionaries associate column names (keys) with specific field values.",
              "km": "Dictionary \u1797\u17d2\u1787\u17b6\u1794\u17cb\u1788\u17d2\u1798\u17c4\u17c7 Column (keys) \u1787\u17b6\u1798\u17bd\u1799\u178f\u1798\u17d2\u179b\u17c3\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 (values)\u17d4"
            }
          }
        ]
      },
      {
        "id": "m2-l2",
        "moduleId": "module-2",
        "moduleNumber": 2,
        "lessonNumber": 2,
        "title": {
          "en": "Sets, Tuples & Memory-Efficient Lookups",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Sets, Tuples \u1793\u17b7\u1784\u1780\u17b6\u179a\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u179b\u17d2\u1794\u17bf\u1793\u179b\u17bf\u1793"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "description": {
          "en": "Deduplicate customer IDs with Sets and protect immutable database schemas with Tuples.",
          "km": "\u179b\u17bb\u1794\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 ID \u179f\u17d2\u1791\u17bd\u1793\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Sets \u1793\u17b7\u1784\u179a\u1780\u17d2\u179f\u17b6\u1780\u17b6\u179a\u1796\u17b6\u179a Schema \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Tuples\u17d4"
        },
        "tutorial": {
          "en": "### Sets & Tuples in Data Pipelines\n- **Tuples `()`:** Immutable ordered sequences. Perfect for storing fixed database coordinates or column names that should never be altered.\n- **Sets `{}`:** Unordered collections of unique elements. Crucial for deduplicating customer logs, finding unique product categories, and performing set math (intersections & unions).",
          "km": "### Sets & Tuples \u1780\u17d2\u1793\u17bb\u1784 Data Pipelines\n- **Tuples `()`:** \u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c2\u1794\u17d2\u179a\u17c2\u1794\u17b6\u1793 (Immutable)\u17d4 \u179f\u17d0\u1780\u17d2\u178f\u17b7\u179f\u1798\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780 Column names\n- **Sets `{}`:** \u179f\u17bb\u17c6\u1791\u17c4\u179f\u1782\u17d2\u1798\u17b6\u1793\u1792\u17b6\u178f\u17bb\u179f\u17d2\u1791\u17bd\u1793 (Unique elements)\u17d4 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179b\u17bb\u1794 Customer IDs \u179f\u17d2\u1791\u17bd\u1793 \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780 Unique items"
        },
        "codeExample": {
          "code": "# Raw login log with duplicate user IDs\nlogin_logs = [\"USR-101\", \"USR-102\", \"USR-101\", \"USR-105\", \"USR-102\", \"USR-108\"]\n\n# Deduplicate unique active users using Set\nunique_users = set(login_logs)\n\nprint(\"Total Login Events:\", len(login_logs))\nprint(\"Unique Active Users:\", len(unique_users))\nprint(\"User List:\", sorted(list(unique_users)))",
          "language": "python",
          "title": {
            "en": "Deduplicating User Activity Logs",
            "km": "\u1780\u17b6\u179a\u179b\u17bb\u1794\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 Logs \u179f\u17d2\u1791\u17bd\u1793"
          },
          "description": {
            "en": "Uses set() to count distinct active users.",
            "km": "\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb set() \u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17d2\u179b\u17c2\u1780\u17d7\u1782\u17d2\u1793\u17b6\u17d4"
          }
        },
        "outputPreview": {
          "output": "Total Login Events: 6\nUnique Active Users: 4\nUser List: ['USR-101', 'USR-102', 'USR-105', 'USR-108']",
          "explanation": {
            "en": "Identified 4 distinct active users from 6 total login records.",
            "km": "\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1783\u17be\u1789\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb \u17e4 \u1793\u17b6\u1780\u17cb\u1794\u17d2\u179b\u17c2\u1780\u1782\u17d2\u1793\u17b6\u1796\u17b8 Logs \u1785\u17c6\u1793\u17bd\u1793 \u17e6\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "campaign_a = {\"user1@gmail.com\", \"user2@gmail.com\", \"user3@gmail.com\"}\ncampaign_b = {\"user2@gmail.com\", \"user3@gmail.com\", \"user4@gmail.com\"}\n\n# Find users who converted in BOTH marketing campaigns (Set Intersection)\nboth_converted = campaign_a.intersection(campaign_b)\nprint(\"Converted in Both:\", sorted(list(both_converted)))",
          "expectedOutput": "Converted in Both: ['user2@gmail.com', 'user3@gmail.com']",
          "language": "python",
          "hints": [
            {
              "en": "Set.intersection() finds common elements.",
              "km": "Set.intersection() \u179a\u1780\u1792\u17b6\u178f\u17bb\u179a\u17bd\u1798\u1782\u17d2\u1793\u17b6\u1780\u17d2\u1793\u17bb\u1784 Set \u1791\u17b6\u17c6\u1784\u1796\u17b8\u179a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q5",
            "question": {
              "en": "Which Python data structure automatically removes duplicate items?",
              "km": "\u178f\u17be\u1791\u1798\u17d2\u179a\u1784\u17cb\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 Python \u1798\u17bd\u1799\u178e\u17b6\u178a\u17c2\u179b\u179b\u17bb\u1794\u1792\u17b6\u178f\u17bb\u179f\u17d2\u1791\u17bd\u1793\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "List",
                  "km": "List"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "Tuple",
                  "km": "Tuple"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Set",
                  "km": "Set"
                },
                "isCorrect": true
              },
              {
                "id": "d",
                "text": {
                  "en": "Dictionary",
                  "km": "Dictionary"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Sets only store unique elements and discard duplicates.",
              "km": "Set \u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u178f\u17c2\u1792\u17b6\u178f\u17bb\u178a\u17c2\u179b\u1798\u17b7\u1793\u179f\u17d2\u1791\u17bd\u1793\u1782\u17d2\u1793\u17b6\u178f\u17c2\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7\u17d4"
            }
          }
        ]
      },
      {
        "id": "m2-l3",
        "moduleId": "module-2",
        "moduleNumber": 2,
        "lessonNumber": 3,
        "title": {
          "en": "Advanced List Comprehensions & Conditional Filtering",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb List Comprehensions \u1793\u17b7\u1784 Conditional Filtering \u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Transform and clean arrays in a single line using pythonic list comprehensions.",
          "km": "\u1794\u1798\u17d2\u179b\u17c2\u1784 \u1793\u17b7\u1784\u179f\u1798\u17d2\u17a2\u17b6\u178f Array \u1780\u17d2\u1793\u17bb\u1784\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be List Comprehensions\u17d4"
        },
        "tutorial": {
          "en": "### Pythonic Data Transformation\nList comprehensions replace verbose `for` loops with concise syntax:\n```python\nnew_list = [expression for item in iterable if condition]\n```",
          "km": "### \u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1794\u17c2\u1794 Pythonic\nList comprehensions \u1787\u17c6\u1793\u17bd\u179f for loops \u178a\u17c4\u1799\u1780\u17bc\u178a\u1781\u17d2\u179b\u17b8\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u17a2\u17b6\u1793\u17d6\n```python\nnew_list = [expression for item in iterable if condition]\n```"
        },
        "codeExample": {
          "code": "# Raw transaction amounts in USD\nraw_amounts = [45.0, -12.0, 150.0, 0.0, 280.0, -5.0]\n\n# Filter out invalid negative/zero transactions and convert to Cambodian Riel\nvalid_khr = [amt * 4000 for amt in raw_amounts if amt > 0]\n\nprint(\"Cleaned Transactions (KHR):\", valid_khr)",
          "language": "python",
          "title": {
            "en": "Filtering and Currency Conversion in One Line",
            "km": "\u1780\u17b6\u179a Filter \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784\u179a\u17bc\u1794\u17b7\u1799\u179c\u178f\u17d2\u1790\u17bb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb"
          },
          "description": {
            "en": "Filters positive transactions and converts USD to KHR.",
            "km": "Filter \u1799\u1780\u178f\u17c2\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179c\u17b7\u1787\u17d2\u1787\u1798\u17b6\u1793 \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 USD \u1791\u17c5 KHR\u17d4"
          }
        },
        "outputPreview": {
          "output": "Cleaned Transactions (KHR): [180000.0, 600000.0, 1120000.0]",
          "explanation": {
            "en": "Discarded invalid amounts and multiplied positive USD values by 4000.",
            "km": "\u179b\u17bb\u1794\u1785\u17c4\u179b\u1785\u17c6\u1793\u17bd\u1793\u17a2\u179c\u17b7\u1787\u17d2\u1787\u1798\u17b6\u1793 \u1793\u17b7\u1784\u1782\u17bb\u178e\u178f\u1798\u17d2\u179b\u17c3 USD \u178a\u17c4\u1799 \u17e4\u17e0\u17e0\u17e0\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "scores = [85, 42, 90, 68, 55, 94]\n\n# Filter passing scores (>= 60)\npassing_scores = [s for s in scores if s >= 60]\nprint(\"Passing Scores:\", passing_scores)",
          "expectedOutput": "Passing Scores: [85, 90, 68, 94]",
          "language": "python",
          "hints": [
            {
              "en": "Filter elements using conditional check at the end.",
              "km": "Filter \u1792\u17b6\u178f\u17bb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q6",
            "question": {
              "en": "Where does the 'if' filter condition sit in a basic list comprehension?",
              "km": "\u178f\u17be\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c 'if' Filter \u179f\u17d2\u1790\u17b7\u178f\u1793\u17c5\u1791\u17b8\u178f\u17b6\u17c6\u1784\u178e\u17b6 \u1780\u17d2\u1793\u17bb\u1784 basic list comprehension?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "At the very beginning",
                  "km": "\u1793\u17c5\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1"
                },
                "isCorrect": false
              },
              {
                "id": "b",
                "text": {
                  "en": "At the end after the for clause",
                  "km": "\u1793\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 for clause"
                },
                "isCorrect": true
              },
              {
                "id": "c",
                "text": {
                  "en": "Inside brackets outside the comprehension",
                  "km": "\u1793\u17c5\u1780\u17d2\u179a\u17c5\u179a\u1784\u17d2\u179c\u1784\u17cb\u1780\u17d2\u179a\u1785\u1780"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "List comprehensions do not support if statements",
                  "km": "\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be if \u1794\u17b6\u1793\u1791\u17c1"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Basic filtering sits at the end: [x for x in list if condition].",
              "km": "\u1780\u17b6\u179a Filter \u179f\u17d2\u1790\u17b7\u178f\u1793\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3 List comprehension\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-3",
    "moduleNumber": 3,
    "title": {
      "en": "Module 3: Numerical Computing with NumPy",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e3\u17d6 \u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179b\u17d2\u1794\u17bf\u1793\u179b\u17bf\u1793\u1787\u17b6\u1798\u17bd\u1799 NumPy"
    },
    "description": {
      "en": "Mastery training module covering Module 3: Numerical Computing with NumPy.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e3\u17d6 \u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179b\u17d2\u1794\u17bf\u1793\u179b\u17bf\u1793\u1787\u17b6\u1798\u17bd\u1799 NumPy\u17d4"
    },
    "lessons": [
      {
        "id": "m3-l1",
        "moduleId": "module-3",
        "moduleNumber": 3,
        "lessonNumber": 1,
        "title": {
          "en": "NumPy Arrays & Vectorized Calculations",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master NumPy Arrays & Vectorized Calculations with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### NumPy Arrays & Vectorized Calculations\nIn this lesson, we explore **NumPy Arrays & Vectorized Calculations** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for NumPy Arrays & Vectorized Calculations\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: NumPy Arrays & Vectorized Calculations",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_3_1",
            "question": {
              "en": "What is the main advantage of applying NumPy Arrays & Vectorized Calculations?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb NumPy Arrays \u1793\u17b7\u1784 Vectorized Operations?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m3-l2",
        "moduleId": "module-3",
        "moduleNumber": 3,
        "lessonNumber": 2,
        "title": {
          "en": "Array Reshaping, Indexing & Matrix Slicing",
          "km": "\u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Array Reshaping, Indexing & Matrix Slicing with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Array Reshaping, Indexing & Matrix Slicing\nIn this lesson, we explore **Array Reshaping, Indexing & Matrix Slicing** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Array Reshaping, Indexing & Matrix Slicing\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Array Reshaping, Indexing & Matrix Slicing",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_3_2",
            "question": {
              "en": "What is the main advantage of applying Array Reshaping, Indexing & Matrix Slicing?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a Reshape Array, Indexing \u1793\u17b7\u1784 Matrix Slicing?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m3-l3",
        "moduleId": "module-3",
        "moduleNumber": 3,
        "lessonNumber": 3,
        "title": {
          "en": "Statistical Functions & Broadcasting Mechanics",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Statistical Functions & Broadcasting Mechanics with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Statistical Functions & Broadcasting Mechanics\nIn this lesson, we explore **Statistical Functions & Broadcasting Mechanics** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Statistical Functions & Broadcasting Mechanics\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Statistical Functions & Broadcasting Mechanics",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_3_3",
            "question": {
              "en": "What is the main advantage of applying Statistical Functions & Broadcasting Mechanics?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Statistical Functions \u1793\u17b7\u1784 Broadcasting Mechanics?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-4",
    "moduleNumber": 4,
    "title": {
      "en": "Module 4: Data Manipulation & Wrangling with Pandas",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e4\u17d6 \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1780\u17c2\u1785\u17d2\u1793\u17c3\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 Pandas"
    },
    "description": {
      "en": "Mastery training module covering Module 4: Data Manipulation & Wrangling with Pandas.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e4\u17d6 \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1780\u17c2\u1785\u17d2\u1793\u17c3\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 Pandas\u17d4"
    },
    "lessons": [
      {
        "id": "m4-l1",
        "moduleId": "module-4",
        "moduleNumber": 4,
        "lessonNumber": 1,
        "title": {
          "en": "Pandas DataFrames & Series Fundamentals",
          "km": "\u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Pandas DataFrames & Series Fundamentals with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Pandas DataFrames & Series Fundamentals\nIn this lesson, we explore **Pandas DataFrames & Series Fundamentals** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Pandas DataFrames & Series Fundamentals\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Pandas DataFrames & Series Fundamentals",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_4_1",
            "question": {
              "en": "What is the main advantage of applying Pandas DataFrames & Series Fundamentals?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7\u1793\u17c3 Pandas DataFrames \u1793\u17b7\u1784 Series?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m4-l2",
        "moduleId": "module-4",
        "moduleNumber": 4,
        "lessonNumber": 2,
        "title": {
          "en": "DataFrame Indexing, loc, iloc & Conditional Slicing",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master DataFrame Indexing, loc, iloc & Conditional Slicing with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### DataFrame Indexing, loc, iloc & Conditional Slicing\nIn this lesson, we explore **DataFrame Indexing, loc, iloc & Conditional Slicing** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for DataFrame Indexing, loc, iloc & Conditional Slicing\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: DataFrame Indexing, loc, iloc & Conditional Slicing",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_4_2",
            "question": {
              "en": "What is the main advantage of applying DataFrame Indexing, loc, iloc & Conditional Slicing?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Indexing, loc, iloc \u1793\u17b7\u1784 Conditional Slicing?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m4-l3",
        "moduleId": "module-4",
        "moduleNumber": 4,
        "lessonNumber": 3,
        "title": {
          "en": "GroupBy Aggregations & Multi-level Summary Summaries",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master GroupBy Aggregations & Multi-level Summary Summaries with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### GroupBy Aggregations & Multi-level Summary Summaries\nIn this lesson, we explore **GroupBy Aggregations & Multi-level Summary Summaries** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for GroupBy Aggregations & Multi-level Summary Summaries\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: GroupBy Aggregations & Multi-level Summary Summaries",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_4_3",
            "question": {
              "en": "What is the main advantage of applying GroupBy Aggregations & Multi-level Summary Summaries?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u1798\u17bc\u179b\u1795\u17d2\u178f\u17bb\u17c6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1798\u17bd\u1799 GroupBy \u1793\u17b7\u1784 Multi-level Summaries?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-5",
    "moduleNumber": 5,
    "title": {
      "en": "Module 5: Data Cleaning, Missing Data & Formatting",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e5\u17d6 \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Data \u1793\u17b7\u1784 Formatting"
    },
    "description": {
      "en": "Mastery training module covering Module 5: Data Cleaning, Missing Data & Formatting.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e5\u17d6 \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Data \u1793\u17b7\u1784 Formatting\u17d4"
    },
    "lessons": [
      {
        "id": "m5-l1",
        "moduleId": "module-5",
        "moduleNumber": 5,
        "lessonNumber": 1,
        "title": {
          "en": "Handling Missing Values & Outliers",
          "km": "\u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers)"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Handling Missing Values & Outliers with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers) \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Handling Missing Values & Outliers\nIn this lesson, we explore **Handling Missing Values & Outliers** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers)\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers)** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Handling Missing Values & Outliers\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Handling Missing Values & Outliers",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers)"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_5_1",
            "question": {
              "en": "What is the main advantage of applying Handling Missing Values & Outliers?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799 Missing Values \u1793\u17b7\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1798\u17b7\u1793\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8 (Outliers)?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m5-l2",
        "moduleId": "module-5",
        "moduleNumber": 5,
        "lessonNumber": 2,
        "title": {
          "en": "String Manipulations & Text Cleaning",
          "km": "\u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master String Manipulations & Text Cleaning with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### String Manipulations & Text Cleaning\nIn this lesson, we explore **String Manipulations & Text Cleaning** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for String Manipulations & Text Cleaning\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: String Manipulations & Text Cleaning",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_5_2",
            "question": {
              "en": "What is the main advantage of applying String Manipulations & Text Cleaning?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u1794\u1798\u17d2\u179b\u17c2\u1784 String Text?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m5-l3",
        "moduleId": "module-5",
        "moduleNumber": 5,
        "lessonNumber": 3,
        "title": {
          "en": "DateTime Parsing & Time-Series Formatting",
          "km": "\u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime)"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master DateTime Parsing & Time-Series Formatting with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime) \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### DateTime Parsing & Time-Series Formatting\nIn this lesson, we explore **DateTime Parsing & Time-Series Formatting** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime)\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime)** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for DateTime Parsing & Time-Series Formatting\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: DateTime Parsing & Time-Series Formatting",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime)"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_5_3",
            "question": {
              "en": "What is the main advantage of applying DateTime Parsing & Time-Series Formatting?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u1798\u17d2\u179b\u17c2\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791 (DateTime)?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-6",
    "moduleNumber": 6,
    "title": {
      "en": "Module 6: Data Visualization with Matplotlib & Seaborn",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e6\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Visualization \u1787\u17b6\u1798\u17bd\u1799 Matplotlib & Seaborn"
    },
    "description": {
      "en": "Mastery training module covering Module 6: Data Visualization with Matplotlib & Seaborn.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e6\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Visualization \u1787\u17b6\u1798\u17bd\u1799 Matplotlib & Seaborn\u17d4"
    },
    "lessons": [
      {
        "id": "m6-l1",
        "moduleId": "module-6",
        "moduleNumber": 6,
        "lessonNumber": 1,
        "title": {
          "en": "Bar Charts & Line Graphs for Trend Analysis",
          "km": "\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Bar Charts & Line Graphs for Trend Analysis with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Bar Charts & Line Graphs for Trend Analysis\nIn this lesson, we explore **Bar Charts & Line Graphs for Trend Analysis** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Bar Charts & Line Graphs for Trend Analysis\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Bar Charts & Line Graphs for Trend Analysis",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_6_1",
            "question": {
              "en": "What is the main advantage of applying Bar Charts & Line Graphs for Trend Analysis?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Bar Charts \u1793\u17b7\u1784 Line Graphs \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Trend?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m6-l2",
        "moduleId": "module-6",
        "moduleNumber": 6,
        "lessonNumber": 2,
        "title": {
          "en": "Histograms & Box Plots for Distribution",
          "km": "\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Histograms & Box Plots for Distribution with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Histograms & Box Plots for Distribution\nIn this lesson, we explore **Histograms & Box Plots for Distribution** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Histograms & Box Plots for Distribution\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Histograms & Box Plots for Distribution",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_6_2",
            "question": {
              "en": "What is the main advantage of applying Histograms & Box Plots for Distribution?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Histograms \u1793\u17b7\u1784 Box Plots \u1798\u17be\u179b\u1780\u17b6\u179a\u1794\u17c2\u1784\u1785\u17c2\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m6-l3",
        "moduleId": "module-6",
        "moduleNumber": 6,
        "lessonNumber": 3,
        "title": {
          "en": "Heatmaps & Correlation Matrix Visualizations",
          "km": "\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Heatmaps & Correlation Matrix Visualizations with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Heatmaps & Correlation Matrix Visualizations\nIn this lesson, we explore **Heatmaps & Correlation Matrix Visualizations** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Heatmaps & Correlation Matrix Visualizations\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Heatmaps & Correlation Matrix Visualizations",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_6_3",
            "question": {
              "en": "What is the main advantage of applying Heatmaps & Correlation Matrix Visualizations?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Heatmaps \u1794\u1784\u17d2\u17a0\u17b6\u1789\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-7",
    "moduleNumber": 7,
    "title": {
      "en": "Module 7: SQL Fundamentals for Data Analysts",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e7\u17d6 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 SQL \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
    },
    "description": {
      "en": "Mastery training module covering Module 7: SQL Fundamentals for Data Analysts.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e7\u17d6 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 SQL \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4"
    },
    "lessons": [
      {
        "id": "m7-l1",
        "moduleId": "module-7",
        "moduleNumber": 7,
        "lessonNumber": 1,
        "title": {
          "en": "SQL Querying, Filtering & Aggregations",
          "km": "\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master SQL Querying, Filtering & Aggregations with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### SQL Querying, Filtering & Aggregations\nIn this lesson, we explore **SQL Querying, Filtering & Aggregations** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for SQL Querying, Filtering & Aggregations\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: SQL Querying, Filtering & Aggregations",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_7_1",
            "question": {
              "en": "What is the main advantage of applying SQL Querying, Filtering & Aggregations?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a SQL Queries, Filtering \u1793\u17b7\u1784 Aggregations?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m7-l2",
        "moduleId": "module-7",
        "moduleNumber": 7,
        "lessonNumber": 2,
        "title": {
          "en": "Grouping with HAVING & Multi-Column Sorting",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Grouping with HAVING & Multi-Column Sorting with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Grouping with HAVING & Multi-Column Sorting\nIn this lesson, we explore **Grouping with HAVING & Multi-Column Sorting** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for Grouping with HAVING & Multi-Column Sorting\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: Grouping with HAVING & Multi-Column Sorting",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_7_2",
            "question": {
              "en": "What is the main advantage of applying Grouping with HAVING & Multi-Column Sorting?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb HAVING Clause \u1793\u17b7\u1784 ORDER BY?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m7-l3",
        "moduleId": "module-7",
        "moduleNumber": 7,
        "lessonNumber": 3,
        "title": {
          "en": "Subqueries & CASE WHEN Conditional Logic",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Subqueries & CASE WHEN Conditional Logic with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Subqueries & CASE WHEN Conditional Logic\nIn this lesson, we explore **Subqueries & CASE WHEN Conditional Logic** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for Subqueries & CASE WHEN Conditional Logic\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: Subqueries & CASE WHEN Conditional Logic",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_7_3",
            "question": {
              "en": "What is the main advantage of applying Subqueries & CASE WHEN Conditional Logic?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Subqueries \u1793\u17b7\u1784 CASE WHEN?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-8",
    "moduleNumber": 8,
    "title": {
      "en": "Module 8: Advanced SQL Joins, CTEs & Window Functions",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e8\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins, CTEs \u1793\u17b7\u1784 Window Functions \u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb"
    },
    "description": {
      "en": "Mastery training module covering Module 8: Advanced SQL Joins, CTEs & Window Functions.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e8\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins, CTEs \u1793\u17b7\u1784 Window Functions \u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u17d4"
    },
    "lessons": [
      {
        "id": "m8-l1",
        "moduleId": "module-8",
        "moduleNumber": 8,
        "lessonNumber": 1,
        "title": {
          "en": "INNER, LEFT, RIGHT & FULL OUTER Joins",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master INNER, LEFT, RIGHT & FULL OUTER Joins with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### INNER, LEFT, RIGHT & FULL OUTER Joins\nIn this lesson, we explore **INNER, LEFT, RIGHT & FULL OUTER Joins** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for INNER, LEFT, RIGHT & FULL OUTER Joins\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: INNER, LEFT, RIGHT & FULL OUTER Joins",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_8_1",
            "question": {
              "en": "What is the main advantage of applying INNER, LEFT, RIGHT & FULL OUTER Joins?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb SQL Joins \u1797\u17d2\u1787\u17b6\u1794\u17cb Table \u1785\u17d2\u179a\u17be\u1793?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m8-l2",
        "moduleId": "module-8",
        "moduleNumber": 8,
        "lessonNumber": 2,
        "title": {
          "en": "Common Table Expressions (CTEs) for Readability",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs)"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Common Table Expressions (CTEs) for Readability with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs) \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Common Table Expressions (CTEs) for Readability\nIn this lesson, we explore **Common Table Expressions (CTEs) for Readability** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs)\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs)** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for Common Table Expressions (CTEs) for Readability\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: Common Table Expressions (CTEs) for Readability",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs)"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_8_2",
            "question": {
              "en": "What is the main advantage of applying Common Table Expressions (CTEs) for Readability?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Common Table Expressions (CTEs)?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m8-l3",
        "moduleId": "module-8",
        "moduleNumber": 8,
        "lessonNumber": 3,
        "title": {
          "en": "Window Functions: ROW_NUMBER, RANK & LAG/LEAD",
          "km": "\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Window Functions: ROW_NUMBER, RANK & LAG/LEAD with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Window Functions: ROW_NUMBER, RANK & LAG/LEAD\nIn this lesson, we explore **Window Functions: ROW_NUMBER, RANK & LAG/LEAD** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "-- SQL Analytics Query for Window Functions: ROW_NUMBER, RANK & LAG/LEAD\nSELECT region, COUNT(*) AS order_count, SUM(amount) AS total_revenue\nFROM transactions\nGROUP BY region\nHAVING SUM(amount) > 1000;",
          "language": "sql",
          "title": {
            "en": "Practical Code: Window Functions: ROW_NUMBER, RANK & LAG/LEAD",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "region       | order_count | total_revenue\n-------------+-------------+--------------\nPhnom Penh   | 450         | 15000\nSiem Reap    | 220         | 8500",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "-- Write query here\nSELECT * FROM sales LIMIT 5;",
          "expectedOutput": "sales_id | amount",
          "language": "sql",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_8_3",
            "question": {
              "en": "What is the main advantage of applying Window Functions: ROW_NUMBER, RANK & LAG/LEAD?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Window Analytics Functions?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-9",
    "moduleNumber": 9,
    "title": {
      "en": "Module 9: Database Connectivity: Python + SQL Integration",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e9\u17d6 \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1787\u17b6\u1798\u17bd\u1799 SQL Database"
    },
    "description": {
      "en": "Mastery training module covering Module 9: Database Connectivity: Python + SQL Integration.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e9\u17d6 \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1787\u17b6\u1798\u17bd\u1799 SQL Database\u17d4"
    },
    "lessons": [
      {
        "id": "m9-l1",
        "moduleId": "module-9",
        "moduleNumber": 9,
        "lessonNumber": 1,
        "title": {
          "en": "Connecting Python to SQLite & PostgreSQL Databases",
          "km": "\u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Connecting Python to SQLite & PostgreSQL Databases with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Connecting Python to SQLite & PostgreSQL Databases\nIn this lesson, we explore **Connecting Python to SQLite & PostgreSQL Databases** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Connecting Python to SQLite & PostgreSQL Databases\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Connecting Python to SQLite & PostgreSQL Databases",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_9_1",
            "question": {
              "en": "What is the main advantage of applying Connecting Python to SQLite & PostgreSQL Databases?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1797\u17d2\u1787\u17b6\u1794\u17cb Python \u1791\u17c5\u1780\u17b6\u1793\u17cb SQLite & PostgreSQL?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m9-l2",
        "moduleId": "module-9",
        "moduleNumber": 9,
        "lessonNumber": 2,
        "title": {
          "en": "Executing SQL Queries via pandas.read_sql",
          "km": "\u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql"
        },
        "durationMinutes": 35,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Executing SQL Queries via pandas.read_sql with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Executing SQL Queries via pandas.read_sql\nIn this lesson, we explore **Executing SQL Queries via pandas.read_sql** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Executing SQL Queries via pandas.read_sql\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Executing SQL Queries via pandas.read_sql",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_9_2",
            "question": {
              "en": "What is the main advantage of applying Executing SQL Queries via pandas.read_sql?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179a\u178f\u17cb SQL Query \u178f\u17b6\u1798 pandas.read_sql?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m9-l3",
        "moduleId": "module-9",
        "moduleNumber": 9,
        "lessonNumber": 3,
        "title": {
          "en": "Exporting & Writing Analytics Data back to Databases",
          "km": "\u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "description": {
          "en": "Master Exporting & Writing Analytics Data back to Databases with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Exporting & Writing Analytics Data back to Databases\nIn this lesson, we explore **Exporting & Writing Analytics Data back to Databases** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Exporting & Writing Analytics Data back to Databases\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Exporting & Writing Analytics Data back to Databases",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_9_3",
            "question": {
              "en": "What is the main advantage of applying Exporting & Writing Analytics Data back to Databases?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1791\u17c5 Database?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-10",
    "moduleNumber": 10,
    "title": {
      "en": "Module 10: Exploratory Data Analysis (EDA) & Statistical Thinking",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e0\u17d6 \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Exploratory Data Analysis (EDA) \u1793\u17b7\u1784\u179f\u17d2\u1790\u17b7\u178f\u17b7"
    },
    "description": {
      "en": "Mastery training module covering Module 10: Exploratory Data Analysis (EDA) & Statistical Thinking.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e0\u17d6 \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Exploratory Data Analysis (EDA) \u1793\u17b7\u1784\u179f\u17d2\u1790\u17b7\u178f\u17b7\u17d4"
    },
    "lessons": [
      {
        "id": "m10-l1",
        "moduleId": "module-10",
        "moduleNumber": 10,
        "lessonNumber": 1,
        "title": {
          "en": "Univariate Analysis & Summary Statistics",
          "km": "\u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
        },
        "durationMinutes": 30,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Univariate Analysis & Summary Statistics with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Univariate Analysis & Summary Statistics\nIn this lesson, we explore **Univariate Analysis & Summary Statistics** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Univariate Analysis & Summary Statistics\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Univariate Analysis & Summary Statistics",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_10_1",
            "question": {
              "en": "What is the main advantage of applying Univariate Analysis & Summary Statistics?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Univariate Analysis \u1793\u17b7\u1784\u179f\u17d2\u179c\u17c2\u1784\u1799\u179b\u17cb\u1796\u17b8\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m10-l2",
        "moduleId": "module-10",
        "moduleNumber": 10,
        "lessonNumber": 2,
        "title": {
          "en": "Bivariate Correlation & Feature Scatter Plots",
          "km": "\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots"
        },
        "durationMinutes": 35,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Bivariate Correlation & Feature Scatter Plots with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Bivariate Correlation & Feature Scatter Plots\nIn this lesson, we explore **Bivariate Correlation & Feature Scatter Plots** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Bivariate Correlation & Feature Scatter Plots\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Bivariate Correlation & Feature Scatter Plots",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_10_2",
            "question": {
              "en": "What is the main advantage of applying Bivariate Correlation & Feature Scatter Plots?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u1791\u17c6\u1793\u17b6\u1780\u17cb\u1791\u17c6\u1793\u1784 Bivariate \u1793\u17b7\u1784 Scatter Plots?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m10-l3",
        "moduleId": "module-10",
        "moduleNumber": 10,
        "lessonNumber": 3,
        "title": {
          "en": "Business Hypothesis Testing & A/B Testing Essentials",
          "km": "\u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
        },
        "durationMinutes": 40,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Business Hypothesis Testing & A/B Testing Essentials with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Business Hypothesis Testing & A/B Testing Essentials\nIn this lesson, we explore **Business Hypothesis Testing & A/B Testing Essentials** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Business Hypothesis Testing & A/B Testing Essentials\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Business Hypothesis Testing & A/B Testing Essentials",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_10_3",
            "question": {
              "en": "What is the main advantage of applying Business Hypothesis Testing & A/B Testing Essentials?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1792\u17d2\u179c\u17be Hypothesis Testing \u1793\u17b7\u1784 A/B Testing \u1780\u17d2\u1793\u17bb\u1784\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-11",
    "moduleNumber": 11,
    "title": {
      "en": "Module 11: Business Metrics, KPIs & Executive Dashboards",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e1\u17d6 \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Business KPIs \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Executive Dashboards"
    },
    "description": {
      "en": "Mastery training module covering Module 11: Business Metrics, KPIs & Executive Dashboards.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e1\u17d6 \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Business KPIs \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Executive Dashboards\u17d4"
    },
    "lessons": [
      {
        "id": "m11-l1",
        "moduleId": "module-11",
        "moduleNumber": 11,
        "lessonNumber": 1,
        "title": {
          "en": "Defining Core E-Commerce & Fintech KPIs",
          "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs"
        },
        "durationMinutes": 30,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Defining Core E-Commerce & Fintech KPIs with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Defining Core E-Commerce & Fintech KPIs\nIn this lesson, we explore **Defining Core E-Commerce & Fintech KPIs** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Defining Core E-Commerce & Fintech KPIs\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Defining Core E-Commerce & Fintech KPIs",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_11_1",
            "question": {
              "en": "What is the main advantage of applying Defining Core E-Commerce & Fintech KPIs?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce & Fintech KPIs?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m11-l2",
        "moduleId": "module-11",
        "moduleNumber": 11,
        "lessonNumber": 2,
        "title": {
          "en": "Customer Cohort Analysis & Churn Metrics",
          "km": "\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate"
        },
        "durationMinutes": 35,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Customer Cohort Analysis & Churn Metrics with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Customer Cohort Analysis & Churn Metrics\nIn this lesson, we explore **Customer Cohort Analysis & Churn Metrics** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Customer Cohort Analysis & Churn Metrics\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Customer Cohort Analysis & Churn Metrics",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_11_2",
            "question": {
              "en": "What is the main advantage of applying Customer Cohort Analysis & Churn Metrics?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782 Customer Cohort \u1793\u17b7\u1784 Churn Rate?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m11-l3",
        "moduleId": "module-11",
        "moduleNumber": 11,
        "lessonNumber": 3,
        "title": {
          "en": "Data Storytelling & Designing Executive Dashboards",
          "km": "\u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6"
        },
        "durationMinutes": 40,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Data Storytelling & Designing Executive Dashboards with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Data Storytelling & Designing Executive Dashboards\nIn this lesson, we explore **Data Storytelling & Designing Executive Dashboards** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Data Storytelling & Designing Executive Dashboards\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Data Storytelling & Designing Executive Dashboards",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_11_3",
            "question": {
              "en": "What is the main advantage of applying Data Storytelling & Designing Executive Dashboards?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179a\u1785\u1793\u17b6\u179a\u1794\u17b6\u1799\u1780\u17b6\u179a\u178e\u17cd\u1794\u17c2\u1794 Data Storytelling \u1787\u17bc\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17b9\u1780\u1793\u17b6\u17c6?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "module-12",
    "moduleNumber": 12,
    "title": {
      "en": "Module 12: Real-World E-Commerce & Fintech Analytics Capstone",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e2\u17d6 \u1782\u1798\u17d2\u179a\u17c4\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 (Capstone Project)"
    },
    "description": {
      "en": "Mastery training module covering Module 12: Real-World E-Commerce & Fintech Analytics Capstone.",
      "km": "\u1798\u17bc\u178c\u17bb\u179b\u179f\u17b7\u1780\u17d2\u179f\u17b6\u1782\u17d2\u179a\u1794\u178a\u178e\u17d2\u178f\u1794\u17cb\u179b\u17be \u1798\u17bc\u178c\u17bb\u179b\u1791\u17b8 \u17e1\u17e2\u17d6 \u1782\u1798\u17d2\u179a\u17c4\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 (Capstone Project)\u17d4"
    },
    "lessons": [
      {
        "id": "m12-l1",
        "moduleId": "module-12",
        "moduleNumber": 12,
        "lessonNumber": 1,
        "title": {
          "en": "End-to-End Cambodian E-Commerce Pipeline",
          "km": "\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6"
        },
        "durationMinutes": 30,
        "difficulty": "Advanced",
        "description": {
          "en": "Master End-to-End Cambodian E-Commerce Pipeline with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6 \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### End-to-End Cambodian E-Commerce Pipeline\nIn this lesson, we explore **End-to-End Cambodian E-Commerce Pipeline** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for End-to-End Cambodian E-Commerce Pipeline\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: End-to-End Cambodian E-Commerce Pipeline",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_12_1",
            "question": {
              "en": "What is the main advantage of applying End-to-End Cambodian E-Commerce Pipeline?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f Data Pipeline \u179c\u17b7\u1797\u17b6\u1782\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798 E-Commerce \u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m12-l2",
        "moduleId": "module-12",
        "moduleNumber": 12,
        "lessonNumber": 2,
        "title": {
          "en": "Digital Payment Fraud Detection Analysis",
          "km": "\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection)"
        },
        "durationMinutes": 35,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Digital Payment Fraud Detection Analysis with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection) \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Digital Payment Fraud Detection Analysis\nIn this lesson, we explore **Digital Payment Fraud Detection Analysis** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection)\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection)** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Digital Payment Fraud Detection Analysis\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Digital Payment Fraud Detection Analysis",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection)"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_12_2",
            "question": {
              "en": "What is the main advantage of applying Digital Payment Fraud Detection Analysis?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179c\u17b7\u1797\u17b6\u1782\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u179f\u1784\u17d2\u179f\u17d0\u1799 (Fraud Detection)?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      },
      {
        "id": "m12-l3",
        "moduleId": "module-12",
        "moduleNumber": 12,
        "lessonNumber": 3,
        "title": {
          "en": "Capstone Portfolio Submission & Certificate",
          "km": "\u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a"
        },
        "durationMinutes": 40,
        "difficulty": "Advanced",
        "description": {
          "en": "Master Capstone Portfolio Submission & Certificate with hands-on practice, realistic code examples, and interactive exercises.",
          "km": "\u179f\u17d2\u1791\u17b6\u178f\u17cb\u1787\u17c6\u1793\u17b6\u1789\u179b\u17be \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a \u178a\u17c4\u1799\u1798\u17b6\u1793\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784 \u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u1793\u17b7\u1784\u179b\u17c6\u17a0\u17b6\u178f\u17cb\u1780\u17bc\u178a Interactive\u17d4"
        },
        "tutorial": {
          "en": "### Capstone Portfolio Submission & Certificate\nIn this lesson, we explore **Capstone Portfolio Submission & Certificate** focusing on practical application.\n\n#### Key Objectives:\n1. Apply core formulas and functions to clean and analyze datasets.\n2. Work with real Cambodian retail and fintech scenarios.\n3. Validate outputs using built-in assertions.",
          "km": "### \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a\n\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c1\u179a\u17c0\u1793\u1793\u17c1\u17c7 \u1799\u17be\u1784\u179f\u17b7\u1780\u17d2\u179f\u17b6\u17a2\u17c6\u1796\u17b8 **\u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a** \u178a\u17c4\u1799\u1795\u17d2\u178f\u17c4\u178f\u179b\u17be\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4\n\n#### \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784\u179f\u17c6\u1781\u17b6\u1793\u17cb\u17d7\u17d6\n\u17e1. \u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f Formula \u1793\u17b7\u1784 Function \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u17a2\u17b6\u178f \u1793\u17b7\u1784\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4\n\u17e2. \u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4"
        },
        "codeExample": {
          "code": "# Python Analytics Script for Capstone Portfolio Submission & Certificate\nimport pandas as pd\n\ndata = {'Region': ['Phnom Penh', 'Siem Reap', 'Battambang'], 'Revenue': [15000, 8500, 6200]}\ndf = pd.DataFrame(data)\nprint(df)",
          "language": "python",
          "title": {
            "en": "Practical Code: Capstone Portfolio Submission & Certificate",
            "km": "\u1780\u17bc\u178a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u17d6 \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a"
          },
          "description": {
            "en": "Demonstrates real-world syntax and data output.",
            "km": "\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b8 Syntax \u1793\u17b7\u1784\u179b\u1791\u17d2\u1792\u1795\u179b\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178f\u17c2\u1784\u17d4"
          }
        },
        "outputPreview": {
          "output": "       Region  Revenue\n0  Phnom Penh    15000\n1   Siem Reap     8500\n2  Battambang     6200",
          "explanation": {
            "en": "Output matches expected business metrics format.",
            "km": "\u179b\u1791\u17d2\u1792\u1795\u179b\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1793\u17b9\u1784\u1791\u1798\u17d2\u179a\u1784\u17cb\u179f\u17bc\u1785\u1793\u17b6\u1780\u179a\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u17d4"
          }
        },
        "tryItYourself": {
          "starterCode": "import pandas as pd\n\nval = [10, 20, 30]\nprint('Total:', sum(val))",
          "expectedOutput": "Total: 60",
          "language": "python",
          "hints": [
            {
              "en": "Click Run Code to execute script.",
              "km": "\u1785\u17bb\u1785 Run Code \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179a\u178f\u17cb\u1780\u17bc\u178a\u17d4"
            }
          ]
        },
        "quiz": [
          {
            "id": "q_12_3",
            "question": {
              "en": "What is the main advantage of applying Capstone Portfolio Submission & Certificate?",
              "km": "\u178f\u17be\u17a2\u17d2\u179c\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u17d2\u179a\u1799\u17c4\u1787\u1793\u17cd\u1785\u1798\u17d2\u1794\u1784\u1793\u17c3\u1780\u17b6\u179a\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f \u1780\u17b6\u179a\u179a\u17c0\u1794\u1785\u17c6 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793 Portfolio \u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u179c\u17b7\u1789\u17d2\u1789\u17b6\u1794\u1793\u1794\u17d0\u178f\u17d2\u179a?"
            },
            "options": [
              {
                "id": "a",
                "text": {
                  "en": "Accelerates data-driven business insights",
                  "km": "\u1796\u1793\u17d2\u179b\u17bf\u1793\u1780\u17b6\u179a\u1791\u17b6\u1789\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u179f\u1793\u17d2\u1793\u17b7\u178a\u17d2\u178b\u17b6\u1793\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798"
                },
                "isCorrect": true
              },
              {
                "id": "b",
                "text": {
                  "en": "Increases hardware power consumption",
                  "km": "\u1794\u1784\u17d2\u1780\u17be\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1797\u17d2\u179b\u17be\u1784"
                },
                "isCorrect": false
              },
              {
                "id": "c",
                "text": {
                  "en": "Formats CSS styles",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb CSS"
                },
                "isCorrect": false
              },
              {
                "id": "d",
                "text": {
                  "en": "Resets router IP address",
                  "km": "\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb IP Address Router"
                },
                "isCorrect": false
              }
            ],
            "explanation": {
              "en": "Data analytics techniques empower strategic business decisions.",
              "km": "\u1794\u1785\u17d2\u1785\u17c1\u1780\u1791\u17c1\u179f\u179c\u17b7\u1797\u17b6\u1782\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u17a2\u17b6\u1787\u17b8\u179c\u1780\u1798\u17d2\u1798\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u17d4"
            }
          }
        ]
      }
    ]
  }
];

export const getAllDataAnalyticsLessons = (): DataAnalyticsLesson[] => {
  return DATA_ANALYTICS_MODULES.flatMap((m) => m.lessons);
};
