import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { SignOutButton } from "@/components/SignOutButton";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-4 border-b">
          <Link href="/">Vintage Store</Link>
          <nav>
            {session ? (
              <div className="flex gap-4 items-center">
                <span>Welcome, {session.user.name}</span>
                <SignOutButton />
              </div>
            ) : (
              <Link href="/sign-in">Sign In</Link>
            )}
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t p-4 text-center text-sm text-gray-500">
          <p>© 2026 Vintage Store. Relive the classics.</p>
        </footer>
      </body>
    </html>
  );
}