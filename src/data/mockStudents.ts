/**
 * SabayCode Admin Dashboard Data Service.
 * Real-time user accounts and registration persistence.
 */

import { UserAccount } from '../context/AuthContext';

export const INITIAL_MOCK_STUDENTS: UserAccount[] = [];

// Helper set of legacy mock student emails to auto-purge from localStorage
export const MOCK_EMAILS_TO_PURGE = new Set([
  'sokha.chan@gmail.com', 'veasna.kim@gmail.com', 'bopha.sok@gmail.com',
  'dara.heng@gmail.com', 'sophea.lim@gmail.com', 'vuthy.chhea@gmail.com',
  'chhan.roth@gmail.com', 'minea.keo@gmail.com', 'pisey.thouch@gmail.com',
  'rithy.seng@gmail.com', 'kravann.pan@gmail.com', 'sovan.sam@gmail.com',
  'reasmey.chea@gmail.com', 'chhorvin.meas@gmail.com', 'socheata.nguon@gmail.com',
  'student.google@sabaycode.dev', 'student.microsoft@sabaycode.dev', 'student.facebook@sabaycode.dev',
  'student@example.com', 'student@gmail.com', 'example@sabaicode.com'
]);

export function getAllStudents(): UserAccount[] {
  try {
    const rawData = localStorage.getItem('sabaicode-users');
    if (!rawData) {
      return [];
    }
    const localUsers: UserAccount[] = JSON.parse(rawData);
    if (!Array.isArray(localUsers)) return [];

    // Purge legacy hardcoded mock students if present in local storage
    const filteredUsers = localUsers.filter(u => 
      u.email &&
      !MOCK_EMAILS_TO_PURGE.has(u.email.toLowerCase()) && 
      !u.id.startsWith('usr_0') && 
      !u.id.startsWith('usr_1') &&
      !u.id.startsWith('mock_')
    );

    // If mock data was purged, update local storage
    if (filteredUsers.length !== localUsers.length) {
      localStorage.setItem('sabaicode-users', JSON.stringify(filteredUsers));
    }

    return filteredUsers;
  } catch (e) {
    console.error("Error loading student data:", e);
    return [];
  }
}

export function seedDemoStudents(): UserAccount[] {
  return [];
}
