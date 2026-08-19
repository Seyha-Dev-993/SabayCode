import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import Editor from '@monaco-editor/react';
import { ExecutionService } from '../utils/executionService';
import { parseLessonStarterCode, getLessonExample } from '../utils/lessonExampleHelper';

import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Terminal, RotateCcw, Copy, Check, Download, 
  Sparkles, Code, FileCode, ChevronRight, ChevronDown, 
  BookOpen, Globe, Cpu, Database, Info, Maximize2, Minimize2, 
  Trash2, ExternalLink, RefreshCw, Columns, ArrowLeft, Beaker,
  ZoomIn, ZoomOut
} from 'lucide-react';

// Hardcoded starter templates
const playgroundTemplates: Record<string, string> = {
  html: `<!DOCTYPE html>
<html>
<head>
  <title>Sabaicode HTML Sandbox</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 40px; background-color: #f8fafc; color: #1e293b; }
    h1 { color: #4f46e5; font-size: 36px; font-weight: 800; margin-bottom: 12px; }
    .card { background: white; max-width: 450px; margin: 0 auto; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    .btn { background: #4f46e5; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn:hover { background: #3730a3; transform: translateY(-1px); }
  </style>
</head>
<body>
  <div class="card">
    <h1>សួស្តីពិភពលោក! 🇰🇭</h1>
    <p>Welcome to your bilingual HTML5 Sandbox. Edit anything here and click Run Code!</p>
    <button class="btn" onclick="console.log('Button clicked!'); alert('Happy coding in Cambodia!')">Interactive Button</button>
  </div>
</body>
</html>`,
  css: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: radial-gradient(circle at top right, #e0f2fe, #f5f3ff);
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      margin: 0;
    }
    .profile-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.6);
      box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.15);
      text-align: center;
      max-width: 340px;
      transition: transform 0.3s;
    }
    .profile-card:hover { transform: translateY(-5px); }
    h2 { color: #4f46e5; margin: 0 0 10px 0; font-size: 24px; }
    p { color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
    .tag { background: #e0e7ff; color: #4f46e5; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="profile-card">
    <span class="tag">Designer Mode</span>
    <h2>Styled CSS Card</h2>
    <p>This workspace allows complete design control with CSS selectors, layouts, custom transitions, and variables.</p>
  </div>
</body>
</html>`,
  javascript: `// JavaScript Interactive Playground
console.log("🚀 Javascript engine online!");

function calculateDiscount(price, discountPercent) {
  const savings = price * (discountPercent / 100);
  const finalPrice = price - savings;
  return { savings, finalPrice };
}

const originalPrice = 250;
const promoDiscount = 15; // 15% discount
const invoice = calculateDiscount(originalPrice, promoDiscount);

console.log("🛒 Original Price: $" + originalPrice);
console.log("✨ Discount Savings: $" + invoice.savings);
console.log("💳 Final Payable Price: $" + invoice.finalPrice);

// You can interact with web pages directly:
document.body.innerHTML += \`
  <div style="padding: 20px; background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 12px; max-width: 400px; margin: 20px auto; font-family: sans-serif; text-align: center;">
    <h3 style="color: #16a34a; margin-top: 0;">Javascript Rendered!</h3>
    <p style="font-size: 14px; color: #1e293b;">Calculated Pay price is: <strong>$\${invoice.finalPrice}</strong></p>
  </div>
\`;`,
  typescript: `// TypeScript Static Types & Interfaces
interface Developer {
  id: number;
  name: string;
  isBilingual: boolean;
  skills: string[];
}

function printDeveloperInfo(dev: Developer): void {
  console.log(\`💻 SabayCode Developer Profile:\`);
  console.log(\`- Name: \${dev.name}\`);
  console.log(\`- Bilingual Support (KM/EN): \${dev.isBilingual ? 'Yes 🇰🇭' : 'No'}\`);
  console.log(\`- Technology Stack: \${dev.skills.join(', ')}\`);
}

const leadDev: Developer = {
  id: 1088,
  name: "Dara Seyha",
  isBilingual: true,
  skills: ["TypeScript", "React", "Node.js", "PostgreSQL"]
};

printDeveloperInfo(leadDev);`,
  python: `# Python Data Structures & Loops Demo
student_scores = {
    "Seyha": 95,
    "Sokchea": 88,
    "Dara": 92,
    "Borey": 79
}

print("📊 Sandbox database: Processing student grades...")
for name, score in student_scores.items():
    status = "Passed ✅" if score >= 80 else "Needs Work ⚠️"
    print(f"- Student {name:7} scored {score:3}/100 | Status: {status}")

class_average = sum(student_scores.values()) / len(student_scores)
print(f"\\n📈 Overall Class Average Score: {class_average:.2f}%")`,
  java: `public class Main {
    public static void main(String[] args) {
        String welcomeMessage = "សួស្តីពីភាសា Java! Welcome to Sabaicode Sandbox.";
        System.out.println(welcomeMessage);
        
        System.out.println("\\n--- Fibonacci Series Generator ---");
        int count = 8;
        int n1 = 0, n2 = 1;
        System.out.print(n1 + " " + n2);
        
        for (int i = 2; i < count; ++i) {
            int n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
        }
        System.out.println();
    }
}`,
  c: `#include <stdio.h>

int main() {
    char title[] = "C Native compiler execution";
    int year = 2026;
    
    printf("--- %s ---\\n", title);
    printf("Standard: ANSI C11\\n");
    printf("State: Active compile cycle\\n");
    printf("Current running environment: Cloud sandbox container\\n");
    printf("Active year: %d\\n", year);
    
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Lesson {
public:
    string title;
    int durationMinutes;
    
    Lesson(string t, int d) {
        title = t;
        durationMinutes = d;
    }
};

int main() {
    cout << "--- C++ Object Oriented Programming Sandbox ---" << endl;
    
    vector<Lesson> syllabus;
    syllabus.push_back(Lesson("C++ Syntax basics", 45));
    syllabus.push_back(Lesson("Pointers & Memory allocation", 90));
    syllabus.push_back(Lesson("Object-Oriented Design patterns", 120));
    
    for (size_t i = 0; i < syllabus.size(); ++i) {
        cout << "Topic #" << (i+1) << ": " << syllabus[i].title 
             << " (" << syllabus[i].durationMinutes << " mins)" << endl;
    }
    
    return 0;
}`,
  csharp: `using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Console.WriteLine("--- C# .NET Core Interactive Compiler ---");
        
        List<string> languages = new List<string> { "C#", "F#", "VB.NET", "TypeScript" };
        Console.WriteLine("Managed languages in CLR pipeline:");
        foreach (var lang in languages) {
            Console.WriteLine($"- {lang}");
        }
    }
}`,
  php: `<?php
$headline = "សួស្តីពីភាសា PHP! Live Server Sandbox.";
$timestamp = date("Y-m-d H:i:s");
?>
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; text-align: center; padding: 40px; background: #faf5ff;">
  <h1 style="color: #7c3aed;"><?php echo $headline; ?></h1>
  <p>PHP Server execution compiled this page dynamically on: <strong><?php echo $timestamp; ?></strong></p>
  <div style="display: inline-block; background: #7c3aed; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold;">
    PHP v8.2 Engine Live
  </div>
</body>
</html>`,
  kotlin: `fun main() {
    println("🇰🇭 Greet from Kotlin standard compiler!")
    val items = listOf("Variables", "Control flow", "Null safety", "Coroutines")
    
    println("\\nWhy choose Kotlin for Android development?")
    for ((index, value) in items.withIndex()) {
        println("\${index + 1}. \${value} is highly optimized.")
    }
}`,
  sql: `-- Seeded SQLite SQL Database Table
-- Select or run queries on preseeded tables: Customers, Employees, Products, Orders
SELECT CustomerID, CustomerName, ContactName, City, Country 
FROM Customers 
WHERE Country = 'Germany' OR Country = 'UK'
ORDER BY CustomerName ASC;`,
  mysql: `-- Database Sandbox: Creating a local table, inserting records, and running queries
CREATE TABLE if not exists courses (
    id INTEGER PRIMARY KEY,
    name TEXT,
    difficulty TEXT,
    xp_reward INTEGER
);

INSERT INTO courses VALUES (1, 'HTML5 Foundations', 'Beginner', 150)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;
INSERT INTO courses VALUES (2, 'React Application Design', 'Advanced', 400)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;
INSERT INTO courses VALUES (3, 'Modern Python & AI', 'Intermediate', 300)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;

SELECT * FROM courses WHERE xp_reward >= 200;`,
  git: `# Simulated version control timeline
# Learn common git commands sequentially:
git init
git status
git add index.html
git commit -m "initial website boilerplate layout"
git log --oneline`,
  jquery: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-8 flex flex-col items-center min-h-[400px]">
  <div id="target-box" class="w-full max-w-sm bg-indigo-600 text-white p-8 rounded-2xl text-center shadow-lg mb-6 transition-all font-bold">
    jQuery Animation Target Card
  </div>
  
  <div class="flex space-x-3">
    <button id="fadeBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer">Fade Toggle</button>
    <button id="slideBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer">Slide Toggle</button>
  </div>

  <script>
    $(document).ready(function() {
      console.log("jQuery Core connected!");
      
      $("#fadeBtn").click(function() {
        console.log("Fade toggle clicked!");
        $("#target-box").fadeToggle(400);
      });
      
      $("#slideBtn").click(function() {
        console.log("Slide toggle clicked!");
        $("#target-box").slideToggle(400);
      });
    });
  </script>
</body>
</html>`,
  react: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-[400px] flex items-center justify-center p-6">
  <div id="root" class="w-full max-w-md"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    function CustomCounter() {
      const [count, setCount] = useState(0);
      
      useEffect(() => {
        console.log("React Component Mounted! Initial Count: " + count);
      }, []);

      const handleIncrement = () => {
        const newVal = count + 1;
        setCount(newVal);
        console.log("Count updated to: " + newVal);
      };

      return (
        <div class="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center shadow-2xl">
          <span class="inline-block bg-indigo-500/10 text-indigo-400 font-mono text-xs px-3 py-1 rounded-full uppercase">React v18 Sandbox ⚛️</span>
          <h2 class="text-2xl font-black text-white mt-4">Interactive Counter</h2>
          <p class="text-slate-400 text-sm mt-1">Sabaicode live web compiler component rendering.</p>
          
          <div class="my-6 text-5xl font-black font-mono text-indigo-400">
            {count}
          </div>
          
          <button 
            onClick={handleIncrement}
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl transition shadow-lg shadow-indigo-600/25"
          >
            Increment Count
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CustomCounter />);
  </script>
</body>
</html>`,
  nextjs: `import React from 'react';

// Simulated Server Component Page Router Representation
export default function HomePage() {
  console.log("Simulating Next.js SSR build path rendering...");
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ background: '#000', color: '#fff', padding: '10px 20px', borderRadius: '50px', display: 'inline-block', fontSize: '12px', fontWeight: 'bold' }}>
        Next.js App Router 🚀
      </div>
      <h1 style={{ fontSize: '32px', margin: '20px 0 10px 0', fontWeight: '800' }}>Bilingual Server-Side Framework</h1>
      <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
        Edit the JSX code to see instantaneous hot module re-renders. Next.js combines powerful static generation and server hydration.
      </p>
    </div>
  );
}`,
  vue: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 flex flex-col items-center min-h-[400px] justify-center">
  <div id="vue-root" class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 text-center">
    <span class="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Vue 3 Live Sandbox 🟢</span>
    
    <h2 class="text-xl font-bold text-slate-800 mt-4">Two-Way Data Binding</h2>
    <p class="text-xs text-slate-500 mt-1">Edit the textbox to see reactivity in action.</p>
    
    <div class="my-6">
      <div class="text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 min-h-[48px] flex items-center justify-center italic">
        {{ message || 'Writing some reactive text...' }}
      </div>
    </div>
    
    <input 
      v-model="message" 
      class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none" 
      placeholder="Type reactive text here..."
      @input="logMessage"
    />
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const message = ref("សួស្តី សប្បាយកូដ! Reactive Live.");
        
        const logMessage = () => {
          console.log("Vue State message changed: " + message.value);
        };
        
        return { message, logMessage };
      }
    }).mount('#vue-root');
  </script>
</body>
</html>`,
  angular: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-8 flex items-center justify-center min-h-[400px]">
  <div class="w-full max-w-md bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-lg">
    <span class="bg-rose-50 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Angular Live Signals 🔴</span>
    
    <h3 class="text-xl font-extrabold text-slate-900 mt-4">Signals Counter</h3>
    <p class="text-slate-500 text-xs mt-1">Dynamic reactivity model tracking angular state signals.</p>

    <div class="my-6 text-4xl font-extrabold font-mono text-rose-600">
      0
    </div>

    <button class="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-2xl transition shadow-lg shadow-rose-600/20">
      Trigger Angular Action
    </button>
  </div>
</body>
</html>`,
  tailwind: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-[400px] flex items-center justify-center p-6">
  <div class="max-w-md bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 hover:scale-[1.01] transition-all duration-300">
    <div class="inline-block bg-teal-500/10 text-teal-400 font-bold font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Tailwind v4 Engine</div>
    
    <h2 class="text-2xl font-black text-white mt-4">Rapid Prototyping</h2>
    <p class="text-slate-400 mt-2 text-sm leading-relaxed">Design beautiful user interfaces instantly with CSS utility classes directly inside your HTML structures.</p>
    
    <button 
      class="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3 rounded-2xl transition shadow-lg shadow-teal-500/20 cursor-pointer"
      onclick="console.log('Tailwind button clicked!')"
    >
      Run Tailwind Action
    </button>
  </div>
</body>
</html>`,
  bootstrap: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light py-5">
  <div class="container bg-white p-5 rounded-4 shadow-sm" style="max-width: 500px;">
    <span class="badge bg-primary text-uppercase mb-3 px-3 py-2">Bootstrap v5</span>
    <h2 class="text-primary font-weight-bold mb-2">Grid & Layout system</h2>
    <p class="text-muted mb-4">Design responsive grids and pre-styled UI components easily using official mobile-first bootstrap packages.</p>
    <div class="alert alert-info py-2 font-monospace" style="font-size: 13px;">Bootstrap container active.</div>
    <button class="btn btn-primary w-100 py-2.5 font-weight-bold" onclick="console.log('Bootstrap action triggered!');">Trigger Bootstrap Action</button>
  </div>
</body>
</html>`,
  flutter: `import 'package:flutter/material.dart';

void main() => runApp(PlaygroundApp());

class PlaygroundApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sabaicode Flutter Playground'),
          backgroundColor: Colors.indigo,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.bolt, size: 80, color: Colors.amber),
              SizedBox(height: 15),
              Text(
                'Happy Coding with Flutter!',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: Colors.indigo,
                ),
              ),
              SizedBox(height: 5),
              Text('Edit this code to customize your virtual app device.'),
            ],
          ),
        ),
      ),
    );
  }
}`
};

