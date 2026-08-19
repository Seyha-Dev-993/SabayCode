import { MobileCourse } from './mobileCoursesHubData';

export const REACT_NATIVE_COURSE_DATA: MobileCourse = {
  id: 'react-native',
  title: {
    en: 'React Native — Cross-Platform Apps with React',
    km: 'React Native — សាងកម្មវិធីឆ្លងវេទិកាដោយប្រើ React'
  },
  iconName: 'react-native',
  type: 'framework',
  parentLanguageId: 'javascript',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Already know React? Build real iOS and Android apps with the same skills.',
    km: 'ចេះ React រួចហើយមែនទេ? សាងកម្មវិធី iOS និង Android ពិតប្រាកដដោយប្រើជំនាញដដែល។'
  },
  summary: {
    en: "React Native is Meta's (Facebook's) framework for building real, native mobile apps using JavaScript/TypeScript and React — the same library taught in this platform's Frontend Web Development course. Instead of learning an entirely new language, React Native lets web developers apply their existing React skills to build apps for both iOS and Android from one shared codebase. It powers major apps like Instagram, Discord, Shopify, and Coinbase. This course assumes you already know React fundamentals (components, props, state, hooks) and focuses entirely on what's different when building for mobile: native components instead of HTML elements, mobile navigation, device APIs, and shipping a real app. By the end, you'll have built a complete cross-platform app using skills you can carry directly from — or back into — web development.",
    km: 'React Native ជា framework របស់ Meta (Facebook) សម្រាប់សាងកម្មវិធីទូរស័ព្ទ native ពិតប្រាកដដោយប្រើ JavaScript/TypeScript និង React — library ដដែលដែលបានបង្រៀនក្នុងវគ្គ Frontend Web Development របស់វេទិកានេះ។ ជំនួសឱ្យការរៀនភាសាថ្មីទាំងស្រុង, React Native អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍គេហទំព័រអនុវត្តជំនាញ React ដែលមានស្រាប់របស់ពួកគេ ដើម្បីសាងកម្មវិធីទាំង iOS និង Android ពីកូដតែមួយ។ វាដំណើរការកម្មវិធីធំៗដូចជា Instagram, Discord, Shopify និង Coinbase។ វគ្គសិក្សានេះសន្មតថាអ្នកចេះមូលដ្ឋាន React រួចហើយ (components, props, state, hooks) ហើយផ្តោតទាំងស្រុងលើអ្វីដែលខុសគ្នានៅពេលសាងកម្មវិធីទូរស័ព្ទ៖ native components ជំនួស HTML elements, mobile navigation, device APIs និងការចេញផ្សាយកម្មវិធីពិតប្រាកដ។ ចប់វគ្គនេះ អ្នកនឹងបានសាងកម្មវិធីឆ្លងវេទិកាពេញលេញដោយប្រើជំនាញដែលអ្នកអាចយកទៅប្រើក្នុងការអភិវឌ្ឍន៍គេហទំព័របានផងដែរ។'
  },
  estimatedHours: 24,
  lessonCount: 32,
  usedFor: 'Cross-Platform iOS & Android Mobile Apps, Expo Cross-Platform Apps, Web Apps, Desktop Apps (macOS/Windows)',
  realWorldApps: ['Instagram', 'Discord', 'Shopify', 'Coinbase', 'Pinterest', 'Skype'],
  prerequisites: {
    en: "Solid JavaScript fundamentals and basic React knowledge (components, props, state, hooks) are required — complete the Frontend Web Development course's JavaScript and React.js modules first if you haven't already. This course does not re-teach JavaScript or React basics from scratch.",
    km: 'ត្រូវការគ្រឹះ JavaScript និងចំណេះដឹង React មូលដ្ឋាន (components, props, state, hooks) ច្បាស់លាស់ — សូមបញ្ចប់វគ្គ Frontend Web Development ផ្នែក JavaScript និង React.js ជាមុនសិន ប្រសិនបើអ្នកមិនទាន់បានរៀន។ វគ្គសិក្សានេះមិនបង្រៀនឡើងវិញនូវមូលដ្ឋាន JavaScript ឬ React ពីដំបូងឡើយ។'
  },
  whatYouWillLearn: {
    en: [
      'Set up a React Native project with Expo, plus Android/iOS simulators',
      'Understand how React Native components map to native mobile UI (View, Text, Image vs div, p, img)',
      'Build layouts using Flexbox, React Native\'s core layout system',
      'Navigate between screens using React Navigation',
      'Manage state using hooks (useState, useEffect) and Context',
      'Style apps using StyleSheet and handle light/dark mode',
      'Fetch and display data from a REST API using fetch/axios',
      'Build and validate forms (login screens, input fields, buttons)',
      'Use core device APIs conceptually (camera, location, notifications)',
      'Debug using React Native/Expo dev tools',
      'Build a complete, real, portfolio-ready React Native app from scratch',
      'Understand the basics of building and previewing a release build'
    ],
    km: [
      'រៀបចំគម្រោង React Native ដោយប្រើ Expo និង Android/iOS Simulators',
      'យល់ដឹងពីរបៀបដែល React Native Components បំលែងទៅជា Native Mobile UI (View, Text, Image ជំនួស div, p, img)',
      'សាងសង់ Layouts ដោយប្រើ Flexbox ដែលជាប្រព័ន្ធ Layout ស្នូលរបស់ React Native',
      'ធ្វើការផ្លាស់ប្តូររវាងអេក្រង់ (Navigation) ដោយប្រើប្រាស់ React Navigation',
      'គ្រប់គ្រង State ដោយប្រើ Hooks (useState, useEffect) និង Context API',
      'តុបតែង App ដោយប្រើ StyleSheet និងគាំទ្រ Light/Dark Mode',
      'ទាញយក និងបង្ហាញទិន្នន័យពី REST API ដោយប្រើ fetch ឬ axios',
      'សាងសង់ និងពិនិត្យភាពត្រឹមត្រូវនៃ Form (Login screens, Input fields, Buttons)',
      'ប្រើប្រាស់ Device APIs ស្នូល (Camera, Location, Notifications)',
      'ដោះស្រាយកំហុស Debugging ដោយប្រើ React Native/Expo Dev Tools',
      'សាងសង់កម្មវិធី React Native ពេញលេញមួយពីដើមដល់ចប់សម្រាប់ធ្វើ Portfolio',
      'យល់ដឹងពីមូលដ្ឋាននៃការបង្កើត និងពិនិត្យមើល Release Build'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Node.js (verify with `node -v`)\n2. Install Expo Go app on your phone or set up Android Studio/Xcode for simulators\n3. Create your first project: `npx create-expo-app my-first-app`\n4. Run it: `npx expo start`, then scan QR code with Expo Go, or press `a`/`i` for emulator',
    km: '១. ដំឡើង Node.js (ពិនិត្យមើលដោយរត់ `node -v`)\n២. ដំឡើង App Expo Go លើទូរស័ព្ទដៃ ឬរៀបចំ Android Studio/Xcode សម្រាប់ Simulators\n៣. បង្កើតគម្រោងដំបូងរបស់អ្នក៖ `npx create-expo-app my-first-app`\n៤. រត់កម្មវិធី៖ `npx expo start` រួច Scan QR Code ជាមួយ Expo Go ឬចុច `a`/`i` សម្រាប់ Emulator'
  },
  cheatSheet: [
    {
      concept: 'View & Text Layout',
      code: 'import { View, Text, StyleSheet } from "react-native";\n\nexport default function Screen() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Hello React Native!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: "center", alignItems: "center" },\n  title: { fontSize: 20, fontWeight: "bold" },\n});',
      explanation: {
        en: 'View replaces <div> and Text replaces <p>/<span>. In React Native, text MUST be placed inside <Text>.',
        km: 'View ជំនួស <div> ហើយ Text ជំនួស <p>/<span>។ ក្នុង React Native អក្សរទាំងអស់ត្រូវតែដាក់ក្នុង <Text>។'
      }
    },
    {
      concept: 'ScrollView vs FlatList',
      code: '// For fixed short content:\n<ScrollView><Text>Item 1</Text></ScrollView>\n\n// For dynamic or long lists:\n<FlatList\n  data={items}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => <Text>{item.title}</Text>}\n/>',
      explanation: {
        en: 'FlatList renders only visible screen items, preserving memory for long scrollable lists.',
        km: 'FlatList បង្ហាញតែធាតុដែលមើលឃើញលើអេក្រង់ ប៉ុណ្ណោះ ដែលជួយរក្សា Memory សម្រាប់បញ្ជីវែងៗ។'
      }
    },
    {
      concept: 'React Navigation Stack',
      code: 'import { createNativeStackNavigator } from "@react-navigation/native-stack";\nconst Stack = createNativeStackNavigator();\n\n<NavigationContainer>\n  <Stack.Navigator>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Details" component={DetailScreen} />\n  </Stack.Navigator>\n</NavigationContainer>',
      explanation: {
        en: 'Native Stack Navigator mimics physical iOS and Android screen slide transitions.',
        km: 'Native Stack Navigator អនុវត្តការផ្លាស់ប្តូរអេក្រង់ slide ដូចនៅលើ iOS និង Android ពិតប្រាកដ។'
      }
    },
    {
      concept: 'AsyncStorage Data Persistence',
      code: 'import AsyncStorage from "@react-native-async-storage/async-storage";\n\n// Save:\nawait AsyncStorage.setItem("tasks", JSON.stringify(tasks));\n\n// Read:\nconst jsonValue = await AsyncStorage.getItem("tasks");\nconst savedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];',
      explanation: {
        en: 'AsyncStorage acts as client-side key-value persistence on mobile devices, similar to localStorage on web.',
        km: 'AsyncStorage ដើរតួជា Key-Value Storage លើទូរស័ព្ទដៃ ប្រហាក់ប្រហែលនឹង localStorage លើ Web។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-rn-1',
      question: {
        en: 'In React Native, what component is used instead of HTML <div> for grouping elements and layouts?',
        km: 'តើ Component មួយណា ក្នុង React Native ត្រូវប្រើជំនួស HTML <div> សម្រាប់រៀបចំ Layout?'
      },
      options: [
        { id: '1', text: { en: '<View>', km: '<View>' }, isCorrect: true },
        { id: '2', text: { en: '<Div>', km: '<Div>' }, isCorrect: false },
        { id: '3', text: { en: '<Container>', km: '<Container>' }, isCorrect: false }
      ],
      explanation: {
        en: '<View> is the fundamental building block container in React Native, mapping directly to UIView on iOS and android.view.View on Android.',
        km: '<View> គឺជា UI Container គ្រឹះក្នុង React Native ដែលបំលែងដោយផ្ទាល់ទៅជា UIView លើ iOS និង android.view.View លើ Android។'
      }
    },
    {
      id: 'q-rn-2',
      question: {
        en: 'Why is `FlatList` preferred over mapping over an array inside a `ScrollView` for rendering long lists?',
        km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `FlatList` ជំនួសឱ្យការ map អារេក្នុង `ScrollView` ពេលបង្ហាញបញ្ជីវែងៗ?'
      },
      options: [
        { id: '1', text: { en: 'FlatList only renders visible items on screen, keeping scrolling smooth and memory usage low', km: 'FlatList Render តែធាតុដែលមើលឃើញលើអេក្រង់ ដែលធ្វើឱ្យ Scroll រលូន និងប្រើ Memory តិច' }, isCorrect: true },
        { id: '2', text: { en: 'ScrollView crashes if it contains more than 5 elements', km: 'ScrollView Crash ប្រសិនបើវាមានធាតុលើសពី ៥' }, isCorrect: false },
        { id: '3', text: { en: 'FlatList automatically translates text into Khmer language', km: 'FlatList បកប្រែអត្ថបទជាភាសាខ្មែរដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
      ],
      explanation: {
        en: '`FlatList` lazily renders items as they enter the viewport and recycles off-screen views, making it suitable for hundreds or thousands of list items.',
        km: '`FlatList` Render ធាតុប្រកបដោយប្រសិទ្ធភាពនៅពេលចូលក្នុង Viewport និង Re-use Views ដែលចេញក្រៅអេក្រង់ ធ្វើឱ្យវាស័ក្តិសមសម្រាប់បញ្ជីរាប់រយរាប់ពាន់ធាតុ។'
      }
    },
    {
      id: 'q-rn-3',
      question: {
        en: 'Which hook is used to load saved data from AsyncStorage or fetch data from an API when a screen mounts?',
        km: 'តើ Hook មួយណាដែលត្រូវប្រើសម្រាប់ Load ទិន្នន័យពី AsyncStorage ឬ Fetch ពី API នៅពេលអេក្រង់បើកដំបូង?'
      },
      options: [
        { id: '1', text: { en: 'useEffect', km: 'useEffect' }, isCorrect: true },
        { id: '2', text: { en: 'useState', km: 'useState' }, isCorrect: false },
        { id: '3', text: { en: 'useNavigation', km: 'useNavigation' }, isCorrect: false }
      ],
      explanation: {
        en: '`useEffect` with an empty dependency array `[]` executes side effects like data loading when the component first mounts.',
        km: '`useEffect` ជាមួយអថេរ Dependency ទទេ `[]` ប្រតិបត្តិ Side Effects ដូចជាការ Load ទិន្នន័យនៅពេល Component Mount ដំបូង។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'TaskFlow — React Native To-Do App',
      km: 'TaskFlow — កម្មវិធី To-Do លើ React Native'
    },
    description: {
      en: 'Build the React Native version of TaskFlow — matching the Flutter capstone feature set so you can directly compare how the same app comes together in two different cross-platform frameworks: task creation, checkboxes, local AsyncStorage persistence, light/dark mode, and screen navigation.',
      km: 'សាងសង់កម្មវិធី TaskFlow ជា React Native ជាមួយមុខងារដូចគ្នានឹងវគ្គ Flutter Capstone ដើម្បីប្រៀបធៀបរបៀបអភិវឌ្ឍន៍លើ Framework ទាំងពីរ៖ បន្ថែម/ដកសញ្ញាសម្រេច/លុប task, រក្សាទុកទិន្នន័យ local ជាមួយ AsyncStorage, Light/Dark theme, និងការផ្លាស់ប្តូរអេក្រង់។'
    },
    featureChecklist: {
      en: [
        'Task list screen showing all tasks with a checkbox to mark complete, built with FlatList',
        'Add-task screen or modal navigated to via a floating action button',
        'Delete a task via button or swipe action',
        'Tasks persist between app restarts using AsyncStorage',
        'Light/dark theme toggle',
        'Empty state message when there are no tasks yet'
      ],
      km: [
        'អេក្រង់បញ្ជី Task បង្ហាញ Task ទាំងអស់ជាមួយ Checkbox សម្រេចបាន ដែលសាងសង់ដោយប្រើ FlatList',
        'អេក្រង់បន្ថែម Task ថ្មី ដែលបើកតាមរយៈ Floating Action Button',
        'លុប Task ដោយចុចប៊ូតុងលុប ឬ Swipe',
        'រក្សាទុក Task មិនឱ្យបាត់បង់ពេលបិទ App ដោយប្រើ AsyncStorage',
        'ប៊ូតុងផ្លាស់ប្តូរ Light/Dark Theme',
        'បង្ហាញសារ Empty State នៅពេលមិនទាន់មាន Task'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0b1120; color:#f8fafc; font-family: system-ui, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:380px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#61dafb; margin:0; font-size:20px;">⚛️ TaskFlow RN</h3>
      <span style="background:#61dafb; color:#0f172a; font-weight:bold; font-size:11px; padding:3px 8px; border-radius:12px;">React Native</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Learn React Native Components</p>
        <span style="font-size:12px; color:#94a3b8;">Module 2 Complete</span>
      </div>
      <span style="color:#22c55e; font-size:18px;">✓</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Build TaskFlow Capstone</p>
        <span style="font-size:12px; color:#eab308;">In Progress</span>
      </div>
      <span style="color:#64748b; font-size:18px;">○</span>
    </div>
    <div style="text-align:center; margin-top:20px;">
      <button style="background:#61dafb; color:#0f172a; font-weight:bold; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; width:100%;">+ Add New Task</button>
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TaskFlowApp() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete React Native Course', isDone: true },
    { id: '2', title: 'Build TaskFlow Capstone', isDone: false },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@taskflow_tasks');
      if (jsonValue != null) setTasks(JSON.parse(jsonValue));
    } catch (e) {
      console.error(e);
    }
  };

  const saveTasks = async (tasksToSave) => {
    try {
      await AsyncStorage.setItem('@taskflow_tasks', JSON.stringify(tasksToSave));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setModalVisible(false);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.container, themeStyles.bg]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={[styles.headerTitle, themeStyles.text]}>TaskFlow ⚛️</Text>
        <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)} style={styles.themeBtn}>
          <Text style={{ fontSize: 18 }}>{isDarkMode ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={[styles.emptyText, themeStyles.subText]}>
            No tasks yet! Tap + below to add your first task.
          </Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.taskCard, themeStyles.card]}>
              <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkbox}>
                <Text style={{ fontSize: 18 }}>{item.isDone ? '✅' : '⬜'}</Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskTitle,
                  themeStyles.text,
                  item.isDone && styles.doneText,
                ]}
              >
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteBtn}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, themeStyles.card]}>
            <Text style={[styles.modalTitle, themeStyles.text]}>New Task</Text>
            <TextInput
              style={[styles.input, themeStyles.input]}
              placeholder="Task name..."
              placeholderTextColor="#94a3b8"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              autoFocus
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelBtn}
              >
                <Text style={{ color: '#94a3b8' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddTask} style={styles.addBtn}>
                <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingHorizontal: 8 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  themeBtn: { padding: 8 },
  taskCard: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, marginBottom: 10 },
  checkbox: { marginRight: 12 },
  taskTitle: { flex: 1, fontSize: 16 },
  doneText: { textDecorationLine: 'line-through', opacity: 0.5 },
  deleteBtn: { padding: 4 },
  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emptyText: { fontSize: 16, textAlign: 'center' },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#61dafb', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  fabText: { fontSize: 28, color: '#0f172a', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalCard: { width: '85%', padding: 20, borderRadius: 16 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 16 },
  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12 },
  cancelBtn: { padding: 10 },
  addBtn: { backgroundColor: '#61dafb', padding: 10, borderRadius: 8 },
});

