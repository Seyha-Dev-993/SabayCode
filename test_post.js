// test_post.js
async function run() {
  const code = `
  fun main() {
      println("Hello Kotlin")
  }
  `;
  const response = await fetch('http://localhost:3000/api/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: 'kotlin',
      version: '1.8.20',
      files: [{ name: 'main.kt', content: code }]
    })
  });
  const data = await response.json();
  console.log("KOTLIN RESPONSE:", JSON.stringify(data, null, 2));

  const cppCode = `
  #include <iostream>
  int main() {
      std::cout << "Hello C++" << std::endl;
      return 0;
  }
  `;
  const responseCpp = await fetch('http://localhost:3000/api/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: 'cpp',
      version: '10.2.0',
      files: [{ name: 'main.cpp', content: cppCode }]
    })
  });
  const dataCpp = await responseCpp.json();
  console.log("CPP RESPONSE:", JSON.stringify(dataCpp, null, 2));
}

run().catch(console.error);