// Filename and extension map
const langFileInfoMap: Record<string, { filename: string, iconColor: string }> = {
  html: { filename: 'index.html', iconColor: 'text-orange-500' },
  css: { filename: 'styles.css', iconColor: 'text-blue-500' },
  javascript: { filename: 'app.js', iconColor: 'text-yellow-500' },
  typescript: { filename: 'app.ts', iconColor: 'text-sky-600' },
  python: { filename: 'main.py', iconColor: 'text-teal-500' },
  java: { filename: 'Main.java', iconColor: 'text-amber-600' },
  c: { filename: 'main.c', iconColor: 'text-slate-400' },
  cpp: { filename: 'main.cpp', iconColor: 'text-blue-600' },
  csharp: { filename: 'Program.cs', iconColor: 'text-purple-600' },
  php: { filename: 'index.php', iconColor: 'text-indigo-500' },
  kotlin: { filename: 'main.kt', iconColor: 'text-indigo-400' },
  sql: { filename: 'queries.sql', iconColor: 'text-cyan-500' },
  mysql: { filename: 'schema.sql', iconColor: 'text-cyan-600' },
  git: { filename: 'vcs_commands.sh', iconColor: 'text-orange-600' },
  jquery: { filename: 'index.html', iconColor: 'text-sky-400' },
  react: { filename: 'App.jsx', iconColor: 'text-indigo-400' },
  nextjs: { filename: 'page.jsx', iconColor: 'text-slate-200' },
  vue: { filename: 'index.html', iconColor: 'text-emerald-500' },
  angular: { filename: 'index.html', iconColor: 'text-rose-500' },
  tailwind: { filename: 'index.html', iconColor: 'text-teal-400' },
  bootstrap: { filename: 'index.html', iconColor: 'text-purple-500' },
  flutter: { filename: 'main.dart', iconColor: 'text-sky-400' },
  dart: { filename: 'main.dart', iconColor: 'text-sky-500' },
};

// Group categories for languages
const categories = [
  { id: 'web', name: { en: 'Web Technologies', km: 'បច្ចេកវិទ្យាវិប' }, icon: Globe },
  { id: 'frameworks', name: { en: 'Advanced Frameworks', km: 'ក្របខ័ណ្ឌការងារខ្ពស់' }, icon: Sparkles },
  { id: 'backend', name: { en: 'Backend & Systems', km: 'ប្រព័ន្ធការងារខាងក្រោយ' }, icon: Cpu },
  { id: 'database', name: { en: 'Database & VCS', km: 'មូលដ្ឋានទិន្នន័យ & VCS' }, icon: Database },
];

// Map courses to their respective group categories
const getCategoryForLang = (lang: string): string => {
  const webLangs = ['html', 'css', 'javascript', 'jquery', 'tailwind', 'bootstrap'];
  const frameworkLangs = ['react', 'vue', 'angular', 'nextjs', 'flutter'];
  const backendLangs = ['python', 'typescript', 'java', 'c', 'cpp', 'csharp', 'php', 'kotlin', 'dart'];
  const databaseLangs = ['sql', 'mysql', 'git'];

  if (webLangs.includes(lang)) return 'web';
  if (frameworkLangs.includes(lang)) return 'frameworks';
  if (backendLangs.includes(lang)) return 'backend';
  return 'database';
};

// Cheat Sheets content map
const cheatSheetsMap: Record<string, { title: string, code: string }[]> = {
  html: [
    { title: 'Boilerplate structure', code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Title</title>\n</head>\n<body>\n  <!-- Content here -->\n</body>\n</html>` },
    { title: 'Interactive button click', code: `<button onclick="alert('Clicked!')">Click Me</button>` },
    { title: 'Add dynamic styles', code: `<div style="background: indigo; color: white; padding: 20px; border-radius: 12px;">Styled Box</div>` }
  ],
  css: [
    { title: 'Flexbox Centering', code: `display: flex;\njustify-content: center;\nalign-items: center;` },
    { title: 'Glassmorphism background', code: `background: rgba(255, 255, 255, 0.7);\nbackdrop-filter: blur(10px);\nborder: 1px solid rgba(255,255,255,0.3);` },
    { title: 'Smooth transitions', code: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);` }
  ],
  javascript: [
    { title: 'Write console logs', code: `console.log("Output info message");` },
    { title: 'Bilingual translation array', code: `const welcome = {\n  en: "Hello World",\n  km: "សួស្តីពិភពលោក"\n};` },
    { title: 'Calculate values async', code: `const fetchData = async () => {\n  console.log("Retrieving data...");\n};` },
    { title: 'Write unit tests (Jest style)', code: `describe("Calculator Tests", () => {\n  test("adds numbers correctly", () => {\n    expect(1 + 2).toBe(3);\n  });\n});` }
  ],
  python: [
    { title: 'Lists dictionary iterate', code: `scores = {"Dara": 90, "Seyha": 95}\nfor name, val in scores.items():\n    print(f"{name} got {val}")` },
    { title: 'Define custom functions', code: `def solve_math(a, b):\n    return a * b + 10` },
    { title: 'Filter items', code: `results = [x for x in range(10) if x % 2 == 0]` },
    { title: 'Write unit tests (Discovery style)', code: `def test_addition():\n    assert 1 + 2 == 3, "Addition failed!"` }
  ],
  typescript: [
    { title: 'Define interfaces', code: `interface Config {\n  id: string;\n  isActive: boolean;\n}` },
    { title: 'Function argument typings', code: `function format(name: string, age?: number): string {\n  return \`Name: \${name}\`;\n}` },
    { title: 'Write unit tests (Jest style)', code: `describe("Addition Tests", () => {\n  test("summing simple digits", () => {\n    const sum: number = 2 + 3;\n    expect(sum).toBe(5);\n  });\n});` }
  ],
  react: [
    { title: 'Declare state Hook', code: `const [count, setCount] = useState(0);` },
    { title: 'Lifecycle side effects', code: `useEffect(() => {\n  console.log("Mounted!");\n}, []);` },
    { title: 'Write unit tests (Jest style)', code: `describe("React State Tests", () => {\n  test("checks arithmetic assertions", () => {\n    expect(2 * 5).toBe(10);\n  });\n});` }
  ],
  sql: [
    { title: 'Retrieve sorted rows', code: `SELECT * FROM Customers\nWHERE Country = 'UK'\nORDER BY CustomerName DESC;` },
    { title: 'Group and average math', code: `SELECT CategoryID, AVG(Price)\nFROM Products\nGROUP BY CategoryID;` }
  ],
  mysql: [
    { title: 'Create new table safely', code: `CREATE TABLE if not exists products (\n  id INTEGER PRIMARY KEY,\n  title TEXT,\n  price REAL\n);` },
    { title: 'Insert multi rows', code: `INSERT INTO products VALUES (1, 'Book', 12.5), (2, 'Pen', 1.5);` }
  ]
};

// Default cheat sheets fallback if lang is not in map
const defaultCheatSheet = [
  { title: 'Standard template reset', code: `// Reset to initial clean layout code\nconsole.log("Sandbox active and ready.");` },
  { title: 'Bilingual greeting logs', code: `// ខ្មែរ / English logger\nconst msg = "សួស្តី សប្បាយកូដ!";\nconsole.log(msg);` }
];

const SQL_SEED_SCRIPT = `
-- --- SQL SANDBOX PRE-SEED DATABASE START ---
CREATE TABLE IF NOT EXISTS Customers (
  CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerName TEXT,
  ContactName TEXT,
  Address TEXT,
  City TEXT,
  PostalCode TEXT,
  Country TEXT
);

CREATE TABLE IF NOT EXISTS Employees (
  EmployeeID INTEGER PRIMARY KEY AUTOINCREMENT,
  LastName TEXT,
  FirstName TEXT,
  BirthDate TEXT,
  Photo TEXT,
  Notes TEXT
);

CREATE TABLE IF NOT EXISTS Products (
  ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
  ProductName TEXT,
  SupplierID INTEGER,
  CategoryID INTEGER,
  Unit TEXT,
  Price REAL
);

CREATE TABLE IF NOT EXISTS Orders (
  OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerID INTEGER,
  EmployeeID INTEGER,
  OrderDate TEXT,
  ShipperID INTEGER
);

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 1);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 2);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 3);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 4, 'Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 4);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 1, 'Davolio', 'Nancy', '1968-12-08', 'EmpID1.pic', 'Education includes a BA in psychology.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 1);
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 2, 'Fuller', 'Andrew', '1952-02-19', 'EmpID2.pic', 'Andrew received his Ph.D. in computer science.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 2);

INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 1, 'Chais', 1, 1, '10 boxes x 20 bags', 18.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 1);
SELECT 2, 'Chang', 1, 1, '24 - 12 oz bottles', 19.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 2);
SELECT 3, 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 3);

INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10248, 1, 1, '1996-07-04', 3 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10248);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10249, 2, 2, '1996-07-05', 1 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10249);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10250, 3, 1, '1996-07-08', 2 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10250);
-- --- SQL SANDBOX PRE-SEED DATABASE END ---
`;

let cachedPistonRuntimes: any[] | null = null;

const FALLBACK_PISTON_RUNTIMES = [
  { language: 'python', version: '3.10.0', aliases: ['py', 'python3'] },
  { language: 'typescript', version: '4.9.4', aliases: ['ts'] },
  { language: 'javascript', version: '18.15.0', aliases: ['js', 'node'] },
  { language: 'java', version: '15.0.2', aliases: ['openjdk'] },
  { language: 'c', version: '10.2.0', aliases: ['gcc'] },
  { language: 'cpp', version: '10.2.0', aliases: ['g++'] },
  { language: 'csharp', version: '6.12.0', aliases: ['cs'] },
  { language: 'php', version: '8.2.3', aliases: ['php'] },
  { language: 'kotlin', version: '1.8.20', aliases: ['kt'] },
  { language: 'sqlite3', version: '3.36.0', aliases: ['sqlite', 'sql'] },
  { language: 'bash', version: '5.2.0', aliases: ['sh'] }
];

async function getPistonRuntime(targetLang: string) {
  try {
    if (!cachedPistonRuntimes) {
      const res = await fetch('/api/runtimes');
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        cachedPistonRuntimes = await res.json();
      } else {
        cachedPistonRuntimes = FALLBACK_PISTON_RUNTIMES;
      }
    }
  } catch (e) {
    console.warn("Could not fetch Piston runtimes, using fallback list:", e);
    cachedPistonRuntimes = FALLBACK_PISTON_RUNTIMES;
  }

  const aliasMap: Record<string, string[]> = {
    python: ['python', 'python3', 'py'],
    typescript: ['typescript', 'ts'],
    java: ['java', 'openjdk'],
    c: ['c', 'gcc', 'clang'],
    cpp: ['cpp', 'g++', 'cpp', 'c++'],
    csharp: ['csharp', 'cs', 'mono-csharp', 'dotnet'],
    php: ['php'],
    kotlin: ['kotlin', 'kt'],
    sql: ['sqlite3', 'sqlite', 'sql'],
    mysql: ['sqlite3', 'sqlite', 'sql'],
    git: ['bash', 'sh']
  };

  const targets = aliasMap[targetLang] || [targetLang];

  if (cachedPistonRuntimes && cachedPistonRuntimes.length > 0) {
    for (const target of targets) {
      const match = cachedPistonRuntimes.find((r: any) => 
        r.language === target || 
        (r.aliases && r.aliases.includes(target))
      );
      if (match) {
        return {
          language: match.language,
          version: match.version
        };
      }
    }
  }

  const pistonMap: Record<string, { language: string; version: string }> = {
    python: { language: 'python3', version: '3.10.0' },
    typescript: { language: 'typescript', version: '4.9.4' },
    java: { language: 'java', version: '15.0.2' },
    c: { language: 'c', version: '10.2.0' },
    cpp: { language: 'cpp', version: '10.2.0' },
    csharp: { language: 'csharp', version: '6.12.0' },
    php: { language: 'php', version: '8.2.3' },
    kotlin: { language: 'kotlin', version: '1.8.20' },
    sql: { language: 'sqlite3', version: '3.36.0' },
    mysql: { language: 'sqlite3', version: '3.36.0' },
    git: { language: 'bash', version: '5.2.0' }
  };

  return pistonMap[targetLang] || { language: targetLang, version: '*' };
}

const PrimitiveValueRenderer: React.FC<{ val: any }> = ({ val }) => {
  if (val === null) return <span className="text-slate-500 italic font-mono">null</span>;
  if (val === undefined) return <span className="text-slate-500 italic font-mono">undefined</span>;
  
  if (typeof val === 'string') {
    return <span className="text-emerald-600 dark:text-emerald-400 font-mono">"{val}"</span>;
  }
  if (typeof val === 'number') {
    return <span className="text-amber-600 dark:text-amber-400 font-bold font-mono">{val}</span>;
  }
  if (typeof val === 'boolean') {
    return <span className="text-purple-600 dark:text-purple-400 font-bold font-mono">{val ? 'true' : 'false'}</span>;
  }
  if (typeof val === 'function') {
    return <span className="text-blue-600 dark:text-blue-400 italic font-mono font-medium">{val.toString().substring(0, 50)}...</span>;
  }
  return <span className="text-slate-700 dark:text-slate-200 font-mono">{String(val)}</span>;
};

