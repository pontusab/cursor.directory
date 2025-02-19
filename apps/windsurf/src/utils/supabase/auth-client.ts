import { createClient } from "./client";

export async function getSession() {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error getting session:', error);
    return null;
  }

  if (!session) {
    console.log('No active session found');
    return null;
  }

  return session;
}