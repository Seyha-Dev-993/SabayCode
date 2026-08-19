import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const xmlTopics: Topic[] = [
  {
    id: "xml-basics",
    title: {
      en: "1. XML Basics",
      km: "១. មូលដ្ឋានគ្រឹះ XML"
    },
    lessons: [
      {
        id: "xml-intro",
        title: {
          en: "What is XML & Why it Exists",
          km: "អ្វីទៅជា XML និងមូលហេតុដែលមានវា"
        },
        content: {
          en: `### Introduction to XML

**XML** stands for **eXtensible Markup Language**. It was created by the World Wide Web Consortium (W3C) to serve as a software- and hardware-independent tool for storing, transporting, and structuring data.

#### Key Characteristics of XML
* **Extensible:** Unlike HTML, XML has no predefined tags. You create tags that describe your data (e.g., \`<student>\`, \`<price>\`, \`<order>\`).
* **Self-Describing:** XML documents carry their own metadata through descriptive element names.
* **Platform-Independent:** Software applications on Linux, Windows, macOS, Android, and iOS can seamlessly parse and share XML documents.

#### Why XML Was Created
In early software engineering, transferring data between heterogeneous systems (like a mainframe database and a web server) was tedious due to incompatible file formats. XML provided a universal, human-readable textual representation that both humans and computers could easily inspect and process.

#### Basic XML Example
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<smartphone>
  <brand>AngkorTech</brand>
  <model>Kbach V1</model>
  <price currency="USD">299.00</price>
  <specs>
    <ram unit="GB">8</ram>
    <storage unit="GB">256</storage>
  </specs>
</smartphone>
\`\`\`
`,
          km: `### ការណែនាំអំពី XML

**XML** មកពីពាក្យ **eXtensible Markup Language**។ វាត្រូវបានបង្កើតឡើងដោយអង្គការ W3C ដើម្បីធ្វើជាឧបករណ៍ឯករាជ្យពី Software និង Hardware សម្រាប់រក្សាទុក ដឹកជញ្ជូន និងរៀបចំរចនាសម្ព័ន្ធទិន្នន័យ។

#### លក្ខណៈពិសេសចម្បងនៃ XML
* **Extensible (អាចពង្រីកបាន):** ខុសពី HTML, XML គ្មាន Tag ដែលកំណត់ទុកមុនទេ។ អ្នកបង្កើត Tag ដោយខ្លួនឯងដែលពិពណ៌នាអំពីទិន្នន័យរបស់អ្នក (ឧទាហរណ៍ \`<student>\`, \`<price>\`, \`<order>\`)។
* **Self-Describing (ពិពណ៌នាខ្លួនឯង):** ឯកសារ XML ផ្ទុកទិន្នន័យស្រាប់តាមរយៈឈ្មោះ Tag ដែលមានន័យច្បាស់លាស់។
* **Platform-Independent (ឯករាជ្យលើប្រព័ន្ធ):** កម្មវិធីនៅលើ Linux, Windows, macOS, Android និង iOS អាច Parse និងផ្លាស់ប្តូរឯកសារ XML បានដោយគ្មានបញ្ហា។

#### មូលហេតុដែល XML ត្រូវបានបង្កើតឡើង
កាលពីមុន ការផ្លាស់ប្តូរទិន្នន័យរវាងប្រព័ន្ធផ្សេងគ្នាមានភាពស្មុគស្មាញដោយសារទម្រង់ File មិនត្រូវគ្នា។ XML ផ្តល់នូវទម្រង់ Text ពិភពលោកដែលមនុស្សនិងកុំព្យូទ័រអាចអាន និងដំណើរការបានយ៉ាងងាយស្រួល។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<course>
  <title>XML Masterclass</title>
  <platform>SabayCode</platform>
  <duration hours="4">Self-paced</duration>
</course>`
      },
      {
        id: "xml-how-it-works",
        title: {
          en: "How XML Works & Common Uses",
          km: "របៀបដំណើរការ និងការប្រើប្រាស់ទូទៅនៃ XML"
        },
        content: {
          en: `### How XML Operates in Modern Systems

XML does not **do** anything on its own; it is a passive data format. A software program (such as a browser, parser, or backend service) reads the XML text, extracts the structured nodes, and converts them into in-memory objects or database records.

#### Primary Use Cases
1. **Data Interchange & APIs:** Enterprise services (such as SOAP Web Services) use XML as their data wire format.
2. **Configuration Files:** Software such as Android (\`AndroidManifest.xml\`), Spring Framework, and Maven (\`pom.xml\`) use XML for robust hierarchical configuration.
3. **Document Publishing:** Formats such as SVG (Scalable Vector Graphics), MathML, and Office Open XML (\`.docx\`, \`.xlsx\`) are built entirely on XML foundations.
4. **Feeds & Syndication:** RSS feeds and XML Sitemaps (\`sitemap.xml\`) notify search engine crawlers about web content.
`,
          km: `### របៀបដែល XML ដំណើរការក្នុងប្រព័ន្ធទំនើប

XML មិនធ្វើការអ្វីដោយខ្លួនវាទេ វាគ្រាន់តែជា Data Format ប៉ុណ្ណោះ។ កម្មវិធី Software (ដូចជា Browser, Parser ឬ Backend Service) នឹងអាន Text XML ទាញយក Node និងបំប្លែងវាទៅជា Memory Object ឬទិន្នន័យ Database។

#### ករណីប្រើប្រាស់ចម្បងៗ
១. **ការផ្លាស់ប្តូរទិន្នន័យ និង API:** សេវាកម្ម Enterprise (ដូចជា SOAP Web Services) ប្រើ XML សម្រាប់ផ្ញើ/ទទួលទិន្នន័យ។
២. **Configuration Files:** កម្មវិធីដូចជា Android (\`AndroidManifest.xml\`) និង Maven (\`pom.xml\`) ប្រើ XML សម្រាប់ការកំណត់ប្រព័ន្ធ។
៣. **Document Publishing:** ទម្រង់ដូចជា SVG (Scalable Vector Graphics) និង Office Open XML (\`.docx\`) ត្រូវបានបង្កើតលើ XML។
៤. **Feeds & Sitemaps:** RSS feeds និង XML Sitemaps (\`sitemap.xml\`) ផ្តល់ព័ត៌មានដល់ Search Engine Crawlers។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<sitemap xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sabaycode.com/courses/xml</loc>
    <lastmod>2026-07-28</lastmod>
    <priority>1.0</priority>
  </url>
</sitemap>`
      },
      {
        id: "xml-tree-structure",
        title: {
          en: "The XML Tree Structure",
          km: "រចនាសម្ព័ន្ធដើមឈើ (Tree) នៃ XML"
        },
        content: {
          en: `### XML Document Hierarchy

An XML document must be structured as a **single-rooted tree**. The tree begins at the **Root Element** and branches out to parent, child, and sibling nodes.

#### Hierarchy Rules
* **Root Element:** Exactly **one** top-level element encloses all other elements.
* **Parents and Children:** Elements nested directly inside another element are its **children**.
* **Siblings:** Elements that share the same direct parent are **siblings**.

\`\`\`
<catalog>                  <-- Root
  <book category="tech">   <-- Child of catalog (Parent of title & author)
    <title>XML Guide</title> <-- Child of book (Sibling of author)
    <author>Sophea</author>  <-- Child of book (Sibling of title)
  </book>
</catalog>
\`\`\`
`,
          km: `### រចនាសម្ព័ន្ធដើមឈើនៃឯកសារ XML

ឯកសារ XML ត្រូវតែមានរចនាសម្ព័ន្ធជា **Tree ដែលមាន Root តែមួយ**។ ដើមឈើចាប់ផ្តើមពី **Root Element** ហើយលាតសន្ធឹងទៅជា Node ឪពុក (Parent) កូន (Child) និងបងប្អូន (Sibling)។

#### ច្បាប់រចនាសម្ព័ន្ធ
* **Root Element:** ត្រូវតែមាន Element កំពូលតែ **មួយគត់** ដែលគ្របដណ្តប់លើ Element ផ្សេងទៀតទាំងអស់។
* **Parent & Child:** Element ដែលស្ថិតនៅក្នុង Element មួយទៀត គឺជា **Child** នៃ Element នោះ។
* **Siblings:** Element ទាំងឡាយណាដែលស្ថិតនៅក្នុង Parent តែមួយ គឺជា **Siblings** (បងប្អូន)។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<inventory>
  <item id="p101">
    <name>Cambodian Coffee Beans</name>
    <origin>Mondulkiri</origin>
    <price currency="USD">12.50</price>
  </item>
  <item id="p102">
    <name>Jasmine Rice 5kg</name>
    <origin>Battambang</origin>
    <price currency="USD">8.00</price>
  </item>
</inventory>`
      },
      {
        id: "xml-syntax-rules",
        title: {
          en: "XML Syntax & Well-Formedness Rules",
          km: "ច្បាប់ Syntax និងភាពត្រឹមត្រូវ (Well-Formedness) នៃ XML"
        },
        content: {
          en: `### Mandatory XML Syntax Rules

For an XML document to be processed by any parser, it MUST be **Well-Formed**. If an XML file breaks a single syntax rule, parsers will throw a fatal error.

#### Essential Rules
1. **XML Prolog:** Recommended header at the very top line: \`<?xml version="1.0" encoding="UTF-8"?>\`.
2. **Single Root Element:** All elements must be wrapped inside one root.
3. **Matching Closing Tags:** Every opening tag MUST have a corresponding closing tag or be self-closing (\`<img src="pic.jpg" />\`).
4. **Case Sensitivity:** Tags are strictly case-sensitive. \`<Student>\` is NOT the same as \`<student>\`.
5. **Proper Nesting:** Tags must be closed in proper reverse order: \`<b><i>text</i></b>\` (Valid), not \`<b><i>text</b></i>\` (Invalid).
6. **Quoted Attribute Values:** Attribute values must ALWAYS be enclosed in single or double quotes: \`<item status="active">\`.
7. **Entity References:** Special characters like \`<\` and \`&\` must be escaped as \`&lt;\` and \`&amp;\`.
`,
          km: `### ច្បាប់ Syntax ចាំបាច់នៃ XML

ដើម្បីឱ្យឯកសារ XML អាចដំណើរការបានដោយ Parser ណាមួយ វាត្រូវតែមាន **Well-Formedness (ភាពត្រឹមត្រូវតាមទម្រង់)**។ ប្រសិនបើខុសច្បាប់តែមួយ នោះ Parser នឹងបដិសេធអាន។

#### ច្បាប់សំខាន់ៗ
១. **XML Prolog:** គួរតែមាន Header នៅជួរដំបូងបង្អស់៖ \`<?xml version="1.0" encoding="UTF-8"?>\`។
២. **Root Element តែមួយ:** Element ទាំងអស់ត្រូវតែស្ថិតក្នុង Root តែមួយ។
៣. **មាន Tag បិទត្រឹមត្រូវ:** រាល់ Tag បើក ត្រូវតែមាន Tag បិទ ឬជា Self-closing tag (\`<item />\`)។
៤. **Case Sensitivity:** Tag ប្រកាន់អក្សរតូចធំច្បាស់លាស់។ \`<Student>\` មិនដូច \`<student>\` ទេ។
៥. **Nesting ត្រឹមត្រូវ:** Tag ត្រូវបិទតាមលំដាប់លំដោយបញ្ច្រាសត្រឹមត្រូវ។
៦. **Attribute Values មាន Quote:** តម្លៃ Attribute ត្រូវតែនៅក្នុង Quote ជានិច្ច៖ \`<item status="active">\`។
៧. **Entity Escaping:** សញ្ញាពិសេសដូចជា \`<\` និង \`&\` ត្រូវជំនួសដោយ \`&lt;\` និង \`&amp;\`។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<notice status="urgent">
  <sender>System Admin</sender>
  <message>Welcome to &lt;SabayCode&gt; &amp; XML Masterclass!</message>
</notice>`
      },
      {
        id: "xml-vs-html",
        title: {
          en: "XML Elements vs HTML Elements",
          km: "ការប្រៀបធៀប XML Elements និង HTML Elements"
        },
        content: {
          en: `### Comparing XML and HTML

Although both XML and HTML use tags enclosed in angle brackets (\`< >\`), they serve fundamentally different purposes.

| Feature | XML | HTML |
| :--- | :--- | :--- |
| **Primary Purpose** | Storing & Transporting Data | Displaying & Formatting Data |
| **Tag Definition** | Custom tags defined by user | Predefined standard tags (\`<h1>\`, \`<p>\`, \`<div>\`) |
| **Strictness** | Extremely strict (Well-formed required) | Forgiving (Browsers attempt auto-fix) |
| **Case Sensitivity** | Case-sensitive (\`<Tag>\` ≠ \`<tag>\`) | Case-insensitive (\`<h1>\` = \`<H1>\`) |
| **Tag Closing** | Every tag MUST be explicitly closed | Some tags are unclosed (\`<img>\`, \`<br>\`) |
| **Data vs Presentation** | Pure data content without styling | Data combined with visual layout |

#### Complementary Usage
XML handles **what the data is**, while HTML handles **how the data looks**. JavaScript often acts as the bridge that fetches XML data and formats it into HTML elements!
`,
          km: `### ការប្រៀបធៀបរវាង XML និង HTML

ទោះបីជា XML និង HTML ប្រើប្រាស់ Tag (\`< >\`) ដូចគ្នាក៏ដោយ ប៉ុន្តែពួកវាមានគោលបំណងខុសគ្នាទាំងស្រុង។

* **XML:** ផ្ដោតលើ **ទិន្នន័យ (What data is)** - រក្សាទុក និងដឹកជញ្ជូនទិន្នន័យ។
* **HTML:** ផ្ដោតលើ **ការបង្ហាញ (How data looks)** - បង្ហាញរូបរាង និង Styling។

XML គ្មាន Tag ស្រាប់ទេ (អ្នកបង្កើត Tag ផ្ទាល់ខ្លួន) ចំណែក HTML មាន Tag ស្តង់ដារកំណត់ស្រាប់ដូចជា \`<h1>\`, \`<p>\`, \`<div>\`។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<studentProfile>
  <fullName>Vannak Chan</fullName>
  <major>Computer Science</major>
  <gpa>3.85</gpa>
</studentProfile>`
      },
      {
        id: "xml-attributes-naming",
        title: {
          en: "XML Attributes & Naming Rules",
          km: "Attributes និងច្បាប់ដាក់ឈ្មោះក្នុង XML"
        },
        content: {
          en: `### XML Attributes vs Child Elements

XML elements can contain **attributes** in name/value pairs inside the opening tag:

\`\`\`xml
<person id="1001" role="instructor">
  <name>Sokha</name>
</person>
\`\`\`

#### Best Practice: Elements vs Attributes
Attributes are designed to contain metadata (data about data), whereas child elements should hold actual content.

**Avoid Overusing Attributes:**
* Attributes cannot easily store multiple values or nested structures.
* Child elements are more readable, flexible, and expandable.

#### Naming Rules for XML Elements & Attributes
* Names can contain letters, numbers, hyphens (\`-\`), underscores (\`_\`), and periods (\`.\`).
* Names MUST start with a letter or underscore (NOT a number or punctuation mark).
* Names CANNOT start with the letters \`xml\` (reserved by W3C).
* Names CANNOT contain spaces or colons (\`:\` reserved for namespaces).
`,
          km: `### XML Attributes ប្រៀបធៀបនឹង Child Elements

XML Elements អាចមាន **Attributes** ជាគូ \`name="value"\` នៅខាងក្នុង Tag បើក៖

\`\`\`xml
<person id="1001" role="instructor">
  <name>Sokha</name>
</person>
\`\`\`

#### គោលការណ៍ល្អបំផុត (Best Practice)
* **Attributes:** គួរប្រើសម្រាប់តែ metadata (ទិន្នន័យបន្ថែមអំពី Element)។
* **Child Elements:** គួរប្រើសម្រាប់ផ្ទុកទិន្នន័យពិតប្រាកដ។ Child Elements មានភាពបត់បែន និងអាចពង្រីកបានល្អជាង។

#### ច្បាប់ដាក់ឈ្មោះ (Naming Rules)
* ឈ្មោះអាចមាន អក្សរ, លេខ, \`-\`, \`_\` និង \`.\`។
* ត្រូវតែចាប់ផ្តើមដោយ អក្សរ ឬ \`_\` (មិនអាចផ្តើមដោយលេខ ឬសញ្ញាផ្សេងទៀតទេ)។
* មិនអាចផ្តើមដោយពាក្យ \`xml\` ឡើយ។
* មិនអាចមានដកឃ្លា (Space) ឡើយ។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<order id="ORD-2026-99" date="2026-07-28">
  <customer id="CUS-88">
    <name>Bory Lim</name>
    <email>bory@example.com</email>
  </customer>
  <total currency="USD">145.00</total>
</order>`
      },
      {
        id: "xml-namespaces",
        title: {
          en: "XML Namespaces (xmlns)",
          km: "XML Namespaces (xmlns)"
        },
        content: {
          en: `### Resolving Tag Naming Conflicts

When combining XML documents from different sources, tag names might collide. For instance, both a furniture catalog and a HTML layout might define a \`<table>\` element!

**XML Namespaces** prevent element name conflicts by attaching a unique prefix associated with a Uniform Resource Identifier (URI).

#### Syntax
\`\`\`xml
<root xmlns:prefix="http://www.example.com/namespace-url">
  <prefix:element>Content</prefix:element>
</root>
\`\`\`

#### Example of Namespace Resolution
\`\`\`xml
<document xmlns:f="http://www.furniture.org/schema"
          xmlns:h="http://www.w3.org/1999/xhtml">
  <f:table>
    <f:name>Wooden Teak Desk</f:name>
    <f:width unit="cm">120</f:width>
  </f:table>
  <h:table>
    <h:tr>
      <h:td>HTML Table Cell</h:td>
    </h:tr>
  </h:table>
</document>
\`\`\`
`,
          km: `### ការដោះស្រាយបញ្ហាជាន់ឈ្មោះ Tag ជាមួយ Namespaces

នៅពេលបូកបញ្ចូលឯកសារ XML មកពីប្រភពផ្សេងៗគ្នា ឈ្មោះ Tag អាចជាន់គ្នា។ ឧទាហរណ៍៖ បញ្ជីតុទូ និង HTML layout សុទ្ធតែអាចប្រើ \`<table>\`!

**XML Namespaces** ដោះស្រាយបញ្ហានេះដោយភ្ជាប់ Prefix ពិសេសទៅកាន់ URI តែមួយគត់។

\`\`\`xml
<root xmlns:f="http://furniture.org" xmlns:h="http://w3.org/xhtml">
  <f:table><f:name>Wooden Desk</f:name></f:table>
  <h:table><h:tr><h:td>Cell</h:td></h:tr></h:table>
</root>
\`\`\`
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<inventory xmlns:app="https://sabaycode.com/apps"
           xmlns:db="https://sabaycode.com/db">
  <app:module name="UserAuth">
    <db:table name="users_credentials" />
  </app:module>
</inventory>`
      }
    ]
  },
  {
    id: "displaying-using-xml",
    title: {
      en: "2. Displaying & Using XML",
      km: "២. ការបង្ហាញ និងការប្រើប្រាស់ XML"
    },
    lessons: [
      {
        id: "xml-browser-display",
        title: {
          en: "How XML is Displayed by Browsers",
          km: "របៀបដែល Browser បង្ហាញឯកសារ XML"
        },
        content: {
          en: `### Browser Behavior with Raw XML

When a web browser opens a raw \`.xml\` file directly, it displays an **interactive collapsable DOM tree** with syntax highlighting. Browsers do not automatically apply visual layout styles like HTML unless styled with CSS or transformed via XSLT.

#### Styling XML directly with CSS
You can link a CSS stylesheet inside an XML document using the \`<?xml-stylesheet?>\` processing instruction:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="style.css"?>
<announcement>
  <title>New Course Launch</title>
  <body>SabayCode presents the complete XML Track!</body>
</announcement>
\`\`\`

#### CSS File (\`style.css\`):
\`\`\`css
announcement { display: block; padding: 20px; background: #0f172a; color: #38bdf8; }
title { display: block; font-size: 20px; font-weight: bold; color: #f5a623; }
body { display: block; margin-top: 8px; }
\`\`\`
`,
          km: `### សកម្មភាពរបស់ Browser ជាមួយឯកសារ XML

នៅពេល Browser បើក File \`.xml\` ដោយផ្ទាល់ វាបង្ហាញរចនាសម្ព័ន្ធដើមឈើ **DOM Tree ដែលអាចចុច Collapse/Expand បាន**។ Browser មិនផ្តល់ Styling ស្វ័យប្រវត្តដូច HTML ទេ លុះត្រាតែយើងភ្ជាប់ CSS ឬ XSLT។

យើងអាចភ្ជាប់ CSS ទៅ XML បានតាមរយៈ \`<?xml-stylesheet type="text/css" href="style.css"?>\`។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<card>
  <header>Welcome to SabayCode</header>
  <text>Learn XML step by step with live interactive previews!</text>
</card>`
      },
      {
        id: "xml-httprequest",
        title: {
          en: "Using XMLHttpRequest to Fetch XML",
          km: "ការប្រើ XMLHttpRequest ដើម្បីទាញយកទិន្នន័យ XML"
        },
        content: {
          en: `### Asynchronous Data Fetching with XML

Before modern \`fetch()\`, the **\`XMLHttpRequest\`** object was the standard way to retrieve XML data from a web server without refreshing the browser page.

#### JavaScript Implementation
\`\`\`javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "data.xml", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const xmlDoc = xhr.responseXML; // Returns a parsed XML Document Object!
    const titles = xmlDoc.getElementsByTagName("title");
    console.log(titles[0].textContent);
  }
};
xhr.send();
\`\`\`

#### Modern Fetch API Equivalent
\`\`\`javascript
fetch("data.xml")
  .then(response => response.text())
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(xmlDoc => {
    console.log(xmlDoc.querySelector("title").textContent);
  });
\`\`\`
`,
          km: `### ការទាញយកទិន្នន័យ XML តាមរយៈ JavaScript

\*\*XMLHttpRequest\*\* គឺជាវិធីសាស្ត្រស្តង់ដារសម្រាប់ទាញយកទិន្នន័យ XML ពី Server ដោយមិនបាច់ Refresh ទំព័រ Web។

ក្នុង JavaScript យើងប្រើ \`xhr.responseXML\` ដើម្បីទទួលបាន XML Document Object ដែលអាចធ្វើការស្វែងរក Tag បានភ្លាមៗ។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>XML Fetch & Parse Demo</h3>
  <div id="output">Loading data...</div>

  <script>
    const xmlRaw = \`<?xml version="1.0"?>
      <news>
        <article>
          <headline>XML Track Released</headline>
          <author>SabayCode Team</author>
        </article>
      </news>\`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlRaw, "text/xml");
    const headline = xmlDoc.getElementsByTagName("headline")[0].textContent;
    document.getElementById("output").innerHTML = "<strong>Headline:</strong> " + headline;
  </script>
</body>
</html>`
      },
      {
        id: "xml-parsers-overview",
        title: {
          en: "XML Parsers Overview (DOM vs SAX)",
          km: "ទិដ្ឋភាពទូទៅនៃ XML Parsers (DOM និង SAX)"
        },
        content: {
          en: `### How Languages Process XML Files

An **XML Parser** is a software library that parses raw XML string text and validates its syntax before handing structure over to your code.

#### Two Main Parsing Models

1. **DOM Parser (Document Object Model):**
   * Loads the **entire** XML document into memory and constructs an in-memory tree of node objects.
   * **Pros:** Allows random access, navigation up/down the tree, and node modification.
   * **Cons:** Consumes significant RAM for huge XML datasets.

2. **SAX Parser (Simple API for XML):**
   * An event-driven stream parser that reads the file top-to-bottom line-by-line.
   * Triggers callbacks when it encounters start tags, text content, or end tags.
   * **Pros:** Blazing fast with minimal memory usage (ideal for gigabyte-sized log files).
   * **Cons:** Read-only forward stream; cannot modify nodes or navigate backwards.
`,
          km: `### របៀបដែលភាសាកុំព្យូទ័រដំណើរការ XML

**XML Parser** គឺជា Library ដែលអានអត្ថបទ XML និងពិនិត្យ Syntax មុននឹងបញ្ជូនទិន្នន័យទៅកាន់ Code របស់យើង។

មាន Parser ២ ប្រភេទចម្បង៖
១. **DOM Parser:** ផ្ទុកឯកសារ XML ទាំងមូលទៅក្នុង RAM ហើយបង្កើតជារចនាសម្ព័ន្ធ Tree។ ងាយស្រួលកែប្រែ និងស្វែងរក តែប្រែក្លាយជាយឺតបើឯកសារធំពេក។
២. **SAX Parser:** អានឯកសារតាម Stream ពីលើចុះក្រោម។ លឿនខ្លាំង និងប្រើ RAM តិចតួចបំផុត តែមិនអាចកែប្រែ ឬថយក្រោយបានឡើយ។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<benchmark>
  <parser name="DOM" memory="High" access="Random Read/Write" />
  <parser name="SAX" memory="Low" access="Sequential Read-Only" />
</benchmark>`
      }
    ]
  },
  {
    id: "xml-dom",
    title: {
      en: "3. XML DOM",
      km: "៣. XML DOM (Document Object Model)"
    },
    lessons: [
      {
        id: "xml-dom-intro",
        title: {
          en: "Introduction to XML DOM",
          km: "ការណែនាំអំពី XML DOM"
        },
        content: {
          en: `### The W3C XML DOM Standard

The **XML DOM** defines a standard set of objects and methods for accessing, querying, updating, and deleting nodes inside an XML document.

When an XML file is loaded into memory by a browser or server, it becomes a tree of **Node** objects:

\`\`\`javascript
// Parsing an XML string into a DOM Document object
const xmlText = "<course><name>XML</name></course>";
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlText, "text/xml");

console.log(xmlDoc.nodeName); // "#document"
console.log(xmlDoc.documentElement.nodeName); // "course"
\`\`\`
`,
          km: `### ស្តង់ដារ XML DOM

**XML DOM** កំណត់ Object និង Method ស្តង់ដារសម្រាប់ ចូលមើល ស្វែងរក កែប្រែ និងលុប Node នៅក្នុងឯកសារ XML។

នៅពេល XML ត្រូវបាន Load ចូលក្នុង Memory វាប្រែក្លាយជាដើមឈើនៃ **Node Objects**។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="dom-demo"></div>
  <script>
    const xmlData = \`<?xml version="1.0"?>
      <appConfig>
        <themeMode>Dark</themeMode>
        <version>2.5.0</version>
      </appConfig>\`;
    const xmlDoc = new DOMParser().parseFromString(xmlData, "text/xml");
    const mode = xmlDoc.getElementsByTagName("themeMode")[0].childNodes[0].nodeValue;
    document.getElementById("dom-demo").innerText = "Active Theme: " + mode;
  </script>
</body>
</html>`
      },
      {
        id: "xml-dom-nodes",
        title: {
          en: "Nodes, Node Types, and Node Tree",
          km: "Node, ប្រភេទ Node និង Node Tree"
        },
        content: {
          en: `### Types of Nodes in XML DOM

Everything in an XML document is a Node!

#### Common Node Types & Numerical Identifiers
1. **Element Node** (\`nodeType === 1\`): Every XML element (e.g. \`<price>\`).
2. **Attribute Node** (\`nodeType === 2\`): Attributes inside tags (e.g. \`currency="USD"\`).
3. **Text Node** (\`nodeType === 3\`): The text content inside an element.
4. **Comment Node** (\`nodeType === 8\`): Comments (\`<!-- comment -->\`).
5. **Document Node** (\`nodeType === 9\`): The entire document root instance.

\`\`\`javascript
const priceNode = xmlDoc.getElementsByTagName("price")[0];
console.log(priceNode.nodeType); // 1 (Element)
console.log(priceNode.firstChild.nodeType); // 3 (Text Node)
\`\`\`
`,
          km: `### ប្រភេទ Node ផ្សេងៗក្នុង XML DOM

អ្វីៗគ្រប់យ៉ាងនៅក្នុងឯកសារ XML សុទ្ធតែជា Node!

* **Element Node (Type 1):** រាល់ Tag XML (ឧទាហរណ៍ \`<price>\`)។
* **Attribute Node (Type 2):** Attribute ក្នុង Tag (ឧទាហរណ៍ \`currency="USD"\`)។
* **Text Node (Type 3):** អត្ថបទអក្សរដែលស្ថិតនៅក្នុង Element។
* **Comment Node (Type 8):** កំណត់ចំណាំ \`<!-- comment -->\`។
* **Document Node (Type 9):** រចនាសម្ព័ន្ធឯកសារទាំងមូល។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="nodetype-out"></div>
  <script>
    const xmlStr = '<product code="P99"><title>Wireless Mouse</title></product>';
    const doc = new DOMParser().parseFromString(xmlStr, "text/xml");
    const elem = doc.documentElement;
    const txt = elem.querySelector("title").firstChild;
    document.getElementById("nodetype-out").innerHTML = 
      "Root element nodeType: " + elem.nodeType + "<br>" +
      "Text child nodeType: " + txt.nodeType;
  </script>
</body>
</html>`
      },
      {
        id: "xml-dom-traversing",
        title: {
          en: "Accessing and Traversing XML Nodes",
          km: "ការចូលទៅកាន់ និងការធ្វើដំណើររវាង XML Nodes"
        },
        content: {
          en: `### Navigating the Node Tree

You can traverse between parent, child, and sibling nodes using standardized DOM navigation properties:

* \`parentNode\`: Returns the immediate parent node.
* \`childNodes\`: Returns a NodeList of all child nodes (including whitespace text nodes).
* \`firstChild\` / \`lastChild\`: Returns first/last child node.
* \`nextSibling\` / \`previousSibling\`: Navigates sideways to adjacent nodes.

#### Example
\`\`\`javascript
const book = xmlDoc.getElementsByTagName("book")[0];
const title = book.getElementsByTagName("title")[0].textContent;
const nextSibling = book.nextElementSibling;
\`\`\`
`,
          km: `### ការធ្វើដំណើររវាង Nodes ក្នុង Tree

យើងអាចធ្វើដំណើររវាង Node ឪពុក កូន និងបងប្អូន ដោយប្រើប្រាស់ DOM Navigation Properties៖

* \`parentNode\`: ត្រឡប់ Node ឪពុក។
* \`childNodes\`: ត្រឡប់ List នៃ Node កូនទាំងអស់។
* \`firstChild\` / \`lastChild\`: ត្រឡប់ Node កូនដំបូង ឬចុងក្រោយ។
* \`nextSibling\` / \`previousSibling\`: ធ្វើដំណើរទៅ Node បន្ទាប់ ឬមុន។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <ul id="menu-list"></ul>
  <script>
    const xmlMenu = \`<?xml version="1.0"?>
      <menu>
        <item>Lok Lak Rice</item>
        <item>Amok Fish</item>
        <item>Iced Coffee</item>
      </menu>\`;
    const doc = new DOMParser().parseFromString(xmlMenu, "text/xml");
    const items = doc.documentElement.childNodes;
    let html = "";
    for(let i = 0; i < items.length; i++) {
      if(items[i].nodeType === 1) {
        html += "<li>" + items[i].textContent + "</li>";
      }
    }
    document.getElementById("menu-list").innerHTML = html;
  </script>
</body>
</html>`
      },
      {
        id: "xml-dom-node-values",
        title: {
          en: "Getting and Changing Node Values",
          km: "ការទាញយក និងផ្លាស់ប្តូរតម្លៃ Node"
        },
        content: {
          en: `### Reading & Updating Node Content

To get or update the text content inside an XML element:

1. **Using \`textContent\` (Recommended):** Gets/sets text content directly.
2. **Using \`nodeValue\` on Text Child:**
   \`\`\`javascript
   // Get text value
   let name = elem.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   // Set text value
   elem.getElementsByTagName("name")[0].childNodes[0].nodeValue = "New Name";
   \`\`\`
3. **Getting and Changing Attributes:**
   \`\`\`javascript
   let id = elem.getAttribute("id");
   elem.setAttribute("id", "NEW-999");
   \`\`\`
`,
          km: `### ការអាន និងបច្ចុប្បន្នភាពព័ត៌មាន Node

ដើម្បីអាន ឬកែប្រែអត្ថបទក្នុង Element XML៖
* \`textContent\`: ទាញយក ឬកែប្រែអត្ថបទដោយផ្ទាល់ (ងាយស្រួលបំផុត)។
* \`getAttribute("attr")\` / \`setAttribute("attr", "val")\`: ប្រើសម្រាប់អាន និងកែប្រែតម្លៃ Attribute។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <p id="status-display"></p>
  <button onclick="updateXml()">Change Price in XML</button>

  <script>
    const xmlRaw = '<product><price currency="USD">100</price></product>';
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlRaw, "text/xml");

    function render() {
      const p = xmlDoc.getElementsByTagName("price")[0];
      document.getElementById("status-display").innerText = 
        "Current Price: " + p.textContent + " " + p.getAttribute("currency");
    }

    function updateXml() {
      const p = xmlDoc.getElementsByTagName("price")[0];
      p.textContent = "150";
      p.setAttribute("currency", "EUR");
      render();
    }
    render();
  </script>
</body>
</html>`
      },
      {
        id: "xml-dom-manipulation",
        title: {
          en: "Creating, Adding, Removing, and Cloning Nodes",
          km: "ការបង្កើត បន្ថែម លុប និងចម្លង Nodes"
        },
        content: {
          en: `### Dynamic XML DOM Manipulation Methods

You can construct and reshape XML documents dynamically in JavaScript using standard DOM manipulation methods:

* **\`createElement("tag")\`**: Creates a new element node.
* **\`createTextNode("text")\`**: Creates a text node.
* **\`appendChild(child)\`**: Appends a child node as the last child.
* **\`insertBefore(newNode, refNode)\`**: Inserts a node before an existing child.
* **\`removeChild(child)\`**: Removes a specified child node.
* **\`replaceChild(newNode, oldNode)\`**: Replaces one child node with another.
* **\`cloneNode(deepBool)\`**: Clones a node (pass \`true\` to copy children recursively).

\`\`\`javascript
const newElement = xmlDoc.createElement("discount");
newElement.textContent = "20%";
xmlDoc.documentElement.appendChild(newElement);
\`\`\`
`,
          km: `### ការកែប្រែរចនាសម្ព័ន្ធ XML DOM ដោយថាមវន្ត

យើងអាចបង្កើត និងកែប្រែឯកសារ XML តាមចិត្តនៅក្នុង JavaScript ដោយប្រើ Method ដូចជា៖
* \`createElement("tag")\`: បង្កើត Element ថ្មី។
* \`createTextNode("text")\`: បង្កើត Text Node ថ្មី។
* \`appendChild(child)\`: បន្ថែម Child Node ទៅខាងចុង។
* \`removeChild(child)\`: លុប Child Node ចោល។
* \`cloneNode(true)\`: ចម្លង Node ព្រមទាំងកូនៗទាំងអស់។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="output-xml"></div>
  <button onclick="addStudent()">Add Student Node</button>

  <script>
    const xmlData = '<classroom></classroom>';
    const doc = new DOMParser().parseFromString(xmlData, "text/xml");
    let count = 1;

    function addStudent() {
      const student = doc.createElement("student");
      student.setAttribute("id", "S" + count);
      student.textContent = "Student #" + count;
      doc.documentElement.appendChild(student);
      count++;
      
      const serializer = new XMLSerializer();
      document.getElementById("output-xml").innerText = serializer.serializeToString(doc);
    }
    addStudent();
  </script>
</body>
</html>`
      }
    ]
  },
  {
    id: "xpath",
    title: {
      en: "4. XPath",
      km: "៤. XPath (XML Path Language)"
    },
    lessons: [
      {
        id: "xpath-intro",
        title: {
          en: "Introduction to XPath",
          km: "ការណែនាំអំពី XPath"
        },
        content: {
          en: `### What is XPath?

**XPath** stands for **XML Path Language**. It uses expression paths (similar to filesystem folder paths) to navigate through elements and attributes in an XML document.

#### Why Use XPath?
Instead of writing complex nested loops in JavaScript to find specific elements, an XPath expression can locate items instantly:

* Find all products priced over $50.
* Select the email address of a specific user ID.
* Count total items in an order catalog.

XPath is a major building block of XSLT, XQuery, and modern browser XML processing APIs.
`,
          km: `### អ្វីទៅជា XPath?

**XPath** មកពីពាក្យ **XML Path Language**។ វាប្រើប្រាស់ Expression Path (ស្រដៀងនឹង Path នៃ Folder កុំព្យូទ័រ) ដើម្បីស្វែងរក Element និង Attribute ក្នុងឯកសារ XML។

ជំនួសឱ្យការសរសេរ Loop ច្រើនជាន់ក្នុង JavaScript Expression XPath អាចស្វែងរកទិន្នន័យបានភ្លាមៗ!
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<store>
  <book category="cooking">
    <title lang="en">Everyday Amok Recipe</title>
    <price>12.00</price>
  </book>
  <book category="tech">
    <title lang="en">Learn XML Fast</title>
    <price>29.99</price>
  </book>
</store>`
      },
      {
        id: "xpath-syntax-nodes",
        title: {
          en: "XPath Nodes and Selection Syntax",
          km: "XPath Nodes និង Syntax ជ្រើសរើសទិន្នន័យ"
        },
        content: {
          en: `### Core XPath Location Path Expressions

| Expression | Description |
| :--- | :--- |
| \`nodename\` | Selects all child nodes with the name "nodename". |
| \`/\` | Selects from the root node. |
| \`//\` | Selects nodes anywhere in the document matching the selection. |
| \`.\` | Selects the current node. |
| \`..\` | Selects the parent of the current node. |
| \`@\` | Selects attributes. |

#### XPath Predicates (Filter Conditions)
Predicates are written inside square brackets \`[ ]\` to filter specific nodes:

* \`/store/book[1]\`: Selects the first book element.
* \`/store/book[price > 20.00]\`: Selects books costing over $20.00.
* \`//title[@lang='en']\`: Selects all title tags having attribute \`lang="en"\`.
`,
          km: `### Syntax គ្រឹះនៃ XPath

* \`nodename\`: ជ្រើសរើស Node កូនទាំងអស់តាមឈ្មោះ។
* \`/\`: ជ្រើសរើសចាប់ពី Root Node។
* \`//\`: ជ្រើសរើស Node ទាំងអស់នៅទីណាក៏បានក្នុងឯកសារ។
* \`@\`: ជ្រើសរើស Attribute (ឧទាហរណ៍ \`@id\`)។
* \`[predicate]\`: ប្រើប្រាស់ Predicate \`[ ]\` ដើម្បី Filter លក្ខខណ្ឌ (ឧទាហរណ៍ \`//book[price > 20]\`)។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>XPath Browser Evaluate Demo</h3>
  <div id="result"></div>

  <script>
    const xmlText = \`<?xml version="1.0"?>
      <library>
        <book price="15"><title>Khmer History</title></book>
        <book price="25"><title>Modern JavaScript</title></book>
      </library>\`;
    const doc = new DOMParser().parseFromString(xmlText, "text/xml");
    
    // Evaluate XPath expression for books with price > 20
    const evaluator = new XPathEvaluator();
    const result = evaluator.evaluate("//book[@price > 20]/title", doc, null, XPathResult.STRING_TYPE, null);
    
    document.getElementById("result").innerText = "Expensive Book: " + result.stringValue;
  </script>
</body>
</html>`
      },
      {
        id: "xpath-axes-operators",
        title: {
          en: "XPath Axes and Operators",
          km: "XPath Axes និង Operators"
        },
        content: {
          en: `### Navigating Context with XPath Axes

An **Axis** defines a node-set relative to the current context node:

* \`ancestor::*\`: Selects all ancestors (parent, grandparent, etc.).
* \`child::*\`: Selects all direct children.
* \`descendant::*\`: Selects all descendants (children, grandchildren, etc.).
* \`following-sibling::*\`: Selects all siblings after the current node.
* \`preceding-sibling::*\`: Selects all siblings before the current node.

#### XPath Operators
* **Arithmetic:** \`+\`, \`-\`, \`*\`, \`div\`, \`mod\`
* **Comparison:** \`=\`, \`!=\`, \`<\`, \`<=\`, \`>\`, \`>=\`
* **Boolean Logic:** \`and\`, \`or\`
`,
          km: `### ការរុករកតាម XPath Axes និង Operators

**Axis** កំណត់ទិសដៅស្វែងរក Node ធៀបនឹង Node បច្ចុប្បន្ន៖
* \`ancestor::*\`: Node ជីដូនជីតា/ឪពុកម្តាយទាំងអស់។
* \`descendant::*\`: Node កូនចៅទាំងអស់។
* \`following-sibling::*\`: Node បងប្អូនដែលនៅខាងក្រោយ។

Operators គណិតវិទ្យារួមមាន \`+\`, \`-\`, \`*\`, \`div\`, \`mod\` និងប្រៀបធៀប \`=\`, \`!=\`, \`and\`, \`or\`។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<company>
  <department name="Engineering">
    <employee rank="Senior">Dara</employee>
    <employee rank="Junior">Vibol</employee>
  </department>
</company>`
      }
    ]
  },
  {
    id: "xslt",
    title: {
      en: "5. XSLT (XML Stylesheets)",
      km: "៥. XSLT (ការបំប្លែងរចនាប័ទ្ម XML)"
    },
    lessons: [
      {
        id: "xslt-intro",
        title: {
          en: "Introduction to XSLT",
          km: "ការណែនាំអំពី XSLT"
        },
        content: {
          en: `### What is XSLT?

**XSLT** stands for **eXtensible Stylesheet Language Transformations**. It is a declarative XML-based programming language used to transform XML documents into other formats, such as **HTML**, plain text, or another XML schema.

#### How XSLT Works
An XSLT Processor takes an **Input XML Document** and an **XSLT Stylesheet File** to produce a styled **Output Document**.

\`\`\`
[Input XML] + [XSLT Stylesheet] === (XSLT Processor) ===> [HTML Page]
\`\`\`
`,
          km: `### អ្វីទៅជា XSLT?

**XSLT** មកពីពាក្យ **eXtensible Stylesheet Language Transformations**។ វាជាភាសាកូដដែលប្រើប្រាស់ដើម្បីបំប្លែងឯកសារ XML ទៅជាទម្រង់ផ្សេងទៀតដូចជា **HTML**, Text ឬ XML ថ្មី។

XSLT Processor យកឯកសារ XML បញ្ចូលគ្នាជាមួយ XSLT Stylesheet ដើម្បីបង្កើតជាទំព័រ HTML។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Transformed XML to HTML</h2>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`
      },
      {
        id: "xslt-elements",
        title: {
          en: "Core XSLT Elements",
          km: "ធាតុចម្បងនៃ XSLT"
        },
        content: {
          en: `### Essential XSLT Directive Elements

1. **\`<xsl:template match="path">\`**: Defines a rule template that matches an XPath pattern.
2. **\`<xsl:value-of select="path" />\`**: Extracts and outputs the text value of a matched node.
3. **\`<xsl:for-each select="path">\`**: Loops through a collection of matching nodes.
4. **\`<xsl:sort select="path" order="ascending|descending" />\`**: Sorts output items inside a loop.
5. **\`<xsl:if test="condition">\`**: Conditional block that outputs content if true.
6. **\`<xsl:choose>\` / \`<xsl:when>\` / \`<xsl:otherwise>\`**: Multi-way switch/case statement.

#### Example
\`\`\`xml
<xsl:for-each select="catalog/product">
  <xsl:if test="price &gt; 50">
    <p><xsl:value-of select="title"/> - $<xsl:value-of select="price"/></p>
  </xsl:if>
</xsl:for-each>
\`\`\`
`,
          km: `### ធាតុបញ្ជាសំខាន់ៗនៃ XSLT

* \`<xsl:template match="/">\`: កំណត់ Template បំប្លែងទិន្នន័យ។
* \`<xsl:value-of select="path"/>\`: ទាញយកតម្លៃអក្សរនៃ Node។
* \`<xsl:for-each select="path">\`: រត់ Loop លើ Node ដែលត្រូវគ្នា។
* \`<xsl:sort select="path"/>\`: តម្រៀបលំដាប់លំដោយ។
* \`<xsl:if test="condition">\`: បង្ហាញទិន្នន័យតាមលក្ខខណ្ឌ។
* \`<xsl:choose>\` / \`<xsl:when>\`: Switch/Case Statement ក្នុង XSLT។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/menu">
    <html>
      <body>
        <h2>Food Menu</h2>
        <ul>
          <xsl:for-each select="item">
            <li><xsl:value-of select="name"/> - $<xsl:value-of select="price"/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`
      },
      {
        id: "xslt-client-vs-server",
        title: {
          en: "Applying XSLT: Client-Side vs Server-Side",
          km: "ការប្រើប្រាស់ XSLT៖ ខាង Client ធៀបនឹង Server"
        },
        content: {
          en: `### Client-Side vs Server-Side XSLT Transformation

XSLT transformations can take place either in the end-user's browser or on a web server before sending the response.

#### 1. Client-Side Transformation (JavaScript \`XSLTProcessor\`)
Browsers support native client-side transformation using \`XSLTProcessor\`:

\`\`\`javascript
const processor = new XSLTProcessor();
processor.importStylesheet(xsltDoc);
const resultFragment = processor.transformToFragment(xmlDoc, document);
document.getElementById("target").appendChild(resultFragment);
\`\`\`

#### 2. Server-Side Transformation (Node.js / Java / PHP)
Transforming XML to HTML on the server is preferred for SEO and mobile performance, as it delivers pre-rendered HTML straight to clients.
`,
          km: `### ការបំប្លែង XSLT នៅខាង Client និង Server

* **Client-Side:** Browser របស់សិស្ស/អ្នកប្រើប្រាស់ជាអ្នកទាញយក XML + XSLT ហើយបំប្លែងវាដោយប្រើ \`XSLTProcessor\`។
* **Server-Side:** Server (Node.js, PHP, Java) បំប្លែង XML ទៅជា HTML រួចរាល់មុននឹងបញ្ជូនទៅ Browser (ល្អសម្រាប់ SEO និងល្បឿនទូរស័ព្ទ)។
`
        },
        starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>Client-Side XSLT Processor Demo</h3>
  <div id="output-html">XSLT transformation ready</div>
</body>
</html>`
      }
    ]
  },
  {
    id: "xquery",
    title: {
      en: "6. XQuery",
      km: "៦. XQuery (ភាសា Query នៃ XML)"
    },
    lessons: [
      {
        id: "xquery-intro",
        title: {
          en: "Introduction to XQuery",
          km: "ការណែនាំអំពី XQuery"
        },
        content: {
          en: `### What is XQuery?

**XQuery** is to XML what **SQL** is to relational databases. It is a language designed by W3C to query, extract, and manipulate collections of structured XML data.

#### Key Functions of XQuery
* Extract information from native XML databases or XML files.
* Filter and transform XML documents into HTML or JSON reports.
* Perform complex joins across multiple XML data sources.
`,
          km: `### អ្វីទៅជា XQuery?

**XQuery** ចំពោះ XML គឺប្រៀបដូចជា **SQL** ចំពោះ relational databases ដែរ។ វាជាភាសា query សម្រាប់ស្វែងរក និងទាញយកទិន្នន័យពីឯកសារ XML។
`
        },
        starterCode: `xquery version "1.0";
for $x in doc("books.xml")/bookstore/book
where $x/price > 30
return $x/title`
      },
      {
        id: "xquery-flwor",
        title: {
          en: "FLWOR Expressions in XQuery",
          km: "FLWOR Expressions ក្នុង XQuery"
        },
        content: {
          en: `### Understanding FLWOR

**FLWOR** (pronounced "flower") stands for:

* **For:** Loops through a node sequence.
* **Let:** Binds variables to expression values.
* **Where:** Filters results based on boolean criteria.
* **Order by:** Sorts output by specified elements.
* **Return:** Defines what result structure is generated.

#### Example FLWOR Query
\`\`\`xquery
for $x in doc("inventory.xml")/items/item
let $discount := $x/price * 0.9
where $x/stock > 0
order by $discount descending
return <sale><name>{data($x/name)}</name><price>{$discount}</price></sale>
\`\`\`
`,
          km: `### ការយល់ដឹងអំពី FLWOR

**FLWOR** តំណាងឱ្យ៖
* **For:** រត់ Loop លើ Node។
* **Let:** ប្រកាស Variable។
* **Where:** លក្ខខណ្ឌ Filter។
* **Order by:** តម្រៀបលំដាប់។
* **Return:** លទ្ធផលដែលត្រូវ Output។
`
        },
        starterCode: `xquery version "1.0";
for $item in /menu/item
where $item/price < 10
order by $item/name
return <cheapItem>{$item/name/text()}</cheapItem>`
      }
    ]
  },
  {
    id: "xml-dtd",
    title: {
      en: "7. XML DTD (Document Type Definition)",
      km: "៧. XML DTD (Document Type Definition)"
    },
    lessons: [
      {
        id: "dtd-intro",
        title: {
          en: "Introduction to DTD",
          km: "ការណែនាំអំពី DTD"
        },
        content: {
          en: `### Validating XML with DTD

A **DTD (Document Type Definition)** defines the legal structure, elements, attributes, and entities allowed inside an XML document.

#### Well-Formed vs Valid XML
* **Well-Formed XML:** Follows basic syntax rules (closing tags, single root, quotes).
* **Valid XML:** Is well-formed AND adheres strictly to a DTD or XSD schema definition!

#### Internal DTD Example
\`\`\`xml
<?xml version="1.0"?>
<!DOCTYPE note [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to (#PCDATA)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
]>
<note>
  <to>Sok</to>
  <from>Dara</from>
  <heading>Reminder</heading>
  <body>Meeting at 2 PM</body>
</note>
\`\`\`
`,
          km: `### ការផ្ទៀងផ្ទាត់ XML ជាមួយ DTD

**DTD (Document Type Definition)** កំណត់រចនាសម្ព័ន្ធ Element, Attribute និង Entity ដែលអនុញ្ញាតឱ្យប្រើប្រាស់ក្នុងឯកសារ XML។

* **Well-Formed XML:** ត្រឹមត្រូវតាម Syntax គ្រឹះ។
* **Valid XML:** Well-formed ផង និងត្រឹមត្រូវតាមច្បាប់ DTD/XSD ផង!
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE product [
  <!ELEMENT product (name, price)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
]>
<product>
  <name>Kbach Keyboard</name>
  <price>45.00</price>
</product>`
      },
      {
        id: "dtd-elements-entities",
        title: {
          en: "DTD Elements, Attributes, and Entities",
          km: "DTD Elements, Attributes និង Entities"
        },
        content: {
          en: `### DTD Building Blocks

#### Declaring Elements
* \`<!ELEMENT name (#PCDATA)>\`: Element containing parsed character text.
* \`<!ELEMENT parent (child1, child2)>\`: Element containing child elements in exact sequence.
* \`<!ELEMENT parent (child)*>\`: Zero or more repetitions (\`*\`).
* \`<!ELEMENT parent (child)+>\`: One or more repetitions (\`+\`).
* \`<!ELEMENT parent (child)?>\`: Optional element (\`?\`).

#### Declaring Attributes & Entities
\`\`\`dtd
<!ATTLIST payment type CDATA #REQUIRED>
<!ENTITY company "SabayCode Co., Ltd.">
\`\`\`
`,
          km: `### ប្លុកគ្រឹះនៃ DTD

* \`#PCDATA\`: Parsed Character Data (អត្ថបទធម្មតា)។
* \`*\`: គ្មាន ឬច្រើន (0 or more)។
* \`+\`: យ៉ាងហោចណាស់មួយ (1 or more)។
* \`?\`: មាន ឬគ្មាន (0 or 1)។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE invoice [
  <!ELEMENT invoice (item+)>
  <!ELEMENT item (title, qty, price)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT qty (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
]>
<invoice>
  <item>
    <title>Monitor 27-inch</title>
    <qty>2</qty>
    <price>200.00</price>
  </item>
</invoice>`
      }
    ]
  },
  {
    id: "xml-schema",
    title: {
      en: "8. XML Schema (XSD)",
      km: "៨. XML Schema (XSD)"
    },
    lessons: [
      {
        id: "xsd-intro",
        title: {
          en: "Introduction to XML Schema (XSD)",
          km: "ការណែនាំអំពី XML Schema (XSD)"
        },
        content: {
          en: `### Why XSD Replaced DTD

**XML Schema Definition (XSD)** is an XML-based alternative to DTD.

#### Advantages of XSD over DTD
1. **Written in XML:** XSD schemas are valid XML files themselves, so you don't need a separate parser.
2. **Rich Data Types:** Supports integers, decimals, dates, booleans, strings, and custom patterns.
3. **Namespace Awareness:** Fully supports XML Namespaces.
4. **Extensible & Object-Oriented:** Supports type inheritance and restrictions.

#### Basic XSD Structure (\`schema.xsd\`)
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string"/>
        <xs:element name="age" type="xs:integer"/>
        <xs:element name="enrolledDate" type="xs:date"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
\`\`\`
`,
          km: `### មូលហេតុដែល XSD ជំនួស DTD

**XML Schema (XSD)** គឺជាវិធីសាស្ត្រទំនើបសម្រាប់ផ្ទៀងផ្ទាត់ XML។

អត្ថប្រយោជន៍នៃ XSD៖
១. សរសេរជា XML ដោយផ្ទាល់។
២. ទ្រទ្រង់ Data Types ច្រើន (Integer, Date, Decimal, Boolean, String)។
៣. ទ្រទ្រង់ XML Namespaces ពេញលេញ។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="course">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="title" type="xs:string"/>
        <xs:element name="price" type="xs:decimal"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`
      },
      {
        id: "xsd-types-restrictions",
        title: {
          en: "XSD Data Types, Restrictions, and Indicators",
          km: "XSD Data Types, លក្ខខណ្ឌកម្រិត និង Indicators"
        },
        content: {
          en: `### Elements, Types, and Restrictions

#### Simple vs Complex Elements
* **Simple Element:** Contains only text/data (e.g. \`<xs:element name="age" type="xs:integer"/>\`).
* **Complex Element:** Contains child elements or attributes.

#### Restrictions (Facets)
You can constrain values using facets such as \`minInclusive\`, \`maxInclusive\`, or regular expressions (\`pattern\`):

\`\`\`xml
<xs:element name="score">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="100"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
\`\`\`
`,
          km: `### XSD Data Types និងការកំណត់លក្ខខណ្ឌ

* **Simple Element:** ផ្ទុកតែតម្លៃទិន្នន័យ (គ្មាន Child គ្មាន Attribute)។
* **Complex Element:** ផ្ទុក Child Elements ឬ Attributes។
* **Restrictions (Facets):** កំណត់កម្រិតតម្លៃទិន្នន័យ (ឧទាហរណ៍ ពិន្ទុចាប់ពី 0 ដល់ 100)។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="quantity">
    <xs:simpleType>
      <xs:restriction base="xs:integer">
        <xs:minInclusive value="1"/>
        <xs:maxInclusive value="50"/>
      </xs:restriction>
    </xs:simpleType>
  </xs:element>
</xs:schema>`
      }
    ]
  },
  {
    id: "xml-web-services",
    title: {
      en: "9. XML Web Services",
      km: "៩. XML Web Services (SOAP, WSDL, RSS)"
    },
    lessons: [
      {
        id: "xml-services-overview",
        title: {
          en: "Overview of XML Web Services",
          km: "ទិដ្ឋភាពទូទៅនៃ XML Web Services"
        },
        content: {
          en: `### XML in Web Services & Enterprise Architectures

XML powers foundational enterprise communication protocols:

1. **SOAP (Simple Object Access Protocol):** An XML protocol for sending web service requests and responses securely across HTTP.
2. **WSDL (Web Services Description Language):** An XML document describing the endpoints, methods, and parameters offered by a web service.
3. **RSS (RDF Site Summary / Really Simple Syndication):** An XML format for broadcasting blog posts and news feeds.
4. **RDF (Resource Description Framework):** An XML model for semantic web metadata representations.
`,
          km: `### XML នៅក្នុង Web Services របស់ក្រុមហ៊ុនធំៗ

XML គឺជាបេះដូងនៃ Protocol ទំនាក់ទំនងធំៗ៖
* **SOAP:** Protocol សុវត្ថិភាពសម្រាប់ផ្ញើសារ web service តាម XML។
* **WSDL:** ឯកសារ XML ពិពណ៌នាអំពី Method និង API Endpoints។
* **RSS:** សម្រាប់ធ្វើ Syndication ព័ត៌មាន និងអត្ថបទ Web។
`
        },
        starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>SabayCode News</title>
    <link>https://sabaycode.com</link>
    <description>Latest tech tutorials and coding news in Cambodia</description>
    <item>
      <title>XML Master Track Launched</title>
      <pubDate>Tue, 28 Jul 2026 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`
      }
    ]
  }
];

export const xmlReferences: ReferenceItem[] = [
  {
    id: "prolog",
    syntax: "<?xml version='1.0' encoding='UTF-8'?>",
    desc: { en: "XML declaration defining document version and character encoding", km: "ការប្រកាសបើកឯកសារ XML នៅជួរដំបូង" },
    example: "<?xml version='1.0' encoding='UTF-8'?>"
  },
  {
    id: "elem",
    syntax: "<tagname>content</tagname>",
    desc: { en: "XML Element definition", km: "ការកំណត់ធាតុ XML ជាមួយ Tag បើក និងបិទ" },
    example: "<price>19.99</price>"
  },
  {
    id: "attr",
    syntax: "<tag attr='value'>",
    desc: { en: "XML Element Attribute", km: "ការបន្ថែម Attribute ក្នុង Tag" },
    example: "<book category='tech'>"
  },
  {
    id: "xmlns",
    syntax: "xmlns:prefix='URI'",
    desc: { en: "XML Namespace declaration", km: "ការប្រកាស Namespace ដើម្បីការពារការជាន់ឈ្មោះ" },
    example: "xmlns:h='http://www.w3.org/1999/xhtml'"
  },
  {
    id: "cdata",
    syntax: "<![CDATA[ raw text ]]>",
    desc: { en: "Unparsed Character Data block", km: "Block ផ្ទុក Text ដែលមិនត្រូវ Parse ដោយ XML" },
    example: "<![CDATA[ 5 < 10 && 10 > 2 ]]"
  },
  {
    id: "comment",
    syntax: "<!-- Comment text -->",
    desc: { en: "XML Comment syntax", km: "កំណត់ចំណាំកូដ XML" },
    example: "<!-- Store Config -->"
  }
];

export const xmlQuizzes: Quiz[] = [
  {
    id: "xml-q1",
    question: { en: "What does XML stand for?", km: "តើ XML មកពីពាក្យពេញថាអ្វី?" },
    options: {
      en: ["eXtensible Markup Language", "eXtra Modern Linkage", "eXecutable Modeling Logic", "X-Ray Media Layer"],
      km: ["eXtensible Markup Language", "eXtra Modern Linkage", "eXecutable Modeling Logic", "X-Ray Media Layer"]
    },
    correctIndex: 0,
    explanation: {
      en: "XML stands for eXtensible Markup Language.",
      km: "XML មកពីពាក្យថា eXtensible Markup Language។"
    }
  },
  {
    id: "xml-q2",
    question: { en: "Which statement is true regarding XML tags?", km: "តើការអះអាងមួយណាត្រឹមត្រូវអំពី XML tags?" },
    options: {
      en: ["XML tags are pre-defined like HTML", "XML tags are case-insensitive", "XML tags are custom defined and case-sensitive", "XML tags do not require closing tags"],
      km: ["XML tags មានស្រាប់ដូច HTML", "XML tags មិនប្រកាន់អក្សរតូចធំទេ", "XML tags បង្កើតដោយខ្លួនឯង និងប្រកាន់អក្សរតូចធំ (Case-sensitive)", "XML tags មិនបាច់មាន Tag បិទទេ"]
    },
    correctIndex: 2,
    explanation: {
      en: "XML has no predefined tags and all tags are strictly case-sensitive.",
      km: "XML គ្មាន Predefined tags ទេ ហើយវាប្រកាន់អក្សរតូចធំជានិច្ច។"
    }
  },
  {
    id: "xml-q3",
    question: { en: "How many root elements can a valid XML document have?", km: "តើឯកសារ XML អាចមាន Root elements ប៉ុន្មាន?" },
    options: {
      en: ["Zero", "Exactly one", "Up to two", "Unlimited"],
      km: ["គ្មានសោះ", "ត្រឹមតែមួយគត់", "យ៉ាងច្រើនពីរ", "មិនកំណត់"]
    },
    correctIndex: 1,
    explanation: {
      en: "Every well-formed XML document MUST contain exactly one single root element.",
      km: "រាល់ឯកសារ XML Well-formed ទាំងអស់ត្រូវតែមាន Root element តែមួយគត់។"
    }
  },
  {
    id: "xml-q4",
    question: { en: "What is the primary purpose of XML Namespaces (xmlns)?", km: "តើគោលបំណងចម្បងនៃ XML Namespaces (xmlns) គឺអ្វី?" },
    options: {
      en: ["To speed up XML downloads", "To resolve element naming conflicts when merging XML sources", "To convert XML to JSON automatically", "To encrypt XML files"],
      km: ["ដើម្បីបង្កើនល្បឿនទាញយក", "ដើម្បីដោះស្រាយបញ្ហាជាន់ឈ្មោះ Tag នៅពេលបញ្ចូល XML ច្រើនប្រភព", "ដើម្បីបំប្លែង XML ទៅ JSON", "ដើម្បី Encrypt ឯកសារ XML"]
    },
    correctIndex: 1,
    explanation: {
      en: "Namespaces prevent naming collisions when combining different XML vocabularies.",
      km: "Namespaces ជួយការពារការជាន់ឈ្មោះ Tag នៅពេលបញ្ចូល XML Vocabularies ច្រើនប្រភព។"
    }
  }
];

export const xmlMiniProjects: MiniProject[] = [
  {
    id: "xml-project-restaurant-menu",
    title: { en: "Cambodian Restaurant XML Menu Dataset", km: "បង្កើតទិន្នន័យ XML ម៉ឺនុយអាហារដ្ឋានខ្មែរ" },
    desc: {
      en: "Design a well-formed XML document representing a Cambodian restaurant menu with food categories, items, prices in USD, and ingredients list.",
      km: "រៀបចំឯកសារ XML ត្រឹមត្រូវតាមស្តង់ដារដែលបង្ហាញពីម៉ឺនុយអាហារដ្ឋានខ្មែរ រួមមាន ប្រភេទអាហារ តម្លៃជាដុល្លារ និងគ្រឿងផ្សំ។"
    },
    starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Write your Cambodian Restaurant Menu XML structure here -->
<restaurant name="Siem Reap Taste">
  <!-- Add menu categories and food items -->
</restaurant>`,
    solutionCode: `<?xml version="1.0" encoding="UTF-8"?>
<restaurant name="Siem Reap Taste" location="Pub Street">
  <category name="Main Course">
    <item id="f01" spicy="medium">
      <name>Fish Amok</name>
      <price currency="USD">6.50</price>
      <description>Steamed snakehead fish fillet in coconut curry with kroeung paste</description>
    </item>
    <item id="f02" spicy="low">
      <name>Beef Lok Lak</name>
      <price currency="USD">7.00</price>
      <description>Stir-fried marinated beef cubes with lime pepper dip</description>
    </item>
  </category>
</restaurant>`
  },
  {
    id: "xml-project-parser-table",
    title: { en: "Parse XML to Interactive HTML Table", km: "បំប្លែងទិន្នន័យ XML ទៅជាតារាង HTML" },
    desc: {
      en: "Write JavaScript using DOMParser to convert an XML dataset of tech courses into an HTML data table dynamically.",
      km: "សរសេរ JavaScript ដោយប្រើ DOMParser ដើម្បីបំប្លែងទិន្នន័យ XML វគ្គសិក្សាបច្ចេកវិទ្យា ទៅជាតារាង HTML ដោយស្វ័យប្រវត្តិ។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>📚 SabayCode Course Catalog</h2>
  <div id="table-container"></div>

  <script>
    const xmlText = \`<?xml version="1.0"?>
      <courses>
        <course><title>HTML5 Basics</title><level>Beginner</level><hours>6</hours></course>
        <course><title>JavaScript ES6</title><level>Intermediate</level><hours>12</hours></course>
        <course><title>XML Masterclass</title><level>All Levels</level><hours>4</hours></course>
      </courses>\`;

    // TODO: Parse xmlText with DOMParser and render an HTML <table> inside #table-container
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #334155; padding: 8px 12px; text-align: left; }
    th { background-color: #1e293b; color: #f5a623; }
    tr:nth-child(even) { background-color: #0f172a; color: #f8fafc; }
    tr:nth-child(odd) { background-color: #1e293b; color: #f8fafc; }
  </style>
</head>
<body>
  <h2>📚 SabayCode Course Catalog</h2>
  <div id="table-container"></div>

  <script>
    const xmlText = \`<?xml version="1.0"?>
      <courses>
        <course><title>HTML5 Basics</title><level>Beginner</level><hours>6</hours></course>
        <course><title>JavaScript ES6</title><level>Intermediate</level><hours>12</hours></course>
        <course><title>XML Masterclass</title><level>All Levels</level><hours>4</hours></course>
      </courses>\`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const courses = xmlDoc.getElementsByTagName("course");

    let tableHtml = "<table><tr><th>Title</th><th>Level</th><th>Hours</th></tr>";
    for (let c of courses) {
      const title = c.getElementsByTagName("title")[0].textContent;
      const level = c.getElementsByTagName("level")[0].textContent;
      const hours = c.getElementsByTagName("hours")[0].textContent;
      tableHtml += \`<tr><td>\${title}</td><td>\${level}</td><td>\${hours} hrs</td></tr>\`;
    }
    tableHtml += "</table>";
    document.getElementById("table-container").innerHTML = tableHtml;
  </script>
</body>
</html>`
  },
  {
    id: "xml-project-xml-to-json",
    title: { en: "Convert XML Dataset to JSON Object", km: "បំប្លែងទិន្នន័យ XML ទៅជា JSON" },
    desc: {
      en: "Build a JavaScript utility function that converts any standard XML node tree into a native JavaScript object / JSON string.",
      km: "បង្កើតអនុគមន៍ JavaScript សម្រាប់បំប្លែងរចនាសម្ព័ន្ធ XML Node Tree ទៅជា JSON Object ធម្មតា។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>XML to JSON Converter</h3>
  <pre id="json-output"></pre>

  <script>
    const xmlString = \`<user id="101"><name>Dara</name><role>Admin</role></user>\`;

    function xmlToJson(xml) {
      // Create a function that turns XML element to JSON object
      let obj = {};
      if (xml.nodeType === 1) { // Element
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attr = xml.attributes.item(j);
            obj["@attributes"][attr.nodeName] = attr.nodeValue;
          }
        }
      }
      if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
          const item = xml.childNodes.item(i);
          const nodeName = item.nodeName;
          if (item.nodeType === 3) { // Text
            return item.nodeValue.trim();
          }
          if (typeof obj[nodeName] == "undefined") {
            obj[nodeName] = xmlToJson(item);
          }
        }
      }
      return obj;
    }

    const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");
    const jsonObj = xmlToJson(xmlDoc.documentElement);
    document.getElementById("json-output").textContent = JSON.stringify(jsonObj, null, 2);
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<body>
  <h3>XML to JSON Converter Output</h3>
  <pre id="json-output"></pre>

  <script>
    const xmlString = \`<user id="101"><name>Dara</name><role>Admin</role></user>\`;

    function xmlToJson(xml) {
      let obj = {};
      if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attr = xml.attributes.item(j);
            obj["@attributes"][attr.nodeName] = attr.nodeValue;
          }
        }
      }
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (item.nodeType === 3) {
          const txt = item.nodeValue.trim();
          if (txt) return txt;
        } else if (item.nodeType === 1) {
          obj[nodeName] = xmlToJson(item);
        }
      }
      return obj;
    }

    const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");
    const jsonObj = xmlToJson(xmlDoc.documentElement);
    document.getElementById("json-output").textContent = JSON.stringify(jsonObj, null, 2);
  </script>
</body>
</html>`
  },
  {
    id: "xml-project-xsd-concept",
    title: { en: "XML Structure & XSD Schema Concept", km: "ការបង្កើតទម្រង់ XML ជាមួយ XSD Schema" },
    desc: {
      en: "Create an XSD schema definition that validates a student enrollment document with strict data types and constraints.",
      km: "បង្កើតឯកសារ XSD Schema សម្រាប់ផ្ទៀងផ្ទាត់ទិន្នន័យចុះឈ្មោះរៀនរបស់សិស្សជាមួយ Data Types ច្បាស់លាស់។"
    },
    starterCode: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Write an XSD schema that validates student enrollment data -->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <!-- Define student element with name, age (integer), and track -->
</xs:schema>`,
    solutionCode: `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="enrollment">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="studentName" type="xs:string"/>
        <xs:element name="age">
          <xs:simpleType>
            <xs:restriction base="xs:integer">
              <xs:minInclusive value="12"/>
              <xs:maxInclusive value="99"/>
            </xs:restriction>
          </xs:simpleType>
        </xs:element>
        <xs:element name="track" type="xs:string"/>
        <xs:element name="enrolled" type="xs:boolean"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`
  }
];
