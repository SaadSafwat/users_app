"use server";
import { signOut } from "@/app/auth";

export async function LOGOUT() {
  await signOut({ redirectTo: "/" });
}