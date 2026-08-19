import { Topic } from '../types';

export const htmlTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      {
        id: "html-home",
        title: { en: "HTML Home", km: "ទំព័រដើម HTML" },
        content: {
          en: `### HTML Tutorial Overview
Welcome to the HTML Course! HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and layout of a webpage.

In this full-curriculum course, you will learn HTML from scratch, from basic tags to advanced topics like Forms, Canvas, and Media.

> **Tip:** You can write your code in the right-side editor and click "Run Code" to immediately see the output. Feel free to modify the examples!`,
          km: `### ទិដ្ឋភាពទូទៅនៃមេរៀន HTML
ស្វាគមន៍មកកាន់វគ្គសិក្សា HTML! HTML (HyperText Markup Language) គឺជាភាសាសម្គាល់ស្ដង់ដារសម្រាប់បង្កើតគេហទំព័រ។ វាមានតួនាទីកំណត់រចនាសម្ព័ន្ធ និងប្លង់នៃគេហទំព័រ។

នៅក្នុងវគ្គសិក្សាពេញលេញនេះ អ្នកនឹងរៀនអំពី HTML ចាប់ពីចំណុចសូន្យ រហូតដល់ប្រធានបទកម្រិតខ្ពស់ដូចជា Forms, Canvas និង Media។

> **អនុសាសន៍:** អ្នកអាចសរសេរកូដនៅក្នុងប្រអប់កូដនៅខាងស្តាំ រួចចុច "ដំណើរការកូដ" ដើម្បីមើលលទ្ធផលភ្លាមៗ។ សាកល្បងកែប្រែកូដគំរូទាំងនោះបាន!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; text-align: center; padding: 40px; background: #fafafa; }
    h1 { color: #4f46e5; }
    p { color: #4b5563; }
  </style>
</head>
<body>
  <h1>សួស្តីពីកម្ពុជា! Hello from Cambodia!</h1>
  <p>សូមស្វាគមន៍មកកាន់វេទិការៀនកូដភាសាខ្មែរ-អង់គ្លេស។</p>
</body>
</html>`
      },
      {
        id: "html-intro",
        title: { en: "HTML Introduction", km: "សេចក្តីផ្តើមអំពី HTML" },
        content: {
          en: `### What is HTML?
HTML stands for HyperText Markup Language. It describes the structure of a Web page and consists of a series of elements. These elements tell the browser how to display the content.

HTML tags are element names surrounded by angle brackets like \`<html>\`, \`<head>\`, and \`<body>\`.

> **Note:** Browsers do not display the HTML tags, but use them to render the content of the page.`,
          km: `### តើ HTML ជាអ្វី?
HTML មកពីពាក្យថា HyperText Markup Language។ វាពណ៌នាអំពីក្បួនរចនាសម្ព័ន្ធនៃគេហទំព័រ និងបង្កើតឡើងដោយធាតុ (elements) ជាច្រើន។ ធាតុទាំងនេះប្រាប់ទៅកម្មវិធីរុករក (Browser) អំពីរបៀបបង្ហាញមាតិកា។

ថេក HTML គឺជាឈ្មោះធាតុដែលព័ទ្ធជុំវិញដោយសញ្ញាព្រួញដូចជា \`<html>\`, \`<head>\`, និង \`<body>\`។

> **សម្គាល់:** កម្មវិធីរុករកមិនបង្ហាញថេក HTML ទេ ប៉ុន្តែវាប្រើប្រាស់ថេកទាំងនោះដើម្បីបង្ហាញមាតិកាលើគេហទំព័រ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Introduction</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph. Try changing this text!</p>
</body>
</html>`
      },
      {
        id: "html-editors",
        title: { en: "HTML Editors", km: "កម្មវិធីសរសេរកូដ HTML" },
        content: {
          en: `### Writing HTML
To write HTML, you can use professional text editors like VS Code, Sublime Text, or Notepad. However, in this learning platform, we have integrated a full live editor!

You don't need to install anything. Just type in the code block and run.

> **Tip:** For web development, VS Code (Visual Studio Code) is highly recommended due to its rich extensions and autocomplete features.`,
          km: `### ការសរសេរកូដ HTML
ដើម្បីសរសេរ HTML អ្នកអាចប្រើកម្មវិធីសរសេរកូដអាជីពដូចជា VS Code, Sublime Text ឬ Notepad។ ទោះជាយ៉ាងណាក៏ដោយ នៅក្នុងវេទិការៀនសូត្រនេះ យើងបានបញ្ចូលនូវប្រអប់សរសេរកូដផ្ទាល់តែម្តង!

អ្នកមិនបាច់ដំឡើងអ្វីទាំងអស់។ គ្រាន់តែវាយកូដរួចចុច Run ជាការស្រេច។

> **អនុសាសន៍:** សម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ VS Code ត្រូវបានណែនាំយ៉ាងខ្លាំងដោយសារមានមុខងារជំនួយ និងការបំពេញពាក្យស្វ័យប្រវត្តល្អឥតខ្ចោះ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Testing HTML in our editor</h2>
  <p>No downloads required. Try typing inside the editor!</p>
</body>
</html>`
      },
      {
        id: "html-basic",
        title: { en: "HTML Basic", km: "មូលដ្ឋានគ្រឹះ HTML" },
        content: {
          en: `### Basic Document Structure
Every HTML document must start with a document type declaration: \`<!DOCTYPE html>\`.

The HTML document itself begins with \`<html>\` and ends with \`</html>\`. The visible part of the document is between \`<body>\` and \`</body>\`.

> **Note:** The \`<!DOCTYPE>\` declaration represents the document type, and helps browsers to display web pages correctly. It is not case-sensitive.`,
          km: `### រចនាសម្ព័ន្ធឯកសារមូលដ្ឋាន
រាល់ឯកសារ HTML ទាំងអស់ត្រូវតែចាប់ផ្តើមដោយការប្រកាសប្រភេទឯកសារ៖ \`<!DOCTYPE html>\`។

ឯកសារ HTML ខ្លួនឯងចាប់ផ្តើមដោយ \`<html>\` និងបញ្ចប់ដោយ \`</html>\`។ ផ្នែកដែលអាចមើលឃើញនៃឯកសារគឺស្ថិតនៅចន្លោះ \`<body>\` និឹង \`</body>\`។

> **សម្គាល់:** ការប្រកាស \`<!DOCTYPE>\` តំណាងឱ្យប្រភេទឯកសារ និងជួយកម្មវិធីរុករកបង្ហាញទំព័របានត្រឹមត្រូវ។ វាមិនប្រកាន់អក្សរតូចធំឡើយ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Basic Structure</title>
</head>
<body>
  <h1>Basic Document Heading</h1>
  <p>The content in body is visible on screen.</p>
</body>
</html>`
      },
      {
        id: "html-elements",
        title: { en: "HTML Elements", km: "ធាតុ HTML" },
        content: {
          en: `### HTML Elements
An HTML element is defined by a start tag, some content, and an end tag.

\`\`\`html
<tagname>Content goes here...</tagname>
\`\`\`
Examples:
- \`<h1>Heading</h1>\`
- \`<p>Paragraph</p>\`

Some elements, like \`<br>\`, have no content and no end tag. These are called empty elements.

> **Note:** Always remember to close your tags. Even if the page renders correctly, unclosed tags can cause layout errors.`,
          km: `### ធាតុ HTML (Elements)
ធាតុ HTML ត្រូវបានកំណត់ដោយថេកបើក មាតិកា និងថេកបិទ។

\`\`\`html
<tagname>មាតិកានៅទីនេះ...</tagname>
\`\`\`
ឧទាហរណ៍៖
- \`<h1>ចំណងជើង</h1>\`
- \`<p>កថាខណ្ឌ</p>\`

ធាតុខ្លះដូចជា \`<br>\` គ្មានមាតិកា និងគ្មានថេកបិទឡើយ។ គេហៅថាជា ធាតុទទេ (empty elements)។

> **សម្គាល់:** ត្រូវចងចាំជានិច្ចក្នុងការបិទថេករបស់អ្នក។ ទោះបីជាទំព័របង្ហាញត្រឹមត្រូវក៏ដោយ ថេកដែលមិនបានបិទអាចបង្កឱ្យមានបញ្ហាលេចកូដរញ៉េរញ៉ៃ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <p>This is a paragraph with <br> a line break element inside.</p>
</body>
</html>`
      },
      {
        id: "html-attributes",
        title: { en: "HTML Attributes", km: "លក្ខណៈសម្បត្តិ HTML" },
        content: {
          en: `### HTML Attributes
All HTML elements can have attributes. Attributes provide additional information about elements.

They are always specified in the start tag and usually come in name/value pairs like \`name="value"\`.
- The \`href\` attribute of \`<a>\` specifies the URL of the link.
- The \`src\` attribute of \`<img>\` specifies the path to the image to be displayed.

> **Tip:** It is recommended to always use lowercase attributes, and always wrap attribute values in double quotes.`,
          km: `### លក្ខណៈសម្បត្តិ HTML (Attributes)
រាល់ធាតុ HTML ទាំងអស់អាចមានលក្ខណៈសម្បត្តិ។ លក្ខណៈសម្បត្តិផ្តល់ព័ត៌មានបន្ថែមអំពីធាតុទាំងនោះ។

ពួកវាត្រូវបានបញ្ជាក់នៅក្នុងថេកបើកជានិច្ច ហើយជាធម្មតាមកជាគូ \`ឈ្មោះ=\"តម្លៃ\"\`។
- លក្ខណៈសម្បត្តិ \`href\` របស់ថេក \`<a>\` បញ្ជាក់ពីអាសយដ្ឋាន URL នៃលីង។
- លក្ខណៈសម្បត្តិ \`src\` របស់ថេក \`<img>\` បញ្ជាក់ពីផ្លូវនៃរូបភាពដែលត្រូវបង្ហាញ។

> **អនុសាសន៍:** គួរប្រើអក្សរតូចជានិច្ចសម្រាប់លក្ខណៈសម្បត្តិ និងព័ទ្ធជុំវិញតម្លៃលក្ខណៈសម្បត្តិដោយសញ្ញាសម្រង់ទ្វេ ("")។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Using Attributes</h2>
  <a href="https://www.google.com" target="_blank">Search on Google (New Tab)</a>
</body>
</html>`
      },
      {
        id: "html-headings",
        title: { en: "HTML Headings", km: "ចំណងជើង HTML" },
        content: {
          en: `### HTML Headings
HTML headings are defined with the \`<h1>\` to \`<h6>\` tags.

\`<h1>\` defines the most important heading (largest size). \`<h6>\` defines the least important heading (smallest size).

> **Note:** Search engines use headings to index the structure and content of your web pages. Don't use headings just to make text BIG or bold.`,
          km: `### ចំណងជើង HTML (Headings)
ចំណងជើង HTML ត្រូវបានកំណត់ដោយថេក \`<h1>\` ដល់ \`<h6>\`។

\`<h1>\` កំណត់ចំណងជើងសំខាន់បំផុត (ទំហំធំបំផុត)។ \`<h6>\` កំណត់ចំណងជើងដែលសំខាន់តិចបំផុត (ទំហំតូចបំផុត)។

> **សម្គាល់:** ម៉ាស៊ីនស្វែងរក (Search engines) ប្រើប្រាស់ចំណងជើងទាំងនេះដើម្បីបង្កើតលិបិក្រមនៃរចនាសម្ព័ន្ធ និងមាតិកាគេហទំព័ររបស់អ្នក។ កុំប្រើចំណងជើងគ្រាន់តែដើម្បីធ្វើឱ្យអក្សរធំ ឬដិតឡើយ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h1>Heading level 1</h1>
  <h2>Heading level 2</h2>
  <h3>Heading level 3</h3>
  <h4>Heading level 4</h4>
  <h5>Heading level 5</h5>
  <h6>Heading level 6</h6>
</body>
</html>`
      },
      {
        id: "html-paragraphs",
        title: { en: "HTML Paragraphs", km: "កថាខណ្ឌ HTML" },
        content: {
          en: `### HTML Paragraphs
The HTML \`<p>\` element defines a paragraph.

Browsers automatically add some white space (a margin) before and after each paragraph.

> **Note:** You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. HTML ignores multiple spaces and extra empty lines.`,
          km: `### កថាខណ្ឌ HTML (Paragraphs)
ធាតុ HTML \`<p>\` ត្រូវបានប្រើប្រាស់ដើម្បីកំណត់កថាខណ្ឌ។

កម្មវិធីរុករកបន្ថែមចន្លោះគម្លាត (margin) ដោយស្វ័យប្រវត្តទាំងមុន និងក្រោយកថាខណ្ឌនីមួយៗ។

> **សម្គាល់:** អ្នកមិនអាចប្រាកដទេថាកូដ HTML នឹងបង្ហាញដូចគ្នាគ្រប់អេក្រង់។ អេក្រង់ធំ ឬតូច និងការបង្រួមទំហំផ្ទាំងបង្ហាញនឹងផ្តល់លទ្ធផលខុសគ្នា។ កូដ HTML មិនអើពើនឹងការសរសេរដកឃ្លាច្រើនដង ឬការចុះបន្ទាត់ទទេច្រើនដងឡើយ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <p>This is a paragraph.</p>
  <p>This is another paragraph with   multiple      spaces    ignored by the browser.</p>
</body>
</html>`
      },
      {
        id: "html-styles",
        title: { en: "HTML Styles", km: "ស្ទីល HTML (Styles)" },
        content: {
          en: `### The HTML Style Attribute
The \`style\` attribute is used to add styling to an element, such as color, font, size, and more.

\`\`\`html
<tagname style="property:value;">
\`\`\`
Example properties:
- \`background-color\`
- \`color\`
- \`font-family\`
- \`font-size\`
- \`text-align\`

> **Tip:** While inline styles are useful for quick testing, it is better to manage styles using external CSS in production.`,
          km: `### លក្ខណៈសម្បត្តិ Style របស់ HTML
លក្ខណៈសម្បត្តិ \`style\` ត្រូវបានប្រើប្រាស់ដើម្បីបន្ថែមការតុបតែងទៅលើធាតុ HTML ដូចជា ពណ៌ ហ្វុនអក្សរ ទំហំ និងច្រើនទៀត។

\`\`\`html
<tagname style="property:value;">
\`\`\`
លក្ខណៈសម្បត្តិគំរូ៖
- \`background-color\` (ពណ៌ផ្ទៃក្រោយ)
- \`color\` (ពណ៌អក្សរ)
- \`font-family\` (ប្រភេទហ្វុន)
- \`font-size\` (ទំហំអក្សរ)
- \`text-align\` (តម្រឹមអក្សរ)

> **អនុសាសន៍:** ទោះបីជាការសរសេរ style ផ្ទាល់នៅលើថេកមានភាពងាយស្រួលសម្រាប់ការសាកល្បងរហ័សក៏ដោយ វាជាការល្អក្នុងការគ្រប់គ្រងការរចនាដោយប្រើប្រាស់ឯកសារ CSS ខាងក្រៅក្នុងគម្រោងពិត។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body style="background-color: #f3f4f6;">
  <h1 style="color: #4f46e5; font-family: sans-serif; text-align: center;">Styled Heading</h1>
  <p style="font-size: 16px; color: #374151;">This paragraph has custom font size and color.</p>
</body>
</html>`
      },
      {
        id: "html-formatting",
        title: { en: "HTML Formatting", km: "ទម្រង់អត្ថបទ HTML" },
        content: {
          en: `### Text Formatting Elements
HTML contains several elements for defining text with a special meaning.

Common formatting elements:
- \`<b>\` - Bold text
- \`<strong>\` - Important text (usually bold)
- \`<i>\` - Italic text
- \`<em>\` - Emphasized text (usually italic)
- \`<mark>\` - Marked/Highlighted text
- \`<small>\` - Smaller text
- \`<del>\` - Deleted/Strikethrough text
- \`<ins>\` - Inserted text (usually underlined)
- \`<sub>\` - Subscript text
- \`<sup>\` - Superscript text

> **Tip:** Use \`<strong>\` and \`<em>\` instead of \`<b>\` and \`<i>\` to convey meaning and importance to screen readers.`,
          km: `### ធាតុទម្រង់អត្ថបទ (Text Formatting)
HTML មានធាតុជាច្រើនសម្រាប់កំណត់អត្ថបទឱ្យមានអត្ថន័យពិសេស ឬការបង្ហាញប្លែកៗ។

ធាតុទម្រង់ទូទៅ៖
- \`<b>\` - អត្ថបទដិត (Bold)
- \`<strong>\` - អត្ថបទសំខាន់ (ជាទូទៅបង្ហាញដិត)
- \`<i>\` - អត្ថបទទ្រេត (Italic)
- \`<em>\` - អត្ថបទបញ្ជាក់ការសង្កត់ធ្ងន់ (ជាទូទៅបង្ហាញទ្រេត)
- \`<mark>\` - អត្ថបទបន្ទាត់ពណ៌ពីលើ (Highlighted)
- \`<small>\` - អត្ថបទតូចជាងធម្មតា
- \`<del>\` - អត្ថបទឆូតចំកណ្តាល (Deleted)
- \`<ins>\` - អត្ថបទគូសបន្ទាត់ពីក្រោម (Inserted)
- \`<sub>\` - អក្សរសរសេរក្រោមបន្ទាត់ (Subscript)
- \`<sup>\` - អក្សរសរសេរលើបន្ទាត់ (Superscript)

> **អនុសាសន៍:** គួរប្រើ \`<strong>\` និង \`<em>\` ជំនួសឱ្យ \`<b>\` និង \`<i>\` ដើម្បីផ្តល់អត្ថន័យ និងសារៈសំខាន់ដល់កម្មវិធីអានអេក្រង់ (Screen Readers)។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <p>This is standard text.</p>
  <p>This contains <strong>strong important text</strong>.</p>
  <p>This contains <mark>marked or highlighted</mark> parts.</p>
  <p>E = mc<sup>2</sup> (using superscript)</p>
</body>
</html>`
      },
      {
        id: "html-quotations",
        title: { en: "HTML Quotations", km: "សម្រង់សម្តី HTML" },
        content: {
          en: `### Quotation Elements
HTML provides multiple elements to format block quotations, short inline quotes, abbreviations, addresses, and citations.

Key quotation elements:
- \`<blockquote>\`: Defines a section that is quoted from another source. Browsers usually indent this.
- \`<q>\`: Defines a short inline quotation. Browsers insert quotation marks automatically.
- \`<abbr>\`: Defines an abbreviation or acronym (e.g. HTML). Hovering shows the full title defined in the \`title\` attribute.
- \`<address>\`: Defines contact information for the author/owner.

> **Note:** The \`<abbr>\` element is incredibly helpful for accessibility and SEO.`,
          km: `### ធាតុសម្រង់សម្តី (Quotations)
HTML ផ្តល់នូវធាតុជាច្រើនដើម្បីរៀបចំសម្រង់សម្តីវែង សម្រង់សម្តីខ្លី អក្សរកាត់ អាសយដ្ឋាន និងការដកស្រង់។

ធាតុសម្រង់គន្លឹះ៖
- \`<blockquote>\`: កំណត់ផ្នែកសម្រង់សម្តីវែងពីប្រភពផ្សេងទៀត។ កម្មវិធីរុករកច្រើនតែបន្ថែមគម្លាតចូលបន្ទាត់។
- \`<q>\`: កំណត់សម្រង់សម្តីខ្លីនៅក្នុងបន្ទាត់តែមួយ។ កម្មវិធីរុករកបន្ថែមសញ្ញាសម្រង់ដោយស្វ័យប្រវត្តិ។
- \`<abbr>\`: កំណត់អក្សរកាត់ (ឧ. HTML)។ ពេលដាក់ម៉ៅស៍ពីលើ វានឹងបង្ហាញពាក្យពេញដែលសរសេរក្នុងលក្ខណៈសម្បត្តិ \`title\`។
- \`<address>\`: កំណត់ព័ត៌មានទំនាក់ទំនងសម្រាប់អ្នកនិពន្ធ ឬម្ចាស់គេហទំព័រ។

> **សម្គាល់:** ធាតុ \`<abbr>\` មានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ការជួយដល់ភាពងាយស្រួល (Accessibility) និង SEO។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <p>The founder said: <q>Coding changes lives.</q></p>
  <blockquote cite="https://example.com">
    HTML is the base standard. Without it, the world wide web would not exist as we know it today.
  </blockquote>
  <p>We are learning <abbr title="HyperText Markup Language">HTML</abbr> today!</p>
</body>
</html>`
      },
      {
        id: "html-comments",
        title: { en: "HTML Comments", km: "កំណត់ចំណាំ HTML (Comments)" },
        content: {
          en: `### HTML Comments
HTML comments are not displayed in the browser, but they help document your HTML source code.

Syntax:
\`\`\`html
<!-- Write your comment here -->
\`\`\`

You can use comments to explain code sections, leave reminders, or temporarily disable sections of HTML code.

> **Note:** Notice there is an exclamation point (!) in the start tag, but not in the end tag.`,
          km: `### កំណត់ចំណាំ HTML (Comments)
កំណត់ចំណាំ HTML មិនត្រូវបានបង្ហាញនៅក្នុងកម្មវិធីរុករកទេ ប៉ុន្តែវាជួយអ្នកក្នុងការពន្យល់ និងកត់ចំណាំកូដប្រភព HTML របស់អ្នក។

ទម្រង់សរសេរ៖
\`\`\`html
<!-- សរសេរកំណត់ចំណាំទីនេះ -->
\`\`\`

អ្នកអាចប្រើវាដើម្បីពន្យល់ពីផ្នែកផ្សេងៗនៃកូដ ទុកការរំលឹក ឬបិទកូដ HTML មួយចំនួនជាបណ្តោះអាសន្ន។

> **សម្គាល់:** សូមកត់សម្គាល់ថាមានសញ្ញាឧទាន (!) នៅក្នុងថេកចាប់ផ្តើម ប៉ុន្តែគ្មាននៅក្នុងថេកបញ្ចប់ឡើយ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <!-- This is a comment that won't be displayed on screen -->
  <h2>Check the source code!</h2>
  <p>The comment above is invisible to the user.</p>
  <!-- <p>This paragraph is commented out and will not render!</p> -->
</body>
</html>`
      },
      {
        id: "html-colors",
        title: { en: "HTML Colors", km: "ពណ៌ HTML" },
        content: {
          en: `### Colors in HTML
HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

Color names:
- Red, Tomato, Orange, DodgerBlue, MediumSeaGreen, Violet, etc.

HEX Colors (Hexadecimal):
- Synthesized as \`#RRGGBB\`. E.g., \`#ff5733\`.

RGB (Red, Green, Blue):
- E.g., \`rgb(255, 99, 71)\`.

> **Tip:** Hex values are the most widely used format in modern web development to represent exact design colors.`,
          km: `### ពណ៌នៅក្នុង HTML
ពណ៌ HTML ត្រូវបានកំណត់ដោយការប្រើប្រាស់ឈ្មោះពណ៌ដែលបានកំណត់ជាស្រេច ឬតម្លៃ RGB, HEX, HSL, RGBA, HSLA។

ឈ្មោះពណ៌៖
- Red, Tomato, Orange, DodgerBlue, MediumSeaGreen, Violet ជាដើម។

ពណ៌ HEX (Hexadecimal)៖
- សរសេរជាទម្រង់ \`#RRGGBB\`។ ឧទាហរណ៍៖ \`#ff5733\`។

RGB (Red, Green, Blue)៖
- ឧទាហរណ៍៖ \`rgb(255, 99, 71)\`។

> **អនុសាសន៍:** តម្លៃ Hex គឺជាទម្រង់ដែលត្រូវបានគេប្រើប្រាស់ទូលំទូលាយបំផុតនៅក្នុងការអភិវឌ្ឍន៍គេហទំព័រទំនើប ដើម្បីតំណាងឱ្យពណ៌រចនាពិតប្រាកដ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2 style="background-color: Tomato; color: white; padding: 10px;">Tomato background</h2>
  <h2 style="background-color: #3b82f6; color: white; padding: 10px;">DodgerBlue Hex background</h2>
  <p style="color: rgb(34, 197, 94);">Text in green using RGB!</p>
</body>
</html>`
      },
      {
        id: "html-css",
        title: { en: "HTML CSS", km: "HTML ជាមួយ CSS" },
        content: {
          en: `### CSS Integration
CSS (Cascading Style Sheets) is used to style and lay out web pages. You can add CSS to HTML in three ways:

1. **Inline** - using the \`style\` attribute inside HTML elements.
2. **Internal** - using a \`<style>\` element in the \`<head>\` section.
3. **External** - using a \`<link>\` element to link to an external CSS file.

> **Tip:** External CSS is the cleanest and most scalable way as it separates content (HTML) from styling (CSS).`,
          km: `### ការភ្ជាប់ជាមួយ CSS
CSS (Cascading Style Sheets) ត្រូវបានប្រើដើម្បីរចនា និងរៀបចំប្លង់គេហទំព័រ។ អ្នកអាចបន្ថែម CSS ទៅកាន់ HTML តាម៣វិធី៖

១. **Inline** - ប្រើប្រាស់លក្ខណៈសម្បត្តិ \`style\` នៅខាងក្នុងធាតុ HTML។
២. **Internal** - ប្រើប្រាស់ធាតុ \`<style>\` នៅក្នុងផ្នែក \`<head>\`។
៣. **External** - ប្រើប្រាស់ធាតុ \`<link>\` ដើម្បីភ្ជាប់ទៅកាន់ឯកសារ CSS ខាងក្រៅ។

> **អនុសាសន៍:** CSS ខាងក្រៅ (External CSS) គឺជាវិធីដែលស្អាត និងងាយស្រួលពង្រីកបំផុតព្រោះវាបំបែករវាងមាតិកា (HTML) និងការតុបតែង (CSS)។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: #f8fafc; font-family: 'Segoe UI', sans-serif; padding: 30px; }
    .title { color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; }
  </style>
</head>
<body>
  <h2 class="title">Styled with Internal CSS</h2>
  <p>The clean slate layout and colors are set inside the head tag.</p>
</body>
</html>`
      },
      {
        id: "html-links",
        title: { en: "HTML Links", km: "តំណភ្ជាប់ HTML (Links)" },
        content: {
          en: `### HTML Hyperlinks
HTML links are hyperlinks. You can click on a link to jump to another document or section.

The \`<a>\` (anchor) tag defines a link. The most important attribute is the \`href\` attribute, which indicates the link's destination.

\`\`\`html
<a href="url">Link text</a>
\`\`\`

By default, links will appear as underlined and purple/blue in browsers, but can be fully styled with CSS.

> **Note:** The \`target\` attribute specifies where to open the linked document. \`target="_blank"\` opens the link in a new window or tab.`,
          km: `### តំណភ្ជាប់អ៊ីនធឺណិត (Hyperlinks)
តំណភ្ជាប់ HTML គឺជាតំណភ្ជាប់។ អ្នកអាចចុចលើលីងដើម្បីលោតទៅកាន់ឯកសារ ឬផ្នែកផ្សេងទៀត។

ថេក \`<a>\` (anchor) កំណត់តំណភ្ជាប់។ លក្ខណៈសម្បត្តិដ៏សំខាន់បំផុតគឺ \`href\` ដែលបញ្ជាក់ពីគោលដៅរបស់លីង។

\`\`\`html
<a href="url">អត្ថបទតំណភ្ជាប់</a>
\`\`\`

ជាធម្មតា លីងនឹងបង្ហាញជាអក្សរគូសបន្ទាត់ក្រោមពណ៌ស្វាយ/ខៀវ តែអ្នកអាចរចនាវាបានតាមចិត្តជាមួយ CSS។

> **សម្គាល់:** លក្ខណៈសម្បត្តិ \`target\` បញ្ជាក់ពីកន្លែងដែលត្រូវបើកឯកសារ។ \`target=\"_blank\"\` នឹងបើកតំណភ្ជាប់ក្នុងផ្ទាំង ឬបង្អួចថ្មី។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Learning Links</h2>
  <p><a href="https://www.wikipedia.org" target="_blank">Open Wikipedia in a New Tab</a></p>
  <p><a href="https://www.google.com">Open Google in the Same Frame</a></p>
</body>
</html>`
      },
      {
        id: "html-images",
        title: { en: "HTML Images", km: "រូបភាព HTML" },
        content: {
          en: `### HTML Images
In HTML, images are defined with the \`<img>\` tag.

The \`<img>\` tag is empty, it contains attributes only, and does not have a closing tag.
- \`src\` specifies the path to the image.
- \`alt\` provides alternate text if the image cannot load.
- \`width\` and \`height\` specify the image size.

> **Note:** Always specify the \`alt\` attribute for web accessibility and screen readers.`,
          km: `### រូបភាព HTML (Images)
នៅក្នុង HTML រូបភាពត្រូវបានកំណត់ដោយថេក \`<img>\`។

ថេក \`<img>\` គឺជាថេកទទេ វាមានតែលក្ខណៈសម្បត្តិប៉ុណ្ណោះ និងគ្មានថេកបិទឡើយ។
- \`src\` បញ្ជាក់ប្រភព ឬផ្លូវនៃរូបភាព។
- \`alt\` ផ្តល់អត្ថបទជំនួសប្រសិនបើរូបភាពមិនអាចដំណើរការបាន។
- \`width\` និង \`height\` កំណត់ទំហំរូបភាព។

> **សម្គាល់:** ត្រូវបញ្ជាក់លក្ខណៈសម្បត្តិ \`alt\` ជានិច្ចដើម្បីជួយដល់ភាពងាយស្រួលនៃគេហទំព័រ (Accessibility) និងកម្មវិធីអានអេក្រង់។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>My Dog Picture</h2>
  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200" 
       alt="Happy brown dog" 
       width="200" 
       style="border-radius: 12px; border: 1px solid #ddd;" />
</body>
</html>`
      },
      {
        id: "html-project",
        title: { en: "HTML Project", km: "គម្រោងអនុវត្ត HTML" },
        content: {
          en: `### HTML Hands-On Mini Project
Let's combine what we've learned so far! 

We will build a beautifully styled profile card for a fictional student developer from Cambodia. It should contain:
- A heading with their name
- An image placeholder
- Paragraphs with a nice background style
- A links section

> **Tip:** Try running the starter code. It is structured, but has basic styles. Try updating the values to create your own card!`,
          km: `### គម្រោងអនុវត្តផ្ទាល់ HTML
សូមរួមបញ្ចូលគ្នានូវអ្វីដែលយើងបានរៀនកន្លងមក!

យើងនឹងបង្កើតប្រអប់ព័ត៌មាន (Profile Card) ដ៏ស្រស់ស្អាតសម្រាប់អ្នកសរសេរកូដគំរូម្នាក់នៅកម្ពុជា។ វាគួរតែរួមមាន៖
- ចំណងជើងជាមួយឈ្មោះរបស់ពួកគេ
- រូបភាពតំណាង
- កថាខណ្ឌដែលមានស្ទីលផ្ទៃក្រោយស្អាត
- ផ្នែកតំណភ្ជាប់

> **អនុសាសន៍:** សាកល្បងដំណើរការកូដដំបូងនេះ។ វាត្រូវបានរៀបចំឡើងយ៉ាងស្អាតរួចជាស្រេច។ សាកល្បងកែប្រែព័ត៌មានទាំងនោះដើម្បីបង្កើតជាប្រអប់របស់អ្នកផ្ទាល់!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #eef2f6; padding: 30px; display: flex; justify-content: center; }
    .card { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); max-width: 320px; text-align: center; }
    img { border-radius: 50%; width: 120px; height: 120px; object-fit: cover; }
    h2 { color: #1e293b; margin: 12px 0 4px 0; }
    p { color: #64748b; font-size: 14px; line-height: 1.4; margin-bottom: 16px; }
    .btn { display: inline-block; background: #4f46e5; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Avatar">
    <h2>សុខ ពិសិដ្ឋ (Piset SOK)</h2>
    <p>សិស្សរៀនកូដឆ្នាំទី១ នៅភ្នំពេញ។ ស្រឡាញ់ការបង្កើតគេហទំព័រ និងការរចនា UX/UI។</p>
    <a href="https://github.com" class="btn" target="_blank">ចូលមើល GitHub</a>
  </div>
</body>
</html>`
      },
      {
        id: "html-favicon",
        title: { en: "HTML Favicon", km: "រូបតំណាងគេហទំព័រ (Favicon)" },
        content: {
          en: `### HTML Favicons
A favicon is a small image displayed next to the page title in the browser tab.

To add a favicon, insert a \`<link>\` tag inside the \`<head>\` element:
\`\`\`html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
\`\`\`

> **Note:** The favicon is an essential branding asset for any professional website.`,
          km: `### រូបតំណាង Favicon
Favicon គឺជារូបភាពតូចមួយដែលត្រូវបានបង្ហាញនៅក្បែរចំណងជើងគេហទំព័រនៅលើផ្ទាំងរបស់កម្មវិធីរុករក (Browser tab)។

ដើម្បីបន្ថែម favicon សូមបញ្ចូលថេក \`<link>\` នៅខាងក្នុងផ្នែក \`<head>\`៖
\`\`\`html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
\`\`\`

> **សម្គាល់:** Favicon គឺជាទ្រព្យសកម្មម៉ាកយីហោដ៏សំខាន់សម្រាប់គេហទំព័រអាជីពគ្រប់ប្រភេទ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Testing Favicon Code</title>
  <!-- Link for favicon works inside browser head -->
  <link rel="icon" type="image/x-icon" href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=32">
</head>
<body>
  <p>Favicon code is declared in the head element of the HTML document.</p>
</body>
</html>`
      },
      {
        id: "html-title",
        title: { en: "HTML Page Title", km: "ចំណងជើងទំព័រ HTML (Title)" },
        content: {
          en: `### The HTML Page Title
The \`<title>\` element defines the title of the document.

The title is displayed in the browser tab and is extremely important for Search Engine Optimization (SEO).

> **Note:** Each page must have a unique, descriptive title that clearly identifies its purpose.`,
          km: `### ចំណងជើងគេហទំព័រ (Title)
ធាតុ \`<title>\` កំណត់ចំណងជើងរបស់ឯកសារ ឬគេហទំព័រ។

ចំណងជើងនេះត្រូវបានបង្ហាញនៅក្នុងផ្ទាំងរបស់កម្មវិធីរុករក និងមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការបង្កើនប្រសិទ្ធភាពស្វែងរក (SEO)។

> **សម្គាល់:** រាល់ទំព័រនីមួយៗគួរតែមានចំណងជើងប្លែកៗពីគ្នា និងមានន័យច្បាស់លាស់ដើម្បីងាយស្រួលសម្គាល់។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>នេះជាចំណងជើងទំព័ររបស់ខ្ញុំ!</title>
</head>
<body>
  <p>Look at the title tag inside the &lt;head&gt; element!</p>
</body>
</html>`
      },
      {
        id: "html-tables",
        title: { en: "HTML Tables", km: "តារាង HTML (Tables)" },
        content: {
          en: `### HTML Tables
HTML tables allow web developers to arrange data into rows and columns.

Key elements:
- \`<table>\`: The main container.
- \`<tr>\`: Table row.
- \`<th>\`: Table header (bold and centered by default).
- \`<td>\`: Table cell/data.

> **Note:** Borders can be styled using CSS border attributes.`,
          km: `### តារាង HTML (Tables)
តារាង HTML អនុញ្ញាតឱ្យអ្នកបង្កើតគេហទំព័ររៀបចំទិន្នន័យជាជួរដេក និងជួរឈរ។

ធាតុសំខាន់ៗ៖
- \`<table>\`: ប្រអប់ផ្ទុកតារាងទាំងមូល។
- \`<tr>\`: ជួរដេកតារាង (Table row)។
- \`<th>\`: ក្បាលតារាង (Table header - អក្សរដិត និងនៅកណ្តាល)។
- \`<td>\`: ទិន្នន័យក្រឡាតារាង (Table data)។

> **សម្គាល់:** ស៊ុមជុំវិញតារាងអាចត្រូវបានតុបតែងដោយប្រើប្រាស់ CSS border។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }
    th { background-color: #f1f5f9; color: #1e293b; }
    tr:nth-child(even) { background-color: #f8fafc; }
  </style>
</head>
<body>
  <h2> Cambodian Student Scores</h2>
  <table>
    <tr>
      <th>ឈ្មោះ (Name)</th>
      <th>មុខវិជ្ជា (Subject)</th>
      <th>ពិន្ទុ (Score)</th>
    </tr>
    <tr>
      <td>សុខា</td>
      <td>HTML Basics</td>
      <td>A</td>
    </tr>
    <tr>
      <td>ពិសិដ្ឋ</td>
      <td>CSS Layout</td>
      <td>B+</td>
    </tr>
  </table>
</body>
</html>`
      },
      {
        id: "html-lists",
        title: { en: "HTML Lists", km: "បញ្ជី HTML (Lists)" },
        content: {
          en: `### HTML Lists
HTML lists allow developers to group a set of related items.

Types of lists:
1. **Unordered List (\`<ul>\`)**: Items marked with bullets.
2. **Ordered List (\`<ol>\`)**: Items marked with numbers or letters.

Each item inside a list is defined with the \`<li>\` (list item) tag.

> **Tip:** You can change bullet or number styles using CSS \`list-style-type\`.`,
          km: `### បញ្ជី HTML (Lists)
បញ្ជី HTML អនុញ្ញាតឱ្យយើងប្រមូលផ្តុំ ឬចងក្រងក្រុមនៃធាតុដែលទាក់ទងគ្នា។

ប្រភេទនៃបញ្ជី៖
១. **Unordered List (\`<ul>\`)**: បញ្ជីគ្មានលំដាប់លំដោយ (សម្គាល់ដោយចំណុចមូល)។
២. **Ordered List (\`<ol>\`)**: បញ្ជីមានលំដាប់លំដោយ (សម្គាល់ដោយលេខ ឬអក្សរ)។

រាល់ធាតុបញ្ជីនីមួយៗត្រូវបានកំណត់ដោយថេក \`<li>\` (list item)។

> **អនុសាសន៍:** អ្នកអាចប្តូរម៉ូដចំណុចមូល ឬលេខដោយប្រើប្រាស់ CSS \`list-style-type\`។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>មុខវិជ្ជារៀនកូដ (Coding Courses)</h3>
  <ul>
    <li>HTML5 Foundations</li>
    <li>CSS3 Responsive Layouts</li>
    <li>JavaScript Interactivity</li>
  </ul>

  <h3>ជំហានការងារ (Steps to run)</h3>
  <ol>
    <li>សរសេរកូដ (Write code)</li>
    <li>ចុចប៊ូតុង Run (Press Run)</li>
    <li>មើលលទ្ធផល (See Output)</li>
  </ol>
</body>
</html>`
      },
      {
        id: "html-block-inline",
        title: { en: "HTML Block & Inline", km: "ធាតុ Block & Inline" },
        content: {
          en: `### Block vs. Inline Elements
Every HTML element has a default display value, depending on what type of element it is.

- **Block-level**: Always starts on a new line and takes up the full width available (e.g. \`<div>\`, \`<p>\`, \`<h1>\`, \`<form>\`).
- **Inline**: Does not start on a new line and only takes up as much width as necessary (e.g. \`<span>\`, \`<a>\`, \`<strong>\`, \`<img>\`).

> **Note:** Understanding block and inline elements is crucial for CSS layout building.`,
          km: `### ធាតុ Block និង Inline
រាល់ធាតុ HTML ទាំងអស់សុទ្ធតែមានតម្លៃបង្ហាញ (display value) តាមលំនាំដើមរបស់វា។

- **Block-level**: ចាប់ផ្តើមនៅលើបន្ទាត់ថ្មីជានិច្ច និងយកទំហំទទឹងពេញអេក្រង់ដែលមាន (ឧ. \`<div>\`, \`<p>\`, \`<h1>\`, \`<form>\`)។
- **Inline**: មិនចាប់ផ្តើមនៅលើបន្ទាត់ថ្មីទេ ហើយយកទំហំទទឹងត្រឹមតែប៉ុណ្ណាដែលវាត្រូវការប៉ុណ្ណោះ (ឧ. \`<span>\`, \`<a>\`, \`<strong>\`, \`<img>\`)។

> **សម្គាល់:** ការយល់ដឹងអំពីធាតុ block និង inline គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការរៀបចំរចនាសម្ព័ន្ធប្លង់គេហទំព័រជាមួយ CSS។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <!-- Block elements have red borders, Inline have blue -->
  <div style="border: 2px solid red; margin-bottom: 10px; padding: 5px;">
    This is a Block element (div). It takes full width.
  </div>
  
  <span style="border: 2px solid blue; padding: 5px;">Inline (span)</span>
  <span style="border: 2px solid blue; padding: 5px;">Another Inline</span>
</body>
</html>`
      },
      {
        id: "html-div",
        title: { en: "HTML Div", km: "ធាតុ Div HTML" },
        content: {
          en: `### The HTML Div Element
The \`<div>\` (division) element is a generic block-level container used to group HTML elements for styling or layout.

It has no required attributes by default, but is commonly styled with \`class\` or \`id\`.

> **Tip:** Think of a \`<div>\` as a clean box that lets you bundle content together and style them with CSS at once.`,
          km: `### ធាតុ Div នៅក្នុង HTML
ធាតុ \`<div>\` (division) គឺជាប្រអប់ផ្ទុកកម្រិត block ទូទៅដែលប្រើសម្រាប់ប្រមូលផ្តុំក្រុមធាតុ HTML ដើម្បីងាយស្រួលរចនា ឬរៀបប្លង់។

វាមិនមានលក្ខណៈសម្បត្តិលំនាំដើមណាមួយដែលចាំបាច់ឡើយ ប៉ុន្តែត្រូវបានប្រើប្រាស់ជាទូទៅជាមួយ \`class\` ឬ \`id\`។

> **អនុសាសន៍:** គិតថា \`<div>\` ដូចជាប្រអប់ទទេស្អាតមួយដែលអនុញ្ញាតឱ្យអ្នកប្រមូលផ្តុំមាតិការួមគ្នា និងតុបតែងពួកវាជាមួយ CSS ក្នុងពេលតែមួយបាន។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
    <h3 style="margin-top:0; color:#4f46e5;">Grouped inside a Div</h3>
    <p style="margin-bottom:0; color:#334155;">All these elements reside within a single light gray div card container.</p>
  </div>
</body>
</html>`
      },
      {
        id: "html-classes",
        title: { en: "HTML Classes", km: "លក្ខណៈសម្បត្តិ Classes" },
        content: {
          en: `### The HTML Class Attribute
The \`class\` attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.

The class attribute is mainly used to point to a class name in a style sheet to apply CSS.

> **Tip:** In CSS, you select a class by using a period \`.\` followed by the class name (e.g. \`.my-class\`).`,
          km: `### លក្ខណៈសម្បត្តិ Class របស់ HTML
លក្ខណៈសម្បត្តិ \`class\` ត្រូវបានប្រើដើម្បីកំណត់ថ្នាក់ (class) សម្រាប់ធាតុ HTML។ ធាតុ HTML ច្រើនអាចប្រើប្រាស់ class រួមគ្នាតែមួយបាន។

វាត្រូវបានប្រើប្រាស់ចម្បងដើម្បីចង្អុលទៅឈ្មោះ class នៅក្នុង CSS stylesheet ដើម្បីតុបតែងកូដ។

> **អនុសាសន៍:** នៅក្នុង CSS អ្នកអាចជ្រើសរើស class ដោយប្រើសញ្ញាចុច \`.\` តាមពីក្រោយដោយឈ្មោះ class (ឧ. \`.my-class\`)។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Styling elements sharing the same class */
    .highlight-card {
      background-color: #fef08a;
      border-left: 5px solid #eab308;
      padding: 15px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="highlight-card">This element uses class highlight-card.</div>
  <div class="highlight-card">This also uses class highlight-card, maintaining consistent styling.</div>
</body>
</html>`
      },
      {
        id: "html-id",
        title: { en: "HTML Id", km: "លក្ខណៈសម្បត្តិ Id HTML" },
        content: {
          en: `### The HTML ID Attribute
The \`id\` attribute specifies a unique id for an HTML element. The value of the \`id\` attribute must be unique within the HTML document.

It is used to target a specific element in CSS (using \`#\`) or JavaScript.

> **Note:** An element can only have one unique id, and a specific id can only be used once per page!`,
          km: `### លក្ខណៈសម្បត្តិ ID របស់ HTML
លក្ខណៈសម្បត្តិ \`id\` បញ្ជាក់អត្តសញ្ញាណប្លែក និងទោល (unique) សម្រាប់ធាតុ HTML មួយ។ តម្លៃនៃ \`id\` មិនត្រូវជាន់គ្នាឡើយនៅក្នុងឯកសារ HTML តែមួយ។

វាត្រូវបានប្រើដើម្បីចង្អុលចំធាតុជាក់លាក់ណាមួយនៅក្នុង CSS (ប្រើសញ្ញា \`#\`) ឬ JavaScript។

> **សម្គាល់:** ធាតុមួយអាចមាន id ទោលតែមួយគត់ ហើយ id ជាក់លាក់មួយអាចប្រើបានតែម្តងគត់ក្នុងមួយទំព័រ!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    #header-box {
      background: #1e293b;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div id="header-box">Unique Dark Header Box</div>
</body>
</html>`
      },
      {
        id: "html-buttons",
        title: { en: "HTML Buttons", km: "ប៊ូតុង HTML (Buttons)" },
        content: {
          en: `### HTML Buttons
The HTML \`<button>\` tag defines a clickable button.

Inside the button tag, you can put text or elements (like images or bold tags).

> **Tip:** You can connect actions to buttons using the JavaScript \`onclick\` attribute to trigger interactive functions.`,
          km: `### ប៊ូតុង HTML (Buttons)
ថេក \`<button>\` របស់ HTML កំណត់ប៊ូតុងដែលអាចចុចបាន។

នៅខាងក្នុងថេកប៊ូតុង អ្នកអាចដាក់ជាអត្ថបទ ឬធាតុផ្សេងទៀត (ដូចជារូបភាព ឬថេកអក្សរដិត)។

> **អនុសាសន៍:** អ្នកអាចភ្ជាប់សកម្មភាពទៅកាន់ប៊ូតុងដោយប្រើប្រាស់លក្ខណៈសម្បត្តិ JavaScript \`onclick\` ដើម្បីដំណើរការមុខងារអន្តរកម្មផ្សេងៗ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Clickable Button</h2>
  <button onclick="alert('សួស្តីពីប៊ូតុង! Hello from button!')" 
          style="background-color: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer;">
    Click Me!
  </button>
</body>
</html>`
      },
      {
        id: "html-iframes",
        title: { en: "HTML Iframes", km: "ធាតុ Iframes HTML" },
        content: {
          en: `### HTML Iframes
An HTML iframe is used to display a web page within a web page.

Syntax:
\`\`\`html
<iframe src="url" title="description"></iframe>
\`\`\`

The \`src\` attribute points to the URL of the external page.

> **Note:** Always include a \`title\` attribute for screen readers to explain what content the iframe contains.`,
          km: `### ធាតុ Iframes របស់ HTML
Iframe របស់ HTML ត្រូវបានប្រើប្រាស់ដើម្បីបង្ហាញគេហទំព័រមួយទៀតនៅខាងក្នុងគេហទំព័របច្ចុប្បន្ន។

ទម្រង់សរសេរ៖
\`\`\`html
<iframe src="url" title="ការពិពណ៌នា"></iframe>
\`\`\`

លក្ខណៈសម្បត្តិ \`src\` ចង្អុលទៅកាន់អាសយដ្ឋាន URL នៃទំព័រខាងក្រៅ។

> **សម្គាល់:** ត្រូវបញ្ចូលលក្ខណៈសម្បត្តិ \`title\` ជានិច្ច ដើម្បីឱ្យកម្មវិធីអានអេក្រង់អាចពន្យល់ពីមាតិកាដែលមាននៅក្នុង iframe។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedding Pages using Iframe</h2>
  <iframe src="https://images.unsplash.com" 
          title="Unsplash Embed" 
          width="100%" 
          height="200" 
          style="border: 2px dashed #3b82f6; border-radius: 8px;">
  </iframe>
</body>
</html>`
      },
      {
        id: "html-js",
        title: { en: "HTML JavaScript", km: "HTML ជាមួយ JavaScript" },
        content: {
          en: `### Injecting JavaScript
JavaScript makes HTML pages more dynamic and interactive.

The \`<script>\` tag is used to define a client-side script (JavaScript).

Examples:
- Changing HTML content: \`document.getElementById("demo").innerHTML = "Hello";\`
- Changing styles: \`document.getElementById("demo").style.color = "red";\`

> **Note:** Script tags can be placed in the \`<head>\` or at the bottom of the \`<body>\`.`,
          km: `### ការប្រើប្រាស់ JavaScript
JavaScript ធ្វើឱ្យគេហទំព័រ HTML មានភាពរស់រវើក និងមានអន្តរកម្ម។

ថេក \`<script>\` ត្រូវបានប្រើដើម្បីកំណត់កូដស្គ្រីបฝั่งម៉ាស៊ីនភ្ញៀវ (JavaScript)។

ឧទាហរណ៍៖
- ប្តូរមាតិកា HTML៖ \`document.getElementById("demo").innerHTML = "សួស្តី";\`
- ប្តូរការរចនា៖ \`document.getElementById("demo").style.color = "red";\`

> **សម្គាល់:** ថេក Script អាចត្រូវបានដាក់នៅក្នុងផ្នែក \`<head>\` ឬនៅផ្នែកខាងក្រោមនៃ \`<body>\`។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Interactivity</h2>
  <p id="demo">This text will change.</p>
  <button onclick="changeText()">Change Now</button>

  <script>
    function changeText() {
      document.getElementById("demo").innerHTML = "អត្ថបទត្រូវបានកែប្រែដោយជោគជ័យ! Success!";
      document.getElementById("demo").style.color = "#10b981";
    }
  </script>
</body>
</html>`
      },
      {
        id: "html-filepaths",
        title: { en: "HTML File Paths", km: "ផ្លូវតំណភ្ជាប់ឯកសារ (File Paths)" },
        content: {
          en: `### HTML File Paths
A file path describes the location of a file in a web site's folder structure.

Path types:
- **Absolute File Path**: Points to a full URL (e.g., \`https://example.com/logo.png\`).
- **Relative File Path**: Points to a file relative to the current page (e.g., \`images/logo.png\`, \`../logo.png\`).

> **Note:** Using relative file paths is best practice in web development because they don't break when you change domain names.`,
          km: `### ផ្លូវឯកសារ HTML (File Paths)
ផ្លូវឯកសារពណ៌នាអំពីទីតាំងរបស់ឯកសារនៅក្នុងរចនាសម្ព័ន្ធថត (folder structure) នៃគេហទំព័រ។

ប្រភេទផ្លូវ៖
- **Absolute File Path**: ចង្អុលទៅកាន់ URL ពេញលេញ (ឧ. \`https://example.com/logo.png\`)។
- **Relative File Path**: ចង្អុលទៅកាន់ឯកសារធៀបនឹងទំព័របច្ចុប្បន្ន (ឧ. \`images/logo.png\`, \`../logo.png\`)។

> **សម្គាល់:** ការប្រើប្រាស់ផ្លូវឯកសារធៀប (Relative) គឺជាការអនុវត្តដ៏ល្អបំផុតព្រោះវាមិនខូចនៅពេលប្តូរឈ្មោះដែន (Domain)។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Testing Path Render</h2>
  <!-- Absolute Path link -->
  <img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=100" 
       alt="Small stones" 
       width="100">
</body>
</html>`
      },
      {
        id: "html-head",
        title: { en: "HTML Head", km: "ធាតុ Head របស់ HTML" },
        content: {
          en: `### The HTML Head Element
The \`<head>\` element is a container for metadata (data about data) and is placed between the \`<html>\` tag and the \`<body>\` tag.

HTML metadata is data about the HTML document. Metadata is not displayed.

Common tags inside \`<head>\`:
- \`<title>\`
- \`<style>\`
- \`<meta>\` (for character set, viewport, descriptions)
- \`<link>\`
- \`<script>\`

> **Note:** The metadata helps browsers display pages correctly and helps search engines understand page details.`,
          km: `### ធាតុ Head របស់ HTML
ធាតុ \`<head>\` គឺជាធុងផ្ទុកមេតាដាតា (ទិន្នន័យអំពីទិន្នន័យ) ហើយត្រូវបានដាក់នៅចន្លោះថេក \`<html>\` និងថេក \`<body>\`។

មេតាដាតា (Metadata) គឺជាព័ត៌មានអំពីឯកសារ HTML ដែលមិនត្រូវបានបង្ហាញផ្ទាល់លើទំព័រឡើយ។

ថេកទូទៅនៅក្នុង \`<head>\`៖
- \`<title>\`
- \`<style>\`
- \`<meta>\` (សម្រាប់ character set, viewport, descriptions)
- \`<link>\`
- \`<script>\`

> **សម្គាល់:** មេតាដាតាជួយកម្មវិធីរុករកបង្ហាញទំព័របានត្រឹមត្រូវ និងជួយម៉ាស៊ីនស្វែងរកយល់ពីមាតិកា។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Head Element Practice</title>
</head>
<body>
  <p>All meta details are defined in the Head element behind the scenes.</p>
</body>
</html>`
      },
      {
        id: "html-layout",
        title: { en: "HTML Layout", km: "ប្លង់ទម្រង់ HTML (Layout)" },
        content: {
          en: `### HTML Layout Elements
Websites often display content in multiple columns or grids. HTML has several semantic elements that define the different parts of a web page:

- \`<header>\`: Defines a header for a document or a section.
- \`<nav>\`: Defines a set of navigation links.
- \`<section>\`: Defines a section in a document.
- \`<article>\`: Defines an independent, self-contained article.
- \`<aside>\`: Defines content aside from the page content (like a sidebar).
- \`<footer>\`: Defines a footer for a document or a section.

> **Tip:** Always use semantic elements instead of simple \`<div>\` elements for layout construction, as it drastically improves SEO.`,
          km: `### ធាតុប្លង់គេហទំព័រ (Layout)
គេហទំព័រច្រើនតែបង្ហាញមាតិកាជាច្រើនជួរ ឬក្រឡា។ HTML មានធាតុន័យវិទ្យា (semantic elements) ជាច្រើនដើម្បីកំណត់ផ្នែកផ្សេងៗនៃគេហទំព័រ៖

- \`<header>\`: កំណត់ផ្នែកក្បាលគេហទំព័រ។
- \`<nav>\`: កំណត់បណ្តុំតំណភ្ជាប់សម្រាប់ម៉ឺនុយ (Navigation)។
- \`<section>\`: កំណត់ផ្នែកជាក់លាក់ណាមួយក្នុងទំព័រ។
- \`<article>\`: កំណត់មាតិកាឯករាជ្យដូចជាអត្ថបទព័ត៌មាន។
- \`<aside>\`: កំណត់មាតិកាចំហៀង (Sidebar)។
- \`<footer>\`: កំណត់ផ្នែកជើងក្រោមនៃគេហទំព័រ។

> **អនុសាសន៍:** គួរប្រើធាតុ semantic ទាំងនេះជំនួសឱ្យការប្រើ \`<div>\` ធម្មតាសម្រាប់ការរៀបចំរចនាសម្ព័ន្ធប្លង់ ព្រោះវាជួយឱ្យ SEO ប្រសើរឡើងខ្លាំង។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 0; }
    header, footer { background: #1e293b; color: white; text-align: center; padding: 15px; }
    nav { background: #3b82f6; padding: 10px; text-align: center; }
    nav a { color: white; margin: 0 10px; text-decoration: none; font-weight: bold; }
    section { padding: 20px; min-height: 150px; background: #f8fafc; }
  </style>
</head>
<body>
  <header><h3>Company Website Header</h3></header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <section>
    <h4>Welcome Section</h4>
    <p>Using semantic HTML elements makes the code clean and well-structured.</p>
  </section>
  <footer><p>&copy; 2026 Education Platform</p></footer>
</body>
</html>`
      },
      {
        id: "html-responsive",
        title: { en: "HTML Responsive", km: "ការឆ្លើយតបគ្រប់អេក្រង់ (Responsive)" },
        content: {
          en: `### Responsive Web Design
Responsive web design makes web pages look good on all devices (desktops, tablets, and phones).

Key component: The Viewport Meta Tag.
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
This gives the browser instructions on how to control the page's dimensions and scaling.

> **Tip:** Combine the viewport meta tag with responsive CSS frameworks or CSS media queries to build adaptable layouts.`,
          km: `### ការរចនាឆ្លើយតប (Responsive)
ការរចនាគេហទំព័រឆ្លើយតប (Responsive Web Design) ធ្វើឱ្យគេហទំព័រមើលទៅស្អាត និងសមស្របនឹងគ្រប់ឧបករណ៍ទាំងអស់ (កុំព្យូទ័រ ថេប្លេត និងទូរស័ព្ទ)។

សមាសភាគគន្លឹះ៖ ថេក Viewport Meta។
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
វាផ្តល់ការណែនាំដល់កម្មវិធីរុករកអំពីរបៀបគ្រប់គ្រងទំហំ និងមាត្រដ្ឋាននៃទំព័រ។

> **អនុសាសន៍:** រួមបញ្ចូលគ្នាជាមួយ CSS media queries ដើម្បីបង្កើតប្លង់ដែលអាចបត់បែនបានគ្រប់អេក្រង់។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .responsive-img { width: 100%; max-width: 400px; height: auto; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>Responsive Image</h2>
  <p>Resize your browser to see this image scale smoothly without overflow!</p>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600" 
       alt="Coding view" 
       class="responsive-img">
</body>
</html>`
      },
      {
        id: "html-computercode",
        title: { en: "HTML Computercode", km: "ធាតុបង្ហាញកូដកុំព្យូទ័រ" },
        content: {
          en: `### Computer Code Elements
HTML contains several elements for displaying programming code and computer outputs.

Core elements:
- \`<code>\`: Defines a fragment of computer code.
- \`<kbd>\`: Defines keyboard inputs (e.g. \`<kbd>Ctrl + S</kbd>\`).
- \`<samp>\`: Defines sample output from a computer program.
- \`<pre>\`: Defines preformatted text, preserving spaces and line breaks.

> **Tip:** Put \`<code>\` inside \`<pre>\` to display beautiful multi-line code blocks.`,
          km: `### ធាតុបង្ហាញកូដកុំព្យូទ័រ (Computer Code)
HTML មានធាតុមួយចំនួនសម្រាប់បង្ហាញកូដកម្មវិធី ឬលទ្ធផលបញ្ជាចេញពីកុំព្យូទ័រ។

ធាតុស្នូល៖
- \`<code>\`: កំណត់កូដខ្លីៗ។
- \`<kbd>\`: កំណត់ការចុចគ្រាប់ចុចក្តារចុច (ឧ. \`<kbd>Ctrl + S</kbd>\`)។
- \`<samp>\`: កំណត់លទ្ធផលគំរូចេញពីកម្មវិធីកុំព្យូទ័រ។
- \`<pre>\`: កំណត់អត្ថបទដែលរក្សាទុកចន្លោះដកឃ្លា និងការចុះបន្ទាត់។

> **អនុសាសន៍:** គួរដាក់ \`<code>\` នៅខាងក្នុង \`<pre>\` ដើម្បីបង្ហាញប្លុកកូដដែលមានច្រើនជួរយ៉ាងស្រស់ស្អាត។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Computer Code Representation</h2>
  <p>Save your work by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
  
  <p>Sample python script:</p>
  <pre style="background: #27272a; color: #f4f4f5; padding: 15px; border-radius: 6px;"><code>def greet():
    print("សួស្តីកម្ពុជា")
greet()</code></pre>
</body>
</html>`
      },
      {
        id: "html-semantics",
        title: { en: "HTML Semantics", km: "ន័យវិទ្យា HTML (Semantics)" },
        content: {
          en: `### Semantic Elements
A semantic element clearly describes its meaning to both the browser and the developer.

Non-semantic elements: \`<div>\` and \`<span>\` - tell nothing about their content.
Semantic elements: \`<form>\`, \`<table>\`, \`<article>\`, \`<header>\` - clearly define their content.

> **Note:** Semantic HTML is vital for accessibility, SEO, and maintainability.`,
          km: `### ធាតុន័យវិទ្យា (Semantic Elements)
ធាតុន័យវិទ្យា (Semantic Element) ពណ៌នាអំពីអត្ថន័យរបស់វាបានយ៉ាងច្បាស់លាស់ទាំងចំពោះកម្មវិធីរុករក និងអ្នកអភិវឌ្ឍន៍។

ធាតុគ្មានន័យវិទ្យា៖ \`<div>\` និង \`<span>\` - មិនប្រាប់ព័ត៌មានអ្វីឡើយអំពីមាតិការបស់វា។
ធាតុមានន័យវិទ្យា៖ \`<form>\`, \`<table>\`, \`<article>\`, \`<header>\` - កំណត់ប្រភេទមាតិកាយ៉ាងច្បាស់។

> **សម្គាល់:** Semantic HTML មានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ភាពងាយស្រួល (accessibility) ការបង្កើន SEO និងការថែទាំកូដ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <article style="background: #fafafa; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
    <header>
      <h3 style="margin:0;">Semantic Article Title</h3>
      <p style="color: #64748b; font-size:12px;">Published on July 2026</p>
    </header>
    <p>Using structural semantic elements keeps code robust and readable.</p>
  </article>
</body>
</html>`
      },
      {
        id: "html-styleguide",
        title: { en: "HTML Style Guide", km: "គោលការណ៍សរសេរកូដ (Style Guide)" },
        content: {
          en: `### HTML Style Guide and Coding Conventions
Consistent clean code is easier to read and maintain. Here are some key standards:

1. Always use lowercase element names and attribute names.
2. Always close all HTML elements.
3. Always quote attribute values.
4. Always specify \`alt\`, \`width\`, and \`height\` for images.
5. Do not add spaces around equal signs (\`src="img.png"\` instead of \`src = "img.png"\`).

> **Tip:** Consistent styling and indentation makes collaboration in development projects much smoother.`,
          km: `### គោលការណ៍សរសេរកូដ HTML (Style Guide)
ការសរសេរកូដឱ្យមានរបៀបរៀបរយ និងស្របគ្នាតាមបទដ្ឋាន ជួយឱ្យកូដងាយស្រួលអាន និងងាយស្រួលថែទាំ៖

១. ត្រូវប្រើអក្សរតូចជានិច្ចសម្រាប់ឈ្មោះធាតុ និងឈ្មោះលក្ខណៈសម្បត្តិ។
២. ត្រូវបិទធាតុ HTML ទាំងអស់ជានិច្ច។
៣. ត្រូវប្រើសញ្ញាសម្រង់ព័ទ្ធជុំវិញតម្លៃលក្ខណៈសម្បត្តិជានិច្ច។
៤. ត្រូវបញ្ជាក់ \`alt\`, \`width\`, និង \`height\` សម្រាប់រូបភាពជានិច្ច។
៥. កុំបន្ថែមចន្លោះដកឃ្លានៅជុំវិញសញ្ញាស្មើ (\`src=\"img.png\"\` មិនមែន \`src = \"img.png\"\` ឡើយ)។

> **អនុសាសន៍:** ការតុបតែងកូដ និងការចូលបន្ទាត់ដែលមានរបៀបរៀបរយ ជួយឱ្យការធ្វើការងារជាក្រុមទទួលបានជោគជ័យ។`
        },
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Clean Styled Document</title>
</head>
<body>
  <!-- Good indentation and lowercase elements -->
  <main>
    <h1>Clean Code Example</h1>
    <p>Indented properly and attributes quoted cleanly.</p>
  </main>
</body>
</html>`
      },
      {
        id: "html-entities",
        title: { en: "HTML Entities", km: "និមិត្តសញ្ញាអក្សរ (Entities)" },
        content: {
          en: `### HTML Entities
Some characters are reserved in HTML (like \`<\` and \`>\`). If you use these characters in your text, the browser may mix them with tags.

To display reserved characters, use HTML entities:
- \`&lt;\` represents \`<\`
- \`&gt;\` represents \`>\`
- \`&amp;\` represents \`&\`
- \`&quot;\` represents \`"\`
- \`&nbsp;\` represents a non-breaking space

> **Note:** Entity names are case-sensitive.`,
          km: `### និមិត្តសញ្ញាជំនួសអក្សរ (Entities)
តួអក្សរមួយចំនួនត្រូវបានរក្សាទុកជាពិសេសនៅក្នុង HTML (ដូចជា \`<\` និង \`>\`)។ ប្រសិនបើអ្នកប្រើវាផ្ទាល់ក្នុងអត្ថបទ កម្មវិធីរុករកអាចនឹងច្រឡំថាជាថេកកូដ។

ដើម្បីបង្ហាញតួអក្សរទាំងនេះ ត្រូវប្រើនិមិត្តសញ្ញាជំនួស (HTML entities)៖
- \`&lt;\` តំណាងឱ្យ \`<\`
- \`&gt;\` តំណាងឱ្យ \`>\`
- \`&amp;\` តំណាងឱ្យ \`&\`
- \`&quot;\` តំណាងឱ្យ \`"\`
- \`&nbsp;\` តំណាងឱ្យការដកឃ្លាមិនចុះបន្ទាត់ (non-breaking space)

> **សម្គាល់:** ឈ្មោះ Entity គឺប្រកាន់អក្សរតូចធំជានិច្ច។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Entity Examples</h2>
  <p>To write HTML tags as raw text, use entities:</p>
  <p><strong>&lt;p&gt;This is text&lt;/p&gt;</strong></p>
  <p>Copyright symbol: &copy; 2026</p>
</body>
</html>`
      },
      {
        id: "html-symbols",
        title: { en: "HTML Symbols", km: "និមិត្តសញ្ញាពិសេស (Symbols)" },
        content: {
          en: `### HTML Symbols
HTML entity names and numbers can represent mathematical symbols, Greek letters, and currency signs which are not found on a standard keyboard.

Examples:
- \`&forall;\` (\`&#8704;\`) -> ∀
- \`&part;\` (\`&#8706;\`) -> ∂
- \`&alpha;\` (\`&#945;\`) -> α
- \`&euro;\` (\`&#8364;\`) -> €

> **Note:** You can use either the entity name or the decimal/hex numbers to represent these characters.`,
          km: `### និមិត្តសញ្ញាពិសេស (Symbols)
ឈ្មោះ entity ឬលេខកូដរបស់ HTML អាចត្រូវបានប្រើដើម្បីបង្ហាញនិមិត្តសញ្ញាគណិតវិទ្យា អក្សរក្រិក និងសញ្ញារូបិយប័ណ្ណដែលគ្មាននៅលើក្តារចុចកុំព្យូទ័រធម្មតា។

ឧទាហរណ៍៖
- \`&forall;\` (\`&#8704;\`) -> ∀
- \`&part;\` (\`&#8706;\`) -> ∂
- \`&alpha;\` (\`&#945;\`) -> α
- \`&euro;\` (\`&#8364;\`) -> €

> **សម្គាល់:** អ្នកអាចប្រើបានទាំងឈ្មោះ entity ឬលេខកូដទសភាគ/Hex ដើម្បីបង្ហាញនិមិត្តសញ្ញាទាំងនេះ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Symbol Display</h2>
  <p>Mathematical: &prod; &sum; &radic; &infin;</p>
  <p>Greek letters: &Omega; &beta; &theta;</p>
  <p>Currency: &yen; &pound; &euro;</p>
</body>
</html>`
      },
      {
        id: "html-emojis",
        title: { en: "HTML Emojis", km: "រូបអារម្មណ៍ Emojis HTML" },
        content: {
          en: `### HTML Emojis
Emojis are also characters from the UTF-8 alphabet. Since they are characters, they can be displayed, scaled, and formatted like any other text!

To display an emoji, use its UTF-8 entity number (decimal or hex).
E.g.:
- \`&#128512;\` -> 😀
- \`&#128516;\` -> 😄
- \`&#128170;\` -> 💪

> **Tip:** Emojis make websites look much more lively and interactive if used correctly in titles or headers!`,
          km: `### រូបអារម្មណ៍ Emojis របស់ HTML
Emojis ក៏ជាតួអក្សរមកពីតារាងតួអក្សរ UTF-8 ផងដែរ។ ដោយសារពួកវាជាតួអក្សរ ពួកវាអាចត្រូវបានបង្ហាញ ពង្រីក និងរចនាដូចគ្នាទៅនឹងអត្ថបទធម្មតាដែរ!

ដើម្បីបង្ហាញ emoji ត្រូវប្រើលេខកូដ UTF-8 (decimal ឬ hex)៖
- \`&#128512;\` -> 😀
- \`&#128516;\` -> 😄
- \`&#128170;\` -> 💪

> **អនុសាសន៍:** Emojis ជួយឱ្យគេហទំព័រមើលទៅរស់រវើក និងទាក់ទាញខ្លាំងប្រសិនបើប្រើប្រាស់បានសមស្រប។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Emojis in HTML</h2>
  <p style="font-size: 40px;">
    &#128512; &#128521; &#128640; &#127472;&#127469;
  </p>
  <p>Since they are text, they can be scaled using font-size!</p>
</body>
</html>`
      },
      {
        id: "html-charsets",
        title: { en: "HTML Charsets", km: "តារាងតួអក្សរ (Charsets)" },
        content: {
          en: `### HTML Character Sets
To display an HTML page correctly, a browser must know the character set used in the page.

This is specified in the \`<meta>\` tag inside the \`<head>\`:
\`\`\`html
<meta charset="UTF-8">
\`\`\`

**UTF-8** covers almost all characters and symbols in the world (including Khmer script, English, emojis, and math signs).

> **Note:** UTF-8 is the default character set in HTML5, and is highly recommended for all modern web pages.`,
          km: `### តារាងតួអក្សរ HTML (Charsets)
ដើម្បីបង្ហាញទំព័រ HTML បានត្រឹមត្រូវ កម្មវិធីរុករកត្រូវតែដឹងពីតារាងតួអក្សរដែលប្រើប្រាស់នៅក្នុងទំព័រនោះ។

វាត្រូវបានកំណត់នៅក្នុងថេក \`<meta>\` ផ្នែកខាងក្នុង \`<head>\`៖
\`\`\`html
<meta charset="UTF-8">
\`\`\`

**UTF-8** គ្របដណ្តប់លើរាល់តួអក្សរ និងនិមិត្តសញ្ញាស្ទើរតែទាំងអស់នៅលើពិភពលោក (រួមទាំងអក្សរខ្មែរ អង់គ្លេស emojis និងសញ្ញាគណិតវិទ្យា)។

> **សម្គាល់:** UTF-8 គឺជាតារាងតួអក្សរលំនាំដើមនៅក្នុង HTML5 និងត្រូវបានណែនាំយ៉ាងខ្លាំងសម្រាប់គេហទំព័រទំនើបទាំងអស់។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h2>ភាសាខ្មែរលំនាំដើម (Khmer Unicode Support)</h2>
  <p>Because UTF-8 is defined, Khmer script renders perfectly without issues.</p>
</body>
</html>`
      },
      {
        id: "html-urlencode",
        title: { en: "HTML URL Encode", km: "ការបម្លែងកូដ URL (URL Encode)" },
        content: {
          en: `### URL Encoding
URLs can only be sent over the Internet using the ASCII character-set. Since URLs often contain characters outside the ASCII set, they must be converted into a valid ASCII format.

URL encoding converts non-ASCII characters into a \`%\` followed by hexadecimal digits (e.g., spaces are converted to \`%20\` or \`+\`).

> **Note:** Browsers will automatically encode inputs when submitting forms based on character set guidelines.`,
          km: `### ការបម្លែងកូដ URL (URL Encoding)
អាសយដ្ឋាន URL អាចត្រូវបានផ្ញើតាមអ៊ីនធឺណិតដោយប្រើតែសំណុំតួអក្សរ ASCII ប៉ុណ្ណោះ។ ដោយសារតែ URL ច្រើនតែមានតួអក្សរក្រៅ ASCII ពួកវាត្រូវតែបំលែងទៅជាទម្រង់ ASCII ដែលមានសុពលភាព។

URL encoding បំលែងតួអក្សរដែលមិនមែនជា ASCII ទៅជាសញ្ញា \`%\` តាមពីក្រោយដោយលេខ Hexadecimal (ឧ. ចន្លោះដកឃ្លាត្រូវបានប្តូរទៅជា \`%20\` ឬ \`+\`)។

> **សម្គាល់:** កម្មវិធីរុករកនឹងបំលែងកូដដោយស្វ័យប្រវត្តិនូវរាល់ការបំពេញទិន្នន័យនៅពេលបញ្ជូនទម្រង់ព័ត៌មាន (Form Submission)។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>URL Encode Test Link</h2>
  <!-- Space is converted to %20 in URL -->
  <a href="https://example.com/search?q=khmer%20coding">Search Khmer Coding</a>
</body>
</html>`
      },
      {
        id: "html-xhtml",
        title: { en: "HTML vs. XHTML", km: "HTML ប្រៀបធៀបនឹង XHTML" },
        content: {
          en: `### HTML vs. XHTML
XHTML (Extensible HyperText Markup Language) is a stricter, more XML-based version of HTML.

Key differences:
- XHTML elements must be properly nested.
- XHTML elements must always be closed.
- XHTML elements must be in lowercase.
- XHTML attribute names must be in lowercase, and values quoted.

> **Note:** Today, HTML5 is the standard and is more forgiving, but writing clean code following XHTML-style strictness is still best practice!`,
          km: `### HTML ប្រៀបធៀបនឹង XHTML
XHTML (Extensible HyperText Markup Language) គឺជាកំណែទម្រង់ HTML ដែលមានច្បាប់តឹងរ៉ឹងជាង និងផ្អែកលើ XML។

ភាពខុសគ្នាគន្លឹះ៖
- ធាតុ XHTML ត្រូវតែរៀបចំលំដាប់លំដោយរចនាសម្ព័ន្ធត្រឹមត្រូវ (nested)។
- ធាតុ XHTML ត្រូវតែបិទជានិច្ច។
- ធាតុ XHTML ត្រូវតែប្រើប្រាស់អក្សរតូចទាំងអស់។
- ឈ្មោះ និងតម្លៃលក្ខណៈសម្បត្តិ XHTML ត្រូវតែប្រើអក្សរតូច និងមានសញ្ញាសម្រង់ព័ទ្ធជុំវិញ។

> **សម្គាល់:** សព្វថ្ងៃនេះ HTML5 គឺជាស្តង់ដារទូទៅ និងមានភាពធូរស្រាលច្រើន ប៉ុន្តែការសរសេរកូដស្អាតតាមបែបច្បាប់តឹងរ៉ឹងរបស់ XHTML នៅតែជាការអនុវត្តដ៏ល្អបំផុត!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>XHTML Strict Format style</h2>
  <!-- XHTML requires closing even for break tags -->
  <p>Line one.<br /></p>
  <p>Line two.<br /></p>
</body>
</html>`
      }
    ]
  },
  {
    id: "html-forms",
    title: {
      en: "HTML Forms",
      km: "ទម្រង់បំពេញព័ត៌មាន"
    },
    lessons: [
      {
        id: "html-forms-intro",
        title: { en: "HTML Forms", km: "មូលដ្ឋានគ្រឹះ Forms" },
        content: {
          en: `### HTML Forms Introduction
An HTML form is used to collect user input. The collected input is most often sent to a server for processing.

The \`<form>\` element is a container for different types of input elements:
- Text fields
- Checkboxes
- Radio buttons
- Submit buttons

> **Note:** The most common form element is the \`<input>\` element, which can be displayed in many ways depending on the \`type\` attribute.`,
          km: `### ស្វែងយល់អំពី Forms
ទម្រង់ HTML (Form) ត្រូវបានប្រើប្រាស់ដើម្បីប្រមូលធាតុចូល (Input) ពីអ្នកប្រើប្រាស់។ ធាតុចូលដែលប្រមូលបានច្រើនតែត្រូវបានផ្ញើទៅកាន់ម៉ាស៊ីនបម្រើ (Server) ដើម្បីដំណើរការ។

ធាតុ \`<form>\` គឺជាប្រអប់ផ្ទុកសម្រាប់ប្រភេទធាតុចូលផ្សេងៗ៖
- ប្រអប់អក្សរ (Text fields)
- ប្រអប់ជ្រើសរើសគ្រីស (Checkboxes)
- ប៊ូតុងជ្រើសរើសចម្លើយតែមួយ (Radio buttons)
- ប៊ូតុងបញ្ជូនទិន្នន័យ (Submit buttons)

> **សម្គាល់:** ធាតុទម្រង់ទូទៅបំផុតគឺ \`<input>\` ដែលអាចបង្ហាញបានច្រើនទម្រង់អាស្រ័យលើលក្ខណៈសម្បត្តិ \`type\`។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    form { background: white; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; max-width: 300px; }
    input[type=text] { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
  </style>
</head>
<body>
  <h2>Register Form</h2>
  <form>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
    <input type="submit" value="Submit" style="background:#4f46e5; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer;">
  </form>
</body>
</html>`
      },
      {
        id: "html-form-attributes",
        title: { en: "HTML Form Attributes", km: "លក្ខណៈសម្បត្តិ Form" },
        content: {
          en: `### Form Attributes
The \`<form>\` element can have attributes that define how data is submitted.

Key Attributes:
- \`action\`: Defines the action to be performed when the form is submitted (usually a URL to a backend script).
- \`method\`: Specifies the HTTP method to use when submitting (usually \`GET\` or \`POST\`).
- \`target\`: Specifies if the submitted result will open in a new tab.

> **Tip:** Use \`POST\` method when submitting sensitive data like passwords or private details, as it hides the values from the URL address bar.`,
          km: `### លក្ខណៈសម្បត្តិ Form
ធាតុ \`<form>\` អាចមានលក្ខណៈសម្បត្តិដែលកំណត់ពីរបៀបបញ្ជូនទិន្នន័យ។

លក្ខណៈសម្បត្តិគន្លឹះ៖
- \`action\`: កំណត់សកម្មភាពដែលត្រូវអនុវត្តនៅពេលទម្រង់ត្រូវបានបញ្ជូន (ជាទូទៅជា URL ទៅកាន់ backend script)។
- \`method\`: បញ្ជាក់វិធីសាស្ត្រ HTTP ដែលត្រូវប្រើនៅពេលបញ្ជូន (ជាទូទៅគឺ \`GET\` ឬ \`POST\`)។
- \`target\`: បញ្ជាក់ថាតើលទ្ធផលដែលបានបញ្ជូននឹងបើកក្នុងផ្ទាំងថ្មីដែរឬទេ។

> **អនុសាសន៍:** ត្រូវប្រើវិធីសាស្ត្រ \`POST\` នៅពេលបញ្ជូនទិន្នន័យសម្ងាត់ដូចជាលេខសម្ងាត់ ឬព័ត៌មានឯកជន ព្រោះវាលាក់បាំងតម្លៃទាំងនោះពី URL បង្អួចអាសយដ្ឋាន។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Form Action & Method</h2>
  <!-- This form targets sample endpoint with POST -->
  <form action="https://httpbin.org/post" method="POST" target="_blank">
    <label>Search Query: <input type="text" name="query"></label>
    <button type="submit">Submit via POST</button>
  </form>
</body>
</html>`
      },
      {
        id: "html-form-elements",
        title: { en: "HTML Form Elements", km: "ធាតុផ្សំផ្សេងៗរបស់ Form" },
        content: {
          en: `### HTML Form Elements
Besides the standard \`<input>\`, there are many other elements used to build comprehensive forms:

- \`<label>\`: Defines a label for several form elements. Very helpful for accessibility.
- \`<select>\`: Defines a drop-down list.
- \`<textarea>\`: Defines a multi-line input field (text area).
- \`<button>\`: Defines a clickable button.
- \`<fieldset>\` and \`<legend>\`: Used to group related data in a form with a border outline.

> **Tip:** Clicking on a \`<label>\` focus automatically transfers to its linked input, improving user experience on mobile screens.`,
          km: `### ធាតុផ្សំផ្សេងៗរបស់ Form
ក្រៅពីថេក \`<input>\` ធម្មតា មានធាតុផ្សំជាច្រើនទៀតដែលត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតទម្រង់ព័ត៌មានពេញលេញ៖

- \`<label>\`: កំណត់ស្លាកឈ្មោះសម្រាប់ធាតុផ្សំទម្រង់។ ជួយបានច្រើនដល់ភាពងាយស្រួល (accessibility)។
- \`<select>\`: កំណត់បញ្ជីជ្រើសរើសចុះក្រោម (Drop-down list)។
- \`<textarea>\`: កំណត់ប្រអប់សរសេរអក្សរបានច្រើនជួរ។
- \`<button>\`: កំណត់ប៊ូតុងចុច។
- \`<fieldset>\` និឹង \`<legend>\`: ប្រើដើម្បីប្រមូលផ្តុំទិន្នន័យដែលទាក់ទងគ្នានៅក្នុង form ឱ្យមានស៊ុមព័ទ្ធជុំវិញ។

> **អនុសាសន៍:** ការចុចលើ \`<label>\` នឹងផ្ទេរចំណុចសរសេរ (focus) ទៅកាន់ប្រអប់បញ្ចូលដែលភ្ជាប់គ្នាដោយស្វ័យប្រវត្តិ ជួយបង្កើនបទពិសោធន៍ប្រើប្រាស់លើទូរស័ព្ទ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Advanced Form Elements</h2>
  <form>
    <fieldset style="border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px;">
      <legend style="padding: 0 5px; font-weight: bold;">User Feedback</legend>
      <p>
        <label for="country">Country:</label>
        <select id="country" name="country">
          <option value="kh">Cambodia (កម្ពុជា)</option>
          <option value="us">United States</option>
        </select>
      </p>
      <p>
        <label for="review">Comment:</label><br>
        <textarea id="review" name="review" rows="4" cols="30"></textarea>
      </p>
    </fieldset>
  </form>
</body>
</html>`
      },
      {
        id: "html-input-types",
        title: { en: "HTML Input Types", km: "ប្រភេទធាតុចូល (Input Types)" },
        content: {
          en: `### Dynamic Input Types
The \`<input>\` element is incredibly versatile due to the \`type\` attribute.

Common input types:
- \`type="text"\`: Single-line text field.
- \`type="password"\`: Password field (characters masked).
- \`type="email"\`: Validates email formats automatically.
- \`type="checkbox"\`: Selects zero or more options.
- \`type="radio"\`: Selects only one of several options.
- \`type="date"\`: Displays a calendar date picker.
- \`type="color"\`: Displays a color picker.

> **Tip:** Using correct mobile input types like \`type="number"\` or \`type="email"\` automatically triggers matching virtual keyboards on smartphones!`,
          km: `### ប្រភេទធាតុចូលផ្សេងៗ (Input Types)
ធាតុ \`<input>\` គឺមានភាពបត់បែនខ្ពស់ខ្លាំងដោយសារតែលក្ខណៈសម្បត្តិ \`type\` របស់វា។

ប្រភេទធាតុចូលទូទៅ៖
- \`type=\"text\"\`: ប្រអប់សរសេរអត្ថបទមួយជួរ។
- \`type=\"password\"\`: ប្រអប់លេខសម្ងាត់ (លាក់អក្សរមិនឱ្យឃើញ)។
- \`type=\"email\"\`: ផ្ទៀងផ្ទាត់ទម្រង់អ៊ីមែលដោយស្វ័យប្រវត្តិ។
- \`type=\"checkbox\"\`: ប្រអប់គ្រីសជ្រើសរើសចម្លើយច្រើន។
- \`type=\"radio\"\`: ប៊ូតុងជ្រើសរើសចម្លើយបានតែមួយគត់ក្នុងចំណោមចម្លើយជាច្រើន។
- \`type=\"date\"\`: បង្ហាញប្រតិទិនសម្រាប់ជ្រើសរើសថ្ងៃខែឆ្នាំ។
- \`type=\"color\"\`: បង្ហាញប្រអប់ជ្រើសរើសពណ៌។

> **អនុសាសន៍:** ការប្រើប្រាស់ប្រភេទធាតុចូលត្រឹមត្រូវដូចជា \`type=\"number\"\` ឬ \`type=\"email\"\` នឹងបង្ហាញក្តារចុចដែលត្រូវគ្នាចតលើទូរស័ព្ទដោយស្វ័យប្រវត្តិ!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .row { margin-bottom: 12px; }
  </style>
</head>
<body>
  <h2>Input Types Showcase</h2>
  <div class="row">
    <label>Email: <input type="email" placeholder="name@domain.com"></label>
  </div>
  <div class="row">
    <label>Password: <input type="password"></label>
  </div>
  <div class="row">
    <label>Favorite Color: <input type="color"></label>
  </div>
  <div class="row">
    <label>Birthday: <input type="date"></label>
  </div>
</body>
</html>`
      },
      {
        id: "html-input-attributes",
        title: { en: "HTML Input Attributes", km: "លក្ខណៈសម្បត្តិរបស់ Input" },
        content: {
          en: `### Input Attribute Validation
HTML input attributes provide validation and specify limitations for inputs.

Key attributes:
- \`value\`: Specifies an initial value for an input.
- \`readonly\`: Specifies that an input field is read-only (cannot be changed).
- \`disabled\`: Specifies that an input field should be disabled.
- \`placeholder\`: Specifies a short hint that describes the expected value.
- \`required\`: Specifies that an input field must be filled out before submitting.

> **Tip:** Using native HTML5 attributes like \`required\` and \`pattern\` allows you to validate forms without writing complex JavaScript validation libraries!`,
          km: `### លក្ខណៈសម្បត្តិការផ្ទៀងផ្ទាត់ (Attributes)
លក្ខណៈសម្បត្តិរបស់ Input ផ្តល់នូវការផ្ទៀងផ្ទាត់ និងកំណត់ដែនកំណត់សម្រាប់ប្រអប់បញ្ចូល។

លក្ខណៈសម្បត្តិគន្លឹះ៖
- \`value\`: បញ្ជាក់តម្លៃដំបូងសម្រាប់ប្រអប់បញ្ចូល។
- \`readonly\`: កំណត់ឱ្យប្រអប់បញ្ចូលអាចអានបានតែប៉ុណ្ណោះ (មិនអាចកែប្រែបាន)។
- \`disabled\`: បិទមិនឱ្យដំណើរការប្រអប់បញ្ចូល។
- \`placeholder\`: បង្ហាញពាក្យជំនួយខ្លីៗពណ៌នាអំពីអ្វីដែលត្រូវសរសេរ។
- \`required\`: កំណត់ថាប្រអប់បញ្ចូលនេះត្រូវតែបំពេញជាដាច់ខាតមុនពេលបញ្ជូន។

> **អនុសាសន៍:** ការប្រើប្រាស់លក្ខណៈសម្បត្តិដើមរបស់ HTML5 ដូចជា \`required\` ជួយឱ្យអ្នកអាចផ្ទៀងផ្ទាត់ទិន្នន័យបានដោយមិនបាច់សរសេរកូដ JavaScript ស្មុគស្មាញឡើយ!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Required & Placeholder Inputs</h2>
  <form action="https://httpbin.org/get" target="_blank">
    <p>
      <label>Username (Required): <br>
        <input type="text" name="usr" placeholder="e.g. sokchea12" required>
      </label>
    </p>
    <p>
      <label>Disabled Input: <br>
        <input type="text" value="Cannot edit me" disabled>
      </label>
    </p>
    <button type="submit">Submit Form</button>
  </form>
</body>
</html>`
      },
      {
        id: "html-input-form-attributes",
        title: { en: "HTML Input Form Attributes", km: "លក្ខណៈសម្បត្តិបញ្ជូន Form" },
        content: {
          en: `### Form-Specific Input Attributes
HTML5 also added features that allow input elements to override form-level settings.

Overriding attributes:
- \`formaction\`: Overrides the form's \`action\` attribute for a specific submit button.
- \`formmethod\`: Overrides the form's \`method\` attribute.
- \`formnovalidate\`: Overrides validation requirements for that specific submission.

> **Note:** These are extremely useful when building complex multi-step forms or drafts saving buttons!`,
          km: `### លក្ខណៈសម្បត្តិបញ្ជូនរបស់ Input
HTML5 បានបន្ថែមមុខងារដែលអនុញ្ញាតឱ្យធាតុ input នីមួយៗអាចលុបលើ (override) ការកំណត់កម្រិត form ទាំងមូល។

លក្ខណៈសម្បត្តិ override ទាំងនោះរួមមាន៖
- \`formaction\`: កំណត់អាសយដ្ឋាន action ថ្មីសម្រាប់តែប៊ូតុងបញ្ជូនជាក់លាក់មួយនេះប៉ុណ្ណោះ។
- \`formmethod\`: កំណត់វិធីសាស្ត្រ method ថ្មីសម្រាប់តែការបញ្ជូនមួយនេះ។
- \`formnovalidate\`: មិនបាច់ផ្ទៀងផ្ទាត់ទិន្នន័យសម្រាប់តែការបញ្ជូនមួយនេះ (ឧ. រក្សាទុកជា draft)។

> **សម្គាល់:** មុខងារទាំងនេះមានប្រយោជន៍ខ្លាំងណាស់នៅពេលបង្កើតទម្រង់ច្រើនជំហាន ឬប៊ូតុងរក្សាទុកជាព្រាង!`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Overriding Form Settings</h2>
  <form action="/normal-submit" method="GET">
    <label>Data Input: <input type="text" name="data"></label><br><br>
    
    <!-- Submit normally -->
    <input type="submit" value="Submit Normally"><br><br>
    
    <!-- Overrides to submit to a draft URL instead -->
    <input type="submit" formaction="https://httpbin.org/post" formmethod="POST" value="Save Draft via POST">
  </form>
</body>
</html>`
      }
    ]
  },
  {
    id: "html-graphics",
    title: {
      en: "HTML Graphics",
      km: "ក្រាហ្វិក HTML"
    },
    lessons: [
      {
        id: "html-canvas",
        title: { en: "HTML Canvas", km: "ធាតុ Canvas បង្កើតគំនូរ" },
        content: {
          en: `### HTML Canvas Graphics
The HTML \`<canvas>\` element is used to draw graphics on the fly, via scripting (usually JavaScript).

The canvas is only a container for graphics. You must use JavaScript to actually draw the paths, boxes, circles, text, or add images.

> **Note:** A canvas has a coordinate system: (0,0) is in the top-left corner.`,
          km: `### ធាតុ Canvas របស់ HTML
ធាតុ \`<canvas>\` របស់ HTML ត្រូវបានប្រើដើម្បីគូរក្រាហ្វិកផ្ទាល់ភ្លាមៗតាមរយៈកូដស្គ្រីប (ជាទូទៅគឺ JavaScript)។

Canvas គ្រាន់តែជាប្រអប់ផ្ទុកក្រាហ្វិកប៉ុណ្ណោះ។ អ្នកត្រូវតែប្រើប្រាស់ JavaScript ដើម្បីគូរបន្ទាត់ ប្រអប់ រង្វង់ អត្ថបទ ឬបញ្ចូលរូបភាព។

> **សម្គាល់:** Canvas មានប្រព័ន្ធកូអរដោនេ៖ ចំណុច (0,0) ស្ថិតនៅជ្រុងខាងឆ្វេងផ្នែកខាងលើ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Canvas Drawing Example</h2>
  <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

  <script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    
    // Draw a rectangle
    ctx.fillStyle = "#4f46e5";
    ctx.fillRect(20, 20, 150, 60);
    
    // Write text
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px Arial";
    ctx.fillText("សួស្តីកម្ពុជា", 60, 55);
  </script>
</body>
</html>`
      },
      {
        id: "html-svg",
        title: { en: "HTML SVG", km: "ក្រាហ្វិក SVG HTML" },
        content: {
          en: `### Scalable Vector Graphics (SVG)
SVG defines vector-based graphics in XML format. Unlike canvas, SVG graphics are fully scaleable and do not lose quality if zoomed in or resized!

Every element in an SVG document can be styled and animated using CSS or JavaScript.

> **Tip:** Use SVG for logos, icons, and clean graphics, and use Canvas for game animations, interactive charts, and pixel-heavy rendering.`,
          km: `### ក្រាហ្វិកវ៉ិចទ័រ SVG
SVG កំណត់ក្រាហ្វិកផ្អែកលើវ៉ិចទ័រ (vector) ជាទម្រង់ XML។ ខុសពី canvas ក្រាហ្វិក SVG អាចពង្រីកបង្រួមបានពេញលេញដោយមិនបាត់បង់គុណភាពឡើយ ទោះជាហ្ស៊ូម ឬបង្រួមទំហំក៏ដោយ!

រាល់ធាតុនីមួយៗនៅក្នុង SVG អាចត្រូវបានរចនា និងបន្ថែមចលនា (animation) ដោយប្រើប្រាស់ CSS ឬ JavaScript។

> **អនុសាសន៍:** គួរប្រើ SVG សម្រាប់ឡូហ្គោ រូបតំណាង (icons) និងក្រាហ្វិកស្អាតៗ ហើយប្រើ Canvas សម្រាប់ហ្គេម គំនូសតាងអន្តរកម្ម និងការបង្ហាញរូបភាពដែលត្រូវការដំណើរការភីកសែលខ្ពស់។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>SVG Circle Shape</h2>
  <!-- SVG shape renders perfectly without pixelation -->
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  </svg>
</body>
</html>`
      }
    ]
  },
  {
    id: "html-media",
    title: {
      en: "HTML Media",
      km: "មេឌា និងវីដេអូ HTML"
    },
    lessons: [
      {
        id: "html-media-intro",
        title: { en: "HTML Media", km: "ស្វែងយល់អំពី HTML Media" },
        content: {
          en: `### Multimedia in HTML
Multimedia on the Web is sound, music, videos, movies, and animations. Modern browsers support many different multimedia formats natively.

Common audio/video formats:
- Video: MP4, WebM, Ogg.
- Audio: MP3, WAV, Ogg.

> **Tip:** MP4 and MP3 are the most highly compatible formats across different operating systems and web browsers today.`,
          km: `### ពហុព័ត៌មាននៅក្នុង HTML
ពហុព័ត៌មាន (Multimedia) នៅលើបណ្តាញអ៊ីនធឺណិតរួមមាន សំឡេង តន្ត្រី វីដេអូ ភាពយន្ត និងចលនាផ្សេងៗ។ កម្មវិធីរុករកទំនើបៗគាំទ្រទម្រង់ពហុព័ត៌មានជាច្រើនប្រភេទដោយផ្ទាល់តែម្តង។

ទម្រង់វីដេអូ និងសំឡេងទូទៅ៖
- វីដេអូ៖ MP4, WebM, Ogg។
- សំឡេង៖ MP3, WAV, Ogg។

> **អនុសាសន៍:** MP4 និង MP3 គឺជាទម្រង់ដែលមានភាព مطابقت (compatibility) ខ្ពស់បំផុតនៅលើប្រព័ន្ធប្រតិបត្តិការ និងកម្មវិធីរុករកផ្សេងៗគ្នានាពេលបច្ចុប្បន្ន។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Media Showcase</h2>
  <p>Modern HTML supports audio and video streams natively without extra software plugins.</p>
</body>
</html>`
      },
      {
        id: "html-video",
        title: { en: "HTML Video", km: "វីដេអូ HTML (Video)" },
        content: {
          en: `### Playing Videos in HTML
The HTML \`<video>\` element is used to show a video on a web page.

Syntax:
\`\`\`html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\`

The \`controls\` attribute adds video controls like play, pause, and volume adjustment.

> **Note:** Always specify \`width\` and \`height\` so the browser allocates the exact correct spacing on the page before loading the video file.`,
          km: `### ការចាក់វីដេអូនៅក្នុង HTML
ធាតុ \`<video>\` របស់ HTML ត្រូវបានប្រើដើម្បីបង្ហាញវីដេអូនៅលើគេហទំព័រ។

ទម្រង់សរសេរ៖
\`\`\`html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  កម្មវិធីរុករករបស់អ្នកមិនគាំទ្រថេកវីដេអូនេះទេ។
</video>
\`\`\`

លក្ខណៈសម្បត្តិ \`controls\` បន្ថែមប៊ូតុងបញ្ជាវីដេអូដូចជា play, pause, និងការតម្លើងសំឡេង។

> **សម្គាល់:** ត្រូវកំណត់ \`width\` និង \`height\` ជានិច្ចដើម្បីឱ្យកម្មវិធីរុករកបម្រុងទុកកន្លែងដែលត្រឹមត្រូវនៅលើគេហទំព័រមុនពេលវីដេអូត្រូវបានទាញយកមក។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Video Element</h2>
  <video width="320" height="180" controls style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <!-- Sample stock video -->
    <source src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>
</body>
</html>`
      },
      {
        id: "html-audio",
        title: { en: "HTML Audio", km: "សំឡេង HTML (Audio)" },
        content: {
          en: `### Playing Audio in HTML
The HTML \`<audio>\` element is used to play an audio file on a web page.

Syntax:
\`\`\`html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
\`\`\`

Like the video tag, the \`controls\` attribute enables standard user interface controls for playing and pausing.

> **Note:** Autoplay attributes can be added, but modern browsers block audios from playing automatically until the user interacts with the page first.`,
          km: `### ការចាក់សំឡេងនៅក្នុង HTML
ធាតុ \`<audio>\` របស់ HTML ត្រូវបានប្រើប្រាស់ដើម្បីចាក់ឯកសារសំឡេងនៅលើគេហទំព័រ។

ទម្រង់សរសេរ៖
\`\`\`html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  កម្មវិធីរុករករបស់អ្នកមិនគាំទ្រធាតុសំឡេងនេះទេ។
</audio>
\`\`\`

ដូចគ្នានឹងថេកវីដេអូដែរ លក្ខណៈសម្បត្តិ \`controls\` ជួយបើកប៊ូតុងបញ្ជាលំនាំដើមសម្រាប់ការចាក់ និងផ្អាកសំឡេង។

> **សម្គាល់:** ទោះបីជាមានលក្ខណៈសម្បត្តិ autoplay ក៏ដោយ កម្មវិធីរុករកទំនើបៗច្រើនតែបិទមិនឱ្យសំឡេងចាក់ដោយស្វ័យប្រវត្តឡើយ លុះត្រាតែអ្នកប្រើប្រាស់ចុចលើអេក្រង់ជាមុនសិន។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Audio Element</h2>
  <!-- Sample music track -->
  <audio controls>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>
</body>
</html>`
      },
      {
        id: "html-plugins",
        title: { en: "HTML Plug-ins", km: "ជំនួយការកម្មវិធី (Plug-ins)" },
        content: {
          en: `### Plugins in HTML
Helper applications (plug-ins) are computer programs that extend the standard functionality of a web browser.

Common plugins used in the past were Java applets, Flash Player, and PDF viewers. Modern HTML5 has deprecated flash plugins and handles multimedia natively or via clean \`<object>\` and \`<embed>\` tags.

> **Tip:** Avoid using external plugins for rendering basic media today, as modern standard HTML5 elements are faster and highly secure.`,
          km: `### កម្មវិធីជំនួយ (Plug-ins) របស់ HTML
កម្មវិធីជំនួយ (Plug-ins) គឺជាកម្មវិធីកុំព្យូទ័រតូចៗដែលជួយបន្ថែមមុខងារបន្ថែមដល់កម្មវិធីរុករក។

កម្មវិធីជំនួយដែលធ្លាប់ពេញនិយមពីមុនរួមមាន Java applets, Flash Player និងកម្មវិធីមើល PDF។ HTML5 ទំនើបបានបញ្ឈប់ការប្រើប្រាស់ Flash plugins ទាំងស្រុង និងងាកមកគ្រប់គ្រងមេឌាដោយផ្ទាល់ ឬប្រើប្រាស់ថេក \`<object>\` និង \`<embed>\` ស្អាតៗជំនួសវិញ។

> **អនុសាសន៍:** គួរជៀសវាងការប្រើប្រាស់កម្មវិធីជំនួយខាងក្រៅសម្រាប់ការបង្ហាញមេឌាធម្មតានាពេលបច្ចុប្បន្ន ព្រោះធាតុស្តង់ដាររបស់ HTML5 គឺលឿន និងមានសុវត្ថិភាពខ្ពស់ជាង។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedding PDF directly using standard object</h2>
  <!-- Renders a pdf directly inside page safely -->
  <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
          type="application/pdf" 
          width="100%" 
          height="250">
    <p>Unable to display PDF. <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">Download instead</a>.</p>
  </object>
</body>
</html>`
      },
      {
        id: "html-youtube",
        title: { en: "HTML YouTube", km: "ការបញ្ចូលវីដេអូ YouTube" },
        content: {
          en: `### Embedding YouTube Videos
The easiest way to play videos on websites is to upload them to YouTube and embed them using an HTML iframe.

Steps:
1. Open the YouTube video page.
2. Click the Share button and select "Embed".
3. Copy the HTML iframe code and paste it inside your document.

> **Note:** YouTube will automatically assign responsive properties if you use standard embed formats.`,
          km: `### ការបញ្ចូលវីដេអូ YouTube
វិធីដែលងាយស្រួលបំផុតក្នុងការចាក់វីដេអូនៅលើគេហទំព័រគឺការបង្ហោះវីដេអូទាំងនោះទៅកាន់ YouTube រួចបញ្ចូលវាមកបង្ហាញដោយប្រើប្រាស់ HTML iframe។

ជំហានអនុវត្ត៖
១. បើកទំព័រវីដេអូ YouTube។
២. ចុចប៊ូតុង Share (ចែករំលែក) រួចជ្រើសរើស "Embed"។
៣. ចម្លងកូដ HTML iframe រួចយកវាមកដាក់ក្នុងកូដរបស់អ្នក។

> **សម្គាល់:** YouTube នឹងផ្តល់ជូននូវជម្រើសឆ្លើយតប (responsive) ដោយស្វ័យប្រវត្តិប្រសិនបើអ្នកប្រើទម្រង់ embed ស្តង់ដារ។`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedded YouTube Video</h2>
  <!-- Clean embed link from YouTube -->
  <iframe width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/tgbNymZ7vqY" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          style="border-radius: 8px;">
  </iframe>
</body>
</html>`
      }
    ]
  }
];