const darkTheme = StyleSheet.create({
  bg: { backgroundColor: '#0f172a' },
  text: { color: '#f8fafc' },
  subText: { color: '#94a3b8' },
  card: { backgroundColor: '#1e293b' },
  input: { borderColor: '#334155', color: '#f8fafc' },
});

const lightTheme = StyleSheet.create({
  bg: { backgroundColor: '#f8fafc' },
  text: { color: '#0f172a' },
  subText: { color: '#64748b' },
  card: { backgroundColor: '#ffffff', borderHeight: 1, borderColor: '#e2e8f0' },
  input: { borderColor: '#cbd5e1', color: '#0f172a' },
});`
  },
  lessons: [
    // MODULE 1
    {
      id: 'rn-1-1',
      slug: 'what-is-react-native-and-how-it-differs-from-react-for-web',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is React Native and how it differs from React for web',
        km: '១.១ អ្វីទៅជា React Native និងរបៀបដែលវាខុសគ្នាពី React លើ Web'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'React Native uses the same core ideas as React for web — components, props, state, hooks, JSX — but instead of rendering HTML elements like <div> and <p>, it renders real native mobile UI elements like View and Text through a native bridge.',
        km: 'React Native ប្រើគំនិតស្នូលដូចគ្នានឹង React សម្រាប់គេហទំព័រ — components, props, state, hooks, JSX — ប៉ុន្តែជំនួសឱ្យការបង្ហាញ HTML elements ដូចជា <div> និង <p>, វាបង្ហាញធាតុ UI ទូរស័ព្ទ native ពិតប្រាកដដូចជា View និង Text។'
      },
      tutorial: {
        en: 'import React from "react";\nimport { View, Text, StyleSheet } from "react-native";\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Hello, React Native!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: "center", alignItems: "center" },\n  text: { fontSize: 20 },\n});',
        km: 'import React from "react";\nimport { View, Text, StyleSheet } from "react-native";\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>សួស្តី React Native!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: "center", alignItems: "center" },\n  text: { fontSize: 20 },\n});'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#61dafb; padding:20px; font-family:monospace;"><h3>1.1 Hello React Native</h3><pre>View -> Text('Hello, React Native!')</pre></body></html>`
      }
    },
    {
      id: 'rn-1-2',
      slug: 'setting-up-expo-and-running-your-first-app',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Setting up Expo and running your first app',
        km: '១.២ ការរៀបចំ Expo និងការរត់កម្មវិធីដំបូងរបស់អ្នក'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Expo is an open-source framework and toolset built on React Native that lets you run and test apps instantly on physical iOS/Android devices via the Expo Go app or desktop emulators without configuring Xcode or Android Studio right away.',
        km: 'Expo គឺជា Framework និង Toolset លើ React Native ដែលអនុញ្ញាតឱ្យអ្នករត់ និងធ្វើតេស្ត App ដោយផ្ទាល់លើទូរស័ព្ទដៃតាម Expo Go App ឬលើ Simulators ដោយមិនបាច់កំណត់ Xcode ឬ Android Studio ភ្លាមៗ។'
      },
      tutorial: {
        en: '// Terminal commands:\nnode -v\nnpx create-expo-app my-first-app\ncd my-first-app\nnpx expo start',
        km: '// ពាក្យបញ្ជា Terminal:\nnode -v\nnpx create-expo-app my-first-app\ncd my-first-app\nnpx expo start'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.2 Expo Setup</h3><p>✓ Node.js installed<br>✓ Expo CLI initialized<br>📱 Expo Go connected</p></body></html>`
      }
    },
    {
      id: 'rn-1-3',
      slug: 'your-first-screen-the-expo-starter-explained-line-by-line',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first screen — the Expo starter, explained line by line',
        km: '១.៣ អេក្រង់ដំបូងរបស់អ្នក — កម្មវិធីដើមរបស់ Expo ពន្យល់មួយបន្ទាត់ម្តងៗ'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Analyze Expo\'s boilerplate entry point: default App export, status bar control, StyleSheet inline configuration, and View/Text element layering.',
        km: 'វិភាគកូដដើមរបស់ Expo៖ App export, StatusBar, StyleSheet, និងរចនាសម្ព័ន្ធស្រទាប់នៃ View/Text។'
      },
      tutorial: {
        en: 'import { StatusBar } from "expo-status-bar";\nimport { StyleSheet, Text, View } from "react-native";\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text>Open up App.js to start working on your app!</Text>\n      <StatusBar style="auto" />\n    </View>\n  );\n}',
        km: 'import { StatusBar } from "expo-status-bar";\nimport { StyleSheet, Text, View } from "react-native";\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text>បើក App.js ដើម្បីចាប់ផ្តើមសរសេរកូដកម្មវិធីរបស់អ្នក!</Text>\n      <StatusBar style="auto" />\n    </View>\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>1.3 Expo Starter</h3><p>App.js -> View -> Text & StatusBar</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'rn-2-1',
      slug: 'core-components-view-text-image-scrollview',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 Core components: View, Text, Image, ScrollView (vs HTML equivalents)',
        km: '២.១ Core components: View, Text, Image, ScrollView (ប្រៀបធៀបនឹង HTML)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Learn how React Native UI primitives directly replace web HTML elements: View (div), Text (p/span), Image (img), and ScrollView (overflow: scroll).',
        km: 'រៀនពីរបៀបដែល React Native UI Primitives ជំនួសធាតុ HTML លើ Web៖ View (div), Text (p/span), Image (img), និង ScrollView (overflow: scroll)។'
      },
      tutorial: {
        en: 'import { ScrollView, View, Text, Image } from "react-native";\n\n<ScrollView>\n  <View>\n    <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={{ width: 50, height: 50 }} />\n    <Text>React Native Mobile Core</Text>\n  </View>\n</ScrollView>',
        km: 'import { ScrollView, View, Text, Image } from "react-native";\n\n<ScrollView>\n  <View>\n    <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={{ width: 50, height: 50 }} />\n    <Text>React Native Mobile Core</Text>\n  </View>\n</ScrollView>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.1 Core Primitives</h3><p>View (div) | Text (span) | Image (img) | ScrollView</p></body></html>`
      }
    },
    {
      id: 'rn-2-2',
      slug: 'flexbox-layout-in-react-native',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Flexbox layout in React Native (mobile defaults)',
        km: '២.២ Flexbox Layout ក្នុង React Native (លក្ខណៈដើមលើ Mobile)'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Flexbox in React Native works like CSS Flexbox with key differences: `flexDirection` defaults to `column` (not row), and all dimensions use unitless density-independent points.',
        km: 'Flexbox ក្នុង React Native ដើរដូច CSS Flexbox ប៉ុន្តែមានចំណុចខុសគ្នា៖ `flexDirection` មានតម្លៃដើមជា `column` (មិនមែន row) ហើយទំហំទាំងអស់មិនប្រើ unit (px/rem) ឡើយ។'
      },
      tutorial: {
        en: '<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>\n  <Text>Left Item</Text>\n  <Text>Right Item</Text>\n</View>',
        km: '<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>\n  <Text>ធាតុខាងឆ្វេង</Text>\n  <Text>ធាតុខាងស្តាំ</Text>\n</View>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>2.2 Mobile Flexbox</h3><p>flexDirection: "column" (Default on Mobile)</p></body></html>`
      }
    },
    {
      id: 'rn-2-3',
      slug: 'touchableopacity-pressable-and-buttons',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 TouchableOpacity, Pressable, and Buttons',
        km: '២.៣ TouchableOpacity, Pressable, និង Buttons'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Handle user touch interactions with feedback: `Button` for standard native buttons, `TouchableOpacity` for opacity dimming on press, and `Pressable` for advanced ripple and state-based styling.',
        km: 'ចាត់ចែងការចុចលើ អេក្រង់៖ `Button` សម្រាប់ប៊ូតុង native មូលដ្ឋាន, `TouchableOpacity` សម្រាប់ឥទ្ធិពលស្រអាប់ពេលចុច, និង `Pressable` សម្រាប់រចនាឥទ្ធិពលចុចកម្រិតខ្ពស់។'
      },
      tutorial: {
        en: 'import { TouchableOpacity, Pressable, Text } from "react-native";\n\n<TouchableOpacity onPress={() => alert("Pressed!")} style={{ padding: 12, backgroundColor: "#61dafb" }}>\n  <Text style={{ color: "#000" }}>Tap Me</Text>\n</TouchableOpacity>',
        km: 'import { TouchableOpacity, Pressable, Text } from "react-native";\n\n<TouchableOpacity onPress={() => alert("Pressed!")} style={{ padding: 12, backgroundColor: "#61dafb" }}>\n  <Text style={{ color: "#000" }}>ចុចទីនេះ</Text>\n</TouchableOpacity>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.3 Touchables</h3><p>[TouchableOpacity: ActiveOpacity Feedback]</p></body></html>`
      }
    },
    {
      id: 'rn-2-4',
      slug: 'flatlist-efficiently-rendering-long-lists',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 FlatList — efficiently rendering long lists',
        km: '២.៤ FlatList — ការបង្ហាញបញ្ជីវែងៗប្រកបដោយប្រសិទ្ធភាព'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'FlatList lazily renders items currently visible on screen and recycles off-screen views, preserving device performance and memory for long dynamic lists.',
        km: 'FlatList Render តែធាតុដែលមើលឃើញលើអេក្រង់ប៉ុណ្ណោះ ដែលជួយរក្សា ល្បឿន និង Memory សម្រាប់បញ្ជីវែងៗរាប់រយរាប់ពាន់ធាតុ។'
      },
      tutorial: {
        en: 'import { FlatList, Text, View } from "react-native";\n\nconst tasks = [{ id: "1", title: "Learn React Native" }, { id: "2", title: "Build TaskFlow" }];\n\n<FlatList\n  data={tasks}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => (\n    <View style={{ padding: 12 }}>\n      <Text>{item.title}</Text>\n    </View>\n  )}\n/>',
        km: 'import { FlatList, Text, View } from "react-native";\n\nconst tasks = [{ id: "1", title: "រៀន React Native" }, { id: "2", title: "សាង TaskFlow App" }];\n\n<FlatList\n  data={tasks}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => (\n    <View style={{ padding: 12 }}>\n      <Text>{item.title}</Text>\n    </View>\n  )}\n/>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.4 FlatList Optimization</h3><p>Lazy list rendering -> High performance</p></body></html>`
      }
    },
    {
      id: 'rn-2-5',
      slug: 'practice-rebuild-a-simple-profile-card-ui',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: rebuild a simple profile card UI',
        km: '២.៥ អនុវត្ត: សាងសង់អេក្រង់ Profile Card UI ក្នុង React Native'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `View`, `Text`, `Image`, `TouchableOpacity`, and `StyleSheet` to design a polished, responsive mobile profile card component.',
        km: 'បូកបញ្ចូល `View`, `Text`, `Image`, `TouchableOpacity`, និង `StyleSheet` ដើម្បីបង្កើត Profile Card UI ស្រស់ស្អាតលើទូរស័ព្ទដៃ។'
      },
      tutorial: {
        en: '<View style={styles.card}>\n  <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />\n  <Text style={styles.name}>Seyha Nan</Text>\n  <Text style={styles.role}>React Native Mobile Developer</Text>\n</View>',
        km: '<View style={styles.card}>\n  <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />\n  <Text style={styles.name}>Seyha Nan</Text>\n  <Text style={styles.role}>អ្នកអភិវឌ្ឍន៍ React Native Mobile</Text>\n</View>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>2.5 Profile Card UI</h3><p>👤 Seyha Nan<br>React Native Developer @ SabayCode</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'rn-3-1',
      slug: 'setting-up-react-navigation',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Setting up React Navigation',
        km: '៣.១ ការដំឡើង និងរៀបចំ React Navigation'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'React Navigation is the standard routing library for React Native apps. Learn how to install `@react-navigation/native` and wrap your app inside `NavigationContainer`.',
        km: 'React Navigation ជា Library ផ្លូវការសម្រាប់ចាត់ចែង Route ក្នុង React Native។ សិក្សាពីរបៀបដំឡើង និងរុំ App ក្នុង `NavigationContainer`។'
      },
      tutorial: {
        en: 'import { NavigationContainer } from "@react-navigation/native";\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      {/* Navigators go here */}\n    </NavigationContainer>\n  );\n}',
        km: 'import { NavigationContainer } from "@react-navigation/native";\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      {/* Navigators go here */}\n    </NavigationContainer>\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.1 Navigation Setup</h3><p>NavigationContainer -> Stack Navigator</p></body></html>`
      }
    },
    {
      id: 'rn-3-2',
      slug: 'stack-navigation-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 Stack navigation between screens',
        km: '៣.២ Stack Navigation សម្រាប់ផ្លាស់ប្តូររវាងអេក្រង់'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `@react-navigation/native-stack` to navigate between screens using `navigation.navigate("ScreenName")` and return back using `navigation.goBack()`.',
        km: 'ប្រើ `@react-navigation/native-stack` ដើម្បីផ្លាស់ប្តូរអេក្រង់តាម `navigation.navigate("ScreenName")` និងត្រឡប់ក្រោយតាម `navigation.goBack()`។'
      },
      tutorial: {
        en: 'function HomeScreen({ navigation }) {\n  return (\n    <TouchableOpacity onPress={() => navigation.navigate("Details")}>\n      <Text>Go to Details</Text>\n    </TouchableOpacity>\n  );\n}',
        km: 'function HomeScreen({ navigation }) {\n  return (\n    <TouchableOpacity onPress={() => navigation.navigate("Details")}>\n      <Text>ទៅកាន់អេក្រង់លម្អិត</Text>\n    </TouchableOpacity>\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>3.2 Stack Navigation</h3><p>navigation.navigate('Details') -> Slide Transition</p></body></html>`
      }
    },
    {
      id: 'rn-3-3',
      slug: 'passing-params-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Passing params between screens',
        km: '៣.៣ ការបញ្ជូន និងទទួល Params រវាងអេក្រង់'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Pass payload objects in `navigation.navigate("Details", { itemId: 42 })` and read them in the destination screen via `route.params`.',
        km: 'បញ្ជូនទិន្នន័យក្នុង `navigation.navigate("Details", { itemId: 42 })` ហើយអានទិន្នន័យក្នុងអេក្រង់គោលដៅតាម `route.params`។'
      },
      tutorial: {
        en: '// Navigating:\nnavigation.navigate("Details", { itemId: "RN-101", title: "React Native Master" });\n\n// Reading in DetailScreen:\nfunction DetailScreen({ route }) {\n  const { itemId, title } = route.params;\n  return <Text>{title} ({itemId})</Text>;\n}',
        km: '// ការបញ្ជូន៖\nnavigation.navigate("Details", { itemId: "RN-101", title: "React Native Master" });\n\n// ការអានក្នុង DetailScreen៖\nfunction DetailScreen({ route }) {\n  const { itemId, title } = route.params;\n  return <Text>{title} ({itemId})</Text>;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.3 Route Params</h3><p>route.params -> { itemId: 'RN-101' }</p></body></html>`
      }
    },
    {
      id: 'rn-3-4',
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
        en: 'Construct a list screen rendering course topics with `FlatList`, where tapping any item transitions seamlessly to a detailed view screen with parameter data.',
        km: 'សាងសង់អេក្រង់បញ្ជីបង្ហាញមេរៀនដោយប្រើ `FlatList` ដែលពេលចុចលើធាតុណាមួយ វាបើកបង្ហាញអេក្រង់លម្អិតជាមួយ Parameters។'
      },
      tutorial: {
        en: '<FlatList\n  data={courseList}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => (\n    <TouchableOpacity onPress={() => navigation.navigate("Detail", { course: item })}>\n      <Text>{item.title}</Text>\n    </TouchableOpacity>\n  )}\n/>',
        km: '<FlatList\n  data={courseList}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => (\n    <TouchableOpacity onPress={() => navigation.navigate("Detail", { course: item })}>\n      <Text>{item.title}</Text>\n    </TouchableOpacity>\n  )}\n/>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.4 List -> Detail Flow</h3><p>Tap Course Item -> Navigate to DetailScreen</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'rn-4-1',
      slug: 'usestate-recap-in-a-mobile-context',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 useState recap in a mobile context',
        km: '៤.១ ការរំលឹកuseState ក្នុងបរិបទកម្មវិធីទូរស័ព្ទ'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Review how `useState` manages local reactive state for mobile interactions like toggling checkboxes, opening modals, or updating input fields.',
        km: 'រំលឹកពីរបៀបដែល `useState` គ្រប់គ្រង State ក្នុងស្រុកសម្រាប់អន្តរកម្មទូរស័ព្ទដូចជា ដកសញ្ញាសម្រេច, បើក Modal, ឬកែប្រែ Input។'
      },
      tutorial: {
        en: 'const [isDone, setIsDone] = useState(false);\n\n<TouchableOpacity onPress={() => setIsDone(!isDone)}>\n  <Text>{isDone ? "Completed ✅" : "Pending ⬜"}</Text>\n</TouchableOpacity>',
        km: 'const [isDone, setIsDone] = useState(false);\n\n<TouchableOpacity onPress={() => setIsDone(!isDone)}>\n  <Text>{isDone ? "សម្រេចបាន ✅" : "មិនទាន់សម្រេច ⬜"}</Text>\n</TouchableOpacity>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 useState Mobile</h3><p>State = [isDone, setIsDone]</p></body></html>`
      }
    },
    {
      id: 'rn-4-2',
      slug: 'useeffect-for-side-effects-loading-data-timers',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 useEffect for side effects (loading data, timers)',
        km: '៤.២ useEffect សម្រាប់ Side Effects (ការទាញយកទិន្នន័យ, Timers)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `useEffect` correctly to execute side effects on component mount or state updates, such as loading stored tasks or starting background timers.',
        km: 'ប្រើប្រាស់ `useEffect` ដើម្បីប្រតិបត្តិ Side Effects ពេល Component Mount ឬប្រែប្រួល State ដូចជា Load ទិន្នន័យ ឬដំណើរការ Timers។'
      },
      tutorial: {
        en: 'useEffect(() => {\n  const timer = setTimeout(() => setMessage("Welcome to TaskFlow!"), 1000);\n  return () => clearTimeout(timer); // Cleanup\n}, []);',
        km: 'useEffect(() => {\n  const timer = setTimeout(() => setMessage("សូមស្វាគមន៍មកកាន់ TaskFlow!"), 1000);\n  return () => clearTimeout(timer); // Cleanup\n}, []);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>4.2 useEffect Lifecycle</h3><p>Mount Effect -> Set Timer -> Cleanup on Unmount</p></body></html>`
      }
    },
    {
      id: 'rn-4-3',
      slug: 'lifting-state-up-between-components',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Lifting state up between components',
        km: '៤.៣ ការលើក State ឡើងលើ (Lifting State Up) រវាង Components'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Share interactive state across sibling mobile components by lifting state declarations up into their nearest common parent container.',
        km: 'ចែករំលែក State រវាង Component បងប្អូនដោយការលើកការប្រកាស State ឡើងទៅកាន់ Parent Container រួម។'
      },
      tutorial: {
        en: 'function ParentScreen() {\n  const [tasks, setTasks] = useState([]);\n  return (\n    <View>\n      <TaskInput onAddTask={(title) => setTasks([...tasks, { id: Date.now().toString(), title }])} />\n      <TaskList tasks={tasks} />\n    </View>\n  );\n}',
        km: 'function ParentScreen() {\n  const [tasks, setTasks] = useState([]);\n  return (\n    <View>\n      <TaskInput onAddTask={(title) => setTasks([...tasks, { id: Date.now().toString(), title }])} />\n      <TaskList tasks={tasks} />\n    </View>\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>4.3 Lifting State Up</h3><p>Parent holds tasks array -> passes callbacks to children</p></body></html>`
      }
    },
    {
      id: 'rn-4-4',
      slug: 'intro-to-context-for-shared-app-state-across-screens',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Intro to Context for shared app state across screens',
        km: '៤.៤ ណែនាំ Context API សម្រាប់ចែករំលែក App State ឆ្លងកាត់អេក្រង់'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Avoid deep prop drilling by wrapping your app in React `Context.Provider` to expose global state (like active user, theme, or task list) anywhere in the screen hierarchy.',
        km: 'ចៀសវាងការបញ្ជូន Prop ច្រើនជាន់ដោយរុំ App ក្នុង `Context.Provider` ដើម្បីចែករំលែក State សកល (ដូចជា User, Theme, ឬ បញ្ជី Task) ទៅគ្រប់អេក្រង់។'
      },
      tutorial: {
        en: 'const TaskContext = React.createContext();\n\nexport function TaskProvider({ children }) {\n  const [tasks, setTasks] = useState([]);\n  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;\n}',
        km: 'const TaskContext = React.createContext();\n\nexport function TaskProvider({ children }) {\n  const [tasks, setTasks] = useState([]);\n  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.4 React Context API</h3><p>TaskProvider -> useContext(TaskContext)</p></body></html>`
      }
    },
    {
      id: 'rn-4-5',
      slug: 'practice-build-a-counter-with-shared-state-across-two-screens',
      moduleNumber: 4,
      lessonNumberInModule: 5,
      title: {
        en: '4.5 Practice: build a counter with shared state across two screens',
        km: '៤.៥ អនុវត្ត: សាងសង់ Counter App មាន Shared State ឆ្លងកាត់ ២ អេក្រង់'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a shared counter state provider and verify that incrementing the count on Screen A instantly reflects on Screen B using React Context.',
        km: 'សាងសង់ Counter State Provider ឆ្លងកាត់អេក្រង់ ហើយផ្ទៀងផ្ទាត់ថាការដំឡើងតម្លៃលើអេក្រង់ A ធ្វើឱ្យអេក្រង់ B ប្រែប្រួលភ្លាមៗតាម Context។'
      },
      tutorial: {
        en: '// Screen A: const { count, setCount } = useContext(CounterContext);\n// Screen B: <Text>Current Global Count: {count}</Text>',
        km: '// អេក្រង់ A: const { count, setCount } = useContext(CounterContext);\n// អេក្រង់ B: <Text>តម្លៃ Count សកលបច្ចុប្បន្ន: {count}</Text>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.5 Shared Counter</h3><p>Screen 1: Count = 10 -> Screen 2: Count = 10</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'rn-5-1',
      slug: 'stylesheet-create-react-natives-styling-approach',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 StyleSheet.create — React Native\'s styling approach',
        km: '៥.១ StyleSheet.create — វិធីសាស្ត្ររចនា Styling ក្នុង React Native'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: '`StyleSheet.create` validates and sends style objects efficiently to native code. Styles are camelCased JS objects without units.',
        km: '`StyleSheet.create` ពិនិត្យភាពត្រឹមត្រូវ និងបញ្ជូន Style Objects ទៅកាន់ Native Code ប្រកបដោយប្រសិទ្ធភាព។ ប្រើប្រាស់ឈ្មោះ camelCase គ្មាន Unit។'
      },
      tutorial: {
        en: 'const styles = StyleSheet.create({\n  card: {\n    backgroundColor: "#1e293b",\n    borderRadius: 12,\n    padding: 16,\n    marginBottom: 12,\n  },\n});',
        km: 'const styles = StyleSheet.create({\n  card: {\n    backgroundColor: "#1e293b",\n    borderRadius: 12,\n    padding: 16,\n    marginBottom: 12,\n  },\n});'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 StyleSheet.create</h3><p>camelCase object properties -> Native styling engine</p></body></html>`
      }
    },
    {
      id: 'rn-5-2',
      slug: 'flexbox-based-responsive-layouts-for-different-screen-sizes',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Flexbox-based responsive layouts for different screen sizes',
        km: '៥.២ Flexbox Responsive Layouts សម្រាប់ទំហំអេក្រង់ផ្សេងៗគ្នា'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `useWindowDimensions` hook and percentage dimensions or flex ratios to create fluid layouts that adapt across compact phones and large tablets.',
        km: 'ប្រើប្រាស់ `useWindowDimensions` hook និងភាគរយ ឬ Flex Ratio ដើម្បីបង្កើត Layout ដែលសមស្របទាំងលើទូរស័ព្ទតូច និង Tablet ធំ។'
      },
      tutorial: {
        en: 'import { useWindowDimensions } from "react-native";\n\nfunction AdaptiveScreen() {\n  const { width } = useWindowDimensions();\n  const isTablet = width > 768;\n  return <View style={{ flexDirection: isTablet ? "row" : "column" }}>...</View>;\n}',
        km: 'import { useWindowDimensions } from "react-native";\n\nfunction AdaptiveScreen() {\n  const { width } = useWindowDimensions();\n  const isTablet = width > 768;\n  return <View style={{ flexDirection: isTablet ? "row" : "column" }}>...</View>;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>5.2 Responsive Layout</h3><p>useWindowDimensions() -> Adaptive Column / Row</p></body></html>`
      }
    },
    {
      id: 'rn-5-3',
      slug: 'light-and-dark-mode-support',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Light and dark mode support',
        km: '៥.៣ ការគាំទ្រ Light និង Dark Mode'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Detect system device appearance setting with `useColorScheme()` hook and dynamically swap light or dark color themes across all screen components.',
        km: 'ស្វែងរក Theme របស់ប្រព័ន្ធទូរស័ព្ទដោយប្រើ `useColorScheme()` hook ហើយផ្លាស់ប្តូរពណ៌ Light ឬ Dark Theme លើគ្រប់ Components។'
      },
      tutorial: {
        en: 'import { useColorScheme } from "react-native";\n\nfunction ThemedBox() {\n  const colorScheme = useColorScheme();\n  const isDark = colorScheme === "dark";\n  return (\n    <View style={{ backgroundColor: isDark ? "#0f172a" : "#ffffff" }}>\n      <Text style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>Dynamic Mode</Text>\n    </View>\n  );\n}',
        km: 'import { useColorScheme } from "react-native";\n\nfunction ThemedBox() {\n  const colorScheme = useColorScheme();\n  const isDark = colorScheme === "dark";\n  return (\n    <View style={{ backgroundColor: isDark ? "#0f172a" : "#ffffff" }}>\n      <Text style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>Dynamic Mode</Text>\n    </View>\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Theme Support</h3><p>useColorScheme() -> Dynamic Light / Dark Styling</p></body></html>`
      }
    },
    {
      id: 'rn-5-4',
      slug: 'practice-theme-a-sample-screen-with-a-custom-color-palette',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: theme a sample screen with a custom color palette',
        km: '៥.៤ អនុវត្ត: រចនាប្រព័ន្ធ Theme លើអេក្រង់គំរូជាមួយ Color Palette ផ្ទាល់ខ្លួន'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Construct a theme provider or toggle button that seamlessly updates background colors, card containers, and typography across light and dark states.',
        km: 'បង្កើត Theme Provider ឬប៊ូតុងផ្លាស់ប្តូរពណ៌ ដែលធ្វើបច្ចុប្បន្នភាពពណ៌ Background, Cards, និង Typography រវាង Light និង Dark។'
      },
      tutorial: {
        en: 'const theme = isDark ? darkPalette : lightPalette;\n<View style={[styles.card, { backgroundColor: theme.cardBg }]}>\n  <Text style={{ color: theme.textColor }}>Themed Screen</Text>\n</View>',
        km: 'const theme = isDark ? darkPalette : lightPalette;\n<View style={[styles.card, { backgroundColor: theme.cardBg }]}>\n  <Text style={{ color: theme.textColor }}>Themed Screen</Text>\n</View>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Theme Practice</h3><p>Custom Palette -> Light/Dark Toggle</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'rn-6-1',
      slug: 'local-state-vs-persisted-data-intro-to-asyncstorage',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Local state vs persisted data — intro to AsyncStorage',
        km: '៦.១ Local state ប៉ះ Persisted data — ណែនាំពី AsyncStorage'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Learn the difference between memory state (lost on app close) and persistent client storage. Use `@react-native-async-storage/async-storage` to save JSON data persistently.',
        km: 'រៀនពីភាពខុសគ្នារវាង Memory State (បាត់បង់ពេលបិទ App) និង Persistent Storage។ ប្រើប្រាស់ AsyncStorage ដើម្បីរក្សាទុកទិន្នន័យ JSON មិនឱ្យបាត់បង់។'
      },
      tutorial: {
        en: 'import AsyncStorage from "@react-native-async-storage/async-storage";\n\nconst storeData = async (value) => {\n  await AsyncStorage.setItem("@storage_Key", JSON.stringify(value));\n};',
        km: 'import AsyncStorage from "@react-native-async-storage/async-storage";\n\nconst storeData = async (value) => {\n  await AsyncStorage.setItem("@storage_Key", JSON.stringify(value));\n};'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 AsyncStorage Intro</h3><p>setItem(key, json) / getItem(key)</p></body></html>`
      }
    },
    {
      id: 'rn-6-2',
      slug: 'fetching-data-with-fetch-and-axios',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Fetching data with fetch and/or axios',
        km: '៦.២ ការទាញយកទិន្នន័យដោយប្រើ fetch និង/ឬ axios'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Fetch remote REST API JSON data in React Native using standard JavaScript `fetch()` API or `axios` HTTP library.',
        km: 'ទាញយកទិន្នន័យពី REST API JSON ក្នុង React Native ដោយប្រើប្រាស់ JavaScript `fetch()` API ឬ `axios` HTTP Library។'
      },
      tutorial: {
        en: 'const loadPosts = async () => {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts");\n  const data = await res.json();\n  setPosts(data);\n};',
        km: 'const loadPosts = async () => {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts");\n  const data = await res.json();\n  setPosts(data);\n};'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>6.2 API Fetching</h3><p>fetch(URL) -> res.json() -> setState()</p></body></html>`
      }
    },
    {
      id: 'rn-6-3',
      slug: 'handling-loading-and-error-states-cleanly-with-hooks',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Handling loading and error states cleanly with hooks',
        km: '៦.៣ ការចាត់ចែងស្ថានភាព Loading និង Error យ៉ាងស្អាតជាមួយ Hooks'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Provide clear user feedback during async API calls by rendering `ActivityIndicator` during loading and retry buttons when network errors occur.',
        km: 'ផ្តល់ព័ត៌មានត្រឡប់ច្បាស់លាស់ដល់អ្នកប្រើប្រាស់ ពេលទាញយកទិន្នន័យ ដោយបង្ហាញ `ActivityIndicator` និងប៊ូតុងព្យាយាមម្តងទៀតពេលមាន Network Error។'
      },
      tutorial: {
        en: 'if (loading) return <ActivityIndicator size="large" color="#61dafb" />;\nif (error) return <Text style={{ color: "red" }}>Failed to load data.</Text>;',
        km: 'if (loading) return <ActivityIndicator size="large" color="#61dafb" />;\nif (error) return <Text style={{ color: "red" }}>បរាជ័យក្នុងការទាញយកទិន្នន័យ។</Text>;'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>6.3 Loading & Error</h3><p>[Spinner ActivityIndicator] -> [Error State] -> [Content]</p></body></html>`
      }
    },
    {
      id: 'rn-6-4',
      slug: 'parsing-and-typing-api-responses-with-typescript',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Parsing and typing API responses (with TypeScript)',
        km: '៦.៤ ការអាន និងកំណត់ Type លើ API Responses (ជាមួយ TypeScript)'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Define explicit TypeScript interfaces for API response objects to prevent runtime property bugs and gain autocomplete across components.',
        km: 'កំណត់ TypeScript Interface ឱ្យបានច្បាស់លាស់សម្រាប់ API Response Objects ដើម្បីការពារកំហុស Runtime និងទទួលបាន Autocomplete ពេលសរសេរកូដ។'
      },
      tutorial: {
        en: 'interface Post {\n  id: number;\n  title: string;\n  body: string;\n}\n\nconst [posts, setPosts] = useState<Post[]>([]);',
        km: 'interface Post {\n  id: number;\n  title: string;\n  body: string;\n}\n\nconst [posts, setPosts] = useState<Post[]>([]);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.4 TypeScript Types</h3><p>interface Post -> useState&lt;Post[]&gt;([])</p></body></html>`
      }
    },
    {
      id: 'rn-6-5',
      slug: 'practice-fetch-and-display-a-list-of-items-from-a-public-api',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: fetch and display a list of items from a public API',
        km: '៦.៥ អនុវត្ត: ទាញយក និងបង្ហាញបញ្ជីទិន្នន័យពី Public API'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a complete API feed screen that fetches items on mount, displays an ActivityIndicator loader, and renders results cleanly inside a `FlatList`.',
        km: 'សាងសង់អេក្រង់ API Feed ពេញលេញមួយ ដែលទាញយកទិន្នន័យពេល Mount, បង្ហាញ Spinner Loader, និងបង្ហាញទិន្នន័យយ៉ាងស្អាតក្នុង `FlatList`។'
      },
      tutorial: {
        en: '<FlatList\n  data={posts}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={({ item }) => (\n    <View style={styles.card}>\n      <Text style={styles.title}>{item.title}</Text>\n    </View>\n  )}\n/>',
        km: '<FlatList\n  data={posts}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={({ item }) => (\n    <View style={styles.card}>\n      <Text style={styles.title}>{item.title}</Text>\n    </View>\n  )}\n/>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.5 Live API Feed</h3><p>API Fetch -> Spinner -> Rendered FlatList Feed</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'rn-7-1',
      slug: 'building-a-form-with-textinput',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Building a form with TextInput',
        km: '៧.១ ការសាងសង់ Form ដោយប្រើប្រាស់ TextInput'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Capture text input in mobile apps using `TextInput` component, controlling value state, placeholder text, secure text entry for passwords, and keyboard types.',
        km: 'ទទួលការបញ្ចូលអត្ថបទលើ App ដោយប្រើប្រាស់ `TextInput` គ្រប់គ្រងតម្លៃ State, Placeholder, លាក់ពាក្យសម្ងាត់ (secureTextEntry) និងប្រភេទ Keyboard។'
      },
      tutorial: {
        en: 'import { TextInput } from "react-native";\n\n<TextInput\n  style={styles.input}\n  placeholder="Enter email..."\n  value={email}\n  onChangeText={setEmail}\n  keyboardType="email-address"\n  autoCapitalize="none"\n/>',
        km: 'import { TextInput } from "react-native";\n\n<TextInput\n  style={styles.input}\n  placeholder="បញ្ចូលអ៊ីមែល..."\n  value={email}\n  onChangeText={setEmail}\n  keyboardType="email-address"\n  autoCapitalize="none"\n/>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.1 TextInput Component</h3><p>placeholder | onChangeText | keyboardType</p></body></html>`
      }
    },
    {
      id: 'rn-7-2',
      slug: 'form-validation',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Form validation',
        km: '៧.២ ការពិនិត្យផ្ទៀងផ្ទាត់ទិន្នន័យក្នុង Form (Form Validation)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Validate user input fields (checking empty strings, minimum password length, and email regex patterns) before submitting data.',
        km: 'ពិនិត្យផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល (ពិនិត្យអត្ថបទទទេ, ប្រវែងពាក្យសម្ងាត់, និងទម្រង់អ៊ីមែល) មុនពេលបញ្ជូនទិន្នន័យ Form។'
      },
      tutorial: {
        en: 'const validateAndSubmit = () => {\n  if (!email.includes("@")) {\n    setError("Invalid email address");\n    return;\n  }\n  setError("");\n  submitForm();\n};',
        km: 'const validateAndSubmit = () => {\n  if (!email.includes("@")) {\n    setError("អាសយដ្ឋានអ៊ីមែលមិនត្រឹមត្រូវ");\n    return;\n  }\n  setError("");\n  submitForm();\n};'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>7.2 Form Validation</h3><p>Check email regex & length -> Display Inline Error</p></body></html>`
      }
    },
    {
      id: 'rn-7-3',
      slug: 'user-feedback-alerts-toasts-and-loading-indicators',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 User feedback: alerts, toasts, and loading indicators',
        km: '៧.៣ ព័ត៌មានត្រឡប់ជូនអ្នកប្រើប្រាស់៖ Alerts, Toasts, និង Loading Indicators'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Trigger native modal feedback using `Alert.alert("Title", "Message")` and show feedback overlays during submission.',
        km: 'បង្ហាញសារជម្រាបដំណឹង native ដោយប្រើប្រាស់ `Alert.alert("ចំណងជើង", "សារ")` និងបង្ហាញ Loading Overlays ពេលបញ្ជូន Form។'
      },
      tutorial: {
        en: 'import { Alert } from "react-native";\n\nAlert.alert(\n  "Success",\n  "Your task has been added successfully!",\n  [{ text: "OK", onPress: () => console.log("OK Pressed") }]\n);',
        km: 'import { Alert } from "react-native";\n\nAlert.alert(\n  "ជោគជ័យ",\n  "Task របស់អ្នកត្រូវបានបន្ថែមដោយជោគជ័យ!",\n  [{ text: "យល់ព្រម", onPress: () => console.log("OK Pressed") }]\n);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>7.3 Native Alerts</h3><p>Alert.alert('Success', 'Task saved successfully!')</p></body></html>`
      }
    },
    {
      id: 'rn-7-4',
      slug: 'device-features-overview-camera-location-notifications',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Device features overview (camera, location, notifications via Expo modules)',
        km: '៧.៤ ទិដ្ឋភាពទូទៅនៃមុខងារឧបករណ៍ទូរស័ព្ទ (Camera, Location, Notifications)'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Understand how Expo SDK packages like `expo-camera`, `expo-location`, and `expo-notifications` request device permissions and trigger native hardware APIs.',
        km: 'យល់ដឹងពីរបៀបដែល Expo SDK ដូចជា `expo-camera`, `expo-location`, និង `expo-notifications` ស្នើសុំសិទ្ធិប្រើប្រាស់ទូរស័ព្ទ និងដំណើរការ Native Hardware APIs។'
      },
      tutorial: {
        en: 'import * as Location from "expo-location";\n\nconst getGPS = async () => {\n  let { status } = await Location.requestForegroundPermissionsAsync();\n  if (status === "granted") {\n    let loc = await Location.getCurrentPositionAsync({});\n    console.log(loc);\n  }\n};',
        km: 'import * as Location from "expo-location";\n\nconst getGPS = async () => {\n  let { status } = await Location.requestForegroundPermissionsAsync();\n  if (status === "granted") {\n    let loc = await Location.getCurrentPositionAsync({});\n    console.log(loc);\n  }\n};'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.4 Expo Modules</h3><p>Permissions -> Camera / GPS Location / Push Notifications</p></body></html>`
      }
    },
    {
      id: 'rn-7-5',
      slug: 'practice-build-a-login-style-form-with-validation',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: build a login-style form with validation',
        km: '៧.៥ អនុវត្ត: សាងសង់ Login Form ជាមួយការពិនិត្យផ្ទៀងផ្ទាត់ Validation'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a mobile login UI featuring email/password input fields, inline error messages, password visibility toggling, and native submit alert feedback.',
        km: 'សាងសង់ Login UI លើទូរស័ព្ទដៃ ដែលមាន Input អ៊ីមែល/ពាក្យសម្ងាត់, សារ Error, ប៊ូតុងបង្ហាញ/លាក់ពាក្យសម្ងាត់ និង Alert ជូនដំណឹងពេលបញ្ជូន។'
      },
      tutorial: {
        en: '<View style={styles.form}>\n  <TextInput placeholder="Email" value={email} onChangeText={setEmail} />\n  <TextInput placeholder="Password" secureTextEntry value={pass} onChangeText={setPass} />\n  <TouchableOpacity onPress={handleLogin} style={styles.button}>\n    <Text>Sign In</Text>\n  </TouchableOpacity>\n</View>',
        km: '<View style={styles.form}>\n  <TextInput placeholder="Email" value={email} onChangeText={setEmail} />\n  <TextInput placeholder="Password" secureTextEntry value={pass} onChangeText={setPass} />\n  <TouchableOpacity onPress={handleLogin} style={styles.button}>\n    <Text>ចូលប្រព័ន្ធ</Text>\n  </TouchableOpacity>\n</View>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.5 Login Form Practice</h3><p>Email & Password TextInput -> Validation Alert</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'rn-8-1',
      slug: 'debugging-tools-expo-dev-tools-react-devtools-fast-refresh',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Debugging tools: Expo Dev Tools, React DevTools, fast refresh',
        km: '៨.១ ឧបករណ៍ Debugging៖ Expo Dev Tools, React DevTools, Fast Refresh'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master React Native debugging workflows: reading Expo CLI terminal error logs, shaking the physical device or pressing `m` to open Dev Menu, and using Fast Refresh for sub-second UI updates.',
        km: 'ស្ទាត់ជំនាញវិធីសាស្ត្រ Debug ក្នុង React Native៖ ការអាន Error Logs ក្នុង Terminal, ការក្រឡុកទូរស័ព្ទ ឬចុច `m` បើក Dev Menu, និងប្រើប្រាស់ Fast Refresh។'
      },
      tutorial: {
        en: '// In Expo terminal / Dev Menu:\n// Press `r` to reload app\n// Press `m` to toggle developer menu\n// Open React DevTools in browser',
        km: '// ក្នុង Expo Terminal / Dev Menu៖\n// ចុច `r` ដើម្បី Reload App\n// ចុច `m` ដើម្បីបើក Developer Menu\n// បើក React DevTools លើ Browser'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>8.1 Debugging Setup</h3><p>Fast Refresh Active | Expo Dev Menu Ready</p></body></html>`
      }
    },
    {
      id: 'rn-8-2',
      slug: 'writing-a-basic-component-test',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Writing a basic component test',
        km: '៨.២ ការសរសេរ Component Test មូលដ្ឋាន'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Write unit tests for React Native components using `@testing-library/react-native` and Jest to verify rendered text elements and button tap callbacks.',
        km: 'សរសេរ Unit Tests សម្រាប់ React Native Components ដោយប្រើប្រាស់ `@testing-library/react-native` និង Jest ដើម្បីផ្ទៀងផ្ទាត់ Text និងការចុចប៊ូតុង។'
      },
      tutorial: {
        en: 'import { render, fireEvent } from "@testing-library/react-native";\nimport TaskCard from "./TaskCard";\n\ntest("renders task title correctly", () => {\n  const { getByText } = render(<TaskCard title="Test Task" />);\n  expect(getByText("Test Task")).toBeTruthy();\n});',
        km: 'import { render, fireEvent } from "@testing-library/react-native";\nimport TaskCard from "./TaskCard";\n\ntest("renders task title correctly", () => {\n  const { getByText } = render(<TaskCard title="Test Task" />);\n  expect(getByText("Test Task")).toBeTruthy();\n});'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>8.2 Testing Library</h3><p>render(&lt;TaskCard /&gt;) -> expect(getByText('...')).toBeTruthy()</p></body></html>`
      }
    },
    {
      id: 'rn-8-3',
      slug: 'planning-the-taskflow-react-native-capstone',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: {
        en: '8.3 Planning the TaskFlow (React Native) capstone (screens, data model, features)',
        km: '៨.៣ រៀបចំផែនការសាងសង់ TaskFlow Capstone (អេក្រង់, Data Model, មុខងារ)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Architect the complete TaskFlow React Native capstone project: defining the task data interface (`id`, `title`, `isDone`), designing screen wireframes, and mapping state persistence with AsyncStorage.',
        km: 'រៀបចំរចនាសម្ព័ន្ធគម្រោង TaskFlow React Native Capstone៖ កំណត់ Task Data Interface (`id`, `title`, `isDone`), គូរប្លង់អេក្រង់, និងរៀបចំការរក្សាទុកទិន្នន័យជាមួយ AsyncStorage។'
      },
      tutorial: {
        en: '// Task Model Interface:\ninterface Task {\n  id: string;\n  title: string;\n  isDone: boolean;\n}\n\n// Screen flow: TaskListScreen -> AddTaskModal -> AsyncStorage persistence',
        km: '// Task Model Interface:\ninterface Task {\n  id: string;\n  title: string;\n  isDone: boolean;\n}\n\n// Screen flow: TaskListScreen -> AddTaskModal -> AsyncStorage persistence'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>8.3 Capstone Architecture</h3><p>TaskListScreen | AddTaskModal | AsyncStorage Sync</p></body></html>`
      }
    }
  ]
};
