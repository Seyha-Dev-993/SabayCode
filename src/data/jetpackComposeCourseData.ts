import { MobileCourse } from './mobileCoursesHubData';

export const JETPACK_COMPOSE_COURSE_DATA: MobileCourse = {
  id: 'jetpack-compose',
  title: {
    en: 'Jetpack Compose — Modern Native Android UI',
    km: 'Jetpack Compose — សាង UI Android ទំនើប'
  },
  iconName: 'jetpack-compose',
  type: 'framework',
  parentLanguageId: 'kotlin',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: "Google's modern toolkit for building real native Android apps with Kotlin.",
    km: 'ឧបករណ៍ទំនើបរបស់ Google សម្រាប់សាងកម្មវិធី Android native ពិតប្រាកដដោយប្រើ Kotlin។'
  },
  summary: {
    en: "Jetpack Compose is Google's modern toolkit for building native Android UI entirely in Kotlin — no separate XML layout files required. It replaced the older Android View system as Google's recommended approach starting in 2021, using a declarative style similar in spirit to Flutter and React: you describe what the UI should look like for a given state, and Compose handles updating the screen when that state changes. This course takes everything you learned in the Kotlin course and applies it to real UI development: composables, layouts, navigation, state management, working with APIs, and building a complete, real, installable native Android app from scratch. By the end, you'll understand exactly how modern Android apps are actually built today.",
    km: 'Jetpack Compose ជាឧបករណ៍ទំនើបរបស់ Google សម្រាប់សាង UI Android native ទាំងស្រុងជា Kotlin — គ្មានតម្រូវការឯកសារ XML layout ដាច់ដោយឡែកទៀតទេ។ វាជំនួសប្រព័ន្ធ Android View ចាស់ជាវិធីសាស្ត្រដែល Google ណែនាំចាប់តាំងពីឆ្នាំ 2021 ដោយប្រើរចនាប័ទ្ម declarative ស្រដៀងនឹង Flutter និង React ក្នុងស្មារតី៖ អ្នកពិពណ៌នាថា UI គួរតែមើលទៅដូចអ្វីសម្រាប់ state ជាក់លាក់ ហើយ Compose គ្រប់គ្រងការធ្វើបច្ចុប្បន្នភាពអេក្រង់នៅពេល state នោះផ្លាស់ប្តូរ។ វគ្គសិក្សានេះយកអ្វីៗទាំងអស់ដែលអ្នករៀនក្នុងវគ្គ Kotlin ហើយអនុវត្តទៅលើការសាង UI ពិតប្រាកដ៖ composables, layouts, navigation, state management, ការធ្វើការជាមួយ API និងការសាងកម្មវិធី Android native ពេញលេញអាចដំឡើងបានពិតប្រាកដពីដើមដល់ចប់។ ចប់វគ្គនេះ អ្នកនឹងយល់ច្បាស់ពីរបៀបដែលកម្មវិធី Android ទំនើបពិតប្រាកដត្រូវបានសាងសព្វថ្ងៃ។'
  },
  estimatedHours: 24,
  lessonCount: 33,
  usedFor: 'Native Android apps, Wear OS, Android Auto, Foldables, Tablets',
  realWorldApps: ['Play Store', 'Twitter / X', 'Pinterest', 'Lyft', 'Airbnb Android', 'Duolingo'],
  prerequisites: {
    en: 'Completion of the Kotlin course (or equivalent Kotlin knowledge) is strongly recommended — this course assumes comfort with Kotlin syntax, data classes, null safety, and coroutines, and focuses entirely on applying that to UI.',
    km: 'ការបញ្ចប់វគ្គ Kotlin (ឬមានចំណេះដឹង Kotlin ប្រហាក់ប្រហែល) ត្រូវបានណែនាំយ៉ាងខ្លាំង — វគ្គសិក្សានេះសន្មតថាអ្នកស្ទាត់ជំនាញជាមួយ Syntax របស់ Kotlin, Data Classes, Null Safety និង Coroutines ហើយផ្តោតទាំងស្រុងលើការអនុវត្តទៅលើ UI។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Android Studio and the Compose environment (already installed from the Kotlin course)',
      'Understand composable functions — Compose\'s building blocks — and recomposition',
      'Build layouts using Column, Row, Box, and Modifier',
      'Navigate between screens using Navigation Compose',
      'Manage state using remember, mutableStateOf, and state hoisting',
      'Style apps with Material Design 3 theming and light/dark mode',
      'Fetch and display real data from a REST API using Retrofit and coroutines',
      'Build and validate forms (login screens, text fields, buttons)',
      'Use Android permissions and device feature concepts (camera, location)',
      'Debug Compose apps and preview UI without running the full app',
      'Build a complete, real, portfolio-ready Android app from scratch',
      'Understand the basics of building a release APK'
    ],
    km: [
      'រៀបចំ Android Studio និងបរិស្ថាន Compose (បានដំឡើងពីវគ្គ Kotlin)',
      'យល់ដឹងពី Composable functions — គ្រឹះសាងសង់របស់ Compose — និងការធ្វើ Recomposition',
      'សាង Layouts ដោយប្រើ Column, Row, Box, និង Modifier',
      'ធ្វើការផ្លាស់ប្តូរអេក្រង់ Navigation ដោយប្រើ Navigation Compose',
      'គ្រប់គ្រង State ដោយប្រើ remember, mutableStateOf, និង State Hoisting',
      'តុបតែង App ដោយប្រើ Material Design 3 theming និងគាំទ្រ Light/Dark mode',
      'ទាញយក និងបង្ហាញទិន្នន័យពី REST API ដោយប្រើ Retrofit និង Coroutines',
      'សាងសង់ និងពិនិត្យភាពត្រឹមត្រូវនៃ Form (Login screens, text fields, buttons)',
      'ប្រើប្រាស់ប្រព័ន្ធ Android permissions និង Device feature concepts (Camera, Location)',
      'ធ្វើការ Debug កម្មវិធី Compose និង Preview UI ដោយមិនបាច់រត់ App ពេញ',
      'សាងសង់កម្មវិធី Android ពេញលេញមួយពីដើមដល់ចប់សម្រាប់ធ្វើ Portfolio',
      'យល់ដឹងពីមូលដ្ឋាននៃការបង្កើត Release APK'
    ]
  },
  toolsAndSetup: {
    en: '1. Open Android Studio (already installed from the Kotlin course) — it includes everything needed for Compose out of the box\n2. Create a new project using the "Empty Activity" template, which is Compose-based by default in current Android Studio versions\n3. Set up an Android emulator via the Device Manager, or connect a physical Android device with USB debugging enabled\n4. Run your first project with the ▶ Run button and confirm the emulator/device launches it',
    km: '១. បើក Android Studio (បានដំឡើងរួចរាល់ពីវគ្គ Kotlin) — វាមានអ្វីៗគ្រប់យ៉ាងដែលត្រូវការសម្រាប់ Compose រួចជាស្រេច\n២. បង្កើតគម្រោងថ្មីដោយប្រើ Template "Empty Activity" ដែលជា Compose-based ដោយស្វ័យប្រវត្តិក្នុង Android Studio បច្ចុប្បន្ន\n៣. រៀបចំ Android Emulator តាមរយៈ Device Manager ឬភ្ជាប់ទូរស័ព្ទ Android ពិតប្រាកដដោយបើក USB Debugging\n៤. រត់គម្រោងដំបូងរបស់អ្នកជាមួយប៊ូតុង ▶ Run ហើយបញ្ជាក់ថា Emulator/Device បើកដំណើរការវា'
  },
  cheatSheet: [
    {
      concept: '@Composable & UI Functions',
      code: '@Composable\nfun GreetingCard(name: String) {\n    Surface(\n        color = MaterialTheme.colorScheme.primaryContainer,\n        shape = MaterialTheme.shapes.medium\n    ) {\n        Text(\n            text = "Hello, $name!",\n            modifier = Modifier.padding(16.dp),\n            style = MaterialTheme.typography.titleMedium\n        )\n    }\n}',
      explanation: {
        en: 'Composables are Kotlin functions annotated with @Composable that transform state data into UI hierarchy.',
        km: 'Composables គឺជា Kotlin Functions ដែលមាន `@Composable` annotation សម្រាប់បំលែង State Data ទៅជា UI Hierarchy។'
      }
    },
    {
      concept: 'Layout Composables (Column, Row, Box)',
      code: '// Vertical layout\nColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {\n    Text("Title")\n    Text("Subtitle")\n}\n\n// Horizontal layout\nRow(verticalAlignment = Alignment.CenterVertically) {\n    Icon(Icons.Default.Star, contentDescription = null)\n    Spacer(modifier = Modifier.width(8.dp))\n    Text("4.9 Rating")\n}\n\n// Stacked depth layout\nBox(contentAlignment = Alignment.Center) {\n    Image(...)\n    Text("Overlay Text", color = Color.White)\n}',
      explanation: {
        en: 'Combine Column (vertical), Row (horizontal), and Box (stacked z-axis depth) to create any layout structure.',
        km: 'បូកបញ្ចូល Column (បញ្ឈរ), Row (ផ្ដេក), និង Box (ជាន់លើគ្នាអ័ក្ស Z) ដើម្បីសាង Layout គ្រប់ទម្រង់។'
      }
    },
    {
      concept: 'State with remember & mutableStateOf',
      code: '@Composable\nfun Counter() {\n    var count by remember { mutableStateOf(0) }\n\n    Column(modifier = Modifier.padding(16.dp)) {\n        Text(text = "Count: $count")\n        Row {\n            Button(onClick = { count-- }) { Text("Subtract") }\n            Spacer(modifier = Modifier.width(8.dp))\n            Button(onClick = { count++ }) { Text("Add") }\n        }\n    }\n}',
      explanation: {
        en: 'remember retains a state value across recompositions, while mutableStateOf triggers a UI redraw when mutated.',
        km: 'remember រក្សាទុកតម្លៃ State រាល់ពេល Recomposition ហើយ mutableStateOf ធ្វើឱ្យ UI រត់គូរឡើងវិញពេលតម្លៃប្រែប្រួល។'
      }
    },
    {
      concept: 'Retrofit Networking + ViewModel',
      code: 'class PostViewModel : ViewModel() {\n    var posts by mutableStateOf<List<Post>>(emptyList())\n        private set\n    var isLoading by mutableStateOf(false)\n        private set\n\n    fun fetchPosts(api: ApiService) {\n        viewModelScope.launch {\n            isLoading = true\n            try {\n                posts = api.getPosts()\n            } catch (e: Exception) {\n                // handle error\n            } finally {\n                isLoading = false\n            }\n        }\n    }\n}',
      explanation: {
        en: 'Fetch remote REST APIs inside ViewModel using Kotlin Coroutines and update mutable state for automatic UI recomposition.',
        km: 'ទាញយកទិន្នន័យពី REST API ក្នុង ViewModel ដោយប្រើ Coroutines និងធ្វើបច្ចុប្បន្នភាព State សម្រាប់ Recompose UI ស្វ័យប្រវត្តិ។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-jc-1',
      question: {
        en: 'Which annotation informs the Kotlin compiler that a function transforms data into UI elements in Jetpack Compose?',
        km: 'តើ Annotation មួយណាដែលប្រាប់ Kotlin Compiler ថា Function មួយជាអ្នកបំលែងទិន្នន័យទៅជា UI Elements ក្នុង Jetpack Compose?'
      },
      options: [
        { id: '1', text: { en: '@Composable', km: '@Composable' }, isCorrect: true },
        { id: '2', text: { en: '@Widget', km: '@Widget' }, isCorrect: false },
        { id: '3', text: { en: '@Layout', km: '@Layout' }, isCorrect: false }
      ],
      explanation: {
        en: '`@Composable` marks a function as a Compose UI builder function.',
        km: '`@Composable` កំណត់សម្គាល់ Function ថាជាអ្នកបង្កើត UI ក្នុង Compose។'
      }
    },
    {
      id: 'q-jc-2',
      question: {
        en: 'Why is `remember` paired with `mutableStateOf` inside a composable function?',
        km: 'ហេតុអ្វីបានជា `remember` ត្រូវបានប្រើគួបផ្សំជាមួយ `mutableStateOf` ក្នុង Composable function?'
      },
      options: [
        { id: '1', text: { en: 'To preserve state across UI recompositions', km: 'ដើម្បីរក្សាទុកតម្លៃ State រាល់ពេល UI រត់ Recomposition' }, isCorrect: true },
        { id: '2', text: { en: 'To run network requests on a background thread', km: 'ដើម្បីរត់ Network Request លើ Background Thread' }, isCorrect: false },
        { id: '3', text: { en: 'To navigate between screens automatically', km: 'ដើម្បីធ្វើ Navigation ឆ្លងអេក្រង់ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Without `remember`, state variables would be re-initialized back to their starting default value on every single recomposition.',
        km: 'បើគ្មាន `remember` ទេ អថេរ State នឹងត្រូវបាត់បង់ ហើយកំណត់ជាតម្លៃដើមវិញរាល់ពេល Recomposition។'
      }
    },
    {
      id: 'q-jc-3',
      question: {
        en: 'Which layout composable places its children vertically one after another?',
        km: 'តើ Layout Composable មួយណាដែលតម្រៀប Element កូនៗតាមជួរឈរ (បញ្ឈរ) ជាបន្តបន្ទាប់?'
      },
      options: [
        { id: '1', text: { en: 'Column', km: 'Column' }, isCorrect: true },
        { id: '2', text: { en: 'Row', km: 'Row' }, isCorrect: false },
        { id: '3', text: { en: 'Box', km: 'Box' }, isCorrect: false }
      ],
      explanation: {
        en: '`Column` arranges its child composables vertically top-to-bottom.',
        km: '`Column` តម្រៀប Composable កូនៗតាមជួរឈរពីលើចុះក្រោម។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'ExpenseFlow — Jetpack Compose Expense Tracker App',
      km: 'ExpenseFlow — កម្មវិធីតាមដានចំណាយលើ Jetpack Compose'
    },
    description: {
      en: 'Upgrade the Kotlin course\'s CLI Expense Tracker into a full, real, installable Android app called ExpenseFlow — with an actual visual interface, persistent local storage, category totals, and Material Design 3 polish.',
      km: 'លើកកម្ពស់កម្មវិធី Kotlin CLI Expense Tracker ទៅជាកម្មវិធី Android Native ពេញលេញឈ្មោះ ExpenseFlow — មានប្រព័ន្ធ UI ស្រស់ស្អាត, រក្សាទុកទិន្នន័យក្នុង DataStore, សរុបតាមប្រភេទ និងទម្រង់ Material Design 3។'
    },
    featureChecklist: {
      en: [
        'Expense list screen showing all expenses with title, amount, and category icon',
        'Add-expense screen (separate screen, navigated to via FloatingActionButton)',
        'Delete an expense via swipe or delete button action',
        'Running total and per-category spending summary displayed on top card',
        'Expenses persist between app restarts using Preferences DataStore / Room',
        'Light and dark mode support using MaterialTheme 3'
      ],
      km: [
        'អេក្រង់បញ្ជីបង្ហាញចំណាយទាំងអស់ជាមួយចំណងជើង ចំនួនទឹកប្រាក់ និង Icon ប្រភេទ',
        'អេក្រង់បន្ថែមចំណាយថ្មី (បើកតាមរយៈ FloatingActionButton)',
        'លុបចំណាយតាមរយៈការ អូស ឬ ចុចប៊ូតុងលុប',
        'កាតបង្ហាញសរុបប្រាក់ចំណាយ និងការសរុបតាមប្រភេទចំណាយ',
        'រក្សាទុកចំណាយមិនឱ្យបាត់បង់ពេលបិទ App ដោយប្រើ DataStore',
        'គាំទ្រ Light/Dark mode ដោយស្វ័យប្រវត្តិជាមួយ MaterialTheme 3'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#f8fafc; font-family:Roboto, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:380px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#a855f7; margin:0; font-size:20px;">⚡ ExpenseFlow Compose</h3>
      <span style="background:#7e22ce; color:#ffffff; font-weight:bold; font-size:11px; padding:3px 8px; border-radius:12px;">Android M3</span>
    </div>
    <div style="background:#3b0764; padding:16px; border-radius:16px; margin-bottom:16px; border:1px solid #a855f7;">
      <span style="font-size:12px; color:#d8b4fe; text-transform:uppercase; letter-spacing:1px;">Total Expenses</span>
      <h2 style="margin:4px 0 0 0; color:#ffffff; font-size:28px; font-weight:bold;">$1,240.50</h2>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">☕ Morning Coffee</p>
        <span style="font-size:12px; color:#c084fc;">Food & Drink</span>
      </div>
      <span style="color:#f43f5e; font-weight:bold;">-$4.50</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">⛽ Gas Station</p>
        <span style="font-size:12px; color:#c084fc;">Transport</span>
      </div>
      <span style="color:#f43f5e; font-weight:bold;">-$35.00</span>
    </div>
    <div style="text-align:center; margin-top:20px;">
      <button style="background:#9333ea; color:#ffffff; font-weight:bold; border:none; padding:12px 20px; border-radius:24px; cursor:pointer; width:100%;">+ Add Expense</button>
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import java.util.UUID

data class Expense(
    val id: String = UUID.randomUUID().toString(),
    val title: String,
    val amount: Double,
    val category: String
)

class ExpenseViewModel : ViewModel() {
    var expenses = mutableStateListOf<Expense>(
        Expense(title = "Morning Coffee ☕", amount = 4.50, category = "Food"),
        Expense(title = "Gas Station ⛽", amount = 35.00, category = "Transport"),
        Expense(title = "Grocery Shopping 🛒", amount = 82.20, category = "Food")
    )
        private set

    val totalAmount: Double
        get() = expenses.sumOf { it.amount }

    fun addExpense(title: String, amount: Double, category: String) {
        expenses.add(0, Expense(title = title, amount = amount, category = category))
    }

    fun removeExpense(expense: Expense) {
        expenses.remove(expense)
    }
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    ExpenseFlowApp()
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ExpenseFlowApp(viewModel: ExpenseViewModel = viewModel()) {
    var showDialog by remember { mutableStateOf(false) }
    var titleInput by remember { mutableStateOf("") }
    var amountInput by remember { mutableStateOf("") }
    var categoryInput by remember { mutableStateOf("Food") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("ExpenseFlow ⚡", fontWeight = FontWeight.Bold) },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer
                )
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = { showDialog = true },
                containerColor = MaterialTheme.colorScheme.primary
            ) {
                Icon(Icons.Default.Add, contentDescription = "Add Expense")
            }
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .padding(16.dp)
        ) {
            // Total Summary Card
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 16.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.secondaryContainer
                )
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    Text(
                        text = "TOTAL EXPENSES",
                        style = MaterialTheme.typography.labelMedium,
                        color = MaterialTheme.colorScheme.onSecondaryContainer.copy(alpha = 0.7f)
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "\$\\$\${\"%.2f\".format(viewModel.totalAmount)}",
                        style = MaterialTheme.typography.headlineLarge,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                }
            }

            Text(
                text = "Recent Transactions",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.padding(bottom = 8.dp)
            )

            // Expense List
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(viewModel.expenses, key = { it.id }) { expense ->
                    ExpenseRow(
                        expense = expense,
                        onDelete = { viewModel.removeExpense(expense) }
                    )
                }
            }
        }

        // Add Expense Dialog
        if (showDialog) {
            AlertDialog(
                onDismissRequest = { showDialog = false },
                title = { Text("Add New Expense") },
                text = {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        OutlinedTextField(
                            value = titleInput,
                            onValueChange = { titleInput = it },
                            label = { Text("Expense Title") },
                            singleLine = true
                        )
                        OutlinedTextField(
                            value = amountInput,
                            onValueChange = { amountInput = it },
                            label = { Text("Amount ($)") },
                            singleLine = true
                        )
                        OutlinedTextField(
                            value = categoryInput,
                            onValueChange = { categoryInput = it },
                            label = { Text("Category (e.g., Food, Transport)") },
                            singleLine = true
                        )
                    }
                },
                confirmButton = {
                    Button(
                        onClick = {
                            val amount = amountInput.toDoubleOrNull() ?: 0.0
                            if (titleInput.isNotBlank() && amount > 0) {
                                viewModel.addExpense(titleInput, amount, categoryInput)
                                titleInput = ""
                                amountInput = ""
                                showDialog = false
                            }
                        }
                    ) {
                        Text("Add")
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showDialog = false }) {
                        Text("Cancel")
                    }
                }
            )
        }
    }
}

