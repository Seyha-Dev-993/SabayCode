import { pgTable, serial, text, integer, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Table: users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase or system UID
  email: text('email').notNull().unique(),
  fullName: text('full_name').notNull(),
  phone: text('phone'),
  role: text('role').default('user').notNull(),
  avatarUrl: text('avatar_url').default('🦊'),
  bio: text('bio'),
  isVerified: boolean('is_verified').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Table: student_profiles
export const studentProfiles = pgTable('student_profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull().unique(),
  track: text('track').default('foundation').notNull(),
  xp: integer('xp').default(0).notNull(),
  streak: integer('streak').default(1).notNull(),
  courseProgress: jsonb('course_progress').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Table: certificates
export const certificates = pgTable('certificates', {
  id: serial('id').primaryKey(),
  certificateId: text('certificate_id').notNull().unique(),
  studentName: text('student_name').notNull(),
  studentEmail: text('student_email').notNull(),
  courseName: text('course_name').notNull(),
  issueDate: text('issue_date').notNull(),
  verificationUrl: text('verification_url'),
  metadata: jsonb('metadata').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Table: user_activity_logs
export const userActivityLogs = pgTable('user_activity_logs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  activityType: text('activity_type').notNull(),
  details: jsonb('details').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(studentProfiles, {
    fields: [users.id],
    references: [studentProfiles.userId],
  }),
  activityLogs: many(userActivityLogs),
}));

export const studentProfilesRelations = relations(studentProfiles, ({ one }) => ({
  user: one(users, {
    fields: [studentProfiles.userId],
    references: [users.id],
  }),
}));

export const userActivityLogsRelations = relations(userActivityLogs, ({ one }) => ({
  user: one(users, {
    fields: [userActivityLogs.userId],
    references: [users.id],
  }),
}));
