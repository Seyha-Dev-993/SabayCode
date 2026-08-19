import { Lesson, LessonExample } from '../types';

// Persistent memory cache to guarantee exact reference equality of LessonExample
const lessonExampleCache = new Map<string, LessonExample>();

export function parseLessonStarterCode(starterCode: string, courseId: string): Record<string, string> {
  const files: Record<string, string> = {};

  const isWeb = ['html', 'css', 'javascript', 'jquery', 'tailwind', 'bootstrap'].includes(courseId);
  if (!isWeb) {
    // Determine language file name
    const langFileInfoMap: Record<string, { filename: string }> = {
      python: { filename: 'main.py' },
      java: { filename: 'Main.java' },
      'spring-boot': { filename: 'Application.java' },
      c: { filename: 'main.c' },
      cpp: { filename: 'main.cpp' },
      csharp: { filename: 'Program.cs' },
      php: { filename: 'index.php' },
      kotlin: { filename: 'main.kt' },
      swift: { filename: 'main.swift' },
      sql: { filename: 'query.sql' },
      mysql: { filename: 'query.sql' },
      mongodb: { filename: 'queries.js' },
      react: { filename: 'App.jsx' },
      nextjs: { filename: 'page.jsx' },
      vue: { filename: 'App.vue' },
      angular: { filename: 'app.component.ts' },
      typescript: { filename: 'app.ts' },
      dart: { filename: 'main.dart' },
      flutter: { filename: 'main.dart' },
      git: { filename: 'commands.sh' },
      'it-support': { filename: 'network.sh' },
      xml: { filename: 'document.xml' },
      sass: { filename: 'styles.scss' },
      scss: { filename: 'styles.scss' }
    };
    const info = langFileInfoMap[courseId] || { filename: 'main.txt' };
    files[info.filename] = starterCode;
    return files;
  }

  // It's a web tech course (html, css, javascript, jquery, tailwind, bootstrap)
  if (starterCode.includes('<!DOCTYPE html>') || starterCode.includes('<html') || starterCode.includes('<body>')) {
    let html = starterCode;
    let css = '';
    let js = '';

    // Extract style block
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/i;
    const styleMatch = html.match(styleRegex);
    if (styleMatch) {
      css = styleMatch[1].trim();
      // Replace style block with stylesheet link
      html = html.replace(styleRegex, '  <link rel="stylesheet" href="style.css">');
    }

    // Extract script tags
    const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
    let localScriptsContent = '';
    for (const match of scriptMatches) {
      const scriptTag = match[0];
      const scriptContent = match[1];
      if (!scriptTag.includes('src=')) {
        localScriptsContent += (localScriptsContent ? '\n' : '') + scriptContent.trim();
        html = html.replace(scriptTag, '');
      }
    }
    if (localScriptsContent) {
      js = localScriptsContent;
      // Inject script.js link before </body> or </html>
      const scriptLink = '  <script src="script.js"></script>';
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${scriptLink}\n</body>`);
      } else if (html.includes('</html>')) {
        html = html.replace('</html>', `${scriptLink}\n</html>`);
      } else {
        html += `\n${scriptLink}`;
      }
    }

    files['index.html'] = html.trim();
    if (css || courseId === 'css') {
      files['style.css'] = css;
    }
    if (js || courseId === 'javascript' || courseId === 'jquery') {
      files['script.js'] = js;
    }
  } else {
    // Non-full HTML structures
    if (courseId === 'css') {
      files['style.css'] = starterCode;
      files['index.html'] = `<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <!-- Write your HTML here -->\n</body>\n</html>`;
    } else if (courseId === 'javascript' || courseId === 'jquery') {
      files['script.js'] = starterCode;
      files['index.html'] = `<!DOCTYPE html>\n<html>\n<head>\n  <script src="script.js"></script>\n</head>\n<body>\n  <!-- Open Console to see outputs -->\n</body>\n</html>`;
    } else {
      files['index.html'] = starterCode;
    }
  }

  return files;
}

export function getLessonExample(lesson: Lesson, courseId: string): LessonExample {
  const cacheKey = `${courseId}-${lesson.id}`;
  if (lessonExampleCache.has(cacheKey)) {
    return lessonExampleCache.get(cacheKey)!;
  }

  if (lesson.example) {
    lessonExampleCache.set(cacheKey, lesson.example);
    return lesson.example;
  }

  const files = parseLessonStarterCode(lesson.starterCode, courseId);
  const example: LessonExample = { files };
  lessonExampleCache.set(cacheKey, example);
  return example;
}
