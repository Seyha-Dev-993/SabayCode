import { Lesson } from '../types';

export const bootstrapLessonsPart3: Lesson[] = [
  {
    id: "bs5-forms",
    title: { en: "BS5 Forms", km: "ទម្រង់ទិន្នន័យ Forms" },
    content: {
      en: `# Bootstrap 5 Forms layout
Forms are vital to collect user input. Bootstrap 5 styles standard input fields beautifully by adding the **\`.form-control\`** class.

### Key Input Styling Classes
- **Form Text Inputs:** Add **\`.form-control\`** on inputs and textareas to style them with focus-glow states and full widths.
- **Labels:** Add **\`.form-label\`** on \`<label>\` tags to add clean bottom margins and light typography weights.

\`\`\`html
<div class="mb-3">
  <label for="userEmail" class="form-label">Email address</label>
  <input type="email" class="form-control" id="userEmail" placeholder="name@example.com">
</div>
\`\`\`

- **Form Sizes:** Scale input heights using \`.form-control-lg\` or \`.form-control-sm\`.`,
      km: `# ទម្រង់ទិន្នន័យ Forms ក្នុង Bootstrap 5
Forms គឺចាំបាច់ណាស់សម្រាប់ប្រមូលទិន្នន័យពីអ្នកប្រើប្រាស់។ Bootstrap 5 ជួយរចនាប្រអប់សរសេរអត្ថបទ និងបញ្ចូលទិន្នន័យបានយ៉ាងស្អាតតាមរយៈ Class **\`.form-control\`**។

### ថ្នាក់រចនាទម្រង់ទិន្នន័យសំខាន់ៗ
- **ប្រអប់បញ្ចូលអក្សរ (Inputs):** ប្រើ Class **\`.form-control\`** លើ \`<input>\` ឬ \`<textarea>\` ដើម្បីឱ្យវាមានទំហំលាតពេញ និងមានស្រមោលខៀវស្រាលពេលចុចចំ។
- **ស្លាកពន្យល់ (Labels):** ប្រើ Class **\`.form-label\`** លើ \`<label>\` ដើម្បីដាក់គម្លាតខាងក្រោម និងធ្វើឱ្យអក្សរស្អាត។

\`\`\`html
<div class="mb-3">
  <label for="userEmail" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
  <input type="email" class="form-control" id="userEmail" placeholder="ឈ្មោះ@gmail.com">
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container" style="max-width: 450px;">
    
    <!-- Clean Input Form card -->
    <div class="card p-4 shadow-sm">
      <h4 class="fw-bold text-primary mb-3">Register Account</h4>
      
      <div class="mb-3">
        <label for="fullName" class="form-label fw-semibold">Full Name</label>
        <input type="text" class="form-control form-control-lg" id="fullName" placeholder="John Doe">
      </div>

      <div class="mb-3">
        <label for="userBio" class="form-label fw-semibold">Short Bio</label>
        <textarea class="form-control" id="userBio" rows="3" placeholder="Tell us about yourself..."></textarea>
      </div>

      <button class="btn btn-primary w-100 py-2.5 rounded-pill">Sign Up</button>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-select-menus",
    title: { en: "BS5 Select Menus", km: "ម៉ឺនុយជ្រើសរើស Select" },
    content: {
      en: `# Bootstrap 5 Select Menus
To format custom dropdown selection lists inside forms, Bootstrap 5 provides the **\`.form-select\`** utility class.

### Selection Setup
Apply **\`.form-select\`** directly on any standard \`<select>\` element:
\`\`\`html
<select class="form-select" aria-label="Select city">
  <option selected>Choose option...</option>
  <option value="1">Phnom Penh</option>
  <option value="2">Siem Reap</option>
</select>
\`\`\`

- **Sizing:** Scale select boxes using \`.form-select-lg\` or \`.form-select-sm\`.`,
      km: `# ម៉ឺនុយជ្រើសរើស Select ក្នុង Bootstrap 5
ដើម្បីរៀបចំបញ្ជីទម្លាក់ជ្រើសរើស (Dropdown Selection Lists) ក្នុងទម្រង់ទិន្នន័យឱ្យស្រស់ស្អាត Bootstrap 5 ផ្តល់ Class ជំនួយ **\`.form-select\`**។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.form-select\`** ផ្ទាល់លើថេក \`<select>\`៖
\`\`\`html
<select class="form-select">
  <option selected>ជ្រើសរើសជម្រើស...</option>
  <option value="1">ភ្នំពេញ</option>
  <option value="2">សៀមរាប</option>
</select>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container" style="max-width: 450px;">
    <h3 class="mb-3">Select Dropdown styling</h3>

    <div class="mb-3">
      <label class="form-label fw-bold">Select Course Topic:</label>
      <select class="form-select form-select-lg text-primary" aria-label="Default select example">
        <option selected>Open options menu</option>
        <option value="html">HTML5 Semantic layouts</option>
        <option value="css">CSS3 Flexbox grids</option>
        <option value="bootstrap">Bootstrap 5 responsive</option>
      </select>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-checks-radios",
    title: { en: "BS5 Checks & Radios", km: "ប្រអប់គ្រីស និងរង្វង់ជ្រើសរើស" },
    content: {
      en: `# Bootstrap 5 Checks & Radios
Checks (checkboxes) and Radios (radio buttons) are used to toggle options. Bootstrap 5 wraps inputs inside a wrapper class **\`.form-check\`** to replace browser-default components with unified, custom responsive cross-browser states.

### Standard Setup
Wrap inputs inside \`.form-check\`. Use class **\`.form-check-input\`** on checkboxes, and **\`.form-check-label\`** on labels:

\`\`\`html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="acceptTerms">
  <label class="form-check-label" for="acceptTerms">
    Accept all user agreements
  </label>
</div>
\`\`\`

- **Switches toggle:** Convert a standard checkbox into a sliding switch toggle by adding **\`.form-switch\`** to the parent \`.form-check\` container!`,
      km: `# ប្រអប់គ្រីស និងរង្វង់ជ្រើសរើស ក្នុង Bootstrap 5
Checkboxes (ប្រអប់គ្រីសជ្រើសរើសច្រើន) និង Radios (រង្វង់មូលជ្រើសរើសតែមួយ) ត្រូវបានរុំដោយ Class មេ **\`.form-check\`** ដើម្បីជំនួសរូបរាងលំនាំដើមរបស់ Browser ទៅជាសមាសភាគដ៏ស្រស់ស្អាត និងស៊ីសង្វាក់គ្នា។

### របៀបសរសេរ
ព័ទ្ធជុំវិញដោយ \`.form-check\` រួចប្រើ Class **\`.form-check-input\`** លើ \`<input>\` និង Class **\`.form-check-label\`** លើ \`<label>\`៖

\`\`\`html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="acceptTerms">
  <label class="form-check-label" for="acceptTerms">
    យល់ព្រមលើលក្ខខណ្ឌប្រើប្រាស់
  </label>
</div>
\`\`\`

- **ប៊ូតុងកុងតាក់ (Switches):** ប្តូរប្រអប់គ្រីសធម្មតាឱ្យទៅជាប៊ូតុងរុញបើក/បិទ (Switch slider) បានយ៉ាងលឿន ដោយគ្រាន់តែបន្ថែម Class **\`.form-switch\`** លើប្រអប់មេ \`.form-check\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container" style="max-width: 450px;">
    <div class="card p-4 shadow-sm">
      <h5 class="fw-bold mb-3">Preferences Configurations</h5>

      <!-- Custom Switch Toggle -->
      <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked">Enable Email Notifications</label>
      </div>

      <!-- Radios Selection Group -->
      <h6 class="text-secondary mt-3 mb-2">Notification Frequency:</h6>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="freqRadio" id="radioInstantly" checked>
        <label class="form-check-label" for="radioInstantly">Instantly on update</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="freqRadio" id="radioDaily">
        <label class="form-check-label" for="radioDaily">Daily digests</label>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-range",
    title: { en: "BS5 Range", km: "របាររំកិល Range" },
    content: {
      en: `# Bootstrap 5 Range
Range controls provide horizontal sliders for picking numeric values from a sliding band.

### Setup Range Inputs
To style range sliders, apply the **\`.form-range\`** class on standard HTML inputs having \`type="range"\`:
\`\`\`html
<label for="volumeSlider" class="form-label">Volume Level</label>
<input type="range" class="form-range" id="volumeSlider" min="0" max="100">
\`\`\`

- **Limits:** Configure boundary limitations using the standard \`min\`, \`max\`, and step properties.`,
      km: `# របាររំកិល Range ក្នុង Bootstrap 5
Range ផ្តល់នូវរបាររំកិលផ្តេកដ៏ស្រស់ស្អាត ដើម្បីឱ្យអ្នកប្រើប្រាស់រុញជ្រើសរើសទំហំ តម្លៃលេខ ឬភាគរយផ្សេងៗ។

### របៀបសរសេរ
ប្រើប្រាស់ Class **\`.form-range\`** ផ្ទាល់លើកូដ input ដែលមាន \`type="range"\`៖
\`\`\`html
<label for="volumeSlider" class="form-label">កម្រិតសំឡេង</label>
<input type="range" class="form-range" id="volumeSlider" min="0" max="100">
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container" style="max-width: 400px;">
    <h3 class="mb-3">Interactive Range Input</h3>

    <div class="mb-3">
      <label for="customRange1" class="form-label fw-bold">Select Brightness: <span id="valSpan">50</span>%</label>
      <input type="range" class="form-range" id="customRange1" min="0" max="100" value="50">
    </div>

    <script>
      const range = document.getElementById('customRange1');
      const val = document.getElementById('valSpan');
      range.addEventListener('input', (e) => {
        val.textContent = e.target.value;
      });
    </script>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-input-groups",
    title: { en: "BS5 Input Groups", km: "ក្រុមប្រអប់បញ្ចូល Input Groups" },
    content: {
      en: `# Bootstrap 5 Input Groups
Input groups let you append or prepend custom texts, buttons, or select menus to standard text inputs.

### Core Input Group Structure
Wrap the elements in a **\`.input-group\`** container. Wrap the extra labels inside a **\`.input-group-text\`** class:

\`\`\`html
<div class="input-group mb-3">
  <span class="input-group-text" id="usernameAddon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="usernameAddon">
</div>
\`\`\`

- **Sizing:** Scale the entire group using \`.input-group-lg\` or \`.input-group-sm\`.`,
      km: `# ក្រុមប្រអប់បញ្ចូល Input Groups ក្នុង Bootstrap 5
Input Groups ជួយឱ្យអ្នកអាចភ្ជាប់និមិត្តសញ្ញា អត្ថបទជំនួយ ឬប៊ូតុងបញ្ជា នៅខាងដើម ឬខាងចុងនៃប្រអប់បញ្ចូលទិន្នន័យ (Inputs) ដើម្បីងាយស្រួលយល់។

### របៀបបង្កើត
ព័ទ្ធជុំវិញដោយប្រអប់ **\`.input-group\`**។ ចំណែកអត្ថបទភ្ជាប់ខាងដើម/ចុង ត្រូវរុំដោយ Class **\`.input-group-text\`**៖

\`\`\`html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="គណនី">
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container" style="max-width: 450px;">
    <h3 class="mb-4">Input Group Append/Prepend</h3>

    <!-- Prepend price addon -->
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" placeholder="Total Budget Price" aria-label="Amount">
      <span class="input-group-text">.00</span>
    </div>

    <!-- Append button inside input -->
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search product ID..." aria-label="Search">
      <button class="btn btn-primary" type="button">Search</button>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-floating-labels",
    title: { en: "BS5 Floating Labels", km: "ស្លាករំកិលអណ្តែត Floating Labels" },
    content: {
      en: `# Bootstrap 5 Floating Labels
Floating labels create beautifully animated inputs where descriptive labels float upwards into a smaller header position when inputs gain focus or contain values.

### Setting Up Floating Labels
1. Wrap both the input and label elements inside a container having **\`.form-floating\`**.
2. **CRITICAL Rule:** The \`<input>\` element **MUST** come first, have a placeholder (even if empty or hidden), and be followed immediately by the \`<label>\`!

\`\`\`html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
\`\`\``,
      km: `# ស្លាករំកិលអណ្តែត Floating Labels ក្នុង Bootstrap 5
Floating Labels ជួយបង្កើតប្រអប់បញ្ចូលទិន្នន័យដែលមានចលនាដ៏ស្រស់ស្អាត ដោយអត្ថបទពន្យល់ (Label) នឹងរត់ហោះទៅខាងលើជាអក្សរតូចៗ នៅពេលអ្នកចុចបំពេញប្រអប់នោះ។

### វិធានការសំខាន់ៗ
១. ត្រូវរុំ Input និង Label នៅក្នុងប្រអប់មាន Class **\`.form-floating\`**។
២. **លក្ខខណ្ឌដាច់ខាត៖** ថេក \`<input>\` ត្រូវសរសេរ**មុន**គេបង្អស់ និងត្រូវតែមាន attribute **\`placeholder\`** បន្ទាប់មកទើបសរសេរថេក \`<label>\` នៅខាងក្រោយ!

\`\`\`html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="...">
  <label for="floatingInput">អាសយដ្ឋានអ៊ីមែល</label>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container" style="max-width: 450px;">
    <h3 class="mb-4">Floating Label Inputs</h3>

    <!-- Email Floating Input -->
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com">
      <label for="floatEmail">Email address</label>
    </div>

    <!-- Password Floating Input -->
    <div class="form-floating">
      <input type="password" class="form-control" id="floatPassword" placeholder="Password">
      <label for="floatPassword">Secure Password</label>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-form-validation",
    title: { en: "BS5 Form Validation", km: "ការផ្ទៀងផ្ទាត់ទម្រង់ទិន្នន័យ" },
    content: {
      en: `# Bootstrap 5 Form Validation
Bootstrap 5 has built-in styling for validation states. Use HTML5 validation attributes (like \`required\`) combined with custom Javascript triggers to block submit events until values are valid.

### Validation Classes
- Apply **\`.needs-validation\`** on the form. Ensure **\`novalidate\`** is active to disable native browser popups.
- Feed feedback classes inside input containers:
  - **\`.valid-feedback\`**: Displays when inputs are successfully validated.
  - **\`.invalid-feedback\`**: Displays details when validations fail.

\`\`\`html
<form class="needs-validation" novalidate>
  <input type="text" class="form-control" required>
  <div class="invalid-feedback">Field is required!</div>
</form>
\`\`\`

- To show validated states instantly, add the **\`.was-validated\`** class directly onto the form!`,
      km: `# ការផ្ទៀងផ្ទាត់ទម្រង់ទិន្នន័យ ក្នុង Bootstrap 5
Bootstrap 5 មកជាមួយការរចនាទម្រង់បែបបទសម្រាប់ស្ថានភាពផ្ទៀងផ្ទាត់ (Validation states) ដូចជាកំហុស ឬត្រឹមត្រូវ។

### ថ្នាក់ និងរបៀបប្រើប្រាស់
- ប្រើ Class **\`.needs-validation\`** លើ Form និងដាក់ Attribute **\`novalidate\`** ដើម្បីបិទការឆែកលំនាំដើមរបស់ Browser។
- ដាក់សារជូនដំណឹងនៅពីក្រោម inputs៖
  - **\`.valid-feedback\`**: លេចចេញអត្ថបទពណ៌បៃតងនៅពេលទិន្នន័យបំពេញត្រឹមត្រូវ។
  - **\`.invalid-feedback\`**: លេចចេញអត្ថបទពណ៌ក្រហមពន្យល់ពីកំហុសនៅពេលខ្វះទិន្នន័យ។

\`\`\`html
<form class="needs-validation" novalidate>
  <input type="text" class="form-control" required>
  <div class="invalid-feedback">សូមបំពេញព័ត៌មាននេះ!</div>
</form>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container" style="max-width: 450px;">
    
    <!-- Validated Form -->
    <form class="card p-4 shadow-sm needs-validation" novalidate>
      <h5 class="fw-bold mb-3">Validated Form Register</h5>

      <div class="mb-3">
        <label for="valName" class="form-label">Choose Username</label>
        <input type="text" class="form-control" id="valName" required placeholder="dara_sok">
        <div class="valid-feedback">Looks great!</div>
        <div class="invalid-feedback">Please choose a unique username.</div>
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="valCheck" required>
          <label class="form-check-label" for="valCheck">Agree to terms and conditions</label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>

      <button class="btn btn-primary w-100" type="submit">Submit Account</button>
    </form>

    <script>
      // JavaScript to handle form validation submission checks
      const form = document.querySelector('.needs-validation');
      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    </script>
  </div>
</body>
</html>`
  }
];
