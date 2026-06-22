"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const { error } = await signIn.email({ email, password });
    if (error) {
      setError(error?.message ?? "An error occurred");
    } else {
      router.push("/");
      router.refresh();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Sign In</h1>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input type="text" name="test" id="test" placeholder="test locotron" />
      <button type="submit" className="bg-black text-white p-2 rounded">
        Sign In
      </button>
      <a href="/sign-up" className="text-sm underline">
        Don't have an account? Sign up
      </a>
    </form>
  );
}