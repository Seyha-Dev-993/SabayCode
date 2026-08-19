import { db } from './index.ts';
import { users, studentProfiles } from './schema.ts';
import { eq, or } from 'drizzle-orm';

export async function getOrCreateUser(
  uid: string,
  email: string,
  fullName: string,
  role = 'user',
  avatarUrl = '🦊',
  phone = ''
) {
  try {
    // 1. Try finding existing user by uid or email first
    let existingUser: any = null;
    try {
      const existing = await db
        .select()
        .from(users)
        .where(or(eq(users.uid, uid), eq(users.email, email)))
        .limit(1);
      if (existing && existing.length > 0) {
        existingUser = existing[0];
      }
    } catch (_) {
      // Query failed, continue to fallback logic
    }

    if (existingUser) {
      // Update existing record
      try {
        const updated = await db
          .update(users)
          .set({
            fullName: fullName || existingUser.fullName,
            email: email || existingUser.email,
            avatarUrl: avatarUrl || existingUser.avatarUrl,
            phone: phone || existingUser.phone,
            updatedAt: new Date(),
          })
          .where(eq(users.id, existingUser.id))
          .returning();
        if (updated && updated.length > 0) {
          return updated[0];
        }
      } catch (_) {}
      return existingUser;
    }

    // 2. Try inserting new user
    let userRecord: any = null;
    try {
      const result = await db
        .insert(users)
        .values({
          uid,
          email,
          fullName,
          role,
          avatarUrl,
          phone,
        })
        .onConflictDoUpdate({
          target: users.uid,
          set: {
            fullName,
            email,
            avatarUrl,
            phone: phone || undefined,
            updatedAt: new Date(),
          },
        })
        .returning();

      if (result && result.length > 0) {
        userRecord = result[0];
      }
    } catch (insertError) {
      console.warn('Insert with onConflict failed, retrying plain select:', insertError);
      // Fallback select
      try {
        const found = await db
          .select()
          .from(users)
          .where(eq(users.uid, uid))
          .limit(1);
        if (found && found.length > 0) {
          userRecord = found[0];
        }
      } catch (_) {}
    }

    // Ensure student profile exists for user if we have a userRecord
    if (userRecord && userRecord.id) {
      try {
        await db
          .insert(studentProfiles)
          .values({
            userId: userRecord.id,
            track: 'foundation',
            xp: 0,
            streak: 1,
            courseProgress: {},
          })
          .onConflictDoNothing();
      } catch (_) {}
    }

    if (userRecord) {
      return userRecord;
    }

    // Safe fallback object if DB insert returned empty
    return {
      id: 1,
      uid,
      email,
      fullName: fullName || 'Student',
      role,
      avatarUrl,
      phone,
      bio: null,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Database getOrCreateUser failed, returning fallback user:', error);
    return {
      id: 1,
      uid,
      email,
      fullName: fullName || 'Student',
      role,
      avatarUrl,
      phone,
      bio: null,
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}

export async function getAllUsersFromDb() {
  try {
    return await db.select().from(users);
  } catch (error) {
    console.error('Failed to query users from database:', error);
    return [];
  }
}

