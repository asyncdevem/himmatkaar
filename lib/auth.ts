import { supabase } from './supabase';

export interface User {
  id: string;
  email: string;
  role: string;
}

function getAdminAllowlist() {
  return (process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

// Simple auth helper functions
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const adminAllowlist = getAdminAllowlist();
  const signedInEmail = data.user?.email?.toLowerCase() || "";

  // Enforce admin-only login when allowlist is configured.
  if (adminAllowlist.length > 0 && !adminAllowlist.includes(signedInEmail)) {
    await supabase.auth.signOut();
    throw new Error("Only admin accounts can sign in right now.");
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    throw error;
  }

  return user;
}

export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    throw error;
  }

  return session;
}

// Check if user is authenticated
export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}
