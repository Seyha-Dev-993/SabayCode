import { Lesson } from '../types';

export const bootstrapLessonsPart4: Lesson[] = [
  {
    id: "bs5-grid-system",
    title: { en: "BS5 Grid System", km: "ប្រព័ន្ធក្រឡា Grid System" },
    content: {
      en: `# Bootstrap 5 Grid System Overview
The grid system is built with Flexbox. It uses containers, rows, and columns to organize content. It consists of up to 12 columns per row, and allows nesting and offset offsets.

### Column Classes prefixing
To target responsive widths, Bootstrap has 6 breakpoint layers:
- **Extra Small (\`<576px\`):** \`.col-*\` (e.g. \`col-6\`)
- **Small (\`>=576px\`):** \`.col-sm-*\`
- **Medium (\`>=768px\`):** \`.col-md-*\`
- **Large (\`>=992px\`):** \`.col-lg-*\`
- **Extra Large (\`>=1200px\`):** \`.col-xl-*\`
- **Extra Extra Large (\`>=1400px\`):** \`.col-xxl-*\``,
      km: `# ទិដ្ឋភាពទូទៅនៃប្រព័ន្ធ Grid ក្នុង Bootstrap 5
ប្រព័ន្ធ Grid របស់ Bootstrap ប្រើប្រាស់ Flexbox ជួយរៀបចំការតម្រឹម និងបែងចែកទំហំជា ១២ កូនក្រឡា (Columns) ក្នុងមួយជួរដេក (Row)។

### Breakpoints កំណត់ទំហំទាំង៦
- **Extra Small (\`<576px\`):** \`.col-*\` (សម្រាប់ទូរស័ព្ទដៃតូចៗ)
- **Small (\`>=576px\`):** \`.col-sm-*\` (សម្រាប់ទូរស័ព្ទអេក្រង់ធំ)
- **Medium (\`>=768px\`):** \`.col-md-*\` (សម្រាប់ថេបប្លេត)
- **Large (\`>=992px\`):** \`.col-lg-*\` (សម្រាប់កុំព្យូទ័រយួរដៃ)
- **Extra Large (\`>=1200px\`):** \`.col-xl-*\` (សម្រាប់កុំព្យូទ័រលើតុ)
- **XXL (\`>=1400px\`):** \`.col-xxl-*\` (សម្រាប់អេក្រង់ធំខ្លាំង)`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">6-Breakpoint Grid Layout</h4>
    <div class="row g-2">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="p-3 bg-primary text-white rounded">Col A (12 XS, 6 MD, 4 LG)</div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="p-3 bg-success text-white rounded">Col B (12 XS, 6 MD, 4 LG)</div>
      </div>
      <div class="col-12 col-md-12 col-lg-4">
        <div class="p-3 bg-danger text-white rounded">Col C (12 XS, 12 MD, 4 LG)</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-stacked-horizontal",
    title: { en: "BS5 Stacked/Horizontal", km: "ជួរឈរបញ្ឈរ និងផ្តេក" },
    content: {
      en: `# Bootstrap 5 Stacked/Horizontal Grid
By combining mobile-first grid prefixes, you can make columns stack vertically on mobile screens and expand horizontally into side-by-side columns on larger screens.

### Implementing Stacked to Horizontal
To stack elements initially, use responsive prefixes starting from medium (\`md\`) or large (\`lg\`).
\`\`\`html
<div class="row">
  <div class="col-md-8">Takes 8/12 space starting on Medium screens, stacks on small mobile!</div>
  <div class="col-md-4">Takes 4/12 space starting on Medium screens, stacks on small mobile!</div>
</div>
\`\`\``,
      km: `# ជួរឈរបញ្ឈរ និងផ្តេក ក្នុង Bootstrap 5
តាមរយៈប្រព័ន្ធ mobile-first របស់ Bootstrap អ្នកអាចរចនាឱ្យជួរឈរតម្រៀបតម្រួតបញ្ឈរលើគ្នា (Stacked) នៅលើទូរស័ព្ទដៃ ហើយលាតសន្ធឹងផ្តេកក្បែរគ្នា (Horizontal) នៅលើអេក្រង់កុំព្យូទ័រ។

### របៀបសរសេរ
ប្រើប្រាស់ \`.col-md-*\` សម្រាប់កំណត់ទំហំចាប់ពីអេក្រង់មធ្យម (MD) ឡើងទៅ៖
\`\`\`html
<div class="row">
  <div class="col-md-8">លាតស្មើ ៨/១២ ចាប់ពីកម្រិត Tablet ឡើងទៅ ហើយធ្លាក់ចុះក្រោមលើ Mobile</div>
  <div class="col-md-4">លាតស្មើ ៤/១២ ចាប់ពីកម្រិត Tablet ឡើងទៅ ហើយធ្លាក់ចុះក្រោមលើ Mobile</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container">
    <h4 class="mb-3">Responsive Stacked layout</h4>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="p-4 bg-white border rounded shadow-sm">
          <h5>Main Workspace Element</h5>
          <p class="text-secondary">This box takes 8/12 grid spacing starting on md (768px) and up. On mobile viewports (<768px), it collapses to take full width (12/12) automatically.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 bg-dark text-white rounded shadow-sm h-100 d-flex flex-column justify-content-center">
          <h5>Sidebar Panel</h5>
          <p class="text-secondary text-sm">Takes 4/12 width. Stacks under workspace on mobile.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-xs",
    title: { en: "BS5 Grid XSmall", km: "ក្រឡាអេក្រង់តូចបំផុត XS" },
    content: {
      en: `# Bootstrap 5 Grid XSmall (<576px)
The Extra Small breakpoint covers small mobile viewports. It is targeted using the raw **\`.col-*\`** class without a width identifier.

\`\`\`html
<div class="row">
  <div class="col-4">Always takes 4/12 space even on tiny mobile phones!</div>
  <div class="col-8">Always takes 8/12 space!</div>
</div>
\`\`\`

> **Tip:** Never write \`col-xs-*\` in Bootstrap 5; that syntax was deprecated in Bootstrap 4 and continues to be unsupported in Bootstrap 5.`,
      km: `# ក្រឡាអេក្រង់តូចបំផុត XS (<576px) ក្នុង Bootstrap 5
Breakpoint តូចបំផុត (Extra Small) គ្របដណ្តប់លើអេក្រង់ទូរស័ព្ទដៃធម្មតា។ យើងប្រើប្រាស់ Class គ្រឹះ **\`.col-*\`** ដោយមិនចាំបាច់សរសេរពាក្យបញ្ជាក់ទំហំកណ្តាលឡើយ។

\`\`\`html
<div class="row">
  <div class="col-4">យកទំហំ ៤/១២ ជានិច្ច ទោះបីជាលើអេក្រង់ទូរស័ព្ទតូចបំផុតក៏ដោយ!</div>
  <div class="col-8">យកទំហំ ៨/១២ ជានិច្ច!</div>
</div>
\`\`\`

> **គន្លឹះ៖** កុំសរសេរ \`col-xs-*\` ឱ្យសោះនៅក្នុង Bootstrap 5 ព្រោះវាត្រូវបានលុបចោលតាំងពីកំណែចាស់ៗមកម្ល៉េះ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Extra Small Grid (col-*)</h4>
    
    <div class="row g-2">
      <div class="col-3"><div class="p-3 bg-dark text-white rounded">3/12</div></div>
      <div class="col-3"><div class="p-3 bg-dark text-white rounded">3/12</div></div>
      <div class="col-6"><div class="p-3 bg-primary text-white rounded">6/12</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-sm",
    title: { en: "BS5 Grid Small", km: "ក្រឡាអេក្រង់ទូរស័ព្ទធំ SM" },
    content: {
      en: `# Bootstrap 5 Grid Small (>=576px)
The Small breakpoint targets viewport widths equal to or larger than **576px** (large mobile phones in landscape mode).

### Small Grid Syntax
Add **\`.col-sm-*\`**:
\`\`\`html
<div class="row">
  <div class="col-sm-6">Stacks on small mobile, splits 50/50 starting at 576px!</div>
  <div class="col-sm-6">50% starting at 576px!</div>
</div>
\`\`\``,
      km: `# ក្រឡាអេក្រង់ទូរស័ព្ទធំ SM (>=576px) ក្នុង Bootstrap 5
Breakpoint ប្រភេទ Small គឺផ្តោតលើអេក្រង់ដែលមានទំហំចាប់ពី **៥៧៦ ភីកសែល** ឡើងទៅ (ទូរស័ព្ទដៃបញ្ឈរធំៗ ឬផ្ដេក)។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.col-sm-*\`**៖
\`\`\`html
<div class="row">
  <div class="col-sm-6">តម្រួតលើគ្នាតូចជាង 576px ហើយចែកពាក់កណ្តាល ៥០% ចាប់ពី 576px ឡើងទៅ!</div>
  <div class="col-sm-6">ចែកពាក់កណ្តាល ៥០% ចាប់ពី 576px ឡើងទៅ!</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Small Breakpoint (col-sm-*)</h4>
    
    <div class="row g-2">
      <div class="col-sm-6"><div class="p-3 bg-success text-white rounded">50% starting on SM</div></div>
      <div class="col-sm-6"><div class="p-3 bg-success text-white rounded">50% starting on SM</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-md",
    title: { en: "BS5 Grid Medium", km: "ក្រឡាអេក្រង់ថេបប្លេត MD" },
    content: {
      en: `# Bootstrap 5 Grid Medium (>=768px)
The Medium breakpoint targets tablets and mid-size screen devices at **768px** and wider.

### Medium Grid Syntax
Add **\`.col-md-*\`**:
\`\`\`html
<div class="row">
  <div class="col-md-4">1/3 space starting at 768px, stacks on mobile.</div>
  <div class="col-md-8">2/3 space starting at 768px, stacks on mobile.</div>
</div>
\`\`\``,
      km: `# ក្រឡាអេក្រង់ថេបប្លេត MD (>=768px) ក្នុង Bootstrap 5
Breakpoint ប្រភេទ Medium (MD) គឺផ្តោតលើទំហំអេក្រង់ចាប់ពី **៧៦៨ ភីកសែល** ឡើងទៅ (ដូចជាអេក្រង់ Tablet ឬ iPad)។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.col-md-*\`**៖
\`\`\`html
<div class="row">
  <div class="col-md-4">យកទំហំ ១/៣ (៤/១២ ក្រឡា) ចាប់ពីអេក្រង់ Tablet ឡើងទៅ</div>
  <div class="col-md-8">យកទំហំ ២/៣ (៨/១២ ក្រឡា) ចាប់ពីអេក្រង់ Tablet ឡើងទៅ</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Medium Breakpoint (col-md-*)</h4>
    
    <div class="row g-2">
      <div class="col-md-4"><div class="p-3 bg-primary text-white rounded">Takes 1/3 starting on MD</div></div>
      <div class="col-md-4"><div class="p-3 bg-primary text-white rounded">Takes 1/3 starting on MD</div></div>
      <div class="col-md-4"><div class="p-3 bg-primary text-white rounded">Takes 1/3 starting on MD</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-lg",
    title: { en: "BS5 Grid Large", km: "ក្រឡាអេក្រង់កុំព្យូទ័រ LG" },
    content: {
      en: `# Bootstrap 5 Grid Large (>=992px)
The Large breakpoint targets standard laptop and desktop screens starting from **992px** and up.

### Large Grid Syntax
Add **\`.col-lg-*\`**:
\`\`\`html
<div class="row">
  <div class="col-lg-3">Takes 1/4 of the width on standard laptops (992px+).</div>
  <div class="col-lg-9">Takes 3/4 of the width on laptops.</div>
</div>
\`\`\``,
      km: `# ក្រឡាអេក្រង់កុំព្យូទ័រ LG (>=992px) ក្នុង Bootstrap 5
Breakpoint ប្រភេទ Large (LG) គឺផ្តោតលើទំហំអេក្រង់ចាប់ពី **៩៩២ ភីកសែល** ឡើងទៅ (ដូចជាអេក្រង់ Laptop ឬអេក្រង់កុំព្យូទ័រស្តង់ដារ)។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.col-lg-*\`**៖
\`\`\`html
<div class="row">
  <div class="col-lg-3">យកទំហំ ១/៤ (៣/១២ ក្រឡា) ចាប់ពីអេក្រង់ Laptop ឡើងទៅ</div>
  <div class="col-lg-9">យកទំហំ ៣/៤ (៩/១២ ក្រឡា) ចាប់ពីអេក្រង់ Laptop ឡើងទៅ</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Large Breakpoint (col-lg-*)</h4>
    
    <div class="row g-2">
      <div class="col-lg-3"><div class="p-3 bg-info text-dark rounded">1/4 space on LG</div></div>
      <div class="col-lg-6"><div class="p-3 bg-info text-dark rounded">1/2 space on LG</div></div>
      <div class="col-lg-3"><div class="p-3 bg-info text-dark rounded">1/4 space on LG</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-xl",
    title: { en: "BS5 Grid XLarge", km: "ក្រឡាអេក្រង់ធំ XL" },
    content: {
      en: `# Bootstrap 5 Grid Extra Large (>=1200px)
The Extra Large breakpoint targets large desktop monitors starting from **1200px** and up.

### Extra Large Grid Syntax
Add **\`.col-xl-*\`**:
\`\`\`html
<div class="row">
  <div class="col-xl-2">Takes 2/12 space starting at 1200px.</div>
  <div class="col-xl-10">Takes 10/12 space starting at 1200px.</div>
</div>
\`\`\``,
      km: `# ក្រឡាអេក្រង់កុំព្យូទ័រធំ XL (>=1200px) ក្នុង Bootstrap 5
Breakpoint ប្រភេទ Extra Large (XL) គឺផ្តោតលើអេក្រង់កុំព្យូទ័រលើតុទំហំធំ ចាប់ពី **១២០០ ភីកសែល** ឡើងទៅ។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.col-xl-*\`**៖
\`\`\`html
<div class="row">
  <div class="col-xl-2">យកទំហំ ២/១២ ក្រឡាចាប់ពី 1200px ឡើងទៅ</div>
  <div class="col-xl-10">យកទំហំ ១០/១២ ក្រឡាចាប់ពី 1200px ឡើងទៅ</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Extra Large Breakpoint (col-xl-*)</h4>
    
    <div class="row g-2">
      <div class="col-xl-2"><div class="p-3 bg-dark text-white rounded">2/12 space on XL</div></div>
      <div class="col-xl-8"><div class="p-3 bg-primary text-white rounded">8/12 space on XL</div></div>
      <div class="col-xl-2"><div class="p-3 bg-dark text-white rounded">2/12 space on XL</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-xxl",
    title: { en: "BS5 Grid XXL", km: "ក្រឡាអេក្រង់ធំបំផុត XXL" },
    content: {
      en: `# Bootstrap 5 Grid Extra Extra Large (>=1400px)
The Extra Extra Large breakpoint targets massive wide-screen desktop displays starting from **1400px** and up.

### XXL Grid Syntax
Add **\`.col-xxl-*\`**:
\`\`\`html
<div class="row">
  <div class="col-xxl-1">Takes 1/12 space starting at 1400px.</div>
  <div class="col-xxl-11">Takes 11/12 space starting at 1400px.</div>
</div>
\`\`\``,
      km: `# ក្រឡាអេក្រង់ធំបំផុត XXL (>=1400px) ក្នុង Bootstrap 5
Breakpoint ប្រភេទ Extra Extra Large (XXL) គឺផ្តោតលើទំហំអេក្រង់ធំខ្លាំងបំផុត (Ultra-wide displays) ចាប់ពី **១៤០០ ភីកសែល** ឡើងទៅ។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.col-xxl-*\`**៖
\`\`\`html
<div class="row">
  <div class="col-xxl-1">យកទំហំ ១/១២ ក្រឡាចាប់ពី 1400px ឡើងទៅ</div>
  <div class="col-xxl-11">យកទំហំ ១១/១២ ក្រឡាចាប់ពី 1400px ឡើងទៅ</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container text-center">
    <h4 class="mb-3">Extra Extra Large Breakpoint (col-xxl-*)</h4>
    
    <div class="row g-2">
      <div class="col-xxl-4"><div class="p-3 bg-success text-white rounded">XXL Column 1</div></div>
      <div class="col-xxl-4"><div class="p-3 bg-success text-white rounded">XXL Column 2</div></div>
      <div class="col-xxl-4"><div class="p-3 bg-success text-white rounded">XXL Column 3</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-examples",
    title: { en: "BS5 Grid Examples", km: "ឧទាហរណ៍អនុវត្ត Grids" },
    content: {
      en: `# Bootstrap 5 Grid Examples
Combine breakpoints dynamically inside the same HTML elements to create flawless, auto-shifting layouts that adapt perfectly to mobile, tablet, and desktop viewports simultaneously.

### Grid Composition Example
\`\`\`html
<div class="row">
  <div class="col-12 col-md-6 col-lg-3">Card Item (Full width on mobile, 50% on tablet, 25% on laptops)</div>
</div>
\`\`\``,
      km: `# ឧទាហរណ៍អនុវត្ត Grids ក្នុង Bootstrap 5
ការរួមផ្សំ Class Breakpoints ខុសៗគ្នា បង្កើតបានជាប្លង់គេហទំព័រដែលមានចលនាកែសម្រួលទំហំបានដោយខ្លួនឯងយ៉ាងឆ្លាតវៃទៅតាមគ្រប់អេក្រង់ទូរស័ព្ទ ថេបប្លេត និងកុំព្យូទ័រ។

### របៀបសរសេរគំរូ
\`\`\`html
<div class="row">
  <div class="col-12 col-md-6 col-lg-3">ប្រអប់មាតិកា (ពេញអេក្រង់លើទូរស័ព្ទ, ចែកជា២លើ Tablet, ចែកជា៤លើ Laptop)</div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container">
    <h4 class="mb-3 text-center">Complex Product Grid composition</h4>
    
    <div class="row g-3">
      <!-- Item Card 1 -->
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm p-3 h-100 bg-white">
          <div class="p-4 bg-primary text-white text-center rounded mb-2">Img</div>
          <h6 class="fw-bold mb-1">Product Alpha</h6>
          <p class="text-xs text-secondary mb-0">Responsive Card wrapping columns</p>
        </div>
      </div>

      <!-- Item Card 2 -->
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm p-3 h-100 bg-white">
          <div class="p-4 bg-success text-white text-center rounded mb-2">Img</div>
          <h6 class="fw-bold mb-1">Product Beta</h6>
          <p class="text-xs text-secondary mb-0">Responsive Card wrapping columns</p>
        </div>
      </div>

      <!-- Item Card 3 -->
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm p-3 h-100 bg-white">
          <div class="p-4 bg-warning text-dark text-center rounded mb-2">Img</div>
          <h6 class="fw-bold mb-1">Product Gamma</h6>
          <p class="text-xs text-secondary mb-0">Responsive Card wrapping columns</p>
        </div>
      </div>

      <!-- Item Card 4 -->
      <div class="col-12 col-sm-6 col-lg-12 col-xl-3">
        <div class="card shadow-sm p-3 h-100 bg-white">
          <div class="p-4 bg-danger text-white text-center rounded mb-2">Img</div>
          <h6 class="fw-bold mb-1">Product Delta</h6>
          <p class="text-xs text-secondary mb-0">Responsive Card wrapping columns</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  }
];
