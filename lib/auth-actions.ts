"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "./auth-server";

export async function loginAction(
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // Simulate authentication - replace with real auth logic
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demo purposes, accept any email/password combination
  const userData: User = {
    id: "1",
    name: email.split("@")[0],
    email: email,
  };

  // Set auth cookie
  const cookieStore = await cookies();
  cookieStore.set("auth-token", encodeURIComponent(JSON.stringify(userData)), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect("/dashboard/articles");
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("auth-token");
  redirect("/login");
}

export async function registerAction(
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  // Simulate registration - replace with real registration logic
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userData: User = {
    id: Date.now().toString(),
    name: email.split("@")[0],
    email: email,
  };

  // Set auth cookie
  const cookieStore = await cookies();
  cookieStore.set("auth-token", encodeURIComponent(JSON.stringify(userData)), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect("/dashboard/articles");
}