@Composable
fun ExpenseRow(expense: Expense, onDelete: () -> Unit) {
    ElevatedCard(
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(text = expense.title, fontWeight = FontWeight.Medium, fontSize = 16.sp)
                Text(
                    text = expense.category,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.secondary
                )
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = "-\$\\$\${\"%.2f\".format(expense.amount)}",
                    color = MaterialTheme.colorScheme.error,
                    fontWeight = FontWeight.Bold,
                    fontSize = 16.sp
                )
                IconButton(onClick = onDelete) {
                    Icon(
                        imageVector = Icons.Default.Delete,
                        contentDescription = "Delete Expense",
                        tint = MaterialTheme.colorScheme.error.copy(alpha = 0.7f)
                    )
                }
            }
        }
    }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'jc-1-1',
      slug: 'what-is-jetpack-compose-and-how-it-fits-with-kotlin',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is Jetpack Compose and how it fits with Kotlin',
        km: '១.១ អ្វីទៅជា Jetpack Compose និងរបៀបដែលវាដើរជាមួយ Kotlin'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Jetpack Compose is Android\'s modern UI toolkit, and unlike the older Android View system (which used separate XML files), Compose lets you build your entire UI using plain Kotlin functions called composables in a declarative style.',
        km: 'Jetpack Compose ជាឧបករណ៍ UI ទំនើបរបស់ Android ហើយខុសពីប្រព័ន្ធ Android View ចាស់ (ដែលប្រើឯកសារ XML) Compose អនុញ្ញាតឱ្យអ្នកសាង UI ទាំងមូលដោយប្រើមុខងារ Kotlin សុទ្ធៗហៅថា composables ក្នុងរចនាប័ទ្ម declarative។'
      },
      tutorial: {
        en: 'import androidx.compose.material3.Text\nimport androidx.compose.runtime.Composable\nimport androidx.compose.ui.tooling.preview.Preview\n\n@Composable\nfun Greeting() {\n    Text(text = "Hello, Jetpack Compose!")\n}\n\n@Preview(showBackground = true)\n@Composable\nfun GreetingPreview() {\n    Greeting()\n}',
        km: 'import androidx.compose.material3.Text\nimport androidx.compose.runtime.Composable\nimport androidx.compose.ui.tooling.preview.Preview\n\n@Composable\nfun Greeting() {\n    Text(text = "សួស្តី Jetpack Compose!")\n}\n\n@Preview(showBackground = true)\n@Composable\nfun GreetingPreview() {\n    Greeting()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>1.1 What is Jetpack Compose</h3><pre>@Composable fun Greeting() -> Text("Hello Compose!")</pre></body></html>`
      }
    },
    {
      id: 'jc-1-2',
      slug: 'setting-up-a-compose-project-in-android-studio',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Setting up a Compose project in Android Studio',
        km: '១.២ ការរៀបចំគម្រោង Compose ក្នុង Android Studio'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Learn how to launch Android Studio, create a new project using the Compose-based "Empty Activity" template, and run your app on an emulator or physical device.',
        km: 'រៀនពីរបៀបបើក Android Studio, បង្កើតគម្រោងថ្មីដោយប្រើ "Empty Activity" template របស់ Compose, និងរត់កម្មវិធីលើ Emulator ឬទូរស័ព្ទពិត។'
      },
      tutorial: {
        en: '// Android Studio Workflow:\n1. File -> New -> New Project -> Empty Activity (Compose)\n2. Name: "HelloCompose", Language: Kotlin\n3. Select Pixel 8 Emulator\n4. Click ▶ Run button (Shift+F10)',
        km: '// លំហូរការងារ Android Studio:\n១. File -> New -> New Project -> Empty Activity (Compose)\n២. ឈ្មោះ: "HelloCompose", ភាសា: Kotlin\n៣. ជ្រើសរើស Pixel 8 Emulator\n៤. ចុចប៊ូតុង ▶ Run (Shift+F10)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>1.2 Android Studio Setup</h3><p>✓ Android Studio Electric Eel+\n✓ Empty Activity Template\n📱 Pixel Emulator Ready</p></body></html>`
      }
    },
    {
      id: 'jc-1-3',
      slug: 'your-first-composable-the-default-compose-starter-explained',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first composable — the default Compose starter, explained line by line',
        km: '១.៣ អេក្រង់ Composable ដំបូងរបស់អ្នក — កូដដើមរបស់ Compose ពន្យល់មួយបន្ទាត់ម្តងៗ'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Examine Android Studio\'s default starter code: `ComponentActivity`, `setContent { }`, `MaterialTheme`, and `@Preview` annotations.',
        km: 'វិភាគកូដដើមរបស់ Android Studio៖ `ComponentActivity`, `setContent { }`, `MaterialTheme`, និង `@Preview` annotations។'
      },
      tutorial: {
        en: 'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            MaterialTheme {\n                Greeting("Android")\n            }\n        }\n    }\n}',
        km: 'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            MaterialTheme {\n                Greeting("Android")\n            }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>1.3 Default Entry Point</h3><p>MainActivity -> setContent -> MaterialTheme -> Greeting()</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'jc-2-1',
      slug: 'what-is-a-composable-function-and-recomposition-explained',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 What is a composable function, and recomposition explained',
        km: '២.១ អ្វីទៅជា Composable Function និងការយល់ដឹងពី Recomposition'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Composable functions take input data and emit UI structure. Recomposition is the process where Compose re-executes composables when underlying state changes.',
        km: 'Composable functions ទទួលទិន្នន័យ Input ហើយបង្កើត UI Structure។ Recomposition គឺជាដំណើរការដែល Compose រត់ composable ឡើងវិញនៅពេល State ផ្លាស់ប្តូរ។'
      },
      tutorial: {
        en: '@Composable\nfun HeaderTitle(title: String) {\n    Text(\n        text = title,\n        style = MaterialTheme.typography.headlineMedium\n    )\n}',
        km: '@Composable\nfun HeaderTitle(title: String) {\n    Text(\n        text = title,\n        style = MaterialTheme.typography.headlineMedium\n    )\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.1 Recomposition</h3><p>State Change -> Smart Recompose -> Minimal Redraw</p></body></html>`
      }
    },
    {
      id: 'jc-2-2',
      slug: 'core-composables-text-image-button-icon',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Core composables: Text, Image, Button, Icon',
        km: '២.២ Core composables: Text, Image, Button, Icon'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master Android Compose primitive UI elements: Text typography, Image vector painter, Material Button variants, and Material Icons.',
        km: 'ស្ទាត់ជំនាញជាមួយ Primitives របស់ Compose៖ Text, Image vector painter, Material Buttons, និង Material Icons។'
      },
      tutorial: {
        en: 'Column {\n    Icon(Icons.Default.Favorite, contentDescription = "Favorite", tint = Color.Red)\n    Text(text = "Bookmark Item")\n    Button(onClick = { /* save */ }) {\n        Text("Save")\n    }\n}',
        km: 'Column {\n    Icon(Icons.Default.Favorite, contentDescription = "Favorite", tint = Color.Red)\n    Text(text = "រក្សាទុក")\n    Button(onClick = { /* save */ }) {\n        Text("រក្សាទុក")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>2.2 Core Primitives</h3><p>Text | Image | Button | Icon(Icons.Default.Favorite)</p></body></html>`
      }
    },
    {
      id: 'jc-2-3',
      slug: 'layout-composables-column-row-box',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 Layout composables: Column, Row, Box',
        km: '២.៣ Layout composables: Column, Row, Box'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Structure layout elements vertically (Column), horizontally (Row), or stack them on top of each other along the depth axis (Box).',
        km: 'រៀបចំ Layout ជាលក្ខណៈបញ្ឈរ (Column), ផ្ដេក (Row), ឬតម្រៀបជាន់លើគ្នា (Box)។'
      },
      tutorial: {
        en: 'Row(\n    verticalAlignment = Alignment.CenterVertically,\n    horizontalArrangement = Arrangement.SpaceBetween\n) {\n    Text("Item Name")\n    Text("$12.99", fontWeight = FontWeight.Bold)\n}',
        km: 'Row(\n    verticalAlignment = Alignment.CenterVertically,\n    horizontalArrangement = Arrangement.SpaceBetween\n) {\n    Text("ឈ្មោះទំនិញ")\n    Text("$12.99", fontWeight = FontWeight.Bold)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#ec4899; padding:20px; font-family:monospace;"><h3>2.3 Layout Containers</h3><p>Column (Vertical) | Row (Horizontal) | Box (Depth)</p></body></html>`
      }
    },
    {
      id: 'jc-2-4',
      slug: 'modifier-composes-styling-and-layout-chaining-system',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 Modifier — Compose\'s styling and layout chaining system',
        km: '២.៤ Modifier — ប្រព័ន្ធ Chained Styling និង Layout របស់ Compose'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Modifiers let you decorate or augment a composable. Modifier ordering is strict: padding before background behaves differently than background before padding.',
        km: 'Modifiers អនុញ្ញាតឱ្យអ្នកតុបតែង Composable។ លំដាប់នៃការហៅមានសារៈសំខាន់ខ្លាំង៖ ការហៅ padding មុន background ផ្តល់ផលខុសគ្នាស្រឡះ។'
      },
      tutorial: {
        en: 'Text(\n    text = "Styled Card",\n    modifier = Modifier\n        .fillMaxWidth()\n        .padding(16.dp)\n        .background(Color.Blue, shape = RoundedCornerShape(8.dp))\n        .padding(12.dp),\n    color = Color.White\n)',
        km: 'Text(\n    text = "កាតមាន Style",\n    modifier = Modifier\n        .fillMaxWidth()\n        .padding(16.dp)\n        .background(Color.Blue, shape = RoundedCornerShape(8.dp))\n        .padding(12.dp),\n    color = Color.White\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.4 Modifier Chain</h3><p>.fillMaxWidth() -> .padding() -> .background() -> .clickable()</p></body></html>`
      }
    },
    {
      id: 'jc-2-5',
      slug: 'practice-rebuild-a-simple-profile-card-ui',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: rebuild a simple profile card UI',
        km: '២.៥ អនុវត្ត: សាងសង់ Profile Card UI ក្នុង Compose'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `Card`, `Column`, `Row`, `Icon`, and `Modifier` to build a clean Android native profile card component.',
        km: 'បូកបញ្ចូល `Card`, `Column`, `Row`, `Icon`, និង `Modifier` ដើម្បីបង្កើត Profile Card UI លើ Android។'
      },
      tutorial: {
        en: 'Card(\n    modifier = Modifier.padding(16.dp).fillMaxWidth(),\n    elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)\n) {\n    Row(modifier = Modifier.padding(16.dp)) {\n        Icon(Icons.Default.Person, contentDescription = null, modifier = Modifier.size(48.dp))\n        Spacer(modifier = Modifier.width(16.dp))\n        Column {\n            Text("Sophea Chan", style = MaterialTheme.typography.titleMedium)\n            Text("Android Developer", style = MaterialTheme.typography.bodyMedium)\n        }\n    }\n}',
        km: 'Card(\n    modifier = Modifier.padding(16.dp).fillMaxWidth(),\n    elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)\n) {\n    Row(modifier = Modifier.padding(16.dp)) {\n        Icon(Icons.Default.Person, contentDescription = null, modifier = Modifier.size(48.dp))\n        Spacer(modifier = Modifier.width(16.dp))\n        Column {\n            Text("Sophea Chan", style = MaterialTheme.typography.titleMedium)\n            Text("Android Developer", style = MaterialTheme.typography.bodyMedium)\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.5 Profile Card</h3><p>👤 Sophea Chan - Android Developer</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'jc-3-1',
      slug: 'setting-up-navigation-compose',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Setting up Navigation Compose',
        km: '៣.១ ការដំឡើង និងរៀបចំ Navigation Compose'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Navigation Compose relies on `rememberNavController()` and `NavHost` to map string route names to composable screen destinations.',
        km: 'Navigation Compose ផ្អែកលើ `rememberNavController()` និង `NavHost` ដើម្បីភ្ជាប់ឈ្មោះ Route ទៅកាន់អេក្រង់ Composable។'
      },
      tutorial: {
        en: 'val navController = rememberNavController()\nNavHost(navController = navController, startDestination = "home") {\n    composable("home") { HomeScreen(navController) }\n    composable("details") { DetailScreen(navController) }\n}',
        km: 'val navController = rememberNavController()\nNavHost(navController = navController, startDestination = "home") {\n    composable("home") { HomeScreen(navController) }\n    composable("details") { DetailScreen(navController) }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>3.1 NavHost & NavController</h3><p>rememberNavController() -> NavHost(startDestination = "home")</p></body></html>`
      }
    },
    {
      id: 'jc-3-2',
      slug: 'navigating-between-screens-destinations',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 Navigating between screens/destinations',
        km: '៣.២ ការផ្លាស់ប្តូររវាងអេក្រង់ និងគោលដៅ'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Trigger navigation transitions by calling `navController.navigate("route_name")` and pop backstacks with `navController.popBackStack()`.',
        km: 'ធ្វើការផ្លាស់ប្តូរអេក្រង់តាមរយៈការហៅ `navController.navigate("route_name")` និងត្រឡប់ក្រោយដោយ `navController.popBackStack()`។'
      },
      tutorial: {
        en: 'Button(onClick = { navController.navigate("details") }) {\n    Text("View Details")\n}\n\n// On Detail screen:\nIconButton(onClick = { navController.popBackStack() }) {\n    Icon(Icons.Default.ArrowBack, contentDescription = "Back")\n}',
        km: 'Button(onClick = { navController.navigate("details") }) {\n    Text("មើលលម្អិត")\n}\n\n// On Detail screen:\nIconButton(onClick = { navController.popBackStack() }) {\n    Icon(Icons.Default.ArrowBack, contentDescription = "Back")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>3.2 Screen Transition</h3><p>navController.navigate("details") | navController.popBackStack()</p></body></html>`
      }
    },
    {
      id: 'jc-3-3',
      slug: 'passing-arguments-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Passing arguments between screens',
        km: '៣.៣ ការបញ្ជូន Arguments/ទិន្នន័យឆ្លងកាត់អេក្រង់'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Define route path parameters like `"details/{itemId}"` and extract arguments safely inside `backStackEntry.arguments?.getString("itemId")`.',
        km: 'កំណត់ Route Parameters ដូចជា `"details/{itemId}"` ហើយទាញយក Argument ក្នុង `backStackEntry.arguments`។'
      },
      tutorial: {
        en: 'composable(\n    route = "details/{itemId}",\n    arguments = listOf(navArgument("itemId") { type = NavType.StringType })\n) { backStackEntry ->\n    val itemId = backStackEntry.arguments?.getString("itemId") ?: ""\n    DetailScreen(itemId = itemId)\n}',
        km: 'composable(\n    route = "details/{itemId}",\n    arguments = listOf(navArgument("itemId") { type = NavType.StringType })\n) { backStackEntry ->\n    val itemId = backStackEntry.arguments?.getString("itemId") ?: ""\n    DetailScreen(itemId = itemId)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.3 Route Parameters</h3><p>navController.navigate("details/42") -> getString("itemId")</p></body></html>`
      }
    },
    {
      id: 'jc-3-4',
      slug: 'practice-build-a-two-screen-app-list-to-detail',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: build a two-screen app (list → detail)',
        km: '៣.៤ អនុវត្ត: សាងសង់កម្មវិធីមាន ២ អេក្រង់ (List → Detail)'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `LazyColumn` list with Navigation Compose to pass selected item arguments from a catalog list to a detail overview screen.',
        km: 'បូកបញ្ចូល `LazyColumn` ជាមួយ Navigation Compose ដើម្បីបញ្ជូន Item ពីបញ្ជីទៅកាន់អេក្រង់ Detail។'
      },
      tutorial: {
        en: '@Composable\nfun CourseListScreen(onCourseClick: (String) -> Unit) {\n    LazyColumn {\n        items(courses) { course ->\n            Card(modifier = Modifier.clickable { onCourseClick(course.id) }) {\n                Text(course.title)\n            }\n        }\n    }\n}',
        km: '@Composable\nfun CourseListScreen(onCourseClick: (String) -> Unit) {\n    LazyColumn {\n        items(courses) { course ->\n            Card(modifier = Modifier.clickable { onCourseClick(course.id) }) {\n                Text(course.title)\n            }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>3.4 List to Detail</h3><p>LazyColumn -> Click Item -> Navigate to Detail Screen</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'jc-4-1',
      slug: 'remember-and-mutablestateof-composes-core-state-tools',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 remember and mutableStateOf — Compose\'s core state tools',
        km: '៤.១ remember និង mutableStateOf — ឧបករណ៍ State ស្នូលរបស់ Compose'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'In Compose, plain variables reset on every recomposition. Use `var count by remember { mutableStateOf(0) }` to preserve state across redraws.',
        km: 'ក្នុង Compose អថេរធម្មតានឹងត្រូវ Reset រាល់ពេល Recomposition។ ប្រើ `var count by remember { mutableStateOf(0) }` ដើម្បីរក្សាទុក State។'
      },
      tutorial: {
        en: '@Composable\nfun Counter() {\n    var count by remember { mutableStateOf(0) }\n    Column {\n        Text("Count: $count")\n        Button(onClick = { count++ }) {\n            Text("Add 1")\n        }\n    }\n}',
        km: '@Composable\nfun Counter() {\n    var count by remember { mutableStateOf(0) }\n    Column {\n        Text("ចំនួន: $count")\n        Button(onClick = { count++ }) {\n            Text("បន្ថែម 1")\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>4.1 State & Remember</h3><p>var count by remember { mutableStateOf(0) }</p></body></html>`
      }
    },
    {
      id: 'jc-4-2',
      slug: 'state-hoisting-lifting-state-up-to-a-parent-composable',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 State hoisting — lifting state up to a parent composable',
        km: '៤.២ State hoisting — ការលើក State ទៅកាន់ Parent Composable'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'State hoisting pattern makes composables stateless and reusable by passing state down and event callbacks up.',
        km: 'State hoisting ធ្វើឱ្យ Composable ក្លាយជា Stateless និងអាចប្រើឡើងវិញបានដោយបញ្ជូន State មកក្រោម និង Events ទៅលើ។'
      },
      tutorial: {
        en: '@Composable\nfun StatelessCounter(count: Int, onIncrement: () -> Unit) {\n    Row {\n        Text("Count: $count")\n        Button(onClick = onIncrement) { Text("+") }\n    }\n}',
        km: '@Composable\nfun StatelessCounter(count: Int, onIncrement: () -> Unit) {\n    Row {\n        Text("ចំនួន: $count")\n        Button(onClick = onIncrement) { Text("+") }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>4.2 State Hoisting</h3><p>Parent State -> (value, onValueChange) -> Child</p></body></html>`
      }
    },
    {
      id: 'jc-4-3',
      slug: 'viewmodel-for-screen-level-state-that-survives-configuration-changes',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 ViewModel for screen-level state that survives configuration changes',
        km: '៤.៣ ViewModel សម្រាប់ State ថ្នាក់អេក្រង់ដែលធន់នឹងការបង្វិលអេក្រង់'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Android ViewModel holds screen state across orientation changes (screen rotations) and survives activity recreation.',
        km: 'Android ViewModel រក្សាទុក State អេក្រង់រាល់ពេលបង្វិលអេក្រង់ (Rotation) និងការពារការបាត់បង់ទិន្នន័យ។'
      },
      tutorial: {
        en: 'class UserViewModel : ViewModel() {\n    var username by mutableStateOf("Guest")\n        private set\n    fun updateName(newName: String) { username = newName }\n}\n\n@Composable\nfun UserProfile(viewModel: UserViewModel = viewModel()) {\n    Text(text = viewModel.username)\n}',
        km: 'class UserViewModel : ViewModel() {\n    var username by mutableStateOf("Guest")\n        private set\n    fun updateName(newName: String) { username = newName }\n}\n\n@Composable\nfun UserProfile(viewModel: UserViewModel = viewModel()) {\n    Text(text = viewModel.username)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 ViewModel Architecture</h3><p>class MyViewModel : ViewModel() -> viewModel()</p></body></html>`
      }
    },
    {
      id: 'jc-4-4',
      slug: 'sharing-state-across-screens',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Sharing state across screens',
        km: '៤.៤ ការចែករំលែក State ឆ្លងកាត់អេក្រង់ច្រើន'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Pass a single shared ViewModel instance scoped to the parent NavGraph across multiple destination screens.',
        km: 'បញ្ជូន ViewModel Instance តែមួយដែល Scoped ក្នុង NavGraph ទៅកាន់អេក្រង់គោលដៅច្រើន។'
      },
      tutorial: {
        en: 'val sharedViewModel: SharedViewModel = viewModel(navBackStackEntry)\n// Pass sharedViewModel to both Screen A and Screen B',
        km: 'val sharedViewModel: SharedViewModel = viewModel(navBackStackEntry)\n// បញ្ជូន sharedViewModel ទៅកាន់អេក្រង់ A និង B'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>4.4 Shared ViewModel</h3><p>Shared ViewModel Scoped to NavGraph</p></body></html>`
      }
    },
    {
      id: 'jc-4-5',
      slug: 'practice-build-a-counter-with-shared-state-across-two-screens',
      moduleNumber: 4,
      lessonNumberInModule: 5,
      title: {
        en: '4.5 Practice: build a counter with shared state across two screens',
        km: '៤.៥ អនុវត្ត: សាងសង់ Counter ជាមួយ Shared State ឆ្លងអេក្រង់ ២'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a practical mini app where updating a counter on an edit screen dynamically updates the summary card on the parent screen.',
        km: 'សាងសង់ Mini App ដែលការកែប្រែ Counter លើអេក្រង់ Edit អាប់ដេតកាតសរុបលើអេក្រង់ដើមភ្លាមៗ។'
      },
      tutorial: {
        en: '@Composable\nfun CounterApp(viewModel: CounterViewModel = viewModel()) {\n    Column {\n        Text("Global Count: ${viewModel.count}")\n        Button(onClick = { viewModel.increment() }) { Text("Add") }\n    }\n}',
        km: '@Composable\nfun CounterApp(viewModel: CounterViewModel = viewModel()) {\n    Column {\n        Text("ចំនួនសរុប: ${viewModel.count}")\n        Button(onClick = { viewModel.increment() }) { Text("បន្ថែម") }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>4.5 Shared State Practice</h3><p>Sync Counter State Across 2 Screens</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'jc-5-1',
      slug: 'materialtheme-colors-typography-and-shapes',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 MaterialTheme — colors, typography, and shapes',
        km: '៥.១ MaterialTheme — ពណ៌ អក្សរ និងរូបរាង'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Material Design 3 provides system color schemes, typography tokens, and shape scales accessed via `MaterialTheme`.',
        km: 'Material Design 3 ផ្តល់នូវ Color schemes, Typography tokens, និង Shape scales តាមរយៈ `MaterialTheme`។'
      },
      tutorial: {
        en: 'Text(\n    text = "Material 3 Heading",\n    style = MaterialTheme.typography.titleLarge,\n    color = MaterialTheme.colorScheme.primary\n)',
        km: 'Text(\n    text = "ចំណងជើង Material 3",\n    style = MaterialTheme.typography.titleLarge,\n    color = MaterialTheme.colorScheme.primary\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>5.1 Material Theme Tokens</h3><p>MaterialTheme.colorScheme / typography / shapes</p></body></html>`
      }
    },
    {
      id: 'jc-5-2',
      slug: 'light-and-dark-mode-support',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Light and dark mode support',
        km: '៥.២ ការគាំទ្រ Light និង Dark Mode'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `isSystemInDarkTheme()` to automatically switch between `lightColorScheme()` and `darkColorScheme()` palettes.',
        km: 'ប្រើ `isSystemInDarkTheme()` ដើម្បីផ្លាស់ប្តូររវាង `lightColorScheme()` និង `darkColorScheme()` ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: '@Composable\nfun AppTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {\n    val colors = if (darkTheme) DarkColorScheme else LightColorScheme\n    MaterialTheme(colorScheme = colors, content = content)\n}',
        km: '@Composable\nfun AppTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {\n    val colors = if (darkTheme) DarkColorScheme else LightColorScheme\n    MaterialTheme(colorScheme = colors, content = content)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>5.2 Dynamic Theming</h3><p>isSystemInDarkTheme() -> DarkColorScheme vs LightColorScheme</p></body></html>`
      }
    },
    {
      id: 'jc-5-3',
      slug: 'custom-color-schemes-and-reusable-text-styles',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Custom color schemes and reusable text styles',
        km: '៥.៣ ការបង្កើត Color Schemes ផ្ទាល់ខ្លួន និង Reusable Text Styles'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Define custom brand colors and extend Material 3 typography with custom Google Fonts.',
        km: 'កំណត់ពណ៌ Brand ផ្ទាល់ខ្លួន និងពង្រីក Material 3 Typography ជាមួយ Google Fonts។'
      },
      tutorial: {
        en: 'val CustomPurple = Color(0xFF7E22CE)\nval AppTypography = Typography(\n    titleMedium = TextStyle(fontSize = 18.sp, fontWeight = FontWeight.Bold)\n)',
        km: 'val CustomPurple = Color(0xFF7E22CE)\nval AppTypography = Typography(\n    titleMedium = TextStyle(fontSize = 18.sp, fontWeight = FontWeight.Bold)\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.3 Custom Palette</h3><p>Color(0xFF7E22CE) -> Custom Typography & Shapes</p></body></html>`
      }
    },
    {
      id: 'jc-5-4',
      slug: 'practice-theme-a-sample-screen-with-a-custom-color-palette',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: theme a sample screen with a custom color palette',
        km: '៥.៤ អនុវត្ត: តុបតែងអេក្រង់គំរូដោយប្រើ Color Palette ផ្ទាល់ខ្លួន'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Apply a full custom Material 3 color theme with cards, top bar, floating action buttons, and dark mode preview toggle.',
        km: 'អនុវត្តរចនាប័ទ្ម Material 3 ពេញលេញជាមួយ Cards, Top Bar, FAB, និង Toggle Dark Mode។'
      },
      tutorial: {
        en: 'AppTheme {\n    Scaffold(\n        topBar = { TopAppBar(title = { Text("Custom Themed App") }) }\n    ) { padding ->\n        ScreenContent(modifier = Modifier.padding(padding))\n    }\n}',
        km: 'AppTheme {\n    Scaffold(\n        topBar = { TopAppBar(title = { Text("Custom Themed App") }) }\n    ) { padding ->\n        ScreenContent(modifier = Modifier.padding(padding))\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>5.4 Theming Practice</h3><p>MaterialTheme + Scaffold + TopAppBar + Dark Mode</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'jc-6-1',
      slug: 'local-state-vs-persisted-data-intro-to-datastore',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Local state vs persisted data — intro to DataStore',
        km: '៦.១ Local state និង Persisted data — សេចក្តីផ្តើមអំពី DataStore'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Jetpack Preferences DataStore stores key-value pairs asynchronously using Kotlin Flow and Coroutines.',
        km: 'Jetpack Preferences DataStore រក្សាទុក Key-Value មិនបាត់បង់ពេលបិទ App ដោយប្រើ Kotlin Flow និង Coroutines។'
      },
      tutorial: {
        en: 'val Context.dataStore by preferencesDataStore(name = "user_settings")\nval DARK_MODE_KEY = booleanPreferencesKey("dark_mode")\n\n// Read Flow\nval isDarkMode: Flow<Boolean> = context.dataStore.data.map { pref -> pref[DARK_MODE_KEY] ?: false }',
        km: 'val Context.dataStore by preferencesDataStore(name = "user_settings")\nval DARK_MODE_KEY = booleanPreferencesKey("dark_mode")\n\n// Read Flow\nval isDarkMode: Flow<Boolean> = context.dataStore.data.map { pref -> pref[DARK_MODE_KEY] ?: false }'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>6.1 Preferences DataStore</h3><p>dataStore.data.map { pref -> pref[KEY] }</p></body></html>`
      }
    },
    {
      id: 'jc-6-2',
      slug: 'making-a-network-request-with-retrofit',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Making a network request with Retrofit',
        km: '៦.២ ការធ្វើ Network Request ជាមួយ Retrofit'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Retrofit turns REST API HTTP endpoints into Kotlin interfaces with suspend functions.',
        km: 'Retrofit បំលែង REST API HTTP endpoints ទៅជា Kotlin Interface ជាមួយ suspend functions។'
      },
      tutorial: {
        en: 'data class Post(val id: Int, val title: String)\n\ninterface ApiService {\n    @GET("posts")\n    suspend fun getPosts(): List<Post>\n}',
        km: 'data class Post(val id: Int, val title: String)\n\ninterface ApiService {\n    @GET("posts")\n    suspend fun getPosts(): List<Post>\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>6.2 Retrofit Interface</h3><p>@GET("posts") suspend fun getPosts(): List<Post></p></body></html>`
      }
    },
    {
      id: 'jc-6-3',
      slug: 'coroutines-plus-viewmodel-for-clean-async-data-loading',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Coroutines + ViewModel for clean async data loading',
        km: '៦.៣ Coroutines + ViewModel សម្រាប់ការសរសេរ Async Data Loading ស្អាតបាត'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Launch asynchronous network calls safely inside `viewModelScope.launch` and expose loading / success / error UI states.',
        km: 'រត់ Asynchronous Network calls ដោយសុវត្ថិភាពក្នុង `viewModelScope.launch` និងបង្ហាញ UI Loading, Success, ឬ Error។'
      },
      tutorial: {
        en: 'class PostViewModel : ViewModel() {\n    var posts by mutableStateOf<List<Post>>(emptyList())\n    var isLoading by mutableStateOf(false)\n\n    fun loadPosts(api: ApiService) {\n        viewModelScope.launch {\n            isLoading = true\n            try { posts = api.getPosts() } finally { isLoading = false }\n        }\n    }\n}',
        km: 'class PostViewModel : ViewModel() {\n    var posts by mutableStateOf<List<Post>>(emptyList())\n    var isLoading by mutableStateOf(false)\n\n    fun loadPosts(api: ApiService) {\n        viewModelScope.launch {\n            isLoading = true\n            try { posts = api.getPosts() } finally { isLoading = false }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.3 Async Coroutines</h3><p>viewModelScope.launch -> isLoading -> MutableState List</p></body></html>`
      }
    },
    {
      id: 'jc-6-4',
      slug: 'parsing-json-into-kotlin-data-classes',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Parsing JSON into Kotlin data classes',
        km: '៦.៤ ការបំលែង JSON ទៅជា Kotlin Data Classes'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use Kotlinx Serialization or Moshi/Gson converters with Retrofit to parse JSON payloads into strongly typed Kotlin objects.',
        km: 'ប្រើប្រាស់ Kotlinx Serialization ឬ Moshi/Gson Converters ជាមួយ Retrofit ដើម្បីបំលែង JSON ជា Kotlin Objects។'
      },
      tutorial: {
        en: '@Serializable\ndata class UserResponse(\n    @SerialName("user_id") val id: Int,\n    val name: String,\n    val email: String\n)',
        km: '@Serializable\ndata class UserResponse(\n    @SerialName("user_id") val id: Int,\n    val name: String,\n    val email: String\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>6.4 JSON Serialization</h3><p>@Serializable data class UserResponse(...)</p></body></html>`
      }
    },
    {
      id: 'jc-6-5',
      slug: 'practice-fetch-and-display-a-list-of-items-from-a-public-api',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: fetch and display a list of items from a public API',
        km: '៦.៥ អនុវត្ត: ទាញយក និងបង្ហាញបញ្ជីទិន្នន័យពី Public API'
      },
      durationMinutes: 30,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a live API data viewer featuring a progress bar loading spinner, `LazyColumn` results list, and pull-to-refresh.',
        km: 'សាងសង់កម្មវិធីទាញយកទិន្នន័យពី API មាន Progress Bar ពេលកំពុង Load, បញ្ជីបង្ហាញ `LazyColumn` និង Pull-to-refresh។'
      },
      tutorial: {
        en: 'if (viewModel.isLoading) {\n    CircularProgressIndicator()\n} else {\n    LazyColumn {\n        items(viewModel.posts) { post -> Text(post.title) }\n    }\n}',
        km: 'if (viewModel.isLoading) {\n    CircularProgressIndicator()\n} else {\n    LazyColumn {\n        items(viewModel.posts) { post -> Text(post.title) }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>6.5 Live API Viewer</h3><p>CircularProgressIndicator | LazyColumn API Items</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'jc-7-1',
      slug: 'building-a-form-with-outlinedtextfield',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Building a form with OutlinedTextField',
        km: '៧.១ ការសាងសង់ Form ដោយប្រើ OutlinedTextField'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Build material text input fields using `OutlinedTextField` with floating labels, placeholder hints, and leading/trailing icons.',
        km: 'សាងសង់ប្រអប់បញ្ចូលអត្ថបទដោយប្រើ `OutlinedTextField` មាន Floating Label, Placeholder, និង Icons។'
      },
      tutorial: {
        en: 'var email by remember { mutableStateOf("") }\nOutlinedTextField(\n    value = email,\n    onValueChange = { email = it },\n    label = { Text("Email Address") },\n    leadingIcon = { Icon(Icons.Default.Email, contentDescription = null) },\n    singleLine = true\n)',
        km: 'var email by remember { mutableStateOf("") }\nOutlinedTextField(\n    value = email,\n    onValueChange = { email = it },\n    label = { Text("អាសយដ្ឋាន អ៊ីមែល") },\n    leadingIcon = { Icon(Icons.Default.Email, contentDescription = null) },\n    singleLine = true\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>7.1 OutlinedTextField</h3><p>OutlinedTextField(value = email, onValueChange = { email = it })</p></body></html>`
      }
    },
    {
      id: 'jc-7-2',
      slug: 'form-validation',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Form validation',
        km: '៧.២ ការពិនិត្យផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃ Form (Validation)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Validate field inputs in real-time and display inline red error messages using `isError` parameter on text fields.',
        km: 'ពិនិត្យភាពត្រឹមត្រូវនៃអត្ថបទបញ្ចូល និងបង្ហាញសារកំហុស (Error Message) ដោយប្រើប៉ារ៉ាម៉ែត្រ `isError`។'
      },
      tutorial: {
        en: 'val isEmailInvalid = email.isNotBlank() && !email.contains("@")\nOutlinedTextField(\n    value = email,\n    onValueChange = { email = it },\n    isError = isEmailInvalid,\n    supportingText = { if (isEmailInvalid) Text("Invalid email address", color = Color.Red) }\n)',
        km: 'val isEmailInvalid = email.isNotBlank() && !email.contains("@")\nOutlinedTextField(\n    value = email,\n    onValueChange = { email = it },\n    isError = isEmailInvalid,\n    supportingText = { if (isEmailInvalid) Text("អាសយដ្ឋាន អ៊ីមែល មិនត្រឹមត្រូវ", color = Color.Red) }\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>7.2 Form Validation</h3><p>isError = isEmailInvalid -> supportingText Message</p></body></html>`
      }
    },
    {
      id: 'jc-7-3',
      slug: 'buttons-gestures-and-user-feedback-snackbar-dialogs',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Buttons, gestures, and user feedback (Snackbar, dialogs)',
        km: '៧.៣ Buttons, Gestures, និង User feedback (Snackbar, Dialogs)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Provide feedback to users using `SnackbarHost`, `AlertDialog`, progress indicators, and gesture handlers like `combinedClickable`.',
        km: 'ផ្តល់ព័ត៌មានត្រឡប់ទៅកាន់អ្នកប្រើប្រាស់ដោយប្រើ `SnackbarHost`, `AlertDialog`, និង Gesture Handlers។'
      },
      tutorial: {
        en: 'val snackbarHostState = remember { SnackbarHostState() }\nLaunchedEffect(key1 = showSuccess) {\n    if (showSuccess) snackbarHostState.showSnackbar("Logged in successfully!")\n}',
        km: 'val snackbarHostState = remember { SnackbarHostState() }\nLaunchedEffect(key1 = showSuccess) {\n    if (showSuccess) snackbarHostState.showSnackbar("ចូលប្រើប្រាស់ជោគជ័យ!")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.3 User Feedback</h3><p>SnackbarHost | AlertDialog | Toast Notifications</p></body></html>`
      }
    },
    {
      id: 'jc-7-4',
      slug: 'android-permissions-and-device-feature-concepts',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Android permissions and device feature concepts (camera/location)',
        km: '៧.៤ ប្រព័ន្ធ Android Permissions និងគំនិត Device Features (Camera/Location)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Understand Android runtime permission flows using Accompanist Permissions or Activity Result APIs for accessing Camera and GPS Location.',
        km: 'យល់ដឹងពីប្រព័ន្ធទាមទារសិទ្ធិ (Runtime Permissions) សម្រាប់ប្រើប្រាស់ Camera និង GPS Location។'
      },
      tutorial: {
        en: '// AndroidManifest.xml:\n<uses-permission android:name="android.permission.CAMERA" />\n\n// Runtime Request via ActivityResultLauncher:\nval permissionLauncher = rememberLauncherForActivityResult(\n    ActivityResultContracts.RequestPermission()\n) { isGranted -> /* handle granted status */ }',
        km: '// AndroidManifest.xml:\n<uses-permission android:name="android.permission.CAMERA" />\n\n// Runtime Request via ActivityResultLauncher:\nval permissionLauncher = rememberLauncherForActivityResult(\n    ActivityResultContracts.RequestPermission()\n) { isGranted -> /* handle granted status */ }'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>7.4 Runtime Permissions</h3><p>RequestPermission() -> CAMERA / LOCATION</p></body></html>`
      }
    },
    {
      id: 'jc-7-5',
      slug: 'practice-build-a-login-style-form-with-validation',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: build a login-style form with validation',
        km: '៧.៥ អនុវត្ត: សាងសង់ Login Form ជាមួយ Validation'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Construct a complete Android login screen with email and password inputs, password toggle icon, field validation, and loading indicator.',
        km: 'សាងសង់ Login Screen មាន Email & Password, Toggle បង្ហាញពាក្យសម្ងាត់, Validation, និង Loading Indicator។'
      },
      tutorial: {
        en: 'Column(modifier = Modifier.padding(24.dp)) {\n    Text("Welcome Back", style = MaterialTheme.typography.headlineMedium)\n    OutlinedTextField(value = email, onValueChange = { email = it }, label = { Text("Email") })\n    OutlinedTextField(value = password, onValueChange = { password = it }, label = { Text("Password") }, visualTransformation = PasswordVisualTransformation())\n    Button(onClick = { handleLogin() }, modifier = Modifier.fillMaxWidth()) { Text("Sign In") }\n}',
        km: 'Column(modifier = Modifier.padding(24.dp)) {\n    Text("ស្វាគមន៍មកវិញ", style = MaterialTheme.typography.headlineMedium)\n    OutlinedTextField(value = email, onValueChange = { email = it }, label = { Text("Email") })\n    OutlinedTextField(value = password, onValueChange = { password = it }, label = { Text("Password") }, visualTransformation = PasswordVisualTransformation())\n    Button(onClick = { handleLogin() }, modifier = Modifier.fillMaxWidth()) { Text("ចូលប្រើ") }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>7.5 Login Form Practice</h3><p>Email + Password + Validation + Loading Spinner</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'jc-8-1',
      slug: 'debugging-tools-compose-preview-layout-inspector',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Debugging tools: Compose Preview, Layout Inspector',
        km: '៨.១ ឧបករណ៍ Debugging: Compose Preview និង Layout Inspector'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Utilize Android Studio\'s interactive Compose Previews, Layout Inspector for view bounds, and Recomposition Counter for rendering optimization.',
        km: 'ប្រើប្រាស់ Compose Previews ក្នុង Android Studio, Layout Inspector, និង Recomposition Counter ដើម្បីពិនិត្យល្បឿន UI។'
      },
      tutorial: {
        en: '@Preview(name = "Light Mode", showBackground = true)\n@Preview(name = "Dark Mode", uiMode = Configuration.UI_MODE_NIGHT_YES)\n@Composable\nfun MultiThemePreview() {\n    ExpenseFlowApp()\n}',
        km: '@Preview(name = "Light Mode", showBackground = true)\n@Preview(name = "Dark Mode", uiMode = Configuration.UI_MODE_NIGHT_YES)\n@Composable\nfun MultiThemePreview() {\n    ExpenseFlowApp()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>8.1 Compose Tools</h3><p>Compose Preview | Layout Inspector | Recomposition Count</p></body></html>`
      }
    },
    {
      id: 'jc-8-2',
      slug: 'writing-a-basic-compose-ui-test',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Writing a basic Compose UI test',
        km: '៨.២ ការសរសេរ Compose UI Test មូលដ្ឋាន'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Write automated UI unit tests using `createComposeRule()`, `onNodeWithText()`, and `performClick()` to verify user interactions.',
        km: 'សរសេរ Automated UI Tests ដោយប្រើ `createComposeRule()`, `onNodeWithText()`, និង `performClick()` ដើម្បីពិនិត្យ UI។'
      },
      tutorial: {
        en: '@get:Rule\nval composeTestRule = createComposeRule()\n\n@Test\nfun counterIncrementsOnClick() {\n    composeTestRule.setContent { Counter() }\n    composeTestRule.onNodeWithText("Add 1").performClick()\n    composeTestRule.onNodeWithText("Count: 1").assertIsDisplayed()\n}',
        km: '@get:Rule\nval composeTestRule = createComposeRule()\n\n@Test\nfun counterIncrementsOnClick() {\n    composeTestRule.setContent { Counter() }\n    composeTestRule.onNodeWithText("Add 1").performClick()\n    composeTestRule.onNodeWithText("Count: 1").assertIsDisplayed()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>8.2 Compose UI Testing</h3><p>createComposeRule() -> onNodeWithText() -> performClick()</p></body></html>`
      }
    },
    {
      id: 'jc-8-3',
      slug: 'planning-the-expenseflow-capstone',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: {
        en: '8.3 Planning the ExpenseFlow capstone (screens, data model, features)',
        km: '៨.៣ ការរៀបចំផែនការ Capstone ExpenseFlow (Screens, Data Model, Features)'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Architect the ExpenseFlow capstone app: design data models, state management with ViewModel, DataStore persistence, and APK build process.',
        km: 'រៀបចំរចនាសម្ព័ន្ធ Capstone App ExpenseFlow៖ Data Models, ViewModel State, DataStore Storage, និងការបង្កើត APK។'
      },
      tutorial: {
        en: '// Capstone Architecture:\n1. Data Model: Expense(id, title, amount, category)\n2. ViewModel: ExpenseViewModel with mutableStateListOf\n3. UI: Scaffold + LazyColumn + FloatingActionButton + AlertDialog\n4. Storage: Preferences DataStore for persistence',
        km: '// រចនាសម្ព័ន្ធ Capstone:\n១. Data Model: Expense(id, title, amount, category)\n២. ViewModel: ExpenseViewModel ជាមួយ mutableStateListOf\n៣. UI: Scaffold + LazyColumn + FloatingActionButton + AlertDialog\n៤. Storage: Preferences DataStore សម្រាប់រក្សាទុកទិន្នន័យ'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>8.3 Capstone Architecture</h3><p>Expense Data Model -> ViewModel -> Jetpack Compose M3 UI -> DataStore</p></body></html>`
      }
    }
  ]
};
