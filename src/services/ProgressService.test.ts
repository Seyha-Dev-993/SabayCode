import { ProgressService, getLevelFromXP } from './ProgressService';

/**
 * Automated Test Suite for Student Progress & Certificate System
 * Runs in-browser or runtime assertions to verify 100% data integrity.
 */

export interface TestResult {
  name: string;
  passed: boolean;
  message: string;
  durationMs: number;
}

export async function runProgressServiceTests(): Promise<{
  allPassed: boolean;
  totalTests: number;
  passedCount: number;
  failedCount: number;
  results: TestResult[];
}> {
  const results: TestResult[] = [];
  const testStudentId = `test_std_${Date.now()}`;
  const testName = 'Test Student';
  const testEmail = 'test@sabaycode.com';

  const runTest = async (name: string, fn: () => Promise<void> | void) => {
    const start = performance.now();
    try {
      await fn();
      const durationMs = Math.round(performance.now() - start);
      results.push({ name, passed: true, message: 'Passed', durationMs });
    } catch (err: any) {
      const durationMs = Math.round(performance.now() - start);
      results.push({ name, passed: false, message: err.message || 'Assertion failed', durationMs });
    }
  };

  // Test 1: Deterministic Level Brackets
  await runTest('Level Calculation Bracket Test', () => {
    const l1 = getLevelFromXP(0);
    if (l1.level !== 1) throw new Error(`Expected Level 1 for 0 XP, got ${l1.level}`);

    const l2 = getLevelFromXP(150);
    if (l2.level !== 2) throw new Error(`Expected Level 2 for 150 XP, got ${l2.level}`);

    const l5 = getLevelFromXP(1200);
    if (l5.level !== 5) throw new Error(`Expected Level 5 for 1200 XP, got ${l5.level}`);
  });

  // Test 2: Idempotent Lesson Completion & Single XP Award
  await runTest('Idempotent Lesson Completion Test', async () => {
    const courseId = 'html';
    const lessonId = 'html-intro';

    // First completion
    const res1 = await ProgressService.completeLessonAtomic(testStudentId, testName, testEmail, courseId, lessonId);
    if (!res1.success) throw new Error(`First completion failed: ${res1.error}`);
    if (res1.xpAwarded !== 50) throw new Error(`Expected 50 XP awarded, got ${res1.xpAwarded}`);

    // Second completion (Immediate duplicate call)
    const res2 = await ProgressService.completeLessonAtomic(testStudentId, testName, testEmail, courseId, lessonId);
    if (!res2.success && !res2.isAlreadyCompleted) throw new Error('Duplicate call should succeed gracefully with isAlreadyCompleted=true');
    if (res2.xpAwarded !== 0) throw new Error(`Duplicate completion must award 0 XP, got ${res2.xpAwarded}`);

    // Verify Total XP Ledger
    const xpTotal = ProgressService.getTotalXPFromLedger(testStudentId);
    if (xpTotal !== 50) throw new Error(`Total XP ledger should be exactly 50 after duplicates, got ${xpTotal}`);
  });

  // Test 3: Streak Counter Evaluation
  await runTest('Streak Counter Calculation Test', () => {
    const streak = ProgressService.updateStreakRecordAtomic(testStudentId);
    if (streak.currentStreak < 1) throw new Error(`Streak should be at least 1, got ${streak.currentStreak}`);
  });

  // Test 4: Certificate Issuance & Single Duplicate Protection
  await runTest('Certificate Issuance & Duplicate Protection Test', async () => {
    const courseId = 'html';

    // First cert creation
    const cert1 = await ProgressService.issueCertificateAtomic(testStudentId, testName, testEmail, courseId);
    if (!cert1) throw new Error('Failed to issue certificate');

    // Second cert creation for same student and course
    const cert2 = await ProgressService.issueCertificateAtomic(testStudentId, testName, testEmail, courseId);
    if (!cert2) throw new Error('Failed second certificate call');

    if (cert1.id !== cert2.id) throw new Error('Duplicate certificate created! Certificate IDs must match.');
  });

  // Test 5: Certificate Verification Engine
  await runTest('Certificate Verification Engine Test', async () => {
    const courseId = 'css';
    const cert = await ProgressService.issueCertificateAtomic(testStudentId, testName, testEmail, courseId);
    if (!cert) throw new Error('Failed to create cert for verification test');

    const verifyResult = ProgressService.verifyCertificate(cert.verificationCode);
    if (!verifyResult.valid) throw new Error(`Certificate verification failed: ${verifyResult.error}`);
    if (verifyResult.certificate?.id !== cert.id) throw new Error('Verification returned mismatched certificate');
  });

  // Test 6: System Integrity Audit Runner
  await runTest('System Integrity Audit Test', () => {
    const audit = ProgressService.runSystemIntegrityAudit(testStudentId);
    if (!audit.isHealthy) throw new Error(`Audit found health issues: ${audit.issuesFound.join('; ')}`);
  });

  // Test 7: Admin Panel vs Student Dashboard Data Parity Test
  await runTest('Admin vs Student Dashboard Progress Parity Test', async () => {
    const parityStudentId = `parity_std_${Date.now()}`;
    const parityName = 'Nan Seyha Test';
    const parityEmail = 'nanseyha_test@sabaycode.com';
    const courseId = 'html';

    // Complete 3 lessons via student flow
    const lessonsToComplete = ['html-intro', 'html-elements', 'html-attributes'];
    for (const lId of lessonsToComplete) {
      const res = await ProgressService.completeLessonAtomic(parityStudentId, parityName, parityEmail, courseId, lId);
      if (!res.success) throw new Error(`Failed completing lesson ${lId}: ${res.error}`);
    }

    // Get Student Dashboard stats
    const studentStats = ProgressService.getDashboardStatistics(parityStudentId, parityName, parityEmail);

    // Reconcile and get Admin data
    const reconcileRes = ProgressService.reconcileStudentData(parityStudentId, parityName, parityEmail);
    if (!reconcileRes.reconciled) throw new Error('Student data reconciliation failed');

    // Assert exact parity between Admin stats and Student stats
    const htmlRecordStudent = studentStats.courseProgressMap['html'];
    const htmlRecordAdmin = reconcileRes.stats.courseProgressMap['html'];

    if (!htmlRecordStudent || !htmlRecordAdmin) throw new Error('Missing HTML course progress record');
    if (htmlRecordStudent.completedLessonsCount !== 3 || htmlRecordAdmin.completedLessonsCount !== 3) {
      throw new Error(`Lesson count mismatch: Student (${htmlRecordStudent.completedLessonsCount}) vs Admin (${htmlRecordAdmin.completedLessonsCount})`);
    }
    if (htmlRecordStudent.percentage !== htmlRecordAdmin.percentage) {
      throw new Error(`Percentage mismatch: Student (${htmlRecordStudent.percentage}%) vs Admin (${htmlRecordAdmin.percentage}%)`);
    }
  });

  // Test 8: Course Completion + Certificate Claim Parity Test (Dart Development)
  await runTest('Dart Course Completion & Certificate Claim Parity Test', async () => {
    const dartStudentId = `dart_std_${Date.now()}`;
    const dartName = 'Nan Seyha Dart';
    const dartEmail = 'dart_seyha@sabaycode.com';
    const courseId = 'dart';

    // Complete all lessons for Dart Development
    const allDartLessons = ProgressService.getAllCourseLessonIds(courseId);
    if (allDartLessons.length === 0) throw new Error('Dart course lessons not found in curriculum data');

    for (const lKey of allDartLessons) {
      const lessonId = lKey.split('-').slice(1).join('-');
      const res = await ProgressService.completeLessonAtomic(dartStudentId, dartName, dartEmail, courseId, lessonId);
      if (!res.success) throw new Error(`Failed completing Dart lesson ${lessonId}`);
    }

    // Verify 100% completion & certificate claim
    const stats = ProgressService.getDashboardStatistics(dartStudentId, dartName, dartEmail);
    const dartRecord = stats.courseProgressMap['dart'];

    if (!dartRecord) throw new Error('Dart course record missing in course progress map');
    if (dartRecord.percentage !== 100) {
      throw new Error(`Expected 100% completion for Dart Development, got ${dartRecord.percentage}%`);
    }
    if (dartRecord.status !== 'completed') {
      throw new Error(`Expected 'completed' status for Dart, got '${dartRecord.status}'`);
    }
    if (!dartRecord.certificateId) {
      throw new Error('Certificate ID was not generated for 100% Dart completion');
    }

    // Assert Admin Panel reconciliation sees Dart Development at 100% with certificate
    const adminReconcile = ProgressService.reconcileStudentData(dartStudentId, dartName, dartEmail);
    const adminDartRec = adminReconcile.stats.courseProgressMap['dart'];
    if (!adminDartRec || adminDartRec.percentage !== 100 || !adminDartRec.certificateId) {
      throw new Error('Admin view failed to reflect 100% Dart completion and certificate claim!');
    }
  });

  // Test 9: Flutter Course Completion Parity Test
  await runTest('Flutter Course Completion & Certificate Claim Parity Test', async () => {
    const flutterStudentId = `flutter_std_${Date.now()}`;
    const flutterName = 'Nan Seyha Flutter';
    const flutterEmail = 'flutter_seyha@sabaycode.com';
    const courseId = 'flutter';

    const allFlutterLessons = ProgressService.getAllCourseLessonIds(courseId);
    if (allFlutterLessons.length === 0) throw new Error('Flutter course lessons not found in curriculum data');

    for (const lKey of allFlutterLessons) {
      const lessonId = lKey.split('-').slice(1).join('-');
      const res = await ProgressService.completeLessonAtomic(flutterStudentId, flutterName, flutterEmail, courseId, lessonId);
      if (!res.success) throw new Error(`Failed completing Flutter lesson ${lessonId}`);
    }

    const stats = ProgressService.getDashboardStatistics(flutterStudentId, flutterName, flutterEmail);
    const flutterRecord = stats.courseProgressMap['flutter'];
    if (!flutterRecord || flutterRecord.percentage !== 100 || !flutterRecord.certificateId) {
      throw new Error('Flutter completion parity verification failed!');
    }
  });

  // Test 9: System-wide Data Parity Audit Test
  await runTest('System-wide Data Parity Audit Test', () => {
    const parityAudit = ProgressService.auditDataParity(testStudentId);
    if (!parityAudit.pass) {
      throw new Error(`Data parity audit discrepancies found: ${parityAudit.discrepancies.join('; ')}`);
    }

    const reconcileAll = ProgressService.reconcileAllStudentsData();
    if (typeof reconcileAll.totalStudentsAudited !== 'number') {
      throw new Error('reconcileAllStudentsData returned invalid result schema');
    }
  });

  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.filter((r) => !r.passed).length;

  return {
    allPassed: failedCount === 0,
    totalTests: results.length,
    passedCount,
    failedCount,
    results
  };
}

if (typeof process !== 'undefined' && process.argv?.[1]?.includes('ProgressService.test.ts')) {
  runProgressServiceTests().then((res) => console.log('Test Results:', JSON.stringify(res, null, 2)));
}
