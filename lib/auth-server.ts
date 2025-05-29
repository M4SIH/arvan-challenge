import { cookies } from "next/headers";

export interface User {
  id: string;
  name: string;
  email: string;
}

export async function getUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token")?.value;

    if (!authToken) {
      return null;
    }

    // In a real app, validate the token with your auth service
    // For demo purposes, we'll decode the user data from the token
    const userData = JSON.parse(decodeURIComponent(authToken));
    return userData;
  } catch {
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getUser();
  return !!user;
}

export async function requireAuth(): Promise<User> {
  const user = await getUser();
  if (!user) {
    throw new Error("Authentication required");
  }
  return user;
}
