import { spawn } from 'child_process';
import fetch from 'node-fetch'; // wait, node-fetch is not in package.json, but Node 18+ has native fetch! Let's use native global fetch.

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTests() {
  console.log("==================================================");
  console.log("Starting Automated Test Suite for Bilingual Platform...");
  console.log("==================================================");

  // 1. Start the server
  console.log("Spawning server process via tsx server.ts...");
  const server = spawn('npx', ['tsx', 'server.ts'], {
    env: { ...process.env, NODE_ENV: 'development', PORT: '3125', TESTING: 'true' }
  });

  server.stdout.on('data', (data) => {
    // console.log(`[SERVER STDOUT] ${data.toString().trim()}`);
  });

  server.stderr.on('data', (data) => {
    console.error(`[SERVER STDERR] ${data.toString().trim()}`);
  });

  // Wait for server to boot up
  console.log("Waiting 3 seconds for server to start...");
  await delay(3000);

  const baseUrl = 'http://localhost:3125';
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(` ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(` ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // Test 1: GET /api/runtimes
  try {
    console.log("\n--- Test 1: GET /api/runtimes ---");
    const res = await fetch(`${baseUrl}/api/runtimes`);
    assert(res.status === 200, "Response status is 200");
    const data = await res.json();
    assert(Array.isArray(data) && data.length > 0, "Runtimes is a non-empty array");
    if (data.length > 0) {
      console.log(` Found ${data.length} runtimes. Example: ${data[0].language} (${data[0].version})`);
    }
  } catch (e) {
    assert(false, `Test 1 failed with error: ${e.message}`);
  }

  // Helper for /api/execute
  async function testExecute(lang, version, code, filename = 'main.py') {
    const res = await fetch(`${baseUrl}/api/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: lang,
        version,
        files: [{ name: filename, content: code }]
      })
    });
    return { status: res.status, data: await res.json() };
  }

  // Test 2: Python Code Execution
  try {
    console.log("\n--- Test 2: Python 'Hello World' Execution ---");
    const { status, data } = await testExecute('python', '3.10.0', 'print("Hello from Python 3")');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello from Python 3", "Stdout matches 'Hello from Python 3'");
  } catch (e) {
    assert(false, `Test 2 failed with error: ${e.message}`);
  }

  // Test 3: JavaScript Code Execution
  try {
    console.log("\n--- Test 3: JavaScript Execution ---");
    const { status, data } = await testExecute('javascript', '18.15.0', 'console.log("Hello JS")', 'index.js');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello JS", "Stdout matches 'Hello JS'");
  } catch (e) {
    assert(false, `Test 3 failed with error: ${e.message}`);
  }

  // Test 4: TypeScript Execution (transpiled & executed)
  try {
    console.log("\n--- Test 4: TypeScript Execution ---");
    const { status, data } = await testExecute('typescript', '4.9.4', 'const greeting: string = "Hello TS"; console.log(greeting);', 'index.ts');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello TS", "Stdout matches 'Hello TS'");
  } catch (e) {
    assert(false, `Test 4 failed with error: ${e.message}`);
  }

  // Test 5: Java Execution (Requires main class)
  try {
    console.log("\n--- Test 5: Java Execution ---");
    const javaCode = `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello Java");
        }
    }
    `;
    const { status, data } = await testExecute('java', '15.0.2', javaCode, 'Main.java');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello Java", "Stdout matches 'Hello Java'");
  } catch (e) {
    assert(false, `Test 5 failed with error: ${e.message}`);
  }

  // Test 6: C Execution
  try {
    console.log("\n--- Test 6: C Execution ---");
    const cCode = `
    #include <stdio.h>
    int main() {
        printf("Hello C\\n");
        return 0;
    }
    `;
    const { status, data } = await testExecute('c', '10.2.0', cCode, 'main.c');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello C", "Stdout matches 'Hello C'");
  } catch (e) {
    assert(false, `Test 6 failed with error: ${e.message}`);
  }

  // Test 7: C++ Execution
  try {
    console.log("\n--- Test 7: C++ Execution ---");
    const cppCode = `
    #include <iostream>
    int main() {
        std::cout << "Hello C++" << std::endl;
        return 0;
    }
    `;
    const { status, data } = await testExecute('cpp', '10.2.0', cppCode, 'main.cpp');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello C++", "Stdout matches 'Hello C++'");
  } catch (e) {
    assert(false, `Test 7 failed with error: ${e.message}`);
  }

  // Test 8: C# Execution
  try {
    console.log("\n--- Test 8: C# Execution ---");
    const csCode = `
    using System;
    class Program {
        static void Main() {
            Console.WriteLine("Hello C#");
        }
    }
    `;
    const { status, data } = await testExecute('csharp', '6.12.0', csCode, 'Program.cs');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello C#", "Stdout matches 'Hello C#'");
  } catch (e) {
    assert(false, `Test 8 failed with error: ${e.message}`);
  }

  // Test 9: PHP Execution
  try {
    console.log("\n--- Test 9: PHP Execution ---");
    const { status, data } = await testExecute('php', '8.2.3', '<?php echo "Hello PHP";', 'main.php');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello PHP", "Stdout matches 'Hello PHP'");
  } catch (e) {
    assert(false, `Test 9 failed with error: ${e.message}`);
  }

  // Test 10: Kotlin Execution
  try {
    console.log("\n--- Test 10: Kotlin Execution ---");
    const ktCode = `
    fun main() {
        println("Hello Kotlin")
    }
    `;
    const { status, data } = await testExecute('kotlin', '1.8.20', ktCode, 'main.kt');
    assert(status === 200, "Response status is 200");
    assert(data.run && data.run.code === 0, "Execution finished with exit code 0");
    assert(data.run && data.run.stdout.trim() === "Hello Kotlin", "Stdout matches 'Hello Kotlin'");
  } catch (e) {
    assert(false, `Test 10 failed with error: ${e.message}`);
  }

  // Test 11: Validation Failure - Empty Code
  try {
    console.log("\n--- Test 11: Validation - Empty Code ---");
    const { status, data } = await testExecute('python', '3.10.0', '   ', 'main.py');
    assert(status === 400, "Empty code request rejected with status 400");
    assert(data.error === 'Empty code execution is not allowed', "Error message matches expected");
  } catch (e) {
    assert(false, `Test 11 failed with error: ${e.message}`);
  }

  // Test 12: Validation Failure - Missing Language
  try {
    console.log("\n--- Test 12: Validation - Missing Language ---");
    const res = await fetch(`${baseUrl}/api/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        version: '1.0',
        files: [{ name: 'test.py', content: 'print(1)' }]
      })
    });
    const data = await res.json();
    assert(res.status === 400, "Missing language request rejected with status 400");
    assert(data.error === 'Language parameter is required', "Error message matches expected");
  } catch (e) {
    assert(false, `Test 12 failed with error: ${e.message}`);
  }

  // Test 13: Compile Failure Handling (Syntax Error in C++)
  try {
    console.log("\n--- Test 13: Compile Failure Handling ---");
    const { status, data } = await testExecute('cpp', '10.2.0', 'int main() { std::cout << "Broken syntax }', 'main.cpp');
    assert(status === 200, "Request completed successfully (status 200)");
    assert(data.compile && data.compile.code !== 0, "Compilation code is non-zero (failed)");
    assert(data.compile && (data.compile.stderr || data.compile.output), "Compile stderr contains errors");
  } catch (e) {
    assert(false, `Test 13 failed with error: ${e.message}`);
  }

  // Test 14: Runtime Failure Handling (Exception in Python)
  try {
    console.log("\n--- Test 14: Runtime Failure Handling ---");
    const { status, data } = await testExecute('python', '3.10.0', 'raise ValueError("Simulated crash")');
    assert(status === 200, "Request completed successfully (status 200)");
    assert(data.run && data.run.code !== 0, "Run finished with non-zero exit code (failed)");
    assert(data.run && data.run.stderr.includes("ValueError"), "Runtime stderr contains exception info");
  } catch (e) {
    assert(false, `Test 14 failed with error: ${e.message}`);
  }

  // Test 15: Timeout Handling (Infinite Loop in Python)
  try {
    console.log("\n--- Test 15: Timeout Handling (Infinite Loop) ---");
    const startRun = Date.now();
    const { status, data } = await testExecute('python', '3.10.0', 'import time\nwhile True:\n    time.sleep(0.5)');
    const duration = Date.now() - startRun;
    assert(status === 200, "Request completed successfully (status 200)");
    assert(data.run && (data.run.signal === 'SIGKILL' || data.run.code === null || data.run.code === 137), "Run is terminated or killed");
    console.log(` Infinite loop terminated in ${duration}ms.`);
  } catch (e) {
    assert(false, `Test 15 failed with error: ${e.message}`);
  }

  // Test 16: Security Restriction (Payload too large)
  try {
    console.log("\n--- Test 16: Security - Large Payload Blocked ---");
    const largeCode = "print(1)\n" + "#".repeat(600000);
    const { status, data } = await testExecute('python', '3.10.0', largeCode);
    assert(status === 400, "Large payload rejected with status 400");
    assert(data.error === 'Request body exceeds maximum allowed size', "Error message matches size security restriction");
  } catch (e) {
    assert(false, `Test 16 failed with error: ${e.message}`);
  }

  console.log("\n==================================================");
  console.log(`Test Results Summary: ${passed} Passed, ${failed} Failed`);
  console.log("==================================================");

  // Stop the server
  console.log("Stopping server...");
  server.kill();

  if (failed > 0) {
    console.error("Some tests failed!");
    process.exit(1);
  } else {
    console.log("All automated tests completed successfully!");
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error("Test framework error:", err);
  process.exit(1);
});
