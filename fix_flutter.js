const fs = require('fs');

let file = fs.readFileSync('/src/data/flutterLessons.ts', 'utf8');

// Replace any occurrence of \``` (one backslash followed by 3 backticks) with \`\`\` (backslash before each backtick)
file = file.replace(/\\```/g, '\\`\\`\\`');

// Replace any occurrence of \` where a single backtick is followed by non-escaped backticks
// Ensure all markdown inline code `code` or ``` code blocks inside template strings are properly escaped
file = file.replace(/\\`([^`\n]+)\\`/g, '\\`$1\\`');

// Also fix any unescaped \` in template strings
// Specifically, in TS template strings, any literal backtick should be \`
// If there are unescaped backticks inside `content: { en: `...`, km: `...` }`, let's ensure they are escaped.

fs.writeFileSync('/src/data/flutterLessons.ts', file, 'utf8');
console.log('Fixed flutterLessons.ts');