const ObjectInspector: React.FC<{ data: any; depth?: number }> = ({ data, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 1);

  if (data === null) return <span className="text-slate-500 italic font-mono">null</span>;
  if (data === undefined) return <span className="text-slate-500 italic font-mono">undefined</span>;

  const isArray = Array.isArray(data);
  const keys = Object.keys(data);
  
  if (keys.length === 0) {
    return <span className="text-slate-400 dark:text-slate-500 font-mono">{isArray ? '[]' : '{}'}</span>;
  }

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="pl-2 font-mono text-[11px] select-text">
      <div 
        onClick={toggleOpen} 
        className="inline-flex items-center space-x-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 px-1 rounded transition text-slate-500 dark:text-slate-400 select-none"
      >
        <span className="text-[9px] text-slate-400 dark:text-slate-500 transition-transform duration-150 transform" style={{ display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-bold font-mono">{isArray ? `Array(${keys.length})` : 'Object'}</span>
        <span className="text-slate-500 dark:text-slate-600 font-mono">{isOpen ? (isArray ? '[' : '{') : (isArray ? '[...]' : '{...}')}</span>
      </div>

      {isOpen && (
        <div className="pl-4 border-l border-slate-200 dark:border-slate-800 my-0.5 space-y-0.5">
          {keys.map((key) => {
            const val = data[key];
            const isValObj = typeof val === 'object' && val !== null;
            
            return (
              <div key={key} className="flex flex-wrap items-start font-mono">
                <span className="text-purple-600 dark:text-purple-400 font-bold mr-1 font-mono">{key}:</span>
                {isValObj ? (
                  <ObjectInspector data={val} depth={depth + 1} />
                ) : (
                  <PrimitiveValueRenderer val={val} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {isOpen && <span className="text-slate-500 dark:text-slate-600 block pl-2 font-mono">{isArray ? ']' : '}'}</span>}
    </div>
  );
};

const LogArgumentRenderer: React.FC<{ arg: { type: string; value: string; raw?: any } }> = ({ arg }) => {
  if (arg.type === 'object' || arg.type === 'array') {
    let parsedData = arg.raw;
    if (!parsedData) {
      try {
        parsedData = JSON.parse(arg.value);
      } catch (e) {
        // Fallback to text
      }
    }
    if (parsedData) {
      return <ObjectInspector data={parsedData} />;
    }
  }

  if (arg.type === 'string') {
    return <span className="text-slate-700 dark:text-slate-200 font-mono whitespace-pre-wrap">{arg.value}</span>;
  }
  if (arg.type === 'number') {
    return <span className="text-amber-600 dark:text-amber-400 font-bold font-mono">{arg.value}</span>;
  }
  if (arg.type === 'boolean') {
    return <span className="text-purple-600 dark:text-purple-400 font-bold font-mono">{arg.value}</span>;
  }
  if (arg.type === 'null' || arg.type === 'undefined') {
    return <span className="text-slate-500 italic font-mono">{arg.value}</span>;
  }
  if (arg.type === 'function') {
    return <span className="text-blue-600 dark:text-blue-400 font-mono whitespace-pre-wrap">{arg.value}</span>;
  }

  return <span className="text-slate-700 dark:text-slate-200 font-mono whitespace-pre-wrap">{arg.value}</span>;
};

interface StandalonePlaygroundProps {
  initialCode?: string;
  initialLang?: string;
  initialTitle?: string;
  courseId?: string;
  lessonId?: string;
  onBack?: () => void;
}

export const StandalonePlayground: React.FC<StandalonePlaygroundProps> = ({
  initialCode,
  initialLang,
  initialTitle,
  courseId,
  lessonId,
  onBack
}) => {
  const { language, theme, progress, saveUserCode } = useApp();
  const t = translations[language];

  // Selected language state
  const [selectedLang, setSelectedLang] = useState<string>(initialLang || 'html');
  const [files, setFiles] = useState<Record<string, string>>({});
  const [activeFile, setActiveFile] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  
  // Custom console logs captured from Web IFrame
  const [iframeLogs, setIframeLogs] = useState<{ level: string; message?: string; args?: any[]; timestamp: string }[]>([]);
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'logs'>('preview');

  // Interactive UI utilities
  const [copied, setCopied] = useState(false);
  const [isFullscreenOutput, setIsFullscreenOutput] = useState(false);
  const [isFullscreenEditor, setIsFullscreenEditor] = useState(false);
  const [editorFontSize, setEditorFontSize] = useState<number>(13.5);
  const [previewZoom, setPreviewZoom] = useState<number>(1.0);

  // Handle ESC key to exit fullscreen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreenOutput) setIsFullscreenOutput(false);
        if (isFullscreenEditor) setIsFullscreenEditor(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOutput, isFullscreenEditor]);

  // Auto-saved banner notification
  const [savedBadgeVisible, setSavedBadgeVisible] = useState(false);

  // Reset confirmation modal & toast feedback
  const [showResetConfirmModal, setShowResetConfirmModal] = useState(false);
  const [resetToastMessage, setResetToastMessage] = useState<string | null>(null);

  // Track the last loaded lesson code to prevent overwriting user edits when context updates
  const lastLoadedCodeRef = useRef<string | null>(null);

  // Guard execution timeout
  const timeoutRef = useRef<any>(null);
  const isTestingRef = useRef<boolean>(false);
  const dartpadIframeRef = useRef<HTMLIFrameElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  const autoRunDebounceRef = useRef<any>(null);

  // Auto scroll logs container when new logs or output arrive
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [iframeLogs, output, activeOutputTab]);

  // Reference lists of available courses
  const filteredCourses = coursesData.filter(c => playgroundTemplates[c.id] !== undefined);

  // Sync selected language when initialLang prop changes
  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  // Synchronize initial code with DartPad for Flutter
  useEffect(() => {
    if (selectedLang !== 'flutter') return;

    let hasSentCode = false;
    const sendInitialCode = () => {
      if (dartpadIframeRef.current && dartpadIframeRef.current.contentWindow) {
        dartpadIframeRef.current.contentWindow.postMessage({
          sender: 'frame',
          type: 'sourceCode',
          files: {
            'main.dart': code
          }
        }, '*');
        hasSentCode = true;
      }
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.sender === 'frame' && e.data.type === 'ready') {
        sendInitialCode();
      }
    };

    window.addEventListener('message', handleMessage);

    const iframe = dartpadIframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        setTimeout(sendInitialCode, 650);
      };
      iframe.addEventListener('load', handleLoad);
      return () => {
        iframe.removeEventListener('load', handleLoad);
        window.removeEventListener('message', handleMessage);
      };
    }

    const timer = setTimeout(() => {
      if (!hasSentCode) sendInitialCode();
    }, 2500);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, [selectedLang]);

  // Reset or load code on language change
  useEffect(() => {
    let parsedFiles: Record<string, string> = {};

    const loadLessonOrLanguageFiles = () => {
      let defaultFiles: Record<string, string> = {};
      
      // If we have courseId and lessonId, let's find the lesson and get its default LessonExample files
      if (courseId && lessonId) {
        const foundCourse = coursesData.find(c => c.id === courseId);
        if (foundCourse) {
          let foundLesson: any = null;
          for (const topic of foundCourse.topics) {
            const l = topic.lessons.find(less => less.id === lessonId);
            if (l) {
              foundLesson = l;
              break;
            }
          }
          if (foundLesson) {
            const example = getLessonExample(foundLesson, courseId);
            defaultFiles = { ...example.files };
          }
        }
      }

      // Fallback if not found or not applicable
      if (Object.keys(defaultFiles).length === 0) {
        if (initialLang === selectedLang && initialCode !== undefined) {
          defaultFiles = parseLessonStarterCode(initialCode, selectedLang);
        } else {
          const baseCode = playgroundTemplates[selectedLang] || '// Write code here';
          defaultFiles = parseLessonStarterCode(baseCode, selectedLang);
        }
      }

      // Check if any file has saved progress
      const resultFiles: Record<string, string> = {};
      Object.keys(defaultFiles).forEach(filename => {
        const saveKey = courseId && lessonId
          ? `playground-${courseId}-${lessonId}-${filename}`
          : `playground-${selectedLang}-${filename}`;
        
        if (progress.savedCodes[saveKey] !== undefined) {
          resultFiles[filename] = progress.savedCodes[saveKey];
        } else {
          // If no file-specific save, let's check legacy/global standard key for that language if not lesson-specific
          if (!courseId || !lessonId) {
            const legacyCacheKey = `playground-${selectedLang}`;
            if (progress.savedCodes[legacyCacheKey] !== undefined && Object.keys(defaultFiles).length === 1) {
              resultFiles[filename] = progress.savedCodes[legacyCacheKey];
              return;
            }
          }
          resultFiles[filename] = defaultFiles[filename];
        }
      });

      return resultFiles;
    };

    parsedFiles = loadLessonOrLanguageFiles();
    setFiles(parsedFiles);
    
    // Determine active file
    const fileNames = Object.keys(parsedFiles);
    let defaultActive = '';
    const lowerLang = selectedLang.toLowerCase();
    if (['javascript', 'js', 'jquery'].includes(lowerLang)) {
      const jsFile = fileNames.find(f => f.endsWith('.js'));
      if (jsFile) defaultActive = jsFile;
    }
    if (!defaultActive) {
      defaultActive = fileNames.includes('index.html') 
        ? 'index.html' 
        : (fileNames.includes('app.component.ts') 
          ? 'app.component.ts' 
          : (fileNames[0] || ''));
    }
    setActiveFile(defaultActive);
    setCode(parsedFiles[defaultActive] || '');

    setOutput('');
    setIframeSrc('');
    setIframeLogs([]);
    
    // Automatically switch output tab depending on selected language type
    const isVisual = ['html', 'css', 'javascript', 'jquery', 'react', 'nextjs', 'tailwind', 'bootstrap', 'vue', 'angular', 'flutter'].includes(selectedLang);
    setActiveOutputTab(isVisual ? 'preview' : 'logs');

    // Automatically compile and render live preview on load for web languages
    if (isVisual && selectedLang !== 'flutter') {
      const codeToRun = parsedFiles[defaultActive] || '';
      setTimeout(() => {
        runCode(false, parsedFiles, codeToRun, selectedLang, defaultActive);
      }, 100);
    }
  }, [selectedLang, courseId, lessonId, initialCode, initialLang, progress.savedCodes]);

  // Capture IFrame postMessages for console logs and compilation results!
  useEffect(() => {
    const handleIframeLogs = (event: MessageEvent) => {
      if (!event.data) return;
      if (event.data.type === 'iframe-log') {
        const { level, message, args } = event.data;
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        setIframeLogs(prev => [...prev, { level, message, args, timestamp: timeStr }]);
        
        if (level === 'test-summary') {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsRunning(false);
        }
      } else if (event.data.type === 'execution-complete' || event.data.type === 'iframe-success') {
        // If we are running tests, the completion is indicated by 'execution-complete' after all tests have run
        if (event.data.type === 'execution-complete' || !isTestingRef.current) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsRunning(false);
        }
      }
    };
    window.addEventListener('message', handleIframeLogs);
    return () => {
      window.removeEventListener('message', handleIframeLogs);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Add Cmd/Ctrl + Enter shortcut to run code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, selectedLang, isRunning]);

  const handleCodeChange = (newVal: string | undefined) => {
    const val = newVal || '';
    setCode(val);
    let updatedFiles = { ...files };
    if (activeFile) {
      updatedFiles = { ...files, [activeFile]: val };
      setFiles(updatedFiles);
      const saveKey = courseId && lessonId
        ? `playground-${courseId}-${lessonId}-${activeFile}`
        : `playground-${selectedLang}-${activeFile}`;
      saveUserCode(saveKey, val);
    } else {
      const saveKey = courseId && lessonId
        ? `playground-${courseId}-${lessonId}`
        : `playground-${selectedLang}`;
      saveUserCode(saveKey, val);
    }
    
    // Show quick auto-saved badge feedback on a slight delay
    setSavedBadgeVisible(true);
    const timeout = setTimeout(() => setSavedBadgeVisible(false), 1500);

    // Live preview debounce for visual web languages
    const isVisual = ['html', 'css', 'javascript', 'jquery', 'react', 'nextjs', 'tailwind', 'bootstrap', 'vue', 'angular'].includes(selectedLang);
    if (isVisual) {
      if (autoRunDebounceRef.current) {
        clearTimeout(autoRunDebounceRef.current);
      }
      autoRunDebounceRef.current = setTimeout(() => {
        runCode(false, updatedFiles, val, selectedLang, activeFile);
      }, 700);
    }

    return () => clearTimeout(timeout);
  };

  const handleReset = () => {
    setShowResetConfirmModal(true);
  };

  const executeReset = () => {
    let defaultFiles: Record<string, string> = {};
    
    // If we have courseId and lessonId, let's find the lesson and get its default LessonExample files
    if (courseId && lessonId) {
      const foundCourse = coursesData.find(c => c.id === courseId);
      if (foundCourse) {
        let foundLesson: any = null;
        for (const topic of foundCourse.topics) {
          const l = topic.lessons.find(less => less.id === lessonId);
          if (l) {
            foundLesson = l;
            break;
          }
        }
        if (foundLesson) {
          const example = getLessonExample(foundLesson, courseId);
          defaultFiles = { ...example.files };
        }
      }
    }

    // Fallback
    if (Object.keys(defaultFiles).length === 0) {
      const orig = (initialLang === selectedLang && initialCode !== undefined) 
        ? initialCode 
        : (playgroundTemplates[selectedLang] || '');
      defaultFiles = parseLessonStarterCode(orig, selectedLang);
    }

    setFiles(defaultFiles);
    
    // Determine active file
    const fileNames = Object.keys(defaultFiles);
    let defaultActive = '';
    const lowerLang = selectedLang.toLowerCase();
    if (['javascript', 'js', 'jquery'].includes(lowerLang)) {
      const jsFile = fileNames.find(f => f.endsWith('.js'));
      if (jsFile) defaultActive = jsFile;
    }
    if (!defaultActive) {
      defaultActive = fileNames.includes('index.html') 
        ? 'index.html' 
        : (fileNames.includes('app.component.ts') 
          ? 'app.component.ts' 
          : (fileNames[0] || ''));
    }
    setActiveFile(defaultActive);
    setCode(defaultFiles[defaultActive] || '');

    // Save file caches to reset user's local edits
    fileNames.forEach(fn => {
      const saveKey = courseId && lessonId
        ? `playground-${courseId}-${lessonId}-${fn}`
        : `playground-${selectedLang}-${fn}`;
      saveUserCode(saveKey, defaultFiles[fn]);
    });
    const mainSaveKey = courseId && lessonId
      ? `playground-${courseId}-${lessonId}`
      : `playground-${selectedLang}`;
    saveUserCode(mainSaveKey, defaultFiles[defaultActive] || '');
    
    setOutput('');
    setIframeSrc('');
    setIframeLogs([]);
    setShowResetConfirmModal(false);

    // Toast notification
    setResetToastMessage(language === 'en' ? 'Code template reset to starter' : 'បានកំណត់កូដគំរូឡើងវិញ');
    setTimeout(() => setResetToastMessage(null), 3000);
  };

  const runCode = async (
    runInTestMode = false,
    overrideFiles?: Record<string, string>,
    overrideCode?: string,
    overrideLang?: string,
    overrideActiveFile?: string
  ) => {
    if (isRunning) return;
    const currentLang = overrideLang || selectedLang;
    const currentFiles = overrideFiles || files;
    const currentActiveFile = overrideActiveFile || activeFile;
    const currentCode = overrideCode !== undefined ? overrideCode : code;

    isTestingRef.current = runInTestMode;
    setIsRunning(true);
    setOutput(runInTestMode 
      ? (language === 'en' ? "Executing test harness runner..." : "កំពុងដំណើរការកម្មវិធីតេស្តកូដ...")
      : (language === 'en' ? "Executing compiler sandbox pipeline..." : "កំពុងដំណើរការកូដមេ...")
    );
    setIframeSrc('');
    setIframeLogs([]); // Clear logs on run

    if (currentLang === 'flutter') {
      if (runInTestMode) {
        setActiveOutputTab('logs');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        const logs: any[] = [];
        let passed = 0;
        let total = 0;

        const checkAssertion = (name: string, regex: RegExp, successMsg: string, failMsg: string) => {
          total++;
          const matches = regex.test(currentCode);
          if (matches) {
            passed++;
            logs.push({ level: 'success', message: `  ✓ ${name}\n    → ${successMsg}`, timestamp: timeStr });
          } else {
            logs.push({ level: 'error', message: `  ✕ ${name}\n    → ${failMsg}`, timestamp: timeStr });
          }
        };

        checkAssertion(
          "Use StatefulWidget",
          /StatefulWidget/i,
          "Verified: Your habit tracker extends StatefulWidget to handle dynamic changes.",
          "Error: Use a StatefulWidget to manage mutable list states."
        );

        checkAssertion(
          "Implement setState()",
          /setState\s*\(/i,
          "Verified: You called setState() to request re-renders on checkbox or form changes.",
          "Error: Call setState() inside your click responders to notify Flutter of updates."
        );

        checkAssertion(
          "Build habit list dynamically",
          /ListView/i,
          "Verified: ListView/ListView.builder is configured for high-performance rendering.",
          "Error: Use ListView.builder or ListView to render habit arrays dynamically."
        );

        checkAssertion(
          "Configure MaterialApp theme",
          /MaterialApp/i,
          "Verified: MaterialApp root widget is initialized correctly.",
          "Error: Make sure your root app is wrapped inside a MaterialApp widget."
        );

        setOutput(`Flutter Habit Tracker Assertions Result:\n\n${passed} / ${total} Checks Passed.\n\n` + (passed === total ? "GREAT WORK! All validations passed. You can now publish your app!" : "Keep coding! Correct the failing items and verify again."));
        setIframeLogs(logs);
        setIsRunning(false);
        return;
      } else {
        setActiveOutputTab('preview');
        if (dartpadIframeRef.current && dartpadIframeRef.current.contentWindow) {
          dartpadIframeRef.current.contentWindow.postMessage({
            sender: 'frame',
            type: 'sourceCode',
            files: {
              'main.dart': currentCode
            }
          }, '*');
          
          const now = new Date();
          const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
          setIframeLogs([{
            level: 'success',
            message: 'Flutter code injected into DartPad sandbox. Compiling live widget render tree...',
            timestamp: timeStr
          }]);
        }
        setIsRunning(false);
        return;
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const iframeLanguages = ['html', 'css', 'javascript', 'jquery', 'react', 'nextjs', 'tailwind', 'bootstrap', 'vue', 'angular'];

    if (iframeLanguages.includes(currentLang)) {
      // Auto-switch tabs based on logs/visual criteria
      if (runInTestMode) {
        setActiveOutputTab('logs');
      } else {
        const hasConsoleLog = currentCode.includes('console.log') || currentCode.includes('console.info') || currentCode.includes('console.warn');
        const hasDOMManipulation = /document\.|window\.|innerHTML|appendChild|createElement|querySelector|getElementById|ReactDOM/i.test(currentCode);
        if ((currentLang === 'javascript' || currentLang === 'jquery') && hasConsoleLog && !hasDOMManipulation) {
          setActiveOutputTab('logs');
        } else {
          setActiveOutputTab('preview');
        }
      }

      // 8s Execution Timeout to catch infinite loops
      timeoutRef.current = setTimeout(() => {
        setIsRunning(false);
        timeoutRef.current = null;
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        setIframeLogs(prev => [...prev, {
          level: 'error',
          message: 'Execution timed out (8s limit exceeded). If your code contains infinite loops (like while(true)), please check and run again.',
          timestamp: timeStr
        }]);
      }, 8000);

      const getFileContent = (filename: string): string => {
        if (currentActiveFile === filename && currentCode !== undefined) return currentCode;
        return currentFiles[filename] || (currentActiveFile === filename ? currentCode : '');
      };

      const getCachedCode = (lang: string): string => {
        const filename = lang === 'html' ? 'index.html' : lang === 'css' ? 'style.css' : 'script.js';
        return getFileContent(filename);
      };

      const htmlCode = getFileContent('index.html');
      const cssCode = getFileContent('style.css');
      const jsCode = getFileContent('script.js');

      // Intercept and format console messages beautifully
      const consoleHookScript = `
        <script>
          (function() {
            const _log = console.log;
            const _error = console.error;
            const _warn = console.warn;
            const _info = console.info;

            function serialize(val) {
              if (val === undefined) return 'undefined';
              if (val === null) return 'null';
              if (typeof val === 'string') return val;
              if (typeof val === 'function') return val.toString();
              if (typeof val === 'symbol') return val.toString();
              try {
                return JSON.stringify(val, null, 2);
              } catch (e) {
                return String(val);
              }
            }

            function serializeArg(arg) {
              if (arg === undefined) return { type: 'undefined', value: 'undefined' };
              if (arg === null) return { type: 'null', value: 'null' };
              if (typeof arg === 'string') return { type: 'string', value: arg };
              if (typeof arg === 'number') return { type: 'number', value: String(arg) };
              if (typeof arg === 'boolean') return { type: 'boolean', value: String(arg) };
              if (typeof arg === 'function') return { type: 'function', value: arg.toString() };
              if (typeof arg === 'symbol') return { type: 'symbol', value: arg.toString() };
              
              // Handle circular references safely
              const seen = new WeakSet();
              function safeStringify(obj) {
                try {
                  return JSON.stringify(obj, function(key, val) {
                    if (typeof val === 'object' && val !== null) {
                      if (seen.has(val)) {
                        return '[Circular]';
                      }
                      seen.add(val);
                    }
                    if (typeof val === 'function') {
                      return val.toString();
                    }
                    return val;
                  }, 2);
                } catch (e) {
                  return String(obj);
                }
              }

              if (Array.isArray(arg)) {
                return { type: 'array', value: safeStringify(arg) };
              }
              if (typeof arg === 'object') {
                return { type: 'object', value: safeStringify(arg) };
              }
              return { type: 'unknown', value: String(arg) };
            }

            function sendLog(level, args) {
              const message = args.map(serialize).join(' ');
              const serializedArgs = args.map(serializeArg);
              window.parent.postMessage({ type: 'iframe-log', level: level, message: message, args: serializedArgs }, '*');
            }
            
            console.log = function(...args) {
              _log.apply(console, args);
              sendLog('info', args);
            };
            console.error = function(...args) {
              _error.apply(console, args);
              sendLog('error', args);
            };
            console.warn = function(...args) {
              _warn.apply(console, args);
              sendLog('warn', args);
            };
            console.info = function(...args) {
              _info.apply(console, args);
              sendLog('info', args);
            };

            window.onerror = function(message, source, lineno, colno, error) {
              window.parent.postMessage({ type: 'iframe-log', level: 'error', message: message + " (Line " + lineno + ")" }, '*');
              window.parent.postMessage({ type: 'execution-complete' }, '*');
              return false;
            };

            window.addEventListener('unhandledrejection', function(event) {
              const reason = event.reason;
              const msg = reason ? (reason.message || reason) : 'Unhandled promise rejection';
              window.parent.postMessage({ type: 'iframe-log', level: 'error', message: "Promise Error: " + msg }, '*');
              window.parent.postMessage({ type: 'execution-complete' }, '*');
            });
          })();
        </script>
      `;

      const testRunnerScript = `
        <script>
          (function() {
            const suites = [];
            let currentSuite = null;
            let hasTests = false;

            window.describe = function(name, fn) {
              hasTests = true;
              const suite = { name, tests: [] };
              suites.push(suite);
              const parentSuite = currentSuite;
              currentSuite = suite;
              try {
                fn();
              } catch (err) {
                suite.error = err.message || String(err);
              }
              currentSuite = parentSuite;
            };

            const createTestFunc = function(name, fn) {
              hasTests = true;
              const testCase = { name, fn, status: 'pending' };
              if (currentSuite) {
                currentSuite.tests.push(testCase);
              } else {
                suites.push({ name: 'Global Tests', tests: [testCase] });
              }
            };

            window.test = createTestFunc;
            window.it = createTestFunc;

            window.expect = function(actual) {
              const isNot = { value: false };
              const matchers = {
                toBe: (expected) => {
                  const pass = Object.is(actual, expected);
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
                  }
                },
                toEqual: (expected) => {
                  const pass = JSON.stringify(actual) === JSON.stringify(expected);
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
                  }
                },
                toBeTruthy: () => {
                  const pass = !!actual;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "truthy value, but got " + JSON.stringify(actual));
                  }
                },
                toBeFalsy: () => {
                  const pass = !actual;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "falsy value, but got " + JSON.stringify(actual));
                  }
                },
                toContain: (item) => {
                  const pass = (Array.isArray(actual) || typeof actual === "string") ? actual.includes(item) : false;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + JSON.stringify(actual) + " " + (isNot.value ? "NOT " : "") + "to contain " + JSON.stringify(item));
                  }
                },
                toBeNull: () => {
                  const pass = actual === null;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "null, but got " + JSON.stringify(actual));
                  }
                },
                toBeUndefined: () => {
                  const pass = actual === undefined;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "undefined, but got " + JSON.stringify(actual));
                  }
                },
                toBeDefined: () => {
                  const pass = actual !== undefined;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "defined value, but got undefined");
                  }
                },
                toThrow: (expectedError) => {
                  if (typeof actual !== "function") {
                    throw new Error("Actual value must be a function to test exceptions");
                  }
                  let threw = false;
                  let thrownError = null;
                  try {
                    actual();
                  } catch (e) {
                    threw = true;
                    thrownError = e;
                  }
                  const pass = threw && (!expectedError || (thrownError.message || thrownError).includes(expectedError));
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected function " + (isNot.value ? "NOT " : "") + "to throw " + (expectedError || "error"));
                  }
                }
              };

              return {
                ...matchers,
                get not() {
                  isNot.value = true;
                  return matchers;
                }
              };
            };

            window.runAllTests = function() {
              if (!hasTests) {
                window.parent.postMessage({
                  type: "iframe-log",
                  level: "warn",
                  message: "No test suites found. Write a test suite using \\"describe\\" and \\"test\\" blocks to run assertions."
                }, "*");
                window.parent.postMessage({ type: 'execution-complete' }, '*');
                return;
              }

              let passedCount = 0;
              let failedCount = 0;

              suites.forEach(suite => {
                window.parent.postMessage({
                  type: "iframe-log",
                  level: "test-suite",
                  message: suite.name
                }, "*");

                if (suite.error) {
                  window.parent.postMessage({
                    type: "iframe-log",
                    level: "test-fail",
                    message: "  ✕ Suite Initialization Error: " + suite.error
                  }, "*");
                  failedCount += suite.tests.length || 1;
                  return;
                }

                suite.tests.forEach(testCase => {
                  const startTime = performance.now();
                  try {
                    testCase.fn();
                    const duration = (performance.now() - startTime).toFixed(1);
                    window.parent.postMessage({
                      type: "iframe-log",
                      level: "test-pass",
                      message: "  ✓ " + testCase.name + " (" + duration + "ms)"
                    }, "*");
                    passedCount++;
                  } catch (err) {
                    const duration = (performance.now() - startTime).toFixed(1);
                    window.parent.postMessage({
                      type: "iframe-log",
                      level: "test-fail",
                      message: "  ✕ " + testCase.name + " (" + duration + "ms)\\n    → Error: " + (err.message || err)
                    }, "*");
                    failedCount++;
                  }
                });
              });

              const totalCount = passedCount + failedCount;
              window.parent.postMessage({
                type: "iframe-log",
                level: "test-summary",
                message: JSON.stringify({ passed: passedCount, failed: failedCount, total: totalCount })
              }, "*");
              window.parent.postMessage({ type: 'execution-complete' }, '*');
            };
          })();
        </script>
      `;

      const hooks = runInTestMode 
        ? `${consoleHookScript}\n${testRunnerScript}`
        : consoleHookScript;

      const khmerFontStyles = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <style>
          html, body {
            font-family: 'Kantumruy Pro', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            line-height: 1.6 !important;
          }
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.4 !important;
          }
        </style>
      `;

      let compiledDoc = '';
      const isFullHtml = /<!DOCTYPE html>|<html|id="root"|<script/i.test(currentCode);
      const baseHtml = isFullHtml 
        ? currentCode 
        : (htmlCode.trim() || `<!DOCTYPE html><html><head><meta charset="utf-8"><style>html, body { font-family: 'Kantumruy Pro', system-ui, sans-serif; line-height: 1.6; padding: 15px; margin: 0; } h1, h2, h3, h4, h5, h6 { line-height: 1.4; }</style></head><body><div id="root"></div></body></html>`);

      if ((currentLang === 'react' || currentLang === 'nextjs') && !isFullHtml) {
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React Live Sandbox</title>
            ${khmerFontStyles}
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            ${hooks}
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              try {
                ${currentCode.replace(/export\s+default\s+/, ' ')}
                
                // Auto-mount if createRoot/render is not called in the code
                const hasReactMount = /ReactDOM\.(?:createRoot|render)|render\(/i.test(\`${currentCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);
                if (!hasReactMount) {
                  const possibleNames = ['App', 'HomePage', 'Home', 'Counter', 'Welcome', 'CustomCounter', 'PlaygroundApp'];
                  let componentToMount = null;
                  for (const name of possibleNames) {
                    try {
                      if (typeof eval(name) === 'function') {
                        componentToMount = name;
                        break;
                      }
                    } catch (e) {}
                  }
                  if (!componentToMount) {
                    const firstFuncMatch = \`${currentCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`.match(/(?:function|class)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
                    if (firstFuncMatch && firstFuncMatch[1]) {
                      componentToMount = firstFuncMatch[1];
                    }
                  }
                  if (componentToMount) {
                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    const Element = eval(componentToMount);
                    root.render(<Element />);
                  }
                }
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              } catch (err) {
                console.error(err);
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
            <script>
              window.addEventListener('load', () => {
                setTimeout(() => {
                  window.parent.postMessage({ type: 'execution-complete' }, '*');
                }, 50);
              });
              window.parent.postMessage({ type: 'iframe-success' }, '*');
            </script>
          </body>
          </html>
        `;
      } else if (currentLang === 'vue' && !isFullHtml) {
        const escapedCode = currentCode.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue 3 Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            ${hooks}
            <style>
              body {
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background-color: #f8fafc;
                margin: 0;
                padding: 16px;
              }
            </style>
          </head>
          <body>
            <div id="sandbox-root">
              <div id="app"></div>
            </div>

            <script>
              const userCode = \`${escapedCode}\`;

              function extractBlock(codeStr, tag) {
                const regex = new RegExp('<' + tag + '[^>]*>([\\\\s\\\\S]*?)<\\\\/' + tag + '>', 'i');
                const match = codeStr.match(regex);
                return match ? match[1].trim() : null;
              }

              try {
                const template = extractBlock(userCode, 'template');
                const scriptSetup = extractBlock(userCode, 'script\\\\s+setup');
                const scriptNormal = extractBlock(userCode, 'script');
                const styleContent = extractBlock(userCode, 'style');

                if (styleContent) {
                  const styleTag = document.createElement('style');
                  styleTag.innerHTML = styleContent;
                  document.head.appendChild(styleTag);
                }

                const { createApp, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject } = Vue;

                let componentOptions = {};

                if (template) {
                  componentOptions.template = template;
                }

                if (scriptSetup) {
                  let cleanScript = scriptSetup
                    .replace(/import\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\}\\\\s*from\\\\s*['"]vue['"];?/g, 'const { $1 } = Vue;')
                    .replace(/import\\\\s*.*?\\\\s*from\\\\s*['"].*?['"];?/g, '')
                    .replace(/export\\\\s+default\\\\s+/g, '');

                  const declaredVars = new Set();
                  const varRegex = /(?:const|let|var)\\\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\\\s*=/g;
                  let match;
                  while ((match = varRegex.exec(cleanScript)) !== null) {
                    declaredVars.add(match[1]);
                  }
                  
                  const funcRegex = /function\\\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\\\s*\\\\(/g;
                  while ((match = funcRegex.exec(cleanScript)) !== null) {
                    declaredVars.add(match[1]);
                  }

                  const returnKeys = Array.from(declaredVars);

                  const setupFn = new Function('Vue', 'ref', 'reactive', 'computed', 'watch', 'onMounted', 'onUnmounted', 'provide', 'inject', \`
                    \${cleanScript}
                    return { \${returnKeys.join(', ')} };
                  \`);

                  componentOptions.setup = function() {
                    return setupFn(Vue, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject);
                  };

                } else if (scriptNormal) {
                  let cleanScript = scriptNormal
                    .replace(/import\\\\s*.*?\\\\s*from\\\\s*['"].*?['"];?/g, '')
                    .replace(/export\\\\s+default\\\\s+/, 'return ');

                  const setupFn = new Function('Vue', 'ref', 'reactive', 'computed', 'watch', 'onMounted', 'onUnmounted', 'provide', 'inject', cleanScript);
                  const returnedOptions = setupFn(Vue, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject);
                  
                  componentOptions = {
                    ...returnedOptions,
                    template: template || returnedOptions.template
                  };
                } else {
                  if (!template && (userCode.includes('<!DOCTYPE html>') || userCode.includes('<html'))) {
                    document.open();
                    document.write(userCode);
                    document.close();
                    throw 'HTML_DIRECT_RENDER';
                  } else {
                    componentOptions.template = template || userCode;
                  }
                }

                const app = createApp(componentOptions);
                app.mount('#app');

              } catch (err) {
                if (err !== 'HTML_DIRECT_RENDER') {
                  document.getElementById('sandbox-root').innerHTML = \`
                    <div class="p-6 max-w-md mx-auto bg-rose-50 border border-rose-200 rounded-xl text-rose-800 space-y-2 text-left">
                      <h3 class="font-bold text-sm">⚠️ Vue Compilation Error</h3>
                      <p class="text-xs font-mono whitespace-pre-wrap leading-relaxed">\${err.message || err}</p>
                    </div>
                  \`;
                  console.error(err);
                }
              }
              window.parent.postMessage({ type: 'iframe-success' }, '*');
              if (!${runInTestMode}) {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
          </body>
          </html>
        `;
      } else if (currentLang === 'angular' && !isFullHtml) {
        const escapedCode = currentCode.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Angular Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            ${hooks}
            <style>
              body {
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background-color: #f8fafc;
                margin: 0;
                padding: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
              }
            </style>
          </head>
          <body>
            <div id="sandbox-root" class="w-full"></div>

            <script>
              const AngularCore = {
                signal: function(initialValue) {
                  let value = initialValue;
                  const listeners = new Set();
                  const s = function() {
                    if (AngularCore.activeComputed) {
                      listeners.add(AngularCore.activeComputed);
                    }
                    return value;
                  };
                  s.set = function(newValue) {
                    value = newValue;
                    listeners.forEach(fn => fn());
                    window.app?.triggerRender();
                  };
                  s.update = function(fn) {
                    s.set(fn(value));
                  };
                  s.isSignal = true;
                  return s;
                },
                computed: function(fn) {
                  let cachedValue;
                  let isDirty = true;
                  const c = function() {
                    if (isDirty) {
                      AngularCore.activeComputed = c.updateCache;
                      cachedValue = fn();
                      AngularCore.activeComputed = null;
                      isDirty = false;
                    }
                    return cachedValue;
                  };
                  c.updateCache = function() {
                    isDirty = true;
                    window.app?.triggerRender();
                  };
                  c.isSignal = true;
                  return c;
                },
                activeComputed: null,
                Component: function(metadata) {
                  return function(targetClass) {
                    targetClass.metadata = metadata;
                    return targetClass;
                  };
                }
              };
              window.AngularCore = AngularCore;
            </script>
            
            <script>
              const userCode = \`${escapedCode}\`;
              
              let cleanCode = userCode
                .replace(/import\\s*\\{([\\s\\S]*?)\\}\\s*from\\s*['"]@angular\\/core['"];?/g, (m, imports) => {
                  return "const { " + imports + " } = window.AngularCore;";
                })
                .replace(/import\\s*.*?\\s*from\\s*['"].*?['"];?/g, '')
                .replace(/export\\s+/g, '');

              function extractMetaValue(codeStr, key) {
                const idx = codeStr.indexOf(key + ':');
                if (idx === -1) return '';
                let startCharCode = 0;
                let startIdx = -1;
                for (let i = idx + key.length + 1; i < codeStr.length; i++) {
                  const charCode = codeStr.charCodeAt(i);
                  if (charCode === 39 || charCode === 34 || charCode === 96) {
                    startCharCode = charCode;
                    startIdx = i + 1;
                    break;
                  }
                }
                if (startIdx === -1) return '';
                for (let i = startIdx; i < codeStr.length; i++) {
                  if (codeStr.charCodeAt(i) === startCharCode && codeStr.charCodeAt(i-1) !== 92) {
                    return codeStr.substring(startIdx, i);
                  }
                }
                return '';
              }

              let selector = extractMetaValue(cleanCode, 'selector') || 'app-root';
              let template = extractMetaValue(cleanCode, 'template');
              let styles = extractMetaValue(cleanCode, 'styles');

              cleanCode = cleanCode.replace(/@Component\\([\\s\\S]*?\\)/, '');

              try {
                const compiledClassCode = Babel.transform(cleanCode, {
                  presets: [['typescript', { allExtensions: true, isTSX: true }]]
                }).code;

                const setupFn = new Function('AngularCore', \`
                  \${compiledClassCode}
                  return typeof AppComponent !== 'undefined' ? AppComponent : (typeof App !== 'undefined' ? App : null);
                \`);
                
                const AppComponentClass = setupFn(AngularCore);
                
                if (!AppComponentClass) {
                  throw new Error("Could not find Component class (e.g. AppComponent) in your code.");
                }

                const appInstance = new AppComponentClass();
                window.app = appInstance;

                document.getElementById('sandbox-root').innerHTML = "<" + selector + "></" + selector + ">";

                if (styles) {
                  const styleTag = document.createElement('style');
                  styleTag.innerHTML = styles;
                  document.head.appendChild(styleTag);
                }

                function compileInterpolations(text, ctx) {
                  return text.replace(/\\\\{\\\\{\\\\s*([\\\\s\\\\S]*?)\\\\s*\\\\}\\\\}/g, (match, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      const val = fn(ctx);
                      return val !== undefined && val !== null ? val : '';
                    } catch (e) {
                      return '';
                    }
                  });
                }

                function compileBindingsAndInterpolations(htmlSegment, ctx) {
                  let segment = compileInterpolations(htmlSegment, ctx);
                  
                  segment = segment.replace(/\\\\[class\\\\.([a-zA-Z0-9_-]+)\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, className, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'class="' + className + '"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[disabled\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'disabled="true"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[checked\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'checked="true"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[\\\\(ngModel\\\\)\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, propName) => {
                    return 'value="' + (ctx[propName] || '') + '" oninput="app.' + propName + ' = this.value; app.triggerRender();"';
                  });

                  segment = segment.replace(/\\\\((\\\\w+)\\\\)\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, eventName, handlerExpr) => {
                    const htmlEventMap = {
                      click: 'onclick',
                      change: 'onchange',
                      keyup: 'onkeyup',
                      input: 'oninput'
                    };
                    const htmlEvent = htmlEventMap[eventName] || 'on' + eventName;
                    
                    let compiledHandler = handlerExpr;
                    compiledHandler = compiledHandler.replace(/\\\\(([\\\\s\\\\S]*?)\\\\)/, (match, argsStr) => {
                      if (!argsStr.trim()) return '()';
                      const args = argsStr.split(',').map(arg => {
                        arg = arg.trim();
                        if (arg === '$event') return 'event';
                        try {
                          const fn = new Function('ctx', "with(ctx) { return " + arg + "; }");
                          const val = fn(ctx);
                          if (typeof val === 'string') return "'" + val.replace(/'/g, "\\\\'") + "'";
                          if (typeof val === 'object') return JSON.stringify(val);
                          return val;
                        } catch (e) {
                          return arg;
                        }
                      });
                      return "(" + args.join(', ') + ")";
                    });

                    return htmlEvent + '="app.' + compiledHandler + '; event.preventDefault();"';
                  });

                  return segment;
                }

                function compileTemplate(htmlString, ctx) {
                  let compiled = htmlString.replace(/@for\\\\s*\\\\(\\\\s*(\\\\w+)\\\\s+of\\\\s+([a-zA-Z0-9_()\\\\[\\\\]\\\\.\\\\'\\\\"?]+)\\\\s*;\\\\s*track\\\\s+([a-zA-Z0-9_\\\\.]+)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\}(?:\\\\s*@empty\\\\s*\\\\{([\\\\s\\\\S]*?)\\})?/g, (match, itemName, listExpr, trackExpr, body, emptyBody) => {
                    let list;
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + listExpr + "; }");
                      list = fn(ctx);
                    } catch (e) {
                      list = [];
                    }
                    
                    if (!list || list.length === 0) {
                      return emptyBody ? compileBindingsAndInterpolations(emptyBody, ctx) : '';
                    }
                    
                    return list.map((item, index) => {
                      const itemCtx = Object.create(ctx);
                      itemCtx[itemName] = item;
                      itemCtx['$index'] = index;
                      return compileBindingsAndInterpolations(body, itemCtx);
                    }).join('');
                  });

                  compiled = compiled.replace(/@if\\\\s*\\\\(\\\\s*([\\\\s\\\\S]*?)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\}(?:\\\\s*@else\\\\s*\\\\{([\\\\s\\\\S]*?)\\})?/g, (match, condExpr, ifBody, elseBody) => {
                    let condVal = false;
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + condExpr + "; }");
                      condVal = fn(ctx);
                    } catch (e) {
                      condVal = false;
                    }
                    return condVal ? compileBindingsAndInterpolations(ifBody, ctx) : (elseBody ? compileBindingsAndInterpolations(elseBody, ctx) : '');
                  });

                  return compileBindingsAndInterpolations(compiled, ctx);
                }

                appInstance.triggerRender = function() {
                  const renderedHTML = compileTemplate(template, appInstance);
                  const appNode = document.querySelector(selector);
                  if (appNode) {
                    appNode.innerHTML = renderedHTML;
                  }
                };

                appInstance.triggerRender();

              } catch (err) {
                document.getElementById('sandbox-root').innerHTML = \`
                  <div class="p-6 max-w-md mx-auto bg-rose-50 border border-rose-200 rounded-xl text-rose-800 space-y-2 text-left">
                    <h3 class="font-bold text-sm">⚠️ Compilation Error</h3>
                    <p class="text-xs font-mono whitespace-pre-wrap leading-relaxed">\${err.message || err}</p>
                  </div>
                \`;
                console.error(err);
              }
              window.parent.postMessage({ type: 'iframe-success' }, '*');
              if (!${runInTestMode}) {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
          </body>
          </html>
        `;
      } else {
        // Plain HTML / CSS / JS combined workspace compilation
        let cdns = '';
        if (selectedLang === 'jquery' || baseHtml.includes('jquery') || code.includes('jquery')) {
          cdns += `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n`;
        }
        if (selectedLang === 'tailwind' || baseHtml.includes('tailwindcss') || code.includes('tailwindcss') || code.includes('tailwind.com')) {
          cdns += `<script src="https://cdn.tailwindcss.com"></script>\n`;
        }
        if (selectedLang === 'bootstrap' || baseHtml.includes('bootstrap') || code.includes('bootstrap')) {
          cdns += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n`;
          cdns += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n`;
        }
        if (currentLang === 'react' || currentLang === 'nextjs' || baseHtml.includes('react') || currentCode.includes('react') || currentCode.includes('ReactDOM')) {
          cdns += `<script src="https://unpkg.com/react@18/umd/react.development.js"></script>\n`;
          cdns += `<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>\n`;
          cdns += `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n`;
          if (!cdns.includes('tailwindcss.com')) {
            cdns += `<script src="https://cdn.tailwindcss.com"></script>\n`;
          }
        }
        if (currentLang === 'vue' || baseHtml.includes('vue') || currentCode.includes('vue')) {
          cdns += `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\n`;
          if (!cdns.includes('tailwindcss.com')) {
            cdns += `<script src="https://cdn.tailwindcss.com"></script>\n`;
          }
        }
        if (currentLang === 'angular' || baseHtml.includes('angular') || currentCode.includes('angular')) {
          cdns += `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n`;
          if (!cdns.includes('tailwindcss.com')) {
            cdns += `<script src="https://cdn.tailwindcss.com"></script>\n`;
          }
        }

        compiledDoc = baseHtml;

        // Ensure head hooks and font styles are set
        if (compiledDoc.includes('<head>')) {
          compiledDoc = compiledDoc.replace('<head>', `<head>\n${khmerFontStyles}\n${hooks}\n${cdns}`);
        } else if (compiledDoc.includes('<html>')) {
          compiledDoc = compiledDoc.replace('<html>', `<html>\n<head>\n${khmerFontStyles}\n${hooks}\n${cdns}\n</head>`);
        } else {
          compiledDoc = `<!DOCTYPE html><html><head><meta charset="utf-8">${khmerFontStyles}${hooks}${cdns}</head><body>` + compiledDoc + `</body></html>`;
        }

        // Handle internal linking of cssCode
        const cssRegex = /<link\s+[^>]*href=["']\s*(?:\.\/)?style\.css\s*["'][^>]*>/gi;
        if (cssRegex.test(compiledDoc)) {
          compiledDoc = compiledDoc.replace(cssRegex, `<style>${cssCode}</style>`);
        } else if (cssCode && !compiledDoc.includes(`<style>${cssCode}</style>`) && !compiledDoc.includes(cssCode)) {
          compiledDoc = compiledDoc.replace('</head>', `<style>${cssCode}</style>\n</head>`);
        }

        // Handle internal linking of jsCode
        const jsRegex = /<script\s+[^>]*src=["']\s*(?:\.\/)?(?:app\.js|script\.js|main\.js|index\.js)\s*["'][^>]*>\s*<\/script>/gi;
        if (jsRegex.test(compiledDoc)) {
          compiledDoc = compiledDoc.replace(jsRegex, `<script>${jsCode}</script>`);
        } else if (jsCode && !compiledDoc.includes(jsCode)) {
          if (compiledDoc.includes('</body>')) {
            compiledDoc = compiledDoc.replace('</body>', `<script>${jsCode}</script>\n</body>`);
          } else {
            compiledDoc = compiledDoc.replace('</html>', `<script>${jsCode}</script>\n</html>`);
          }
        }

        // Inject the active editor Javascript specifically
        if (currentLang === 'javascript') {
          const wrapperScript = `
            <script>
              try {
                ${currentCode}
              } catch (err) {
                console.error(err);
              }
            </script>
          `;
          if (compiledDoc.includes('</body>')) {
            compiledDoc = compiledDoc.replace('</body>', `${wrapperScript}\n</body>`);
          } else {
            compiledDoc = compiledDoc + wrapperScript;
          }
        }

        // Success notifier
        const successScript = `
          <script>
            window.parent.postMessage({ type: 'iframe-success' }, '*');
            window.parent.postMessage({ type: 'execution-complete' }, '*');
          </script>
        `;
        if (compiledDoc.includes('</body>')) {
          compiledDoc = compiledDoc.replace('</body>', `${successScript}\n</body>`);
        } else {
          compiledDoc = compiledDoc + successScript;
        }
      }

      if (runInTestMode) {
        const triggerScript = `
          <script>
            setTimeout(() => {
              if (typeof window.runAllTests === 'function') {
                window.runAllTests();
              } else {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            }, 300);
          </script>
        `;
        if (compiledDoc.includes('</body>')) {
          compiledDoc = compiledDoc.replace('</body>', `${triggerScript}\n</body>`);
        } else {
          compiledDoc = compiledDoc + triggerScript;
        }
      }

      // Briefly clear iframeSrc before loading to ensure a total reload
      setTimeout(() => {
        setIframeSrc(compiledDoc);
        setOutput(runInTestMode 
          ? (language === 'en' ? "Running tests in sandbox environment..." : "កំពុងតេស្តកូដនៅក្នុងម៉ាស៊ីន...")
          : (language === 'en' ? "Live preview compilation success." : "លទ្ធផលចងក្រងការបង្ហាញរូបភាពជោគជ័យ។")
        );
        
        // Log custom compiler success log
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        if (runInTestMode) {
          setIframeLogs(prev => [...prev, { level: 'success', message: 'Test Runner initialized. Discovered and running your assertions...', timestamp: timeStr }]);
        } else {
          setIframeLogs(prev => [...prev, { level: 'success', message: 'Build compilation succeeded. App is mounted on container iframe viewport.', timestamp: timeStr }]);
        }
      }, 100);

    } else {
      // Send code to remote execution API via Piston backend compilers
      const extMap: Record<string, string> = {
        python: 'py',
        typescript: 'ts',
        java: 'java',
        c: 'c',
        cpp: 'cpp',
        csharp: 'cs',
        php: 'php',
        kotlin: 'kt',
        sql: 'sql',
        mysql: 'sql',
        git: 'sh'
      };
      const ext = extMap[currentLang] || 'py';

      try {
        const resolved = await getPistonRuntime(currentLang);
        
        let fileName = `playground_main.${ext}`;
        if (currentLang === 'java') {
          const classMatch = currentCode.match(/(?:public\s+)?class\s+(\w+)/);
          if (classMatch && classMatch[1]) {
            fileName = `${classMatch[1]}.java`;
          } else {
            fileName = 'Main.java';
          }
        } else if (currentLang === 'csharp') {
          fileName = 'Program.cs';
        }

        const isSql = currentLang === 'sql' || currentLang === 'mysql';
        let executableCode = isSql ? SQL_SEED_SCRIPT + '\n' + currentCode : currentCode;

        if (runInTestMode) {
          if (currentLang === 'python') {
            const pythonRunner = `
# --- INJECTED PYTHON TEST RUNNER ---
import sys
import traceback
import inspect
import json

def __run_python_tests():
    g = globals()
    test_functions = {k: v for k, v in g.items() if k.startswith('test_') and callable(v)}
    
    if not test_functions:
        print("TEST_WARN: No tests found in python script. Define functions starting with 'test_' to run assertions.", file=sys.stderr)
        return

    passed_count = 0
    failed_count = 0
    
    print("TEST_SUITE: Python Test Suite")
    
    for name, func in test_functions.items():
        try:
            func()
            print(f"TEST_PASS:   ✓ {name}")
            passed_count += 1
        except AssertionError as e:
            err_msg = str(e) or "Assertion failed"
            print(f"TEST_FAIL:   ✕ {name}\\n    → Assertion Error: {err_msg}")
            failed_count += 1
        except Exception as e:
            tb = traceback.format_exc().splitlines()[-2]
            err_msg = f"{type(e).__name__}: {str(e)} (at {tb.strip()})"
            print(f"TEST_FAIL:   ✕ {name}\\n    → Runtime Error: {err_msg}")
            failed_count += 1
            
    total = passed_count + failed_count
    summary = {"passed": passed_count, "failed": failed_count, "total": total}
    print(f"TEST_SUMMARY: {json.dumps(summary)}")

if __name__ == "__main__":
    __run_python_tests()
`;
            executableCode = executableCode + '\n' + pythonRunner;
          } else if (currentLang === 'typescript') {
            const tsRunner = `
// --- INJECTED TYPESCRIPT TEST RUNNER ---
(function() {
  const suites: any[] = [];
  let currentSuite: any = null;
  let hasTests = false;

  (global as any).describe = function(name: string, fn: any) {
    hasTests = true;
    const suite = { name, tests: [], error: null as string | null };
    suites.push(suite);
    const parentSuite = currentSuite;
    currentSuite = suite;
    try {
      fn();
    } catch (err: any) {
      suite.error = err.message || String(err);
    }
    currentSuite = parentSuite;
  };

  const createTestFunc = function(name: string, fn: any) {
    hasTests = true;
    const testCase = { name, fn, status: 'pending' };
    if (currentSuite) {
      currentSuite.tests.push(testCase);
    } else {
      suites.push({ name: 'Global Tests', tests: [testCase], error: null });
    }
  };

  (global as any).test = createTestFunc;
  (global as any).it = createTestFunc;

  (global as any).expect = function(actual: any) {
    const isNot = { value: false };
    const matchers = {
      toBe: (expected: any) => {
        const pass = Object.is(actual, expected);
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
        }
      },
      toEqual: (expected: any) => {
        const pass = JSON.stringify(actual) === JSON.stringify(expected);
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
        }
      },
      toBeTruthy: () => {
        const pass = !!actual;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "truthy value, but got " + JSON.stringify(actual));
        }
      },
      toBeFalsy: () => {
        const pass = !actual;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "falsy value, but got " + JSON.stringify(actual));
        }
      },
      toContain: (item: any) => {
        const pass = (Array.isArray(actual) || typeof actual === "string") ? (actual as any).includes(item) : false;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + JSON.stringify(actual) + " " + (isNot.value ? "NOT " : "") + "to contain " + JSON.stringify(item));
        }
      },
      toBeNull: () => {
        const pass = actual === null;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "null, but got " + JSON.stringify(actual));
        }
      },
      toBeUndefined: () => {
        const pass = actual === undefined;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "undefined, but got " + JSON.stringify(actual));
        }
      },
      toBeDefined: () => {
        const pass = actual !== undefined;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "defined value, but got undefined");
        }
      }
    };

    return {
      ...matchers,
      get not() {
        isNot.value = true;
        return matchers;
      }
    };
  };

  setTimeout(() => {
    if (!hasTests) {
      console.log("TEST_WARN: No test suites found. Write a test suite using \\"describe\\" and \\"test\\" blocks to run assertions.");
      return;
    }

    let passedCount = 0;
    let failedCount = 0;

    suites.forEach(suite => {
      console.log("TEST_SUITE: " + suite.name);

      if (suite.error) {
        console.log("TEST_FAIL:   ✕ Suite Initialization Error: " + suite.error);
        failedCount += suite.tests.length || 1;
        return;
      }

      suite.tests.forEach((testCase: any) => {
        try {
          testCase.fn();
          console.log("TEST_PASS:   ✓ " + testCase.name);
          passedCount++;
        } catch (err: any) {
          console.log("TEST_FAIL:   ✕ " + testCase.name + "\\n    → Error: " + (err.message || err));
          failedCount++;
        }
      });
    });

    const totalCount = passedCount + failedCount;
    console.log("TEST_SUMMARY: " + JSON.stringify({ passed: passedCount, failed: failedCount, total: totalCount }));
  }, 100);
})();
`;
            executableCode = executableCode + '\n' + tsRunner;
          }
        }

        const result = await ExecutionService.executeCode(resolved.language, executableCode, {
          version: resolved.version,
          files: [{ name: fileName, content: executableCode }],
          courseId,
          lessonId
        });

        const resData = {
          run: {
            stdout: result.stdout,
            stderr: result.stderr,
            code: result.exitCode ?? 0,
            output: result.output
          },
          compile: result.compile
        };

        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        // 1. Check for compilation failure first
        if (resData.compile && (resData.compile.code !== 0 || resData.compile.stderr)) {
          const compileErr = resData.compile.stderr || resData.compile.output || 'Compilation failed';
          const formattedErr = `Compile Error:\n${compileErr}`;
          setOutput(formattedErr);
          setIframeLogs([{ level: 'error', message: formattedErr, timestamp: timeStr }]);
          return;
        }

        // 2. Handle successful compilation or non-compiled runs
        if (resData.run) {
          const rawOutput = resData.run.stdout || resData.run.output || '';
          const rawError = resData.run.stderr || '';

          // If there is a runtime error (non-zero code) and stderr is present
          if (resData.run.code !== 0 && rawError) {
            const formattedErr = `Runtime Error (Exit Code ${resData.run.code}):\n${rawError}`;
            setOutput(formattedErr);
            setIframeLogs([{ level: 'error', message: formattedErr, timestamp: timeStr }]);
            return;
          }


          if (runInTestMode) {
            // Parse structured output
            const testSource = rawOutput || resData.run.output || '';
            const lines = testSource.split('\n');
            const cleanConsoleLines: string[] = [];
            const parsedLogs: any[] = [];

            lines.forEach((line: string) => {
              if (line.startsWith('TEST_SUITE:')) {
                const suiteName = line.replace('TEST_SUITE:', '').trim();
                parsedLogs.push({ level: 'test-suite', message: suiteName, timestamp: timeStr });
                cleanConsoleLines.push(`Suite: ${suiteName}`);
              } else if (line.startsWith('TEST_PASS:')) {
                const testMsg = line.replace('TEST_PASS:', '').trim();
                parsedLogs.push({ level: 'test-pass', message: testMsg, timestamp: timeStr });
                cleanConsoleLines.push(testMsg);
              } else if (line.startsWith('TEST_FAIL:')) {
                const testMsg = line.replace('TEST_FAIL:', '').replace(/\\n/g, '\n').trim();
                parsedLogs.push({ level: 'test-fail', message: testMsg, timestamp: timeStr });
                cleanConsoleLines.push(testMsg);
              } else if (line.startsWith('TEST_WARN:')) {
                const warnMsg = line.replace('TEST_WARN:', '').trim();
                parsedLogs.push({ level: 'warn', message: warnMsg, timestamp: timeStr });
                cleanConsoleLines.push(`Warning: ${warnMsg}`);
              } else if (line.startsWith('TEST_SUMMARY:')) {
                const summaryStr = line.replace('TEST_SUMMARY:', '').trim();
                parsedLogs.push({ level: 'test-summary', message: summaryStr, timestamp: timeStr });
                try {
                  const summary = JSON.parse(summaryStr);
                  cleanConsoleLines.push(`\nTest Summary: Passed: ${summary.passed}, Failed: ${summary.failed}, Total: ${summary.total}`);
                } catch(e) {
                  cleanConsoleLines.push(`\nTest Summary: ${summaryStr}`);
                }
              } else {
                // Keep ordinary prints
                if (line.trim()) {
                  cleanConsoleLines.push(line);
                }
              }
            });

            setOutput(cleanConsoleLines.join('\n') || 'No assertions were executed.');
            setIframeLogs(parsedLogs.length ? parsedLogs : [{ level: 'info', message: testSource || 'No output produced.', timestamp: timeStr }]);
          } else {
            // Regular mode output
            const finalOutput = rawOutput || resData.run.output || 'No console log output produced.';
            setOutput(finalOutput);
            
            if (rawError) {
              setIframeLogs([
                { level: 'error', message: `Runtime Warning/Error:\n${rawError}`, timestamp: timeStr },
                { level: 'info', message: finalOutput, timestamp: timeStr }
              ]);
            } else {
              setIframeLogs([
                { level: 'success', message: 'Execution Succeeded', timestamp: timeStr },
                { level: 'info', message: finalOutput, timestamp: timeStr }
              ]);
            }
          }
        } else {
          const errMsg = language === 'en' ? "Piston API compiler response failure." : "មានបញ្ហាក្នុងការផ្ញើសំណើទៅកាន់ម៉ាស៊ីនចងក្រងកូដ។";
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: timeStr }]);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          const errMsg = "Execution timed out (8s limit exceeded). If your code contains infinite loops, please check and run again.";
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: new Date().toLocaleTimeString() }]);
        } else {
          const errMsg = `Remote Execution Fail: ${err.message || err}`;
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: new Date().toLocaleTimeString() }]);
        }
      } finally {
        setIsRunning(false);
      }
    }
  };

  const getEditorLanguage = () => {
    if (activeFile) {
      const ext = activeFile.split('.').pop()?.toLowerCase() || '';
      if (ext === 'html' || ext === 'htm') return 'html';
      if (ext === 'css') return 'css';
      if (ext === 'js' || ext === 'jsx') return 'javascript';
      if (ext === 'ts' || ext === 'tsx') return 'typescript';
      if (ext === 'py') return 'python';
      if (ext === 'java') return 'java';
      if (ext === 'c') return 'c';
      if (ext === 'cpp' || ext === 'cc' || ext === 'h') return 'cpp';
      if (ext === 'cs') return 'csharp';
      if (ext === 'php') return 'php';
      if (ext === 'kt') return 'kotlin';
      if (ext === 'sql') return 'sql';
      if (ext === 'dart') return 'dart';
      if (ext === 'sh') return 'shell';
    }
    const editorMap: Record<string, string> = {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      typescript: 'typescript',
      python: 'python',
      java: 'java',
      c: 'c',
      cpp: 'cpp',
      csharp: 'csharp',
      php: 'php',
      kotlin: 'kotlin',
      sql: 'sql',
      mysql: 'sql',
      jquery: 'html',
      react: 'html',
      nextjs: 'javascript',
      vue: 'html',
      angular: 'html',
      tailwind: 'html',
      bootstrap: 'html',
      flutter: 'dart',
      git: 'shell'
    };
    return editorMap[selectedLang] || 'javascript';
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCodeAsFile = () => {
    const info = langFileInfoMap[selectedLang] || { filename: 'code.txt' };
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = info.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const activeFileInfo = langFileInfoMap[selectedLang] || { filename: 'main.js', iconColor: 'text-indigo-400' };
  const cheatsheet = cheatSheetsMap[selectedLang] || defaultCheatSheet;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans select-none overflow-hidden" id="sandbox-root-workspace">
      
      {/* Top Glassmorphic IDE Navigation Header */}
      <div className="min-h-14 h-auto sm:h-14 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 flex flex-wrap sm:flex-nowrap items-center justify-between px-3 sm:px-6 py-2 sm:py-0 shrink-0 z-10 shadow-xs gap-3">
        
        {/* Left Zone: Back Button & Page Title */}
        <div className="flex items-center space-x-2.5 sm:space-x-3.5 min-w-0">
          <button
            onClick={() => {
              if (onBack) {
                onBack();
              } else {
                window.location.hash = '';
                window.history.pushState(null, '', window.location.pathname);
                window.dispatchEvent(new Event('popstate'));
              }
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer transition shrink-0"
            title={courseId && lessonId ? (language === 'en' ? 'Back to Lesson' : 'ត្រឡប់ទៅមេរៀន') : (language === 'en' ? 'Back to Courses' : 'ត្រឡប់ទៅវគ្គសិក្សា')}
          >
            <ArrowLeft className="w-4 h-4 shrink-0 text-slate-500 dark:text-slate-400" />
            <span className="hidden sm:inline whitespace-nowrap">
              {courseId && lessonId
                ? (language === 'en' ? 'Back to Lesson' : 'ត្រឡប់ទៅមេរៀន')
                : (language === 'en' ? 'Back to Courses' : 'ត្រឡប់ទៅវគ្គសិក្សា')}
            </span>
            <span className="sm:hidden text-[11px]">
              {language === 'en' ? 'Back' : 'ត្រឡប់'}
            </span>
          </button>

          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="p-1.5 sm:p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 shrink-0">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <h2 className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 dark:text-white truncate max-w-[120px] sm:max-w-xs md:max-w-md">
                  {initialTitle ? initialTitle : (language === 'en' ? "Sabaicode Sandbox" : "ប្រអប់សាកល្បង សប្បាយកូដ")}
                </h2>

                {/* Compact Language Selector Dropdown */}
                <div className="relative inline-flex items-center">
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-bold rounded-xl px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none pr-6 shadow-xs"
                    title={language === 'en' ? "Select programming language" : "ជ្រើសរើសភាសាសរសេរកូដ"}
                  >
                    {categories.map((cat) => {
                      const catLangs = filteredCourses.filter(c => getCategoryForLang(c.id) === cat.id);
                      if (catLangs.length === 0) return null;
                      return (
                        <optgroup key={cat.id} label={cat.name[language]}>
                          {catLangs.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title.en}
                            </option>
                          ))}
                        </optgroup>
                      );
                    })}
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 pointer-events-none" />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block truncate">
                {initialTitle 
                  ? (language === 'en' ? "Custom tutorial example workspace" : "បន្ទប់អនុវត្តកូដគំរូ")
                  : (language === 'en' ? "Interactive bilingual coding environment" : "ឧបករណ៍ដំណើរការកូដទ្វេភាសា")}
              </p>
            </div>
          </div>
        </div>

        {/* Center Zone: Auto-Saved indicator */}
        <div className="hidden lg:flex items-center space-x-2 text-xs shrink-0">
          <AnimatePresence>
            {savedBadgeVisible && (
              <motion.span 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/20 uppercase tracking-wider shrink-0"
              >
                ✓ Saved
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Right Zone: Primary Actions & Compact Toolset */}
        <div className="flex items-center space-x-2 shrink-0">
          
          {/* Grouped Copy / Download / Reset Toolset Pill */}
          <div className="flex items-center bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-0.5 rounded-xl backdrop-blur-md shrink-0">
            <button
              onClick={copyCodeToClipboard}
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer"
              title="Copy code to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-0.5" />

            <button
              onClick={downloadCodeAsFile}
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer"
              title="Download code as file"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-0.5" />

            <button
              onClick={handleReset}
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer"
              title="Reset code template"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* De-emphasized Run Tests Button */}
          <button
            onClick={() => runCode(true)}
            disabled={isRunning}
            className="inline-flex items-center space-x-1.5 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-50 text-slate-700 dark:text-slate-300 font-bold text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition cursor-pointer shrink-0"
            title="Run Unit Tests"
          >
            {isRunning ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-500" />
            ) : (
              <Beaker className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            )}
            <span className="hidden sm:inline">{language === 'en' ? "Run Tests" : "តេស្តកូដ"}</span>
          </button>

          {/* Primary Call to Action Button */}
          <button
            onClick={() => runCode(false)}
            disabled={isRunning}
            className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-800/80 text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl shadow-md shadow-blue-500/15 active:scale-[0.98] transition cursor-pointer shrink-0"
          >
            {isRunning ? (
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-white" />
            ) : (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
            )}
            <span className="whitespace-nowrap">{isRunning ? t.running : t.runCode}</span>
          </button>
        </div>

      </div>

      {/* Main Split Section */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative" id="playground-main-split">
        
        {/* Center Section: Code Monaco Editor & Tabs */}
        <div 
          className={`flex-1 min-w-0 flex flex-col bg-slate-100 dark:bg-slate-900 relative transition-all duration-300 ${
            isFullscreenEditor ? 'absolute inset-0 z-30 bg-white dark:bg-slate-950 h-full' : ''
          }`}
        >
          
          {/* File Tabs Bar */}
          <div className="h-10 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between px-3 sm:px-4 shrink-0 text-xs select-none gap-2">
            
            <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
              {Object.keys(files).length > 0 ? (
                Object.keys(files).map((filename) => {
                  const isActive = filename === activeFile;
                  const fileExt = filename.split('.').pop() || '';
                  const info = langFileInfoMap[fileExt === 'js' ? 'javascript' : fileExt === 'css' ? 'css' : selectedLang] || { iconColor: 'text-slate-500' };
                  return (
                    <button
                      key={filename}
                      onClick={() => {
                        if (activeFile) {
                          setFiles(prev => ({ ...prev, [activeFile]: code }));
                        }
                        setActiveFile(filename);
                        setCode(files[filename] || '');
                      }}
                      className={`flex items-center space-x-2 px-3.5 py-1.5 font-mono text-xs font-semibold rounded-t-xl transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-t-2 border-blue-500' 
                          : 'bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <FileCode className={`w-3.5 h-3.5 ${info.iconColor}`} />
                      <span>{filename}</span>
                    </button>
                  );
                })
              ) : (
                <div className="flex items-center space-x-2 px-3.5 py-1.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono text-xs font-semibold rounded-t-xl border-t-2 border-blue-500">
                  <FileCode className={`w-3.5 h-3.5 ${activeFileInfo.iconColor}`} />
                  <span>{activeFileInfo.filename}</span>
                </div>
              )}
            </div>

            {/* Editor Zoom & Maximize Controls */}
            <div className="flex items-center space-x-1 shrink-0">
              <button
                onClick={() => setEditorFontSize(prev => Math.max(10, +(prev - 1.5).toFixed(1)))}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
                title={language === 'en' ? "Zoom out editor font" : "បង្រួមទំហំអក្សរកូដ"}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setEditorFontSize(13.5)}
                className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-1 py-0.5 rounded transition cursor-pointer min-w-[36px] text-center"
                title={language === 'en' ? "Reset font size (100%)" : "កំណត់ទំហំអក្សរដើម (100%)"}
              >
                {Math.round((editorFontSize / 13.5) * 100)}%
              </button>

              <button
                onClick={() => setEditorFontSize(prev => Math.min(24, +(prev + 1.5).toFixed(1)))}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
                title={language === 'en' ? "Zoom in editor font" : "ពង្រីកទំហំអក្សរកូដ"}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setIsFullscreenEditor(!isFullscreenEditor);
                  if (isFullscreenOutput) setIsFullscreenOutput(false);
                }}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer ml-1"
                title={isFullscreenEditor ? (language === 'en' ? "Exit editor fullscreen" : "ចាកចេញពីពង្រីកពេញ") : (language === 'en' ? "Maximize editor" : "ពង្រីកពេញអេក្រង់")}
              >
                {isFullscreenEditor ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

          </div>

          {/* Monaco Frame */}
          <div className="flex-1 relative min-h-[250px] shadow-inner bg-white dark:bg-slate-950">
            <Editor
              height="100%"
              path={activeFile}
              language={getEditorLanguage()}
              theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
              value={code}
              onChange={handleCodeChange}
              onMount={(editor, monaco) => {
                try {
                  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                    jsx: monaco.languages.typescript.JsxEmit.React,
                    target: monaco.languages.typescript.ScriptTarget.ES2020,
                    allowJs: true,
                    allowNonTsExtensions: true,
                  });
                  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                    jsx: monaco.languages.typescript.JsxEmit.React,
                    target: monaco.languages.typescript.ScriptTarget.ES2020,
                    allowJs: true,
                  });
                  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                    noSemanticValidation: true,
                    noSyntaxValidation: true,
                    noSuggestionDiagnostics: true,
                  });
                  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                    noSemanticValidation: true,
                    noSyntaxValidation: true,
                    noSuggestionDiagnostics: true,
                  });
                } catch (err) {
                  console.warn("Monaco compiler options setup failed:", err);
                }
              }}
              options={{
                minimap: { enabled: false },
                fontSize: editorFontSize,
                lineNumbers: "on",
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                padding: { top: 12, bottom: 12 },
                cursorBlinking: "smooth",
                fontFamily: "Fira Code, JetBrains Mono, Menlo, monospace",
                fontLigatures: true,
                renderValidationDecorations: "off",
              }}
            />
          </div>

          {/* Workspace Footer Status Bar */}
          <div className="h-7 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 px-4 flex items-center justify-between font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider shrink-0">
            <div className="flex items-center space-x-4">
              <span>UTF-8</span>
              <span>Tab Size: 2</span>
              <span>Theme: {theme === 'dark' ? 'vs-dark' : 'vs-light'}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[10px]">
              <div className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
              <span className="text-slate-400 font-sans">{isRunning ? 'Compiling' : 'Compiler Ready'}</span>
            </div>
          </div>

        </div>

        {/* Right Side: Glassmorphic Viewport Panel */}
        <div 
          className={`bg-white dark:bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 flex flex-col relative flex-1 min-w-0 ${
            isFullscreenOutput ? 'absolute inset-0 z-30 bg-white dark:bg-slate-950' : ''
          }`}
          id="playground-execution-viewport"
        >
          {/* Output Viewport Glassmorphic Tab Switcher Header */}
          <div className="h-10 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between px-3 sm:px-4 shrink-0 text-xs gap-2">
            
            <div className="flex items-center bg-slate-200/60 dark:bg-slate-900/60 p-0.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80" id="output-tabs">
              {['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular', 'flutter'].includes(selectedLang) && (
                <button
                  onClick={() => setActiveOutputTab('preview')}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer ${
                    activeOutputTab === 'preview' 
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-xs' 
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap shrink-0">{language === 'en' ? "Visual Live Preview" : "ការបង្ហាញលទ្ធផលរូបភាព"}</span>
                </button>
              )}
              
              <button
                onClick={() => setActiveOutputTab('logs')}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer ${
                  activeOutputTab === 'logs' 
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap shrink-0">{language === 'en' ? "Terminal / Console Logs" : "កុងសូល / លទ្ធផលកូដ"}</span>
              </button>
            </div>

            {/* Panel control actions */}
            <div className="flex items-center space-x-1">
              {/* Universal Zoom Controls (Available on both Preview and Console Logs) */}
              <div className="flex items-center space-x-1 border-r border-slate-200 dark:border-slate-800 pr-1.5 mr-0.5">
                <button
                  onClick={() => setPreviewZoom(z => Math.max(0.4, +(z - 0.1).toFixed(2)))}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900/60 transition cursor-pointer"
                  title={language === 'en' ? "Zoom out (Decrease scale)" : "បង្រួមទំហំ"}
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setPreviewZoom(1.0)}
                  className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded transition cursor-pointer min-w-[40px] text-center ${
                    previewZoom !== 1.0 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-black' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-900/60'
                  }`}
                  title={language === 'en' ? "Reset zoom (Click for 100%)" : "កំណត់ទំហំដើម (ចុចដើម្បីយក 100%)"}
                >
                  {Math.round(previewZoom * 100)}%
                </button>

                <button
                  onClick={() => setPreviewZoom(z => Math.min(2.0, +(z + 0.1).toFixed(2)))}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900/60 transition cursor-pointer"
                  title={language === 'en' ? "Zoom in (Increase scale)" : "ពង្រីកទំហំ"}
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {activeOutputTab === 'logs' && iframeLogs.length > 0 && (
                <button
                  onClick={() => setIframeLogs([])}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-200 dark:hover:bg-slate-900/60 transition cursor-pointer"
                  title="Clear logs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => {
                  setIsFullscreenOutput(!isFullscreenOutput);
                  if (isFullscreenEditor) setIsFullscreenEditor(false);
                }}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900/60 transition cursor-pointer"
                title={isFullscreenOutput ? (language === 'en' ? "Exit fullscreen" : "ចាកចេញពីពង្រីកពេញ") : (language === 'en' ? "Maximize view" : "ពង្រីកពេញអេក្រង់")}
              >
                {isFullscreenOutput ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>

            </div>

          </div>

          {/* Output Viewport Container */}
          <div className="flex-1 min-h-0 p-3 sm:p-4 overflow-hidden relative flex flex-col bg-slate-50 dark:bg-slate-950">
            {iframeSrc && (
              <div className={`bg-white rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative flex flex-col min-h-0 ${
                activeOutputTab === 'preview' 
                  ? 'w-full h-full flex-1 flex' 
                  : 'absolute opacity-0 pointer-events-none w-[1px] h-[1px] overflow-hidden'
              }`}>
                {/* Mock Browser bar */}
                <div className="bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-2 text-slate-400 text-xs shrink-0 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="flex-1 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-0.5 text-[10px] font-mono text-slate-500 truncate max-w-sm">
                    https://sandbox.sabaicode.kh/live/index.html
                  </div>
                  {previewZoom !== 1.0 && (
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                      Zoom: {Math.round(previewZoom * 100)}%
                    </span>
                  )}
                </div>
                <div className="flex-1 min-h-0 overflow-auto bg-white relative">
                  <iframe
                    srcDoc={iframeSrc}
                    title="Sandbox Live Visual Rendering Viewport"
                    sandbox="allow-scripts"
                    style={{
                      width: previewZoom !== 1.0 ? `${100 / previewZoom}%` : '100%',
                      height: previewZoom !== 1.0 ? `${100 / previewZoom}%` : '100%',
                      transform: previewZoom !== 1.0 ? `scale(${previewZoom})` : 'none',
                      transformOrigin: 'top left',
                    }}
                    className="w-full h-full border-none overflow-auto"
                  />
                </div>
              </div>
            )}

            {selectedLang === 'flutter' && (
              <div className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative flex flex-col min-h-0 ${
                activeOutputTab === 'preview' 
                  ? 'w-full h-full flex-1 flex' 
                  : 'absolute opacity-0 pointer-events-none w-[1px] h-[1px] overflow-hidden'
              }`}>
                {/* Mock Browser bar */}
                <div className="bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-2 text-slate-400 text-xs shrink-0 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-0.5 text-[10px] font-mono text-slate-500 truncate max-w-sm">
                    https://dartpad.dev/embed-flutter.html
                  </div>
                  {previewZoom !== 1.0 && (
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                      Zoom: {Math.round(previewZoom * 100)}%
                    </span>
                  )}
                </div>
                <div className="flex-1 min-h-0 overflow-auto bg-white relative">
                  <iframe
                    ref={dartpadIframeRef}
                    src={`https://dartpad.dev/embed-flutter.html?theme=${theme === 'dark' ? 'dark' : 'light'}&run=true&split=60`}
                    title="Flutter DartPad Sandbox"
                    allow="clipboard-read; clipboard-write"
                    style={{
                      width: previewZoom !== 1.0 ? `${100 / previewZoom}%` : '100%',
                      height: previewZoom !== 1.0 ? `${100 / previewZoom}%` : '100%',
                      transform: previewZoom !== 1.0 ? `scale(${previewZoom})` : 'none',
                      transformOrigin: 'top left',
                    }}
                    className="w-full h-full bg-white dark:bg-slate-950 border-none"
                  />
                </div>
              </div>
            )}

            {activeOutputTab === 'preview' && !iframeSrc && selectedLang !== 'flutter' && (
              /* Compact Glassmorphic Compiler Placeholder */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-white/50 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl backdrop-blur-sm select-none shadow-xs max-w-sm mx-auto my-auto">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {language === 'en' ? "Visual Rendering Ready" : "ការបង្ហាញលទ្ធផលរូបភាពរួចរាល់"}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {language === 'en' 
                    ? "Click 'Run Code' to compile and preview your code live."
                    : "ចុច 'ដំណើរការកូដ' ដើម្បីមើលរូបរាងលទ្ធផលផ្ទាល់ភ្នែក។"}
                </p>
              </div>
            )}

            {activeOutputTab === 'logs' && (
              /* Terminal Log output View */
              <div className="flex-1 min-h-0 flex flex-col h-full overflow-hidden text-left font-mono">
                {previewZoom !== 1.0 && (
                  <div className="mb-2 flex items-center justify-between bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 px-3 py-1.5 rounded-xl text-xs select-none">
                    <span className="text-blue-700 dark:text-blue-300 font-sans font-medium text-[11px] flex items-center gap-1.5">
                      <span>{language === 'en' ? "Current Scale:" : "ទំហំពង្រីកបច្ចុប្បន្ន:"}</span>
                      <strong className="font-mono">{Math.round(previewZoom * 100)}%</strong>
                    </span>
                    <button
                      onClick={() => setPreviewZoom(1.0)}
                      className="text-[10px] font-bold font-sans text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline cursor-pointer"
                    >
                      {language === 'en' ? "Reset to 100%" : "កំណត់យក 100% ដើម"}
                    </button>
                  </div>
                )}
                {iframeLogs.length === 0 && !output ? (
                  /* Terminal console fallback placeholder */
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8 select-none">
                    <div className="p-4 rounded-full bg-emerald-50 dark:bg-slate-900/80 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-800 mb-4">
                      <Terminal className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {language === 'en' ? "Terminal Standard Output" : "កុងសូលបង្ហាញលទ្ធផលកូដ"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed font-sans">
                      {t.noOutputYet}
                    </p>
                  </div>
                ) : (
                  <div 
                    ref={logsContainerRef}
                    style={{
                      fontSize: previewZoom !== 1.0 ? `${+(12 * previewZoom).toFixed(1)}px` : undefined
                    }}
                    className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 sm:p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 rounded-2xl leading-relaxed font-mono select-text space-y-2 text-slate-700 dark:text-slate-200 shadow-inner touch-pan-y"
                  >
                    
                    {/* Display Piston/Native stdout first if present */}
                    {output && !['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'].includes(selectedLang) && (
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-900 pb-1 mb-2">Stdout Logstream</div>
                        <pre className={`whitespace-pre-wrap font-mono font-medium ${
                          output.startsWith('[Compile Error]') || 
                          output.startsWith('[Runtime Error]') || 
                          output.startsWith('Compile Error:') || 
                          output.startsWith('Runtime Error:') || 
                          output.startsWith('Execution Failed:') ||
                          output.includes('Execution Timed Out')
                            ? 'text-rose-600 dark:text-rose-400' 
                            : 'text-slate-800 dark:text-slate-200'
                        }`}>{output}</pre>
                      </div>
                    )}

                    {/* Display Live captured IFrame logs */}
                    {iframeLogs.length > 0 && (
                      <div className="space-y-1.5 font-mono">
                        {['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'].includes(selectedLang) && (
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-900 pb-1 mb-2">Captured Iframe Console Streams</div>
                        )}
                        {iframeLogs.map((log, idx) => {
                          const isError = log.level === 'error';
                          const isWarn = log.level === 'warn';
                          const isSuccess = log.level === 'success';
                          const isTestSuite = log.level === 'test-suite';
                          const isTestPass = log.level === 'test-pass';
                          const isTestFail = log.level === 'test-fail';
                          const isTestSummary = log.level === 'test-summary';

                          let badgeColor = 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/15';
                          if (isError) badgeColor = 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/15';
                          if (isWarn) badgeColor = 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/15';
                          if (isSuccess) badgeColor = 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/15';
                          if (isTestSuite) badgeColor = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/15';
                          if (isTestPass) badgeColor = 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/15';
                          if (isTestFail) badgeColor = 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/15';
                          if (isTestSummary) badgeColor = 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/15';

                           return (
                            <div key={idx} className={`flex items-start space-x-2 text-[11px] border-b border-slate-100 dark:border-slate-900/40 pb-1.5 font-mono ${isTestSuite ? 'bg-blue-50/50 dark:bg-blue-500/5 p-1 rounded-lg border-blue-100 dark:border-blue-500/10 border' : isTestSummary ? 'bg-slate-950 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800' : ''}`}>
                              <span className="text-slate-500 dark:text-slate-500 font-mono shrink-0 select-none">[{log.timestamp}]</span>
                              <span className={`px-1.5 py-0.2 rounded border font-mono uppercase text-[9px] font-bold shrink-0 ${badgeColor}`}>
                                {isTestSuite ? 'suite' : isTestPass ? 'pass' : isTestFail ? 'fail' : isTestSummary ? 'summary' : log.level}
                              </span>
                              <div className={`flex flex-col gap-1.5 font-mono flex-1 ${
                                isError || isTestFail ? 'text-rose-600 dark:text-rose-400' : 
                                isWarn ? 'text-amber-600 dark:text-amber-400' : 
                                isSuccess || isTestPass ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 
                                isTestSuite ? 'text-blue-600 dark:text-blue-300 font-bold text-xs' :
                                isTestSummary ? 'text-purple-600 dark:text-purple-300 font-bold' :
                                'text-slate-700 dark:text-slate-200'
                              }`}>
                                {isTestSummary ? (
                                  (() => {
                                    try {
                                      const s = JSON.parse(log.message || '{}');
                                      return (
                                        <div className="flex flex-col space-y-1.5 py-1">
                                          <div className="text-slate-300 text-[10px] tracking-wide font-black uppercase flex items-center space-x-1.5">
                                            <Beaker className="w-3.5 h-3.5 text-purple-400" />
                                            <span>ASSERTION EXECUTION SUMMARY</span>
                                          </div>
                                          <div className="flex items-center space-x-4 text-xs font-bold pt-1">
                                            <span className="text-slate-400">Total: <span className="text-slate-100">{s.total}</span></span>
                                            <span className="text-emerald-400">Passed: <span>{s.passed}</span></span>
                                            <span className="text-rose-400">Failed: <span>{s.failed}</span></span>
                                          </div>
                                          {s.failed === 0 ? (
                                            <div className="text-[10px] text-emerald-500 font-black tracking-wider uppercase bg-emerald-500/5 py-1 px-2 rounded border border-emerald-500/10">
                                              ✨ ALL TESTS PASSED SUCCESSFULLY!
                                            </div>
                                          ) : (
                                            <div className="text-[10px] text-rose-500 font-black tracking-wider uppercase bg-rose-500/5 py-1 px-2 rounded border border-rose-500/10">
                                              ✕ SOME TESTS ARE FAILING. CHECK ERRORS ABOVE.
                                            </div>
                                          )}
                                        </div>
                                      );
                                    } catch(e) {
                                      return <span className="whitespace-pre-wrap font-mono">{log.message}</span>;
                                    }
                                  })()
                                ) : log.args && log.args.length > 0 ? (
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {log.args.map((arg, argIdx) => (
                                      <LogArgumentRenderer key={argIdx} arg={arg} />
                                    ))}
                                  </div>
                                ) : (
                                  <span className="whitespace-pre-wrap font-mono">{log.message}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Toast Notification for Reset */}
      {resetToastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-slate-900 text-white font-mono text-xs font-bold shadow-2xl border border-slate-800 animate-fade-in flex items-center space-x-2">
          <RotateCcw className="w-4 h-4 text-emerald-400 animate-spin" />
          <span>{resetToastMessage}</span>
        </div>
      )}

      {/* Confirmation Modal for Reset */}
      {showResetConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-left">
            <div className="flex items-center space-x-3 text-amber-500 dark:text-amber-400">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'en' ? 'Reset Code Template?' : 'កំណត់កូដគំរូឡើងវិញ?'}
              </h3>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {language === 'en' 
                ? 'Are you sure you want to restore this editor template to its default starter code? Any unsaved modifications will be lost.'
                : 'តើអ្នកប្រាកដជាចង់កំណត់កូដគំរូក្នុងកម្មវិធីកែសម្រួលនេះឡើងវិញទេ? រាល់ការកែប្រែដែលមិនទាន់រក្សាទុកនឹងត្រូវបាត់បង់។'}
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowResetConfirmModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition cursor-pointer"
              >
                {language === 'en' ? 'Cancel' : 'បោះបង់'}
              </button>
              <button
                onClick={executeReset}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-rose-600/20 flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Reset Code' : 'កំណត់ឡើងវិញ'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
