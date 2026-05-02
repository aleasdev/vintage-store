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
      <body>
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
        <main>{children}</main>
      </body>
    </html>
  );
}