"use client";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export function SignOutButton() {
  const router = useRouter();
  async function handleSignOut() {
    await signOut();
    router.push("/");
    router.refresh();
  }
  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
}